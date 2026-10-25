import assert from 'node:assert/strict';
import test from 'node:test';
import { existsSync, readFileSync } from 'node:fs';
import { join } from 'node:path';
import { createHash } from 'node:crypto';
import { DefFile } from '../../src/lib/wiki/def-decoder.mjs';

const root = join(import.meta.dirname, '../..');
const json = path => JSON.parse(readFileSync(join(root,path),'utf8'));
const pages = json('content/wiki/_registry/pages.json');
const audit = json('content/wiki/_registry/audit.json');
const resources = new Map(pages.flatMap(p=>p.sections.flatMap(s=>s.resources.flatMap(r=>(r.mask?[r,r.mask]:[r]).map(r=>[r.id,r])))));

test('Wiki menu order, font consolidation and DEF titles match the resource catalog',()=>{
  const labels=json('src/lib/i18n/ui.en.json');
  const menu=json('content/_navigation/wiki.json');
  assert.deepEqual(menu.groups.map(g=>labels[g.labelKey]),['Images (*.pcx)','DEF files (*.def)','Sounds','Videos','Campaigns (*.h3c)','Palettes (*.pal)','Fonts (*.fnt)','Other files']);
  assert.deepEqual(menu.groups[0].items.map(i=>labels[i.labelKey]),['Hero portraits','Battlefields','Town elements','Interface','Campaign elements']);
  const defOrder=menu.groups[1].items.map(i=>labels[i.labelKey]);
  assert.equal(defOrder.indexOf('Hero battle animations'),defOrder.indexOf('Heroes, boats and flags (map objects)')+1);
  const fonts=menu.groups.find(g=>labels[g.labelKey]==='Fonts (*.fnt)');
  assert.equal(fonts.href,'wiki/bitmap/2');assert.deepEqual(fonts.items,[]);
  const fontPage=pages.find(p=>p.slug==='bitmap/2');assert.equal(fontPage.sections.length,9);
  assert.equal(fontPage.sections.flatMap(s=>s.resources).length,9);
  for(const page of pages){assert.doesNotMatch(page.title.en,/^\$/);assert.doesNotMatch(page.title.ru,/^\$/);}
});

test('Explorer palettes preserve every RGB channel and flag, and fonts retain native sheet dimensions',()=>{
  for(const resource of resources.values()){
    if(resource.kind==='pal'){
      const source=readFileSync(join(root,'static',resource.original));
      const riff=source.toString('ascii',0,4)==='RIFF';
      const stride=riff||source.length===128?4:3,start=riff?24:0;
      const count=riff?source.readUInt16LE(22):source.length/stride;
      assert.equal(resource.palette.colors.length,count);
      for(let i=0;i<count;i++){
        assert.deepEqual(resource.palette.colors[i],[...source.subarray(start+i*stride,start+i*stride+3)]);
        if(stride===4)assert.equal(resource.palette.flags[i],source[start+i*stride+3]);
      }
    }else if(resource.kind==='fnt'){
      const png=readFileSync(join(root,'static',resource.image));
      assert.equal(png.readUInt32BE(16),resource.width);assert.equal(png.readUInt32BE(20),resource.height);
      assert.equal(resource.previewWidth,resource.width);assert.equal(resource.previewHeight,resource.height);
    }
  }
});

test('Every campaign has descriptions, parsed scenarios, minimaps and original H3M downloads',()=>{
  const audit=json('content/wiki/_registry/campaign-audit.json');
  assert.equal(audit.length,14);assert.equal(audit.reduce((n,c)=>n+c.mapCount,0),60);
  for(const campaign of audit)assert.deepEqual(campaign.errors,[]);
  for(const resource of resources.values())if(resource.kind==='h3c'){
    assert.ok(resource.campaign.name);assert.ok(resource.campaign.description);
    const detail=json('static'+resource.details);assert.equal(detail.scenarios.length,resource.campaign.scenarioCount);
    for(const scenario of detail.scenarios){
      assert.ok(scenario.name);assert.ok(scenario.description);assert.ok(scenario.minimaps.length);
      const map=readFileSync(join(root,'static',scenario.original));assert.equal(map.readUInt16LE(0),0x8b1f);
      for(const mini of scenario.minimaps){
        const png=readFileSync(join(root,'static',mini.image));
        assert.equal(png.readUInt32BE(16),mini.width);assert.equal(png.readUInt32BE(20),mini.height);
      }
    }
  }
});

test('Wiki accounts for every archive entry after editorial resource placement', () => {
  for (const [archive,record] of Object.entries(audit)) {
    assert.equal(record.classified.length+record.unclassified.length+record.skippedTxt,record.total,archive);
    for (const name of record.classified) assert.ok(resources.has(`${archive}/${name}`),name);
    for (const name of record.unclassified) assert.ok(!resources.has(`${archive}/${name}`),name);
    assert.deepEqual(record.unclassified,[]);
  }
  for (const page of pages) {
    assert.ok(page.sections.reduce((n,s)=>n+s.resources.length,0)<=72);
    assert.equal(page.edition,'SoD');
    for (const section of page.sections) for (const part of section.path) {
      assert.ok(part.ru && part.en);
      assert.doesNotMatch(part.en,/[А-Яа-яЁё]/);
    }
  }
});

test('Adventure masks share their DEF rows and all cross-page outline anchors resolve',()=>{
  assert.ok(!pages.some(p=>p.rootSlug==='sprite/0'));
  let paired=0;
  for(const page of pages){
    const anchors=[];
    for(const section of page.sections)for(const item of section.resources){
      anchors.push(item.anchor);
      if(item.mask){
        paired++;anchors.push(item.mask.anchor);
        assert.equal(item.mask.name.replace(/\.msk$/i,'').toLowerCase(),item.name.replace(/\.def$/i,'').toLowerCase());
      }
    }
    assert.equal(new Set(anchors).size,anchors.length,page.slug);
    if(page.outline){
      assert.equal(page.number,1);assert.ok(page.outline.length>1);
      for(const entry of page.outline){
        const target=pages.find(p=>p.slug===entry.slug);
        assert.equal(target.rootSlug,page.rootSlug);
        for(const lang of ['ru','en'])assert.ok(readFileSync(join(root,'content/wiki',target.slug,lang+'.md'),'utf8').includes(`{#${entry.id}}`));
      }
    }
  }
  assert.equal(paired,1437);
  const towns=pages.find(p=>p.slug==='bitmap/0/0');
  assert.ok(towns.outline.some(e=>e.label.en==='Town building outlines'&&e.slug!==towns.slug));
  assert.ok(towns.outline.some(e=>e.depth===1&&e.label.en==='Castle'));
});

test('Wiki original bytes, preview paths and decoded DEF frame lengths are intact', () => {
  for (const resource of resources.values()) {
    assert.ok(!resource.name.toLowerCase().endsWith('.txt'));
    const data=readFileSync(join(root,'static',resource.original));
    assert.equal(data.length,resource.bytes,resource.name);
    assert.equal(createHash('sha256').update(data).digest('hex'),resource.sha256,resource.name);
    for (const key of ['preview','image','media']) if (resource[key]) assert.ok(existsSync(join(root,'static',resource[key])),`${resource.name}: ${key}`);
    if (resource.kind==='def') {
      const def=DefFile.open(new Uint8Array(data));
      assert.equal(def.getGroups().length,resource.groups,resource.name);
      assert.equal(def.rawData.length,resource.frames,resource.name);
      for (const frame of def.rawData) if (frame.image) assert.equal(frame.image.pixeldata.length,frame.image.width*frame.image.height,`${resource.name}/${frame.name}`);
    }
  }
});

test('Wiki LLM catalog covers every resource and resolves its page and file anchor', () => {
  const exported=json('static/llm/wiki-resources.json');
  assert.equal(exported.resources.length,resources.size);
  const manifest=json('static/llm/manifest.json');
  assert.ok(manifest.scope.includes('wiki'));
  for (const resource of exported.resources) for (const lang of ['en']) {
    assert.ok(manifest.entities.some(e=>e.url===resource.destinations[0][lang]));
    assert.ok(resources.has(resource.id));
  }
  const menu=json('content/_navigation/wiki.json');
  for (const slug of ['wiki/sounds','wiki/videos']) {
    const group=menu.groups.find(g=>g.href===slug);
    assert.ok(group); assert.deepEqual(group.items,[]);
  }
});

test('Playable PCM retains SND sample rate, channels and original fact sample count', () => {
  function chunks(data) {
    const result=new Map();
    for(let position=12;position+8<=data.length;){
      const size=data.readUInt32LE(position+4);
      result.set(data.toString('ascii',position,position+4),data.subarray(position+8,position+8+size));
      position+=8+size+(size%2);
    }
    return result;
  }
  for(const resource of resources.values()) if(resource.kind==='audio'){
    const source=chunks(readFileSync(join(root,'static',resource.original)));
    const playable=chunks(readFileSync(join(root,'static',resource.media)));
    assert.equal(playable.get('fmt ').readUInt16LE(0),1,resource.name);
    assert.equal(playable.get('fmt ').readUInt16LE(2),source.get('fmt ').readUInt16LE(2),resource.name);
    assert.equal(playable.get('fmt ').readUInt32LE(4),source.get('fmt ').readUInt32LE(4),resource.name);
    const samples=playable.get('data').length/playable.get('fmt ').readUInt16LE(12);
    if(source.has('fact'))assert.equal(samples,source.get('fact').readUInt32LE(0),resource.name);
  }
});
