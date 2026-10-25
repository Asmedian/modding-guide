"""Explorer-style derived previews and presentation; original bytes are untouched."""
import json
import re
import subprocess
import sys
from pathlib import Path
from PIL import Image, ImageDraw, ImageFont


def enhance_catalog(root):
    registry=root/'content/wiki/_registry'
    read=lambda p:json.loads(p.read_text(encoding='utf-8'))
    def save(p,value):p.write_text(json.dumps(value,ensure_ascii=False,indent=2)+'\n',encoding='utf-8')
    pages=read(registry/'pages.json')
    resources={r['id']:r for p in pages for s in p['sections'] for r in s['resources']}
    updates={}
    for rid,r in resources.items():
        path=lambda key:root/'static'/r[key].lstrip('/')
        if r['kind']=='fnt':
            import struct
            data=path('original').read_bytes();h=data[5]
            widths=[struct.unpack_from('<I',data,36+i*12)[0] for i in range(256)]
            cw,ch=max(8,max(widths))+6,h+6
            image=Image.new('RGBA',(30+16*cw,16+16*ch));draw=ImageDraw.Draw(image);font=ImageFont.load_default()
            draw.rectangle((0,0,image.width,15),fill=(28,33,40,225));draw.rectangle((0,16,29,image.height),fill=(28,33,40,225))
            for i in range(16):
                draw.text((30+i*cw+cw//2,8),f'{i:X}',font=font,fill='#8b949e',anchor='mm')
                draw.text((27,16+i*ch+ch//2),f'{i*16:02X}h',font=font,fill='#8b949e',anchor='rm')
            for i in range(17):
                draw.line((30+i*cw,16,30+i*cw,image.height),fill='#30363d')
                draw.line((30,16+i*ch,image.width,16+i*ch),fill='#30363d')
            for i,w in enumerate(widths):
                if not w:continue
                off=4128+struct.unpack_from('<I',data,3104+i*4)[0]
                glyph=Image.frombytes('RGBA',(w,h),bytes(c for value in data[off:off+w*h] for c in ((255,255,255,255) if value>1 else (0,0,0,200) if value==1 else (0,0,0,0))))
                image.paste(glyph,(30+i%16*cw+3+(cw-6-w)//2,16+i//16*ch+3),glyph)
            image.save(path('image'),optimize=True);image.save(path('preview'),format='WEBP',lossless=True,method=6)
            updates[rid]={'width':image.width,'height':image.height,'previewWidth':image.width,'previewHeight':image.height,'fontHeight':h}
        elif r['kind']=='pal':
            data=path('original').read_bytes();riff=data[:4]==b'RIFF'
            start,stride,count=(24,4,int.from_bytes(data[22:24],'little')) if riff else (0,4,32) if len(data)==128 else (0,3,256)
            palette={'type':'riff' if riff else 'raw' if stride==4 else 'def','colors':[list(data[start+i*stride:start+i*stride+3]) for i in range(count)],'flags':[data[start+i*stride+3] for i in range(count)] if stride==4 else None}
            cols,sz=(8,48) if count<=32 else (16,24)
            image=Image.new('RGB',(cols*sz,((count+cols-1)//cols)*sz));draw=ImageDraw.Draw(image)
            for i,color in enumerate(palette['colors']):draw.rectangle((i%cols*sz,i//cols*sz,(i%cols+1)*sz-1,(i//cols+1)*sz-1),fill=tuple(color))
            image.save(path('image'),optimize=True)
            preview=image.copy();preview.thumbnail((240,160),Image.Resampling.NEAREST);preview.save(path('preview'),format='WEBP',lossless=True,method=6)
            updates[rid]={'palette':palette,'width':image.width,'height':image.height,'previewWidth':preview.width,'previewHeight':preview.height}
    for p in pages:
        for s in p['sections']:
            for r in s['resources']:r.update(updates.get(r['id'],{}))
    # Keep earlier font URLs readable, while the permanent menu opens one page.
    fonts=[p for p in pages if p['rootSlug'].startswith('bitmap/2/')]
    if fonts and not any(p['slug']=='bitmap/2' for p in pages):
        merged={**fonts[0],'slug':'bitmap/2','rootSlug':'bitmap/2','title':{'ru':'Шрифты (*.fnt)','en':'Fonts (*.fnt)'},'sections':[],'number':1,'pageCount':1,'previous':None,'next':None}
        for p in fonts:
            merged['sections'].extend({'path':[p['title']]+s['path'][1:],'resources':s['resources']} for s in p['sections'])
            p['rootSlug']='bitmap/2'
        pages.append(merged)
        folder=root/'content/wiki/bitmap/2';folder.mkdir(parents=True,exist_ok=True)
        meta=read(root/'content/wiki'/fonts[0]['slug']/'entity.json')
        meta.update(id='wiki.bitmap.2',slug='bitmap/2',keywords=['SoD','H3bitmap.lod','Fonts','Шрифты'],previous=None,next=None)
        save(folder/'entity.json',meta)
        for lang in ['ru','en']:
            text='---\n'+json.dumps({'title':merged['title'][lang],'summary':'SoD · H3bitmap.lod · 8','translationStatus':'reviewed'},ensure_ascii=False)+'\n---\n\n'
            for i,s in enumerate(merged['sections']):
                text+=f"## {s['path'][0][lang]} {{#group-{i}}}\n\n| File | Resource | Source |\n| --- | --- | --- |\n"
                for r in s['resources']:text+=f"| `{r['name']}` {{#{r['anchor']}}} | fnt | H3bitmap.lod · SoD |\n"
                text+='\n'
            (folder/(lang+'.md')).write_text(text,encoding='utf-8')
    clean=lambda text:re.sub(r'^\$[0-9A-Fa-f]{2}\s*[—-]\s*','',text)
    labels=read(registry/'labels.json');old_labels={}
    for language,values in labels.items():
        for key,value in values.items():
            if clean(value)!=value:old_labels[value]=clean(value);values[key]=clean(value)
    save(registry/'labels.json',labels)
    for p in pages:
        p['title']={lang:clean(value) for lang,value in p['title'].items()}
        for section in p['sections']:
            section['path']=[{lang:clean(value) for lang,value in part.items()} for part in section['path']]
    for file in (root/'content/wiki').rglob('*'):
        if file.suffix=='.md' or file.name=='entity.json':
            text=file.read_text(encoding='utf-8')
            for old,new in old_labels.items():text=text.replace(old,new)
            file.write_text(text,encoding='utf-8')
    nav=read(root/'content/_navigation/wiki.json');catalog=read(registry/'catalog.json')
    order=['Images (*.pcx)','DEF files (*.def)','Sounds','Videos','Campaigns (*.h3c)','Palettes (*.pal)','Fonts (*.fnt)','Object masks (*.msk)','Other files']
    lookup={labels['en'][g['labelKey']]:g for g in nav['groups']}
    for root_item in catalog['roots']:
        if root_item['title']['en']=='Fonts (*.fnt)':root_item['items']=[];root_item['href']='wiki/bitmap/2'
    font_group=lookup['Fonts (*.fnt)'];font_group['href']='wiki/bitmap/2';font_group['items']=[]
    # Combine miscellaneous archive groups under one permanent menu group.
    others=[g for g in nav['groups'] if labels['en'][g['labelKey']] not in order[:-1]]
    misc=next(g for g in others if labels['en'][g['labelKey']]=='Other files')
    if len(others)>1:
        misc['items']=[item for g in others for item in (g['items'] or [{'labelKey':g['labelKey'],'slug':g['href']}])];misc.pop('href',None)
    lookup['Other files']=misc
    nav['groups']=[lookup[name] for name in order]
    misc_roots=[r for r in catalog['roots'] if r['title']['en'] not in order[:-1]]
    catalog['roots']=[next(r for r in catalog['roots'] if r['title']['en']==name) for name in order[:-1]]+[{'title':{'ru':'Прочие файлы','en':'Other files'},'items':misc['items'],'href':misc.get('href'),'count':sum(r['count'] for r in misc_roots)}]
    catalog['pageCount']=len(pages)
    save(registry/'pages.json',pages);save(registry/'catalog.json',catalog);save(root/'content/_navigation/wiki.json',nav)
    from enrich_def_groups import enrich_def_groups
    enrich_def_groups(root)
    subprocess.run(['node',str(Path(__file__).with_name('enrich-campaigns.mjs')),str(root)],check=True)
    pages=read(registry/'pages.json')
    for p in pages:
        for s in p['sections']:
            for r in s['resources']:
                if r['kind']=='h3c':
                    folder=root/'static'/r['details'].lstrip('/');folder=folder.parent
                    detail=read(folder/'campaign.json')
                    for scenario in detail['scenarios']:
                        for mini in scenario.get('minimaps',[]):
                            image_path=root/'static'/mini['image'].lstrip('/');rgba=image_path.with_suffix('.rgba')
                            if rgba.exists():
                                image=Image.frombytes('RGBA',(mini['width'],mini['height']),rgba.read_bytes());image.save(image_path,optimize=True);rgba.unlink()
                    first=next((sc['minimaps'][0] for sc in detail['scenarios'] if sc.get('minimaps')),None)
                    if first:
                        preview=root/'static/assets/wiki/sod/h3bitmap-lod/preview'/(r['name']+'.webp');image=Image.open(root/'static'/first['image'].lstrip('/'));image.thumbnail((160,160),Image.Resampling.NEAREST);image.save(preview,format='WEBP',lossless=True,method=6)
                        r.update(preview='/'+str(preview.relative_to(root/'static')).replace('\\','/'),previewWidth=image.width,previewHeight=image.height)
    save(registry/'pages.json',pages)


if __name__=='__main__':enhance_catalog(Path(sys.argv[1]).resolve())
