"""Apply editorial placements, paired masks and cross-page outlines offline.

python scripts/wiki/refine_catalog.py --input ../wiki
Safe to repeat; original archive bytes and existing resource anchors are retained.
"""
import argparse
import hashlib
import json
import re
from collections import OrderedDict
from pathlib import Path
from PIL import Image, ImageDraw, ImageFont
from formats import archive_entries, pcx_image, def_header, def_frame, def_group_summary
from import_resources import auxiliary_image


def read(path):
    return json.loads(path.read_text(encoding='utf-8'))


def save(path, value):
    path.parent.mkdir(parents=True, exist_ok=True)
    path.write_text(json.dumps(value, ensure_ascii=False, indent=2)+'\n', encoding='utf-8')


def clean(text):
    text = re.sub(r',\s*(?=[A-Za-zА-Яа-яЁё])', ', ', text)
    return re.sub(r' {2,}', ' ', text).replace('расстения', 'растения').replace('Освобождние', 'Освобождение')


def create_resource(root, archive, name, data, edition='SoD'):
    import struct
    kind = Path(name).suffix[1:].lower()
    prefix = '/assets/wiki/'+edition.lower()+'/'+archive.replace('.', '-').lower().replace(' ', '-')
    folder = root/'static'/prefix.lstrip('/')
    for sub in ['original', 'display', 'preview']:
        (folder/sub).mkdir(parents=True, exist_ok=True)
    (folder/'original'/name).write_bytes(data)
    rid = archive+'/'+name
    item = dict(id=rid, name=name, archive=archive, edition=edition, kind=kind,
                bytes=len(data), sha256=hashlib.sha256(data).hexdigest(),
                anchor='file-'+hashlib.sha256(rid.encode()).hexdigest()[:12], original=prefix+'/original/'+name)
    if kind == 'pcx':
        image = pcx_image(data)
    elif kind == 'def':
        typ, w, h, groups = def_header(data)
        image = def_frame(data, groups[0]['frames'][0][1])
        item.update(type=typ, groups=len(groups), frames=sum(len(g['frames']) for g in groups), frameGroups=def_group_summary(groups))
    elif kind == 'fnt':
        h = data[5]
        widths = [struct.unpack_from('<I', data, 36+i*12)[0] for i in range(256)]
        cw, ch = max(8, max(widths))+6, h+6
        image = Image.new('RGBA', (30+16*cw, 16+16*ch))
        draw = ImageDraw.Draw(image)
        font = ImageFont.load_default()
        draw.rectangle((0, 0, image.width, 15), fill=(28, 33, 40, 225))
        draw.rectangle((0, 16, 29, image.height), fill=(28, 33, 40, 225))
        for i in range(16):
            draw.text((30+i*cw+cw//2, 8), f'{i:X}', font=font, fill='#8b949e', anchor='mm')
            draw.text((27, 16+i*ch+ch//2), f'{i*16:02X}h', font=font, fill='#8b949e', anchor='rm')
        for i in range(17):
            draw.line((30+i*cw, 16, 30+i*cw, image.height), fill='#30363d')
            draw.line((30, 16+i*ch, image.width, 16+i*ch), fill='#30363d')
        for i, w in enumerate(widths):
            if not w:
                continue
            off = 4128+struct.unpack_from('<I', data, 3104+i*4)[0]
            glyph = Image.frombytes('RGBA', (w, h), bytes(c for value in data[off:off+w*h] for c in ((255,255,255,255) if value>1 else (0,0,0,200) if value==1 else (0,0,0,0))))
            image.paste(glyph, (30+i%16*cw+3+(cw-6-w)//2, 16+i//16*ch+3), glyph)
        item['fontHeight'] = h
    else:
        image = auxiliary_image(data, '.'+kind)
    if kind == 'pal':
        riff = data[:4] == b'RIFF'
        start, stride, count = (24, 4, int.from_bytes(data[22:24], 'little')) if riff else (0, 4, 32) if len(data)==128 else (0, 3, 256)
        item['palette'] = dict(type='riff' if riff else 'raw' if stride==4 else 'def', colors=[list(data[start+i*stride:start+i*stride+3]) for i in range(count)], flags=[data[start+i*stride+3] for i in range(count)] if stride==4 else None)
    if image is not None:
        item.update(width=image.width, height=image.height)
        if kind != 'def':
            image.save(folder/'display'/(name+'.png'), optimize=True)
            item['image'] = prefix+'/display/'+name+'.png'
        if kind == 'def' and image.getbbox():
            image = image.crop(image.getbbox())
        if kind != 'fnt':
            image.thumbnail((240, 160), Image.Resampling.NEAREST)
        image.save(folder/'preview'/(name+'.webp'), format='WEBP', lossless=True, method=6)
        item.update(preview=prefix+'/preview/'+name+'.webp', previewWidth=image.width, previewHeight=image.height)
    else:
        item['hex'] = data[:64].hex(' ')
    return item


def refine(root, inputs):
    registry = root/'content/wiki/_registry'
    pages = read(registry/'pages.json')
    audit = read(registry/'audit.json')
    placement_file = registry/'resource-placements.json'
    if not placement_file.exists():
        archive, placements = None, []
        for line in (registry/'unclassified.md').read_text(encoding='utf-8').splitlines():
            heading = re.match(r'## Источник: `([^`]+)`', line)
            if heading:
                archive = heading[1]
            item = re.match(r'- `([^`]+)`\s*(.*)', line)
            if item and archive:
                placements.append(dict(archive=archive, name=item[1], placement=item[2].strip()))
        save(placement_file, placements)
    rules = {(r['archive'], r['name']):r['placement'] for r in read(placement_file)}
    groups = OrderedDict()
    resources = {}
    masks = {}
    for page in pages:
        if page['slug'] != page['rootSlug'] and not '/page-' in page['slug']:
            continue  # legacy per-font aliases
        if page['rootSlug'] == 'sprite/0':
            for section in page['sections']:
                for item in section['resources']:
                    masks[Path(item['name']).stem.lower()] = item
            continue
        group = groups.setdefault(page['rootSlug'], dict(template=page, sections=OrderedDict()))
        for section in page['sections']:
            path = [{lang:clean(text) for lang,text in part.items()} for part in section['path']]
            key = json.dumps(path, ensure_ascii=False)
            target = group['sections'].setdefault(key, dict(path=path, resources=[]))
            for item in section['resources']:
                target['resources'].append(item)
                resources[item['id']] = item
                if item.get('mask'):
                    masks[Path(item['mask']['name']).stem.lower()] = item['mask']

    misc = {'ru':'Прочие файлы', 'en':'Other files'}
    def destination(archive, name, placement):
        low = placement.lower()
        if 'аретфакт' in low or 'артефакт' in low:
            return 'sprite/2/2', [{'ru':'Артефакты','en':'Artifacts'}]
        if 'объект на карте' in low:
            return 'sprite/2/2', [misc]
        if 'заклинаний' in low:
            return 'sprite/2/0', [misc]
        if 'интерфейс' in low:
            return ('sprite/2/6' if archive=='H3sprite.lod' else 'bitmap/0/4'), [misc]
        if 'поля сражений' in low:
            return ('sprite/2/6' if archive=='H3sprite.lod' else 'bitmap/0/2'), [{'ru':'Препятств. на поле битвы','en':'Battlefield obstacles'}] if archive=='H3sprite.lod' else [misc]
        if 'элементы городов' in low:
            return 'bitmap/0/0', [misc]
        if 'элементы кампаний' in low:
            return 'bitmap/0/1', [misc]
        if name.lower().endswith('.fnt'):
            return 'bitmap/2', [misc]
        if name.lower().endswith('.pal'):
            return 'bitmap/4', [groups['bitmap/4']['template']['title']]
        return 'bitmap/5', [misc]

    for archive, record in audit.items():
        if not record['unclassified']:
            continue
        if inputs is None:
            raise ValueError('--input is required to import unclassified archive bytes')
        lookup = dict(archive_entries((inputs/archive).read_bytes(), 'lod'))
        for name in record['unclassified']:
            item = create_resource(root, archive, name, lookup[name])
            if item['kind']=='msk':
                masks[Path(item['name']).stem.lower()] = item
                continue
            slug, path = destination(archive, name, rules.get((archive,name), ''))
            target = groups[slug]['sections'].setdefault(json.dumps(path, ensure_ascii=False), dict(path=path, resources=[]))
            target['resources'].append(item)
            resources[item['id']] = item
        record['classified'] = sorted(set(record['classified']+record['unclassified']))
        record['unclassified'] = []

    for item in resources.values():
        if item['kind']=='def' and Path(item['name']).stem.lower() in masks:
            item['mask'] = masks[Path(item['name']).stem.lower()]
    paired = {item['mask']['id'] for item in resources.values() if item.get('mask')}
    # Some archive masks have no DEF counterpart; retain those under Other files.
    for item in masks.values():
        if item['id'] not in paired:
            target = groups['bitmap/5']['sections'].setdefault(json.dumps([misc], ensure_ascii=False), dict(path=[misc], resources=[]))
            if not any(r['id']==item['id'] for r in target['resources']):
                target['resources'].append(item)
            resources[item['id']] = item

    result = []
    for slug, group in groups.items():
        chunks, current, count = [], [], 0
        for section in group['sections'].values():
            for item in section['resources']:
                if count == 72:
                    chunks.append(current)
                    current, count = [], 0
                if not current or current[-1]['path'] != section['path']:
                    current.append(dict(path=section['path'], resources=[]))
                current[-1]['resources'].append(item)
                count += 1
        if current:
            chunks.append(current)
        category = []
        for i, chunk in enumerate(chunks):
            anchors = set()
            for section in chunk:
                for index, original in enumerate(section['resources']):
                    item = dict(original)
                    if item.get('mask'):
                        item['mask'] = dict(item['mask'])
                    for resource in [item]+([item['mask']] if item.get('mask') else []):
                        anchor, suffix = resource['anchor'], 2
                        while resource['anchor'] in anchors:
                            resource['anchor'] = f'{anchor}-{suffix}'
                            suffix += 1
                        anchors.add(resource['anchor'])
                    section['resources'][index] = item
            page = {**group['template'], 'title':{lang:clean(text) for lang,text in group['template']['title'].items()}, 'slug':slug+(f'/page-{i+1}' if i else ''), 'number':i+1, 'pageCount':len(chunks), 'sections':chunk, 'previous':None if i==0 else slug+(f'/page-{i}' if i>1 else ''), 'next':slug+f'/page-{i+2}' if i+1<len(chunks) else None}
            page.pop('outline', None)
            category.append(page)
        outline, seen = [], set()
        for page in category:
            for i, section in enumerate(page['sections']):
                for depth, label in enumerate(section['path']):
                    key = json.dumps(section['path'][:depth+1], ensure_ascii=False)
                    if key not in seen:
                        seen.add(key)
                        outline.append(dict(label=label, depth=depth, slug=page['slug'], id=f'group-{i}-depth-{depth}'))
        if len(outline)>1:
            category[0]['outline'] = outline
        result.extend(category)

    # Preserve pre-existing per-font destinations without duplicating the menu.
    result.extend(page for page in pages if page['rootSlug']=='bitmap/2' and page['slug']!='bitmap/2')
    for page in result:
        folder = root/'content/wiki'/page['slug']
        template = root/'content/wiki'/page['rootSlug']/'entity.json'
        meta = read(template)
        meta.update(id='wiki.'+page['slug'].replace('/','.'), slug=page['slug'], previous=page['previous'], next=page['next'])
        for key in ['keywords','questions']:
            meta[key] = [clean(value) for value in meta[key]]
        # An editorial category may include files from both LOD archives.
        archives = {item['archive'] for section in page['sections'] for item in section['resources']}
        meta['sourceRefs'] = sorted({ref for a in archives for ref in (['wiki-sod:'+a, 'wiki-sod:'+a.replace('.lod','.lf')] if a.endswith('.lod') else ['wiki-sod:'+a])})
        save(folder/'entity.json', meta)
        for lang in ['ru','en']:
            text = '---\n'+json.dumps(dict(title=page['title'][lang], summary=f"SoD · {page['archive']} · {page['number']}/{page['pageCount']}", translationStatus='reviewed'), ensure_ascii=False)+'\n---\n\n'
            for i, section in enumerate(page['sections']):
                text += f"## {' / '.join(p[lang] for p in section['path'])} {{#group-{i}}}\n\n"
                previous = page['sections'][i-1]['path'] if i else []
                for depth, part in enumerate(section['path']):
                    if section['path'][:depth+1] != previous[:depth+1]:
                        text += f"### {part[lang]} {{#group-{i}-depth-{depth}}}\n\n"
                text += '| File | Resource | Source |\n| --- | --- | --- |\n'
                for item in section['resources']:
                    text += f"| `{item['name']}` {{#{item['anchor']}}} | {item['kind']} | {item['archive']} · SoD |\n"
                    if item.get('mask'):
                        mask = item['mask']
                        text += f"| `{mask['name']}` {{#{mask['anchor']}}} | msk | {mask['archive']} · SoD |\n"
                text += '\n'
            (folder/(lang+'.md')).write_text(text, encoding='utf-8')

    # Remove only the obsolete generated mask articles inside this project's wiki.
    for page in pages:
        if page['rootSlug']=='sprite/0':
            folder = (root/'content/wiki'/page['slug']).resolve()
            assert folder.is_relative_to((root/'content/wiki/sprite/0').resolve())
            for name in ['ru.md','en.md','entity.json']:
                (folder/name).unlink(missing_ok=True)

    nav = read(root/'content/_navigation/wiki.json')
    nav['groups'] = [g for g in nav['groups'] if g['id']!='wiki-1-0']
    for group in nav['groups']:
        if group['id']=='wiki-0-0':
            lookup = {item['slug']:item for item in group['items']}
            group['items'] = [lookup['wiki/bitmap/0/'+str(i)] for i in [3,2,0,4,1]]
        if group['id']=='wiki-1-2':
            lookup = {item['slug']:item for item in group['items']}
            group['items'] = [lookup['wiki/sprite/2/'+str(i)] for i in [0,1,2,3,7,4,5,6]]
    labels = read(registry/'labels.json')
    for lang in ['ru','en']:
        labels[lang] = {key:clean(value) for key,value in labels[lang].items()}
        ui = read(root/f'src/lib/i18n/ui.{lang}.json')
        ui.update(labels[lang])
        ui.update({'wiki.contents':'Оглавление' if lang=='ru' else 'Contents', 'wiki.showMask':'Показать маску объекта' if lang=='ru' else 'Show object mask', 'wiki.hideMask':'Скрыть маску объекта' if lang=='ru' else 'Hide object mask'})
        ui.pop('wiki.original', None)
        for key in ['wiki.playError','wiki.defError','wiki.resourceError']:
            ui[key] = ui[key].replace('Попробуйте ещё раз или скачайте оригинал.', 'Попробуйте ещё раз.').replace('Try again or download the original.', 'Try again.').replace('Retry or download the original.', 'Retry.')
        ui['wiki.nojs'] = 'Для проигрывания и просмотра DEF включите JavaScript. Превью и имена файлов доступны без него.' if lang=='ru' else 'Enable JavaScript for playback and DEF viewing. Previews and filenames remain available without it.'
        save(root/f'src/lib/i18n/ui.{lang}.json', ui)
    catalog = read(registry/'catalog.json')
    catalog['roots'] = []
    for group in nav['groups']:
        slugs = [item['slug'].removeprefix('wiki/') for item in group['items']]
        if not slugs:
            slugs = [group.get('href', '').removeprefix('wiki/')]
        count = sum(len(section['resources']) for page in result
                    if page['rootSlug'] in slugs and (page['slug']==page['rootSlug'] or '/page-' in page['slug'])
                    for section in page['sections'])
        catalog['roots'].append(dict(title={lang:labels[lang][group['labelKey']] for lang in ['ru','en']},
                                     items=group['items'], href=group.get('href'), count=count))
    catalog.update(resourceCount=len(resources)+len(paired), pageCount=len(result))
    save(registry/'pages.json', result)
    save(registry/'audit.json', audit)
    save(registry/'labels.json', labels)
    save(registry/'catalog.json', catalog)
    save(root/'content/_navigation/wiki.json', nav)
    report = '# Ресурсы Wiki без раздела\n\nВсе нетекстовые файлы распределены. Исходные редакционные указания сохранены в `resource-placements.json`.\n'
    missing = [(archive,item['name']) for archive,record in audit.items() for item in record['missingReferences']]
    if missing:
        report += '\n## Ссылки из LF, отсутствующие в переданном архиве\n\n'+'\n'.join(f'- `{archive}`: `{name}`' for archive,name in missing)+'\n'
    (registry/'unclassified.md').write_text(report, encoding='utf-8')
    print(f'Refined {len(resources)} resources, {len(paired)} paired masks, {len(result)} pages.')


if __name__=='__main__':
    parser = argparse.ArgumentParser()
    parser.add_argument('--input', type=Path)
    parser.add_argument('--output', type=Path, default=Path(__file__).resolve().parents[2])
    args = parser.parse_args()
    refine(args.output.resolve(), args.input.resolve() if args.input else None)
