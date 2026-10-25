import assert from 'node:assert/strict';
import test from 'node:test';
import { readFileSync, readdirSync, statSync, existsSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { LLM_FILE_LIMIT, splitLlmBody } from '../../scripts/content/build-llm.mjs';
import { prepareArticleMarkdown } from '../../src/lib/content/publication.mjs';

const root = join(import.meta.dirname, '../..');
const browse = join(root, 'static/llm/browse');
const read = (path) => readFileSync(path, 'utf8');
const json = (path) => JSON.parse(read(path));
const walk = (path) => readdirSync(path, { withFileTypes: true }).flatMap((entry) => entry.isDirectory() ? walk(join(path, entry.name)) : [join(path, entry.name)]);
const fileFor = (url) => join(browse, new URL(url, 'https://local.invalid').pathname.split('/llm/browse/')[1]);
const articleDirectories = new Map(walk(join(root, 'content')).filter((path) => path.endsWith('entity.json')).map((path) => [json(path).id, dirname(path)]));

test('the single LLM entry point reaches every bounded catalog file and every entity', () => {
  const seen = new Set();
  const queue = [join(browse, 'index.json')];
  const records = [];
  while (queue.length) {
    const file = queue.pop();
    if (seen.has(file)) continue;
    seen.add(file);
    assert.ok(statSync(file).size <= LLM_FILE_LIMIT, file);
    const text = read(file);
    if (file.endsWith('.json')) {
      const data = JSON.parse(text);
      if (data.entities) records.push(...data.entities);
    }
    // Browse URLs are explicit in JSON and Markdown, including deployments with BASE_PATH.
    for (const match of text.matchAll(/(?:https?:\/\/[^\s"<>)]*)?\/(?:[^\s"<>)]*\/)?llm\/browse\/[^\s"<>)]+/g)) {
      queue.push(fileFor(match[0]));
    }
  }
  assert.deepEqual(seen, new Set(walk(browse)), 'no orphan files or undiscoverable topics');
  const manifest = json(join(root, 'static/llm/manifest.json'));
  assert.deepEqual(new Set(records.map((entry) => `${entry.locale}:${entry.id}`)), new Set(manifest.entities.map((entry) => `${entry.locale}:${entry.id}`)));
  assert.equal(records.length, manifest.entities.length);
  for (const entry of records) {
    const original = manifest.entities.find((item) => item.id === entry.id && item.locale === entry.locale);
    const { parts, ...metadata } = entry;
    assert.deepEqual(metadata, original, `${entry.id}: complete discovery metadata`);
    const fragments = parts.map((part, i) => {
      assert.equal(part.part, i + 1);
      const text = read(fileFor(part.url));
      const start = `<!-- llm:body ${entry.id} ${i + 1} -->\n`;
      const end = `\n<!-- llm:end ${entry.id} ${i + 1} -->`;
      assert.ok(text.includes(start) && text.includes(end), entry.id);
      return text.slice(text.indexOf(start) + start.length, text.indexOf(end));
    });
    const directory = articleDirectories.get(entry.id);
    const raw = read(join(directory, `${entry.locale}.md`));
    const battlefield = entry.locale === 'ru' ? 'Сетка поля боя: клетки 0–186, 11 рядов по 17 клеток.' : 'Battlefield grid: cells 0–186, 11 rows of 17 cells.';
    const expected = prepareArticleMarkdown(raw.replace(/^---\r?\n[\s\S]*?\r?\n---\r?\n/, '').trim(), entry.section, entry.slug)
      .replace(/<img\b[^>]*7176e1b1eafc3a84\.png[^>]*\/?\s*>/gi, battlefield)
      .replace(/!\[[^\]]*\]\([^)]*7176e1b1eafc3a84\.png\)/gi, battlefield);
    assert.equal(fragments.join(''), expected, `${entry.locale}:${entry.id}: lossless full text`);
    for (const example of expected.matchAll(/<pre\b[^>]*>[\s\S]*?<\/pre>|^```[^\n]*\n[\s\S]*?^```[^\n]*/gm)) {
      assert.ok(fragments.some((fragment) => fragment.includes(example[0])), `${entry.id}: example stays atomic`);
    }
  }
});

test('bounded source, symbol and Wiki catalogs retain all evidence and exact destinations', () => {
  const files = walk(browse).filter((path) => path.endsWith('.json'));
  const data = files.map(json);
  const sources = data.flatMap((page) => Array.isArray(page.sources) ? page.sources : []);
  assert.deepEqual(sources.sort((a,b) => a.id.localeCompare(b.id)), json(join(root, 'static/llm/sources.json')).sort((a,b) => a.id.localeCompare(b.id)));
  const resources = data.flatMap((page) => page.resources ?? []);
  assert.deepEqual(resources.sort((a,b) => a.id.localeCompare(b.id)), json(join(root, 'static/llm/wiki-resources.json')).resources.sort((a,b) => a.id.localeCompare(b.id)));
  const reference = json(join(root, 'static/llm/reference.json'));
  const registries = json(join(browse, 'reference/index.json')).registries;
  for (const [name, registry] of Object.entries(reference)) {
    if (name === 'schemaVersion') continue;
    const index = json(fileFor(registries[name].url));
    const actual = index.pages.flatMap((page) => json(fileFor(page.url)).records);
    const expected = Array.isArray(registry) ? registry : Object.entries(registry).map(([id, value]) => ({ id, value }));
    const sort = (records) => records.map((record) => JSON.stringify(record)).sort();
    assert.deepEqual(sort(actual), sort(expected), `${name}: complete reference registry`);
  }
  const symbols = data.flatMap((page) => Array.isArray(page.symbols) ? page.symbols : []);
  assert.equal(symbols.length, json(join(root, 'src/lib/generated/symbol-index.json')).length);
  for (const symbol of symbols) for (const locale of ['en']) {
    assert.ok(symbol.texts[locale].length, `${symbol.name}: ${locale} text is discoverable`);
    assert.ok(new URL(symbol.destinations[locale], 'https://local.invalid').pathname.includes(`/${locale}/erm/${symbol.slug}/`));
    assert.equal(new URL(symbol.destinations[locale], 'https://local.invalid').hash, symbol.anchor ? `#${symbol.anchor}` : '');
  }
});

test('LLM files export one English corpus without duplicate translations', () => {
  assert.ok(!existsSync(join(root, 'static/llm/ru')));
  assert.ok(!existsSync(join(browse, 'ru')));
  const manifest = json(join(root, 'static/llm/manifest.json'));
  assert.equal(manifest.language, 'en');
  for (const entry of manifest.entities) {
    assert.equal(entry.locale, 'en');
    assert.doesNotMatch([entry.title, entry.summary, ...entry.keywords, ...entry.questions].join(' '), /[\p{Script=Cyrillic}]/u);
  }
  function visit(value) {
    if (Array.isArray(value)) return value.forEach(visit);
    if (!value || typeof value !== 'object') return;
    assert.ok(!Object.hasOwn(value, 'ru'), 'no duplicate Russian label or destination');
    Object.values(value).forEach(visit);
  }
  for (const file of walk(join(root, 'static/llm')).filter((path) => path.endsWith('.json'))) visit(json(file));
});

test('LLM excerpts handle multibyte text and large examples without losing a character', () => {
  const example = `<pre><code>${'!!IF:M^Тест^;\n'.repeat(1500)}</code></pre>`;
  const body = `${'Абзац.\n\n'.repeat(4000)}${example}\n${'Text.\n'.repeat(1000)}`;
  const parts = splitLlmBody(body);
  assert.equal(parts.join(''), body);
  assert.ok(parts.some((part) => part.includes(example)));
  assert.ok(parts.every((part) => Buffer.byteLength(part) < LLM_FILE_LIMIT));
});
