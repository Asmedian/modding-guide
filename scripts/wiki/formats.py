"""SoD readers adapted from supplied HoMM3 Explorer (MIT) and H3DefTool."""
import re
import struct
import zlib


def lf_tree(data):
    # Postfix flags: 1=folder, 2=children, 4=last sibling. Numeric title
    # prefixes are editorial labels, NOT depth (some are duplicated).
    matches = list(re.finditer(rb'[\x20-\xff]+', data))
    records = [(m.group().decode('cp1251'), data[m.end():matches[i+1].start() if i+1 < len(matches) else len(data)][0]) for i, m in enumerate(matches)]
    cursor = 0
    def siblings():
        nonlocal cursor
        nodes = []
        while cursor < len(records):
            text, flags = records[cursor]; cursor += 1
            node = {'title': re.sub(r'^\d+-', '', text), 'children': [], 'files': []}
            if flags & 2:
                children = siblings()
                node['children'] = [n for n in children if 'name' not in n]
                node['files'] = [n['name'] for n in children if 'name' in n]
            if not flags & 1:
                node = {'name': text}
            nodes.append(node)
            if flags & 4:
                break
        return nodes
    result = siblings()
    if cursor != len(records):
        raise ValueError('LF tree contains unconsumed records')
    return result


def archive_entries(data, kind):
    entries = []
    count = struct.unpack_from('<I', data, 8 if kind == 'lod' else 0)[0]
    for i in range(count):
        if kind == 'lod':
            name, offset, size, _, packed = struct.unpack_from('<16s4I', data, 92 + i * 32)
        elif kind == 'snd':
            name, offset, size = struct.unpack_from('<40s2I', data, 4 + i * 48); packed = 0
        else:
            name, offset = struct.unpack_from('<40sI', data, 4 + i * 44)
            size = (struct.unpack_from('<I', data, 4 + (i+1)*44 + 40)[0] if i+1 < count else len(data)) - offset
            packed = 0
        name = name.split(b'\0')[0].decode('ascii')
        raw = data[offset:offset + (packed or size)]
        raw = zlib.decompress(raw) if packed else raw
        assert len(raw) == size
        entries.append((name, raw))
    return entries


def def_header(data):
    typ, width, height, count = struct.unpack_from('<4I', data)
    pos, groups = 784, []
    for _ in range(count):
        gid, n, _, _ = struct.unpack_from('<4I', data, pos); pos += 16
        names = [data[pos+i*13:pos+(i+1)*13].split(b'\0')[0].decode('ascii') for i in range(n)]
        pos += n*13
        offsets = struct.unpack_from('<'+'I'*n, data, pos); pos += n*4
        groups.append({'id': gid, 'frames': list(zip(names, offsets))})
    return typ, width, height, groups


def def_group_summary(groups):
    counts = {}
    for group in groups:
        counts[group['id']] = counts.get(group['id'], 0) + len(group['frames'])
    return [{'id': gid, 'frames': count} for gid, count in sorted(counts.items())]


def def_frame(data, offset):
    from PIL import Image
    _, fmt, fw, fh, w, h, x, y = struct.unpack_from('<6I2i', data, offset)
    start = offset+32
    # The original siege-moat spell DEFs use the earlier 16-byte header.
    # Its scanline offset table follows fullWidth/fullHeight directly.
    if fmt == 1 and w == fh*4 and h >= w and x > fw and y > fh:
        w, h, x, y, start = fw, fh, 0, 0, offset+16
    if not w or not h:
        return Image.new('RGBA', (max(1, fw), max(1, fh)))
    if fmt == 0:
        pixels = data[start:start+w*h]
    else:
        pixels = bytearray()
        for row in range(h):
            parts = (w+31)//32 if fmt == 3 else 1
            for part in range(parts):
                ti = row*parts+part
                rel = struct.unpack_from('<I' if fmt == 1 else '<H', data, start+ti*(4 if fmt == 1 else 2))[0]
                pos, remaining = start+rel, min(32, w-part*32) if fmt == 3 else w
                while remaining:
                    code = data[pos]; pos += 1
                    if fmt == 1:
                        length = data[pos]+1; pos += 1; literal = code == 255
                    else:
                        length, code = (code & 31)+1, code >> 5; literal = code == 7
                    if length > remaining:
                        raise ValueError('DEF run exceeds scanline')
                    if literal:
                        pixels.extend(data[pos:pos+length]); pos += length
                    else:
                        pixels.extend(bytes([code])*length)
                    remaining -= length
    assert len(pixels) == w*h
    palette = [tuple(data[16+i*3:19+i*3]) for i in range(256)]
    typ = struct.unpack_from('<I', data)[0]
    special = [(0,255,255),(255,150,255),(255,100,255),(255,50,255),(255,0,255),(255,255,0),(180,0,255),(0,255,0)]
    colors = []
    for i, rgb in enumerate(palette):
        replace = i < 8 and (i in (0,1,4) or all(abs(a-b)<8 for a,b in zip(rgb,special[i])))
        if replace and i == 0:
            colors.append((0,0,0,0))
        elif replace and typ not in (0x40,0x45,0x46,0x47):
            colors.append((0,0,0,0 if i == 5 else 128 if i in (3,4,6) else 64))
        else:
            colors.append((*rgb,255))
    image = Image.frombytes('RGBA', (w,h), bytes(c for p in pixels for c in colors[p]))
    canvas = Image.new('RGBA', (max(fw,1),max(fh,1))); canvas.paste(image,(x,y))
    return canvas


def pcx_image(data):
    from PIL import Image
    size, w, h = struct.unpack_from('<3I',data)
    if size == w*h:
        image = Image.frombytes('P',(w,h),data[12:12+size]); image.putpalette(data[12+size:12+size+768])
        return image
    if size == w*h*3:
        return Image.frombytes('RGB',(w,h),data[12:12+size],'raw','BGR')
    raise ValueError('Unsupported PCX')
