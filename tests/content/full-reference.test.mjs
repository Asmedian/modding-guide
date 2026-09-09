import assert from 'node:assert/strict';
import test from 'node:test';
import { readFileSync } from 'node:fs';
import { createHash } from 'node:crypto';
import { join } from 'node:path';
import { referenceText, renderReference, decodeReferenceText, hexToDecimal } from '../../src/lib/reference/rich.mjs';
const root = join(import.meta.dirname, '../..');
const audit = JSON.parse(readFileSync(join(root, 'content/erm/_registry/full-transfer-audit.json'), 'utf8'));
const englishAudit = JSON.parse(readFileSync(join(root, 'content/erm/_registry/english-transfer-audit.json'), 'utf8'));
const assets = JSON.parse(readFileSync(join(root, 'content/erm/_registry/assets.json'), 'utf8'));
const assetBySource = new Map(assets.map((entry) => [entry.sourcePath.toLowerCase(), entry]));
const hash = (value) => createHash('sha256').update(value).digest('hex').toUpperCase();
const page = (slug, lang) => readFileSync(join(root, 'content/erm', slug, `${lang}.md`), 'utf8');
function fragment(body, id) {
  const start = body.indexOf(`{#${id}}`);
  assert.ok(start >= 0, id);
  const match = body.slice(start).match(/:::erm\r?\n([\s\S]*?)\r?\n:::/);
  assert.ok(match, id);
  return match[1].replaceAll('\r\n', '\n');
}

test('every non-learning Russian legacy page retains all audited text and exact ERM examples', () => {
  assert.equal(audit.length, 223);
  for (const entry of audit) {
    assert.equal(entry.missingTextSlots, 0, entry.sourcePath);
    assert.equal(entry.repeatedTextSlots, 0, entry.sourcePath);
    const raw = fragment(page(entry.slug, 'ru'), entry.fragment);
    let auditedMarkup = raw.replace(/^<section class="erm-reference" lang="ru">\n?/, '').replace(/\n?<\/section>$/, '');
    auditedMarkup = auditedMarkup.slice(auditedMarkup.indexOf('<div')).replace(/<span class="erm-anchor" id="command-[^"]+"><\/span>/g, '').replace(/<span class="erm-anchor"><\/span>/g, '');
    assert.equal(hash(auditedMarkup), entry.renderedPresentationSha256, `${entry.sourcePath}: source presentation was changed`);
    const rendered = renderReference(raw);
    assert.equal(hash(referenceText(rendered).replace(/\s/g, '')), entry.renderedTextSha256, `${entry.sourcePath}: Russian text was truncated or changed`);
    const codes = [...raw.matchAll(/<pre class="erm-example"><code class="language-erm">([\s\S]*?)<\/code><\/pre>/g)].map((m) => hash(decodeReferenceText(m[1])));
    assert.deepEqual(codes, entry.codeBlocks.map((c) => c.sha256), `${entry.sourcePath}: examples`);
    const linkCounts = new Map();
    for (const link of entry.links) {
      const url = link.url.replaceAll('&', '&amp;').replaceAll('"', '&quot;');
      linkCounts.set(url, (linkCounts.get(url) ?? 0) + 1);
    }
    for (const [url, count] of linkCounts) assert.equal(raw.split(`href="${url}"`).length - 1, count, `${entry.sourcePath}: inline link ${url}`);
    assert.equal([...raw.matchAll(/<img\b/g)].length, entry.images.length, `${entry.sourcePath}: illustrations`);
    const imageCounts = new Map();
    for (const image of entry.images) imageCounts.set(image.source.toLowerCase(), (imageCounts.get(image.source.toLowerCase()) ?? 0) + 1);
    for (const [source, count] of imageCounts) {
      const asset = assetBySource.get(source);
      assert.ok(asset, `${entry.sourcePath}: ${source}`);
      assert.equal(raw.split(asset.asset.split('/').at(-1)).length - 1, count, `${entry.sourcePath}: image ${source}`);
    }
  }
});

test('the English locale is a complete translated structural mirror of Russian ERM Help', () => {
  assert.equal(englishAudit.length, 223);
  assert.ok(englishAudit.reduce((sum, entry) => sum + entry.textCharacters, 0) > 790000);
  assert.deepEqual(englishAudit.map((entry) => entry.sourcePath), audit.map((entry) => entry.sourcePath));
  const structuralTags = (raw) => [...raw.matchAll(/<[^>]+>/g)].map((match) => match[0]
    .replace(/ lang="(?:ru|en)"/g, ' lang="LOCALE"')
    .replace(/ (?:alt|title|aria-label|placeholder|value)="[^"]*"/g, ''));
  for (let index = 0; index < englishAudit.length; index += 1) {
    const entry = englishAudit[index];
    const russian = audit[index];
    assert.equal(entry.slug, russian.slug, entry.sourcePath);
    assert.equal(entry.fragment, russian.fragment, entry.sourcePath);
    assert.equal(entry.textSlots, russian.textSlots, `${entry.sourcePath}: text slots`);
    assert.equal(entry.links.length, russian.links.length, `${entry.sourcePath}: link count`);
    assert.equal(entry.images.length, russian.images.length, `${entry.sourcePath}: image count`);
    assert.equal(entry.codeBlocks.length, russian.codeBlocks.length, `${entry.sourcePath}: code block count`);
    assert.equal(entry.comments, russian.comments, `${entry.sourcePath}: comment count`);
    assert.deepEqual(entry.links.map((link) => link.url), russian.links.map((link) => link.url), `${entry.sourcePath}: link destinations`);
    assert.deepEqual(entry.images.map((image) => image.source), russian.images.map((image) => image.source), `${entry.sourcePath}: images`);

    const raw = fragment(page(entry.slug, 'en'), entry.fragment);
    const russianRaw = fragment(page(russian.slug, 'ru'), russian.fragment);
    assert.equal(hash(referenceText(renderReference(raw)).replace(/\s/g, '')), entry.renderedTextSha256, entry.sourcePath);
    assert.doesNotMatch(referenceText(renderReference(raw)), /[А-Яа-яЁё]/, `${entry.sourcePath}: untranslated Cyrillic`);
    assert.deepEqual(structuralTags(raw), structuralTags(russianRaw), `${entry.sourcePath}: HTML structure`);
    assert.deepEqual([...raw.matchAll(/\bid="([^"]+)"/g)].map((match) => match[1]), [...russianRaw.matchAll(/\bid="([^"]+)"/g)].map((match) => match[1]), `${entry.sourcePath}: anchors`);
    assert.deepEqual([...raw.matchAll(/\bhref="([^"]+)"/g)].map((match) => match[1]), [...russianRaw.matchAll(/\bhref="([^"]+)"/g)].map((match) => match[1]), `${entry.sourcePath}: rendered links`);
    const codes = [...raw.matchAll(/<pre class="erm-example"><code class="language-erm">([\s\S]*?)<\/code><\/pre>/g)].map((match) => hash(decodeReferenceText(match[1])));
    assert.deepEqual(codes, entry.codeBlocks.map((block) => block.sha256), `${entry.sourcePath}: translated examples`);
  }
});

test('OB preserves separate commands, both chest examples, contextual links, formula and mouse icon', () => {
  const raw = fragment(page('receivers/ob','ru'), 'ref-rec-ob');
  for (const code of ['b','c','d','e','h','m','r','s','t','u']) assert.ok(raw.includes(`id="ref-rec-ob-${code}"`));
  assert.ok(raw.includes('>C$</strong>'));
  assert.ok(raw.includes('>H$</strong>'));
  assert.match(raw, /href="[^\"]*object-control-words[^\"]*">контрольное слово<\/a>/);
  assert.match(raw, /href="[^\"]*artifacts[^\"]*"[^>]*>номер артефакта<\/a>/);
  assert.ok(raw.includes('!!VRv1&amp;y2=2:Sy1 :8 &amp;255 -1;'));
  assert.ok(referenceText(raw).includes('8190'));
  assert.ok(raw.includes('alt="Правая кнопка мыши"'));
  assert.ok(!page('receivers/ob','ru').includes('## B / H$'));
});

test('player colours retain every original flag image and rich content rejects active markup', () => {
  const raw = fragment(page('tables/players','ru'), 'ref-form-gamerscolor');
  assert.equal([...raw.matchAll(/erm-player-flag/g)].length, 8);
  assert.throws(() => renderReference('<script>alert(1)</script>'));
  assert.throws(() => renderReference('<img src="x" onerror="alert(1)">'));
  assert.throws(() => renderReference('<a href="javascript:alert(1)">x</a>'));
});

test('all transferred comments are collapsed by default', () => {
  for (const [locale, entries] of [['ru', audit], ['en', englishAudit]]) for (const entry of entries) {
    const raw = fragment(page(entry.slug, locale), entry.fragment);
    assert.doesNotMatch(raw, /<details class="erm-comment"\s+open/);
  }
});

test('legacy inline disclosures and the repaired UN comments keep their intended controls', () => {
  const russian = fragment(page('receivers/un', 'ru'), 'ref-rec-un');
  const english = fragment(page('receivers/un', 'en'), 'ref-rec-un');
  for (const [raw, inlineLabel, commentLabel, strayLabel] of [
    [russian, 'место поиска', 'Комментарий', '>здесь</summary>'],
    [english, 'search location', 'Comment', '>here</summary>']
  ]) {
    assert.match(raw, new RegExp(`<details class="erm-comment erm-inline-comment"><summary>${inlineLabel}</summary>`));
    assert.match(raw, new RegExp(`<summary><u><strong>${commentLabel} \\(`));
    assert.ok(!raw.includes(strayLabel));
  }

  const renderedInline = renderReference('<details class="erm-comment"><summary>inline help</summary><div class="erm-comment-body">body</div></details>');
  assert.match(renderedInline, /class="erm-comment erm-inline-comment"/);
});

test('every transferred reference asset matches its recorded source hash', () => {
  assert.ok(assets.length >= 752);
  assert.equal(new Set(assets.map((entry) => entry.asset)).size, new Set(assets.map((entry) => entry.sha256)).size);
  for (const entry of assets) {
    assert.equal(hash(readFileSync(join(root, 'static', entry.asset))), entry.sha256, entry.sourcePath);
  }
  for (const page of audit) for (const image of page.images) {
    const asset = assetBySource.get(image.source.toLowerCase());
    assert.ok(asset, `${page.sourcePath}: ${image.source}`);
  }
});

test('native HEX conversion supports source notation, negative offsets and exact large values', () => {
  assert.equal(hexToDecimal(' 0xFF '), '255');
  assert.equal(hexToDecimal('-10'), '-16');
  assert.equal(hexToDecimal('FFFFFFFFFFFFFFFF'), '18446744073709551615');
  assert.equal(hexToDecimal('not hex'), '—');
});
