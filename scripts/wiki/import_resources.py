"""Offline SoD importer. Requires Pillow and FFmpeg; runtime site is static.

python scripts/wiki/import_resources.py --input ../wiki --ffmpeg /path/to/ffmpeg
Only published, individually addressed assets are copied to the repository.
"""
import argparse
import hashlib
import json
import math
from pathlib import Path
import struct
import subprocess
import tempfile
import wave
from PIL import Image, ImageDraw
from formats import archive_entries, lf_tree, def_header, def_frame, pcx_image, def_group_summary
from labels import label

LIMIT = 72


def save_json(path, value):
    path.parent.mkdir(parents=True, exist_ok=True)
    path.write_text(json.dumps(value, ensure_ascii=False, indent=2)+'\n', encoding='utf-8')


def auxiliary_image(data, ext):
    if ext == '.pal':
        # RIFF PAL records include a fourth flags byte.
        start, stride = (24,4) if data[:4] == b'RIFF' else (0,3)
        image = Image.new('RGB',(256,256)); draw = ImageDraw.Draw(image)
        for i in range(min(256,(len(data)-start)//stride)):
            draw.rectangle((i%16*16,i//16*16,i%16*16+15,i//16*16+15),fill=tuple(data[start+i*stride:start+i*stride+3]))
        return image
    if ext == '.fnt':
        h = data[5]; widths = [struct.unpack_from('<I',data,36+i*12)[0] for i in range(256)]
        cell = max(widths)+4
        image = Image.new('RGBA',(cell*16,(h+4)*16))
        for i,w in enumerate(widths):
            offset = 4128+struct.unpack_from('<I',data,3104+i*4)[0]
            if w:
                pixels = data[offset:offset+w*h]
                glyph = Image.frombytes('RGBA',(w,h),bytes(c for p in pixels for c in ((245,220,165,255) if p > 1 else (0,0,0,190) if p == 1 else (0,0,0,0))))
                image.paste(glyph,(i%16*cell+2,i//16*(h+4)+2))
        return image
    if ext == '.msk' and len(data) == 14:
        image = Image.new('RGB',(8*16,6*16),(34,43,48)); draw = ImageDraw.Draw(image)
        for row in range(6):
            for col in range(8):
                colors = ['#34434b','#bba66b','#597e8c','#e5cb91']
                bits = ((data[2+row]>>col)&1)+2*((data[8+row]>>col)&1)
                draw.rectangle((col*16,row*16,col*16+14,row*16+14),fill=colors[bits])
        return image
    # Inert, explicit byte view for nonvisual campaign/XMI/IFR resources.
    return None


def create_resource(output, archive, name, data, kind, ffmpeg=None, edition="SoD"):
    """Extract one resource and prepare lazy browser derivatives for its edition."""
    assets = output/"static/assets/wiki"/edition.lower()
    rid = archive+"/"+name
    ext = Path(name).suffix.lower()
    folder = archive.replace('.','-').lower().replace(' ','-')
    prefix = f'/assets/wiki/{edition.lower()}/{folder}'
    path = assets/folder
    for sub in ['original','preview','display']: (path/sub).mkdir(parents=True,exist_ok=True)
    original = path/'original'/name
    changed = not original.exists() or original.read_bytes() != data
    if changed: original.write_bytes(data)
    entry = {'id':rid,'name':name,'archive':archive,'edition':edition,'bytes':len(data),'sha256':hashlib.sha256(data).hexdigest(),'anchor':'file-'+hashlib.sha256(rid.encode()).hexdigest()[:12],'original':prefix+'/original/'+name,'kind':ext[1:] or kind}
    image = None
    if ext == '.pcx':
        image = pcx_image(data)
    elif ext == '.def':
        typ,w,h,groups = def_header(data)
        image = def_frame(data,groups[0]['frames'][0][1])
        entry.update({'type':typ,'groups':len(groups),'frames':sum(len(g['frames']) for g in groups),'frameGroups':def_group_summary(groups)})
    elif kind in ('snd','vid'):
        entry['kind'] = 'audio' if kind == 'snd' else 'video'
        display = path/'display'/(name+('.wav' if kind == 'snd' else '.mp4'))
        entry['media'] = prefix+'/display/'+display.name
        if changed or not display.exists():
            command = [ffmpeg,'-v','error','-y','-i',str(original)]
            command += ['-c:a','pcm_s16le'] if kind == 'snd' else ['-map','0:v:0','-map','0:a:0?','-c:v','libx264','-preset','slow','-crf','18','-pix_fmt','yuv420p','-fps_mode','passthrough','-c:a','aac','-b:a','128k','-movflags','+faststart']
            subprocess.run(command+[str(display)],check=True,capture_output=True)
        if kind == 'snd':
            # ADPCM decoders can emit padding at the final block. The RIFF
            # fact chunk records the original number of audible samples.
            pos, sample_count = 12, None
            while pos+8 <= len(data):
                length = struct.unpack_from('<I',data,pos+4)[0]
                if data[pos:pos+4] == b'fact': sample_count = struct.unpack_from('<I',data,pos+8)[0]
                pos += 8+length+(length%2)
            if sample_count is not None:
                with wave.open(str(display),'rb') as audio:
                    params, count = audio.getparams(), audio.getnframes()
                    samples = audio.readframes(sample_count)
                # Some supplied WoG WAV headers claim more samples than their
                # ADPCM blocks contain. Retain every decodable sample and the
                # original fact value; never invent silence to satisfy it.
                if count < sample_count:
                    assert edition == 'WoG', name+' lost audio samples'
                    entry['sourceFactSamples'] = sample_count
                    sample_count = count
                if count != sample_count:
                    with wave.open(str(display),'wb') as audio:
                        audio.setparams(params); audio.writeframes(samples)
                entry['samples'] = sample_count
        probe = Path(ffmpeg).with_name('ffprobe.exe' if Path(ffmpeg).suffix == '.exe' else 'ffprobe')
        info = json.loads(subprocess.run([str(probe),'-v','error','-show_streams','-show_format','-of','json',str(display)],check=True,capture_output=True,text=True).stdout)
        entry['duration'] = float(info['format']['duration'])
        if kind == 'vid':
            stream = next(s for s in info['streams'] if s['codec_type'] == 'video')
            entry['fps'] = stream['r_frame_rate']
            # Compare decoded source and output timestamps / frame count, not file sizes.
            src = json.loads(subprocess.run([str(probe),'-v','error','-count_frames','-show_streams','-of','json',str(original)],check=True,capture_output=True,text=True).stdout)
            sv = next(s for s in src['streams'] if s['codec_type'] == 'video')
            dst = json.loads(subprocess.run([str(probe),'-v','error','-count_frames','-show_streams','-of','json',str(display)],check=True,capture_output=True,text=True).stdout)
            dv = next(s for s in dst['streams'] if s['codec_type'] == 'video')
            assert sv['nb_read_frames'] == dv['nb_read_frames'], name+' lost video frames'
            assert sv['r_frame_rate'] == dv['r_frame_rate'], name+' changed frame rate'
            entry['frames'] = int(dv['nb_read_frames'])
            poster = path/'preview'/(name+'.png')
            if changed or not poster.exists(): subprocess.run([ffmpeg,'-v','error','-y','-i',str(original),'-frames:v','1',str(poster)],check=True,capture_output=True)
            image = Image.open(poster).copy()
            entry['sourceFps'] = sv['r_frame_rate']
        else:
            # SND contains IMA ADPCM. PCM preserves rate, channels and sample count.
            entry['sampleRate'] = int(info['streams'][0]['sample_rate'])
            entry['channels'] = info['streams'][0]['channels']
    else:
        image = auxiliary_image(data,ext)
        if image is None: entry['hex'] = data[:64].hex(' ')
    if image is not None:
        entry['width'],entry['height'] = image.size
        if ext != '.def' and kind != 'vid':
            full = path/'display'/(name+'.png')
            if changed or not full.exists(): image.save(full,optimize=True)
            entry['image'] = prefix+'/display/'+full.name
        if ext == '.def' and image.getbbox(): image = image.crop(image.getbbox())
        image.thumbnail((240,160),Image.Resampling.NEAREST)
        preview = path/'preview'/(name+'.webp')
        image.save(preview,format='WEBP',lossless=ext in ('.def','.msk','.fnt','.pal'),quality=82,method=6)
        entry['preview'] = prefix+'/preview/'+preview.name
        entry['previewWidth'],entry['previewHeight'] = image.size
    return entry


def main():
    parser = argparse.ArgumentParser()
    parser.add_argument('--input',type=Path,required=True)
    parser.add_argument('--output',type=Path,default=Path(__file__).resolve().parents[2])
    parser.add_argument('--ffmpeg',required=True)
    args = parser.parse_args()
    output, inputs = args.output.resolve(), args.input.resolve()
    assets = output/'static/assets/wiki/sod'
    registry = output/'content/wiki/_registry'
    pages, roots, resources, audit, missing, unclassified = [], [], {}, {}, [], {}
    dictionaries = {'ru':{},'en':{}}
    navigation = {'schemaVersion':1,'groups':[]}
    sources = []
    archives = [('H3bitmap.lod','lod','H3bitmap.lf'),('H3sprite.lod','lod','H3sprite.lf'),('Heroes3.snd','snd',None),('VIDEO.VID','vid',None)]
    def ui(key, value):
        for lang in dictionaries: dictionaries[lang][key] = value[lang]
        return key
    def resource(archive, name, data, kind):
        rid = archive+'/'+name
        if rid not in resources:
            resources[rid] = create_resource(output, archive, name, data, kind, args.ffmpeg)
        return resources[rid]
    def flatten(node,path,lookup,archive,kind):
        rows = []
        entries = []
        for name in node['files']:
            if name.lower().endswith('.txt'): continue
            found = lookup.get(name.lower())
            if not found:
                missing.append({'archive':archive,'name':name,'path':path}); continue
            actual,data = found
            entries.append(resource(archive,actual,data,kind))
        if entries:
            rows.append({'path':[label(p) for p in path], 'resources':entries})
        for child in node['children']:
            rows += flatten(child,path+[child['title']],lookup,archive,kind)
        return rows
    def add_pages(slug,title,rows,archive):
        chunks, current, count = [],[],0
        for row in rows:
            for entry in row['resources']:
                if count == LIMIT: chunks.append(current); current=[]; count=0
                if not current or current[-1]['path'] != row['path']:
                    current.append({'path':row['path'],'resources':[]})
                current[-1]['resources'].append(entry); count+=1
        if current: chunks.append(current)
        for i,chunk in enumerate(chunks):
            occurrences = {}
            for section in chunk:
                for index, entry in enumerate(section['resources']):
                    occurrences[entry['id']] = occurrences.get(entry['id'],0)+1
                    item = dict(entry)
                    if occurrences[entry['id']] > 1: item['anchor'] += '-'+str(occurrences[entry['id']])
                    section['resources'][index] = item
            actual = slug if i == 0 else slug+f'/page-{i+1}'
            page = {'slug':actual,'rootSlug':slug,'title':title,'archive':archive,'edition':'SoD','number':i+1,'pageCount':len(chunks),'sections':chunk}
            page['previous'] = (slug if i == 1 else slug+f'/page-{i}') if i else None
            page['next'] = slug+f'/page-{i+2}' if i+1 < len(chunks) else None
            pages.append(page)
            folder = output/'content/wiki'/actual; folder.mkdir(parents=True,exist_ok=True)
            source_refs = ['wiki-sod:'+archive]
            if archive.endswith('.lod'): source_refs.append('wiki-sod:'+archive.replace('.lod','.lf'))
            meta = {'schemaVersion':1,'id':'wiki.'+actual.replace('/','.'),'kind':'article','section':'wiki','slug':actual,'status':'published','sourceRefs':source_refs,'keywords':['SoD',archive,title['ru'],title['en']],'questions':['Какие ресурсы содержит '+title['ru']+'?','Which files are in '+title['en']+'?'],'previous':page['previous'],'next':page['next']}
            save_json(folder/'entity.json',meta)
            for lang in ['ru','en']:
                text = '---\n'+json.dumps({'title':title[lang], 'summary':f"SoD · {archive} · {i+1}/{len(chunks)}",'translationStatus':'reviewed'},ensure_ascii=False)+'\n---\n\n'
                for j,section in enumerate(chunk):
                    text += '## '+' / '.join(p[lang] for p in section['path'])+f' {{#group-{j}}}\n\n'
                    text += '| File | Resource | Source |\n| --- | --- | --- |\n'
                    for item in section['resources']:
                        text += f"| `{item['name']}` {{#{item['anchor']}}} | {item['kind']} | {archive} · SoD |\n"
                    text += '\n'
                (folder/(lang+'.md')).write_text(text,encoding='utf-8')
        return len(chunks)
    for ai,(archive,kind,lf) in enumerate(archives):
        print('Importing '+archive,flush=True)
        data = (inputs/archive).read_bytes()
        entries = archive_entries(data,kind)
        lookup = {n.lower():(n,d) for n,d in entries}
        def source(name):
            sources.append({'id':'wiki-sod:'+name,'type':'tool-distribution','title':'SoD resource input: '+name,'sourceSet':'wiki-sod','relativeSourcePath':name,'version':'SoD — user supplied archive snapshot','sha256':hashlib.sha256((inputs/name).read_bytes()).hexdigest().upper()})
        source(archive)
        tree = lf_tree((inputs/lf).read_bytes()) if lf else [{'title':'Звуки' if kind == 'snd' else 'Видео','files':list(lookup),'children':[]}]
        if lf: source(lf)
        declared = set()
        def track(ns):
            for n in ns:
                declared.update(f.lower() for f in n['files']); track(n['children'])
        track(tree)
        unclassified[archive] = sorted(n for n,d in entries if n.lower() not in declared and not n.lower().endswith('.txt'))
        for ri,root in enumerate(tree):
            if root['title'].startswith('Текстовые'): continue
            title = {'ru':'Звуки','en':'Sounds'} if kind == 'snd' else {'ru':'Видео','en':'Videos'} if kind == 'vid' else label(root['title'])
            group_id = f'wiki-{ai}-{ri}'
            root_slug = 'sounds' if kind == 'snd' else 'videos' if kind == 'vid' else f'{"bitmap" if ai == 0 else "sprite"}/{ri}'
            group = {'id':group_id,'labelKey':ui(group_id,title),'items':[],'edition':'SoD'}
            page_nodes = root['children'] if root['children'] and not root['files'] else [root]
            root_total = 0
            for ni,node in enumerate(page_nodes):
                node_title = label(node['title']) if lf else title
                slug = root_slug+f'/{ni}' if page_nodes != [root] else root_slug
                rows = flatten(node,[],lookup,archive,kind)
                if not rows: continue
                # The leaf page title comes from menu level; content begins below it.
                for row in rows:
                    if not row['path']: row['path'] = [node_title]
                count = add_pages(slug,node_title,rows,archive)
                root_total += sum(len(r['resources']) for r in rows)
                group['items'].append({'labelKey':ui(group_id+f'-{ni}',node_title),'slug':'wiki/'+slug})
            if not group['items']: continue
            if page_nodes == [root]:
                group['href'] = group['items'][0]['slug']; group['items'] = []
            navigation['groups'].append(group)
            roots.append({'title':title,'items':group['items'],'href':group.get('href'),'count':root_total})
        audit[archive] = {'total':len(entries),'skippedTxt':sum(n.lower().endswith('.txt') for n,d in entries),'unclassified':unclassified[archive],'classified':sorted(n for n,d in entries if archive+'/'+n in resources),'missingReferences':[m for m in missing if m['archive']==archive]}
    save_json(registry/'pages.json',pages)
    save_json(registry/'catalog.json',{'edition':'SoD','roots':roots,'resourceCount':len(resources),'pageCount':len(pages)})
    save_json(registry/'audit.json',audit)
    save_json(registry/'sources.json',sources)
    save_json(registry/'labels.json',dictionaries)
    save_json(output/'content/_navigation/wiki.json',navigation)
    report = '# Ресурсы Wiki без раздела\n\nTXT-файлы пропущены по заданию. Имена ниже взяты из оглавлений архивов.\n'
    for archive,names in unclassified.items():
        report += '\n## Источник: `'+archive+'` (SoD)\n\n'+ ('\n'.join('- `'+n+'`' for n in names) if names else 'Все нетекстовые файлы распределены.')+'\n'
    report += '\n## Ссылки из LF, отсутствующие в переданном архиве\n\n'+'\n'.join('- `'+m['archive']+'`: `'+m['name']+'`' for m in missing)+'\n'
    (registry/'unclassified.md').write_text(report,encoding='utf-8')
    from enhance_catalog import enhance_catalog
    enhance_catalog(output)
    from refine_catalog import refine
    refine(output, inputs)
    print(f'Imported {len(resources)} resources, {len(pages)} pages; {sum(map(len,unclassified.values()))} unclassified; {len(missing)} missing LF references.',flush=True)


if __name__ == '__main__': main()
