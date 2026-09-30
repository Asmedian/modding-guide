import assert from 'node:assert/strict';
import test from 'node:test';
import { readFileSync, readdirSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { prepareArticleMarkdown } from '../../src/lib/content/publication.mjs';
import { renderReference, referenceText } from '../../src/lib/reference/rich.mjs';
const root=join(import.meta.dirname,'../..');
const json=p=>JSON.parse(readFileSync(join(root,p),'utf8'));
const read=p=>readFileSync(join(root,p),'utf8').replaceAll('\r\n','\n');
const walk=d=>readdirSync(d,{withFileTypes:true}).flatMap(e=>e.isDirectory()?walk(join(d,e.name)):e.name==='entity.json'?[join(d,e.name)]:[]);

test('LLM export resolves every published entity, relation, section source and complete article body', () => {
 const manifest=json('static/llm/manifest.json');
 const sources=json('static/llm/sources.json');
 assert.deepEqual(sources,json('content/_sources/sources.json'));
 const sourceIds=new Set(sources.map(s=>s.id));
 const expected=walk(join(root,'content')).map(p=>({p,meta:JSON.parse(readFileSync(p,'utf8'))})).filter(x=>x.meta.status==='published');
 const bundles=Object.fromEntries(['ru','en'].flatMap(locale=>manifest.scope.map(section=>[`${locale}/${section}`,read(`static/llm/${locale}/${section}.md`)])));
 assert.deepEqual(new Set(manifest.entities.map(x=>`${x.id}:${x.locale}`)),new Set(expected.flatMap(x=>['ru','en'].map(lang=>`${x.meta.id}:${lang}`))));
 for(const {p,meta} of expected) for(const locale of ['ru','en']){
   const entry=manifest.entities.find(x=>x.id===meta.id&&x.locale===locale);
   assert.deepEqual(entry.sourceRefs,meta.sourceRefs,meta.id);
   assert.deepEqual(entry.sectionSources,meta.sectionSources??{},meta.id);
   for(const ref of [...entry.sourceRefs,...Object.values(entry.sectionSources).flat()])assert.ok(sourceIds.has(ref),ref);
   for(const relation of ['previous','next']){
     assert.equal(entry[relation],meta[relation]??null,`${meta.id}: ${relation}`);
     if(entry[relation]!==null)assert.ok(expected.some(x=>(x.meta.section??'docs')===entry.section&&x.meta.slug===entry[relation]),`${meta.id}: ${relation}`);
   }
   const raw=readFileSync(join(dirname(p),`${locale}.md`),'utf8').replaceAll('\r\n','\n');
   const body=prepareArticleMarkdown(raw.replace(/^---\r?\n[\s\S]*?\r?\n---\r?\n/, '').trim(),entry.section,entry.slug);
   const bundle=bundles[`${locale}/${entry.section}`];
   assert.ok(bundle.includes(`ID: ${meta.id}\nURL:`),`${locale}: ${meta.id}`);
   // The battlefield bitmap has a textual grid description in machine output.
   const parts=body.split(/<img\b[^>]*7176e1b1eafc3a84\.png[^>]*\/?\s*>|!\[[^\]]*\]\([^)]*7176e1b1eafc3a84\.png\)/gi);
   for(const part of parts)assert.ok(bundle.includes(part),`${locale}: ${meta.id}: complete body`);
 }
 const reference=json('static/llm/reference.json');
 for(const [name,data] of Object.entries(reference))if(name!=='schemaVersion')assert.deepEqual(data,json(`content/erm/_registry/${name}.json`),name);
 for(const locale of ['ru','en']){
   const map=read(`content/docs/llm-map/${locale}.md`);
   assert.doesNotMatch(map,/\{#limits\}|not part of the current manifest|не входят в текущий manifest/);
   for(const lang of ['ru','en'])for(const section of manifest.scope)assert.ok(map.includes(`/llm/${lang}/${section}.md`));
 }
});

test('legacy parameter prose wraps without source indentation while ERM examples remain exact', () => {
 const prose='<pre>         $1 – counter\n         #2 – initial value\n         #3 – end value</pre>';
 const rendered=renderReference(prose);
 assert.match(rendered,/class="erm-parameters"/);
 assert.doesNotMatch(rendered,/<pre>| {9}/);
 assert.equal(referenceText(rendered),referenceText(prose));
 const code='<pre class="erm-example"><code class="language-erm">!!re i/0/6:;\n  !!IF:M^message^;\n!!en:;</code></pre>';
 assert.equal(referenceText(renderReference(code)),referenceText(code));
 assert.match(renderReference('<pre>    x1 - active slot\n    x2 - flags</pre>'),/erm-parameters/);
 assert.match(renderReference('<pre>    0 - no quest\n    1 - reach a level</pre>'),/erm-parameters/);
 assert.match(renderReference('<pre>    +----+\n    | UI |\n    +----+</pre>'),/<pre>/);
 for(const locale of ['ru','en']){
   const loops=read(`content/erm/loops/${locale}.md`);
   const rendered=renderReference(loops.match(/:::erm\r?\n([\s\S]*?)\r?\n:::/)[1]);
   assert.match(rendered,/erm-parameters/);
 }
});

test('reviewed English terms preserve command, flag, class, creature and skill meanings', () => {
 assert.match(read('content/erm/en.md'),/<strong>Set<\/strong> value - direct recording of the value\./);
 assert.doesNotMatch(read('content/erm/variables/en.md'),/"installed"|"not installed"/);
 assert.doesNotMatch(read('content/erm/tables/artifact-slots/en.md'),/Podvoda|specialty X1/);
 assert.match(read('content/erm/tables/hero-classes/en.md'),/<td>Overlord<\/td>/);
 assert.match(read('content/erm/tables/creatures/en.md'),/<td>Demon<\/td>/);
 assert.match(read('content/erm/tables/creatures/en.md'),/Skeleton<\/td>/);
 assert.doesNotMatch(read('content/erm/tables/creature-flags/en.md'),/Dracon\. A unit/);
 assert.doesNotMatch(read('content/erm/receivers/ea/en.md'),/Unresponsive|Raise Undead|Can only be used in b<|Dracon\./);
 assert.match(read('content/erm/tables/secondary-skills/en.md'),/`0` \{#id-0\} \| `0` \| Pathfinding/);
});
