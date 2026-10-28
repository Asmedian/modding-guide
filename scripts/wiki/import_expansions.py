"""Append user-supplied AB campaigns and WoG archives to the existing SoD Wiki.

python scripts/wiki/import_expansions.py --ab "../AB campaigns" --wog ../wog --ffmpeg /path/to/ffmpeg
Requires Pillow, Node and FFmpeg. Repeating the import preserves existing SoD URLs.
"""
import argparse
import copy
import hashlib
import json
import struct
import subprocess
import sys
from pathlib import Path
sys.dont_write_bytecode = True
from PIL import Image
from formats import archive_entries
from import_resources import create_resource as create_media_resource
from refine_catalog import create_resource as create_image_resource


def read(path):
    return json.loads(path.read_text(encoding='utf-8'))


def save(path, value):
    path.parent.mkdir(parents=True, exist_ok=True)
    path.write_text(json.dumps(value, ensure_ascii=False, indent=2)+'\n', encoding='utf-8')


def localized(ru, en):
    return dict(ru=ru, en=en)


def import_expansions(root, ab, wog, ffmpeg):
    registry = root/'content/wiki/_registry'
    existing_pages = read(registry/'pages.json')
    image_pages = [p for p in existing_pages if p['rootSlug'] == 'bitmap/0/1']
    pages = [p for p in existing_pages if p['edition'] not in ('AB', 'WoG') and p['rootSlug'] != 'bitmap/0/1']
    cached = {r['id']: r for p in existing_pages for s in p['sections'] for item in s['resources']
              for r in ([item, item['mask']] if item.get('mask') else [item])}
    audit = read(registry/'audit.json')
    labels = read(registry/'labels.json')
    nav = read(root/'content/_navigation/wiki.json')
    nav['groups'] = [g for g in nav['groups'] if g['edition'] != 'WoG']
    sources = [s for s in read(registry/'sources.json') if s['sourceSet'] not in ('wiki-ab', 'wiki-wog')]

    def source(file, edition):
        item = dict(id='wiki-'+edition.lower()+':'+file.name, type='tool-distribution',
                    title=edition+' resource input: '+file.name, sourceSet='wiki-'+edition.lower(),
                    relativeSourcePath=file.name, version=edition+' — user supplied snapshot',
                    sha256=hashlib.sha256(file.read_bytes()).hexdigest().upper())
        sources.append(item)
        return item['id']

    def resource(archive, name, data, kind, edition):
        old = cached.get(archive+'/'+name)
        if old and old['sha256'] == hashlib.sha256(data).hexdigest():
            return copy.deepcopy(old)
        if kind in ('snd', 'vid') or Path(name).suffix.lower() == '.h3c':
            return create_media_resource(root, archive, name, data, kind, ffmpeg, edition)
        return create_image_resource(root, archive, name, data, edition)

    def page_group(slug, title, sections, edition, refs, show_edition=True):
        chunks, chunk, count = [], [], 0
        for section in sections:
            for item in section['resources']:
                if count == 72:
                    chunks.append(chunk)
                    chunk, count = [], 0
                if not chunk or chunk[-1]['path'] != section['path']:
                    chunk.append(dict(path=section['path'], resources=[]))
                chunk[-1]['resources'].append(item)
                count += 1
        if chunk:
            chunks.append(chunk)
        category = []
        for i, chunk in enumerate(chunks):
            page = dict(slug=slug+(f'/page-{i+1}' if i else ''), rootSlug=slug, title=title,
                        archive=', '.join(dict.fromkeys(r['archive'] for s in chunk for r in s['resources'])),
                        edition=edition, number=i+1, pageCount=len(chunks), sections=chunk,
                        previous=(slug+(f'/page-{i}' if i > 1 else '')) if i else None,
                        next=slug+f'/page-{i+2}' if i+1 < len(chunks) else None)
            editions = list(dict.fromkeys(r['edition'] for s in chunk for r in s['resources']))
            if len(editions) > 1:
                page['editions'] = editions
            if not show_edition:
                page['showEdition'] = False
            category.append(page)
        outline, seen = [], set()
        for page in category:
            for i, section in enumerate(page['sections']):
                for depth, part in enumerate(section['path']):
                    key = json.dumps(section['path'][:depth+1], ensure_ascii=False)
                    if key not in seen:
                        seen.add(key)
                        outline.append(dict(label=part, depth=depth, slug=page['slug'], id=f'group-{i}-depth-{depth}'))
            folder = root/'content/wiki'/page['slug']
            save(folder/'entity.json', dict(schemaVersion=1, id='wiki.'+page['slug'].replace('/', '.'),
                 kind='article', section='wiki', slug=page['slug'], status='published', sourceRefs=refs(page) if callable(refs) else refs,
                 keywords=[edition, title['ru'], title['en']],
                 questions=['Какие ресурсы содержит '+title['ru']+'?', 'Which files are in '+title['en']+'?'],
                 previous=page['previous'], next=page['next']))
            for lang in ['ru', 'en']:
                summary = (edition+' · ' if show_edition else '')+f"{page['archive']} · {page['number']}/{len(chunks)}"
                text = '---\n'+json.dumps(dict(title=title[lang], summary=summary, translationStatus='reviewed'), ensure_ascii=False)+'\n---\n\n'
                for j, section in enumerate(page['sections']):
                    text += '## '+' / '.join(p[lang] for p in section['path'])+f' {{#group-{j}}}\n\n'
                    previous = page['sections'][j-1]['path'] if j else []
                    for depth, part in enumerate(section['path']):
                        if section['path'][:depth+1] != previous[:depth+1]:
                            text += f"### {part[lang]} {{#group-{j}-depth-{depth}}}\n\n"
                    text += '| File | Resource | Source |\n| --- | --- | --- |\n'
                    for item in section['resources']:
                        for entry in ([item, item['mask']] if item.get('mask') else [item]):
                            text += f"| `{entry['name']}` {{#{entry['anchor']}}} | {entry['kind']} | {entry['archive']} · {entry['edition']} |\n"
                    text += '\n'
                (folder/(lang+'.md')).write_text(text, encoding='utf-8')
        if len(outline) > 1:
            category[0]['outline'] = outline
        pages.extend(category)

    # The supplied folder contains BMP images. Publish actual Heroes III PCX
    # derivatives, retaining every source BMP and its independent hash.
    ab_title = localized('Клинок Армагеддона', "Armageddon's Blade")
    ab_sections, ab_refs, ab_names, ab_source_refs = [], [], [], {}
    for file in sorted(ab.iterdir(), key=lambda p: p.name.lower()):
        if file.suffix.lower() not in ('.h3c', '.pcx', '.bmp'):
            continue
        ab_refs.append(source(file, 'AB'))
        ab_source_refs[file.name] = ab_refs[-1]
        data, name = file.read_bytes(), file.name
        if file.suffix.lower() == '.bmp':
            image = Image.open(file).convert('RGB')
            pixels = image.tobytes('raw', 'BGR')
            data = struct.pack('<3I', len(pixels), image.width, image.height)+pixels
            name = file.stem+'.pcx'
        entry = resource('AB campaigns', name, data, 'file', 'AB')
        if file.suffix.lower() == '.bmp':
            source_path = '/assets/wiki/ab/ab-campaigns/source/'+file.name
            target = root/'static'/source_path.lstrip('/')
            target.parent.mkdir(parents=True, exist_ok=True)
            target.write_bytes(file.read_bytes())
            entry.update(sourceName=file.name, sourceOriginal=source_path,
                         sourceSha256=hashlib.sha256(file.read_bytes()).hexdigest(),
                         conversion='BMP to Heroes III 24-bit PCX; RGB pixels preserved')
        title = localized('Кампании', 'Campaigns') if entry['kind'] == 'h3c' else localized('Изображения кампаний', 'Campaign images')
        if not ab_sections or ab_sections[-1]['path'] != [title]:
            ab_sections.append(dict(path=[title], resources=[]))
        ab_sections[-1]['resources'].append(entry)
        ab_names.append(name)
    entries = [r for s in ab_sections for r in s['resources']]
    # Reuse the localized campaign titles already established by the LF catalog.
    titles = {part['en'].lower(): part for p in existing_pages for s in p['sections'] for part in s['path']}
    campaign_names = {
        'ab.h3c': "Armageddon's Blade", 'blood.h3c': "Dragon's Blood",
        'slayer.h3c': 'Dragon Slayer', 'festival.h3c': 'Festival of Life',
        'fire.h3c': 'Playing with Fire', 'fool.h3c': 'Foolhardy Waywardness',
        'neutral.h3c': 'Spoils of War',
    }
    campaigns = [r for r in entries if r['kind'] == 'h3c']
    ab_sections = [dict(path=[titles[campaign_names[r['name'].lower()].lower()]], resources=[r]) for r in campaigns]
    page_group('bitmap/3/1', ab_title, ab_sections, 'AB', [ab_source_refs[r['name']] for r in campaigns], show_edition=False)

    # Campaign PCX belong with the other campaign illustrations. Strip the AB
    # additions from earlier runs before inserting them, keeping the import repeatable.
    image_sections = []
    for page in image_pages:
        for section in page['sections']:
            items = [r for r in section['resources'] if r['edition'] != 'AB']
            if not items:
                continue
            if image_sections and image_sections[-1]['path'] == section['path']:
                image_sections[-1]['resources'].extend(items)
            else:
                image_sections.append(dict(path=section['path'], resources=items))
    selection = next(s['path'][:2] for s in image_sections if s['path'][0]['en'] == 'Campaign selection images' and s['path'][1]['en'].startswith("Armageddon's Blade"))
    by_name = {r['name'].lower(): r for r in entries if r['kind'] == 'pcx'}
    selection_names = [('Camp1AB7.pcx', "Armageddon's Blade"), ('Camp1DB2.pcx', "Dragon's Blood"),
                       ('Camp1DS1.pcx', 'Dragon Slayer'), ('Camp1FL3.pcx', 'Festival of Life'),
                       ('Camp1PF2.pcx', 'Playing with Fire'), ('Camp1FW1.pcx', 'Foolhardy Waywardness')]
    for filename, name in selection_names:
        item = by_name.pop(filename.lower(), None)
        if item is None:
            continue
        path = selection+[titles[name.lower()]]
        target = next((s for s in image_sections if s['path'] == path), None)
        if target is not None:
            target['resources'].append(item)
        else:
            index = next(i for i, s in enumerate(image_sections) if s['path'][:2] == selection and s['path'][-1]['en'] == 'Foolhardy Waywardness')
            image_sections.insert(index, dict(path=path, resources=[item]))
    if by_name:
        index = next(i for i, s in enumerate(image_sections) if s['path'][0]['en'] == 'Video previews')
        image_sections.insert(index, dict(path=[localized('Дополнительные изображения кампаний', 'Additional campaign images'), ab_title], resources=list(by_name.values())))
    image_refs = read(root/'content/wiki/bitmap/0/1/entity.json')['sourceRefs']
    image_refs = [ref for ref in image_refs if not ref.startswith('wiki-ab:')]
    def image_sources(page):
        return image_refs+[ab_source_refs[r.get('sourceName', r['name'])] for s in page['sections'] for r in s['resources'] if r['edition'] == 'AB']
    page_group('bitmap/0/1', image_pages[0]['title'], image_sections, 'SoD', image_sources, show_edition=False)
    audit['AB campaigns'] = dict(total=len(ab_names), classified=ab_names, skippedTxt=0, unclassified=[], missingReferences=[])
    ab_key = 'wiki-0-3-1'
    for lang in ['ru', 'en']:
        labels[lang][ab_key] = ab_title[lang]
    campaign_group = next(g for g in nav['groups'] if g['id'] == 'wiki-0-3')
    campaign_group['items'] = [item for item in campaign_group['items'] if item['slug'] != 'wiki/bitmap/3/1']
    campaign_group['items'].insert(1, dict(labelKey=ab_key, slug='wiki/bitmap/3/1', edition='AB'))
    campaign_group['showEdition'] = False
    next(item for group in nav['groups'] for item in group['items'] if item['slug'] == 'wiki/bitmap/0/1')['showEdition'] = False
    for page in list(pages):
        if page['rootSlug'] in ('bitmap/3/0', 'bitmap/3/2'):
            pages.remove(page)
            refs = read(root/'content/wiki'/page['slug']/'entity.json')['sourceRefs']
            page_group(page['rootSlug'], page['title'], page['sections'], page['edition'], refs, show_edition=False)

    wog_entries, wog_refs = {}, {}
    for filename, kind in [('hmm35wog.pac', 'lod'), ('wog.snd', 'snd'), ('wog.vid', 'vid')]:
        file = wog/filename
        wog_refs[filename] = source(file, 'WoG')
        entries = archive_entries(file.read_bytes(), kind)
        published = []
        for name, data in entries:
            if name.lower().endswith('.txt'):
                continue
            published.append(name)
            wog_entries[filename+'/'+name] = resource(filename, name, data, kind, 'WoG')
        audit[filename] = dict(total=len(entries), classified=published,
                               skippedTxt=sum(n.lower().endswith('.txt') for n, _ in entries),
                               unclassified=[], missingReferences=[])
        print(f'{filename}: {len(published)} resources', flush=True)
    # Pair masks only within this edition and archive, case-insensitively.
    masks = {r['name'][:-4].lower(): r for r in wog_entries.values() if r['kind'] == 'msk'}
    paired = set()
    for entry in wog_entries.values():
        if entry['kind'] == 'def' and entry['name'][:-4].lower() in masks:
            entry['mask'] = masks[entry['name'][:-4].lower()]
            paired.add(entry['mask']['id'])
    categories = [
        ('images', 'pcx', localized('Изображения (*.pcx)', 'Images (*.pcx)')),
        ('defs', 'def', localized('DEF-файлы (*.def)', 'DEF files (*.def)')),
        ('sounds', 'audio', localized('Звуки', 'Sounds')),
        ('videos', 'video', localized('Видео', 'Videos')),
        ('fonts', 'fnt', localized('Шрифты (*.fnt)', 'Fonts (*.fnt)')),
        ('other', 'msk', localized('Прочие файлы', 'Other files')),
    ]
    for slug, kind, title in categories:
        entries = sorted([r for r in wog_entries.values() if r['kind'] == kind and r['id'] not in paired], key=lambda r: r['name'].lower())
        if not entries:
            continue
        archives = list(dict.fromkeys(r['archive'] for r in entries))
        page_group('wog/'+slug, title, [dict(path=[title], resources=entries)], 'WoG', [wog_refs[a] for a in archives])
        key = 'wiki-wog-'+slug
        for lang in ['ru', 'en']:
            labels[lang][key] = title[lang]
        nav['groups'].append(dict(id=key, labelKey=key, items=[], edition='WoG', href='wiki/wog/'+slug))

    # Rebuild compact metadata, retaining existing assets and SoD placements.
    catalog = read(registry/'catalog.json')
    roots = []
    for group in nav['groups']:
        slugs = [item['slug'].removeprefix('wiki/') for item in group['items']] or [group['href'].removeprefix('wiki/')]
        count = sum(len(s['resources']) for p in pages if p['rootSlug'] in slugs and (p['slug'] == p['rootSlug'] or '/page-' in p['slug']) for s in p['sections'])
        roots.append(dict(title={lang: labels[lang][group['labelKey']] for lang in ['ru', 'en']},
                          items=group['items'], href=group.get('href'), count=count, edition=group['edition']))
        if group.get('showEdition') is False:
            roots[-1]['showEdition'] = False
    unique = {r['id'] for p in pages for s in p['sections'] for item in s['resources'] for r in ([item, item['mask']] if item.get('mask') else [item])}
    catalog.update(edition='SoD / AB / WoG', editions=['SoD', 'AB', 'WoG'], roots=roots, resourceCount=len(unique), pageCount=len(pages))
    save(registry/'pages.json', pages)
    save(registry/'catalog.json', catalog)
    save(registry/'audit.json', audit)
    save(registry/'sources.json', sources)
    save(registry/'labels.json', labels)
    save(root/'content/_navigation/wiki.json', nav)
    for lang in ['ru', 'en']:
        ui = read(root/f'src/lib/i18n/ui.{lang}.json')
        ui.update(labels[lang])
        save(root/f'src/lib/i18n/ui.{lang}.json', ui)
    main_sources = [s for s in read(root/'content/_sources/sources.json') if s['sourceSet'] not in ('wiki-ab', 'wiki-wog')]
    save(root/'content/_sources/sources.json', main_sources+[s for s in sources if s['sourceSet'] in ('wiki-ab', 'wiki-wog')])
    source_sets = read(root/'content/_sources/source-files.json')
    for edition in ['ab', 'wog']:
        if not any(s['id'] == 'wiki-'+edition for s in source_sets['sourceSets']):
            source_sets['sourceSets'].append(dict(id='wiki-'+edition, locationHint='External user-supplied '+edition.upper()+' resource inputs; extracted assets are tracked separately', trackedInRepository=False))
    save(root/'content/_sources/source-files.json', source_sets)
    overview = read(root/'content/wiki/entity.json')
    overview['sourceRefs'] = list(dict.fromkeys(overview['sourceRefs']+ab_refs+list(wog_refs.values())))
    overview['keywords'] = list(dict.fromkeys(overview['keywords']+['AB', 'WoG', 'PAC']))
    save(root/'content/wiki/entity.json', overview)

    subprocess.run(['node', str(Path(__file__).with_name('enrich-campaigns.mjs')), str(root), 'AB'], check=True)
    pages = read(registry/'pages.json')
    for page in pages:
        if page['edition'] != 'AB':
            continue
        for section in page['sections']:
            for entry in section['resources']:
                if entry['kind'] != 'h3c':
                    continue
                detail = read(root/'static'/entry['details'].lstrip('/'))
                for scenario in detail['scenarios']:
                    for mini in scenario.get('minimaps', []):
                        target = root/'static'/mini['image'].lstrip('/')
                        rgba = target.with_suffix('.rgba')
                        Image.frombytes('RGBA', (mini['width'], mini['height']), rgba.read_bytes()).save(target, optimize=True)
                        rgba.unlink()
                first = next((sc['minimaps'][0] for sc in detail['scenarios'] if sc.get('minimaps')), None)
                if first:
                    image = Image.open(root/'static'/first['image'].lstrip('/'))
                    image.thumbnail((160, 160), Image.Resampling.NEAREST)
                    preview = entry['original'].replace('/original/', '/preview/')+'.webp'
                    image.save(root/'static'/preview.lstrip('/'), format='WEBP', lossless=True, method=6)
                    entry.update(preview=preview, previewWidth=image.width, previewHeight=image.height)
    save(registry/'pages.json', pages)
    print(f'Wiki: {len(unique)} resources, {len(pages)} pages', flush=True)


if __name__ == '__main__':
    parser = argparse.ArgumentParser()
    parser.add_argument('--ab', type=Path, required=True)
    parser.add_argument('--wog', type=Path, required=True)
    parser.add_argument('--ffmpeg', required=True)
    parser.add_argument('--output', type=Path, default=Path(__file__).resolve().parents[2])
    args = parser.parse_args()
    import_expansions(args.output.resolve(), args.ab.resolve(), args.wog.resolve(), args.ffmpeg)
