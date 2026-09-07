import assert from 'node:assert/strict';
import { readFileSync, readdirSync } from 'node:fs';
import { join } from 'node:path';
import test from 'node:test';
const root = join(import.meta.dirname, '../..');
const registry = (name) => JSON.parse(readFileSync(join(root, 'content/erm/_registry', `${name}.json`), 'utf8'));
const text = (slug, lang = 'ru') => readFileSync(join(root, 'content/erm', slug, `${lang}.md`), 'utf8');
const hasAnchor = (body, id) => body.includes(`{#${id}}`) || body.includes(`id="${id}"`);

test('the legacy index keeps every entry and the parent-child relationships', () => {
  const rows = registry('alphabet');
  assert.equal(rows.length, 213);
  const parents = new Map(rows.filter((r) => !r.depth).map((r) => [r.id, r]));
  for (const row of rows) {
    assert.ok(row.label.ru && row.label.en);
    if (row.depth) assert.ok(parents.has(row.parent));
    assert.ok(text(row.slug));
    if (row.anchor) assert.ok(hasAnchor(text(row.slug), row.anchor), row.id);
  }
  const initials = new Set([...parents.values()].map((r) => r.label.ru[0]));
  for (const letter of ['Е', 'Щ', 'Ю']) assert.ok(!initials.has(letter));
});

test('the Russian alphabet rail omits the requested letters and has no index search', () => {
  const component = readFileSync(join(root, 'src/lib/components/ErmAlphabet.svelte'), 'utf8');
  const rail = component.match(/lang === 'ru' \? \[\.\.\.'([^']+)'\]/)?.[1];
  assert.equal(rail, 'АБВГДЕЖЗИКЛМНОПРСТУФХЦЧШЩЭЮЯ');
  for (const letter of ['Ё', 'Й', 'Ы', 'Ъ', 'Ь']) assert.ok(!rail.includes(letter));
  const markup = component.slice(component.indexOf('<details'));
  assert.doesNotMatch(markup, /<input\b|bind:value|type="search"/);
});

test('legacy destinations resolve and training is explicitly excluded', () => {
  const coverage = registry('source-coverage');
  assert.equal(coverage.length, 225);
  assert.equal(coverage.filter((r) => r.status === 'excluded').length, 2);
  for (const row of registry('legacy-links')) {
    assert.ok(['mapped', 'excluded'].includes(row.status), `${row.from} → ${row.legacyTarget}`);
    if (!row.target) continue;
    for (const lang of ['ru', 'en']) {
      const body = text(row.target.slug, lang);
      if (row.target.anchor) assert.ok(hasAnchor(body, row.target.anchor));
    }
  }
});

test('the AE artifact and object-type chain exists in both languages', () => {
  for (const lang of ['ru', 'en']) {
    assert.match(text('triggers/ae', lang), /\]\(\.\.\/\.\.\/tables\/artifacts\/\)/);
    assert.match(text('tables/artifacts', lang), /\]\(\.\.\/objects\/#id-5\)/);
    assert.match(text('tables/objects', lang), /\{#id-5\}/);
  }
});

test('Framework and receiver registries cover the inspected source inventory', () => {
  for (const [name, count] of Object.entries({ receivers: 76, events: 104, 'trigger-families': 28, functions: 185, constants: 1838, globals: 83, 'framework-events': 13 })) assert.equal(registry(name).length, count, name);
});

test('ERM sections cite registered evidence and English pages contain no untranslated Cyrillic text', () => {
  function walk(dir) { return readdirSync(dir, { withFileTypes: true }).flatMap((e) => e.isDirectory() ? walk(join(dir, e.name)) : e.name === 'entity.json' ? [join(dir, e.name)] : []); }
  for (const path of walk(join(root, 'content/erm'))) {
    const meta = JSON.parse(readFileSync(path, 'utf8'));
    const ru = text(meta.slug), en = text(meta.slug, 'en');
    const sections = [...ru.matchAll(/^#{2,3} .+ \{#([^}]+)\}/gm)].map((m) => m[1]);
    for (const id of sections) assert.ok(meta.sectionSources[id]?.length, `${meta.id}#${id} has evidence`);
    assert.doesNotMatch(en, /[А-Яа-яЁё]/, `${meta.id}: untranslated text in English locale`);
  }
});

test('ERA 3 changelog coverage accounts for every versioned entry and links every documented change', () => {
  const rows = registry('era3-changelog-coverage');
  assert.equal(rows.length, 531);
  assert.equal(rows.filter((row) => row.status === 'documented').length, 359);
  for (const row of rows) {
    assert.ok(['documented', 'out-of-scope'].includes(row.status));
    if (row.status === 'documented') {
      assert.ok(row.targets.length > 0, row.id);
      assert.ok(hasAnchor(text('compatibility'), row.id), row.id);
      assert.ok(hasAnchor(text('compatibility', 'en'), row.id), row.id);
    } else assert.ok(row.reason);
  }
});
