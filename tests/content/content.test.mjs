import assert from 'node:assert/strict';
import { readFileSync, readdirSync } from 'node:fs';
import { dirname, join } from 'node:path';
import test from 'node:test';
import { prepareArticleMarkdown } from '../../src/lib/content/publication.mjs';

const projectRoot = join(import.meta.dirname, '..', '..');
const contentRoot = join(projectRoot, 'content');

function walk(directory, name) {
  return readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
    const fullPath = join(directory, entry.name);
    return entry.isDirectory() ? walk(fullPath, name) : entry.name === name ? [fullPath] : [];
  });
}

function parseMarkdown(path) {
  const raw = readFileSync(path, 'utf8');
  const frontmatter = raw.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n/);
  assert.ok(frontmatter, `${path} has JSON frontmatter`);
  const meta = JSON.parse(frontmatter[1]);
  const sections = [...raw.matchAll(/^#{2,3}\s+.+?\s+\{#([a-z0-9-]+)\}\s*$/gim)].map((match) => match[1]);
  return { meta, sections };
}

const sources = JSON.parse(readFileSync(join(projectRoot, 'content', '_sources', 'sources.json'), 'utf8'));
const sourceIds = new Set(sources.map((source) => source.id));
const sourceSets = JSON.parse(readFileSync(join(projectRoot, 'content', '_sources', 'source-files.json'), 'utf8'));
const sourceSetIds = new Set(sourceSets.sourceSets.map((sourceSet) => sourceSet.id));
const entities = walk(contentRoot, 'entity.json').map((path) => ({ path, meta: JSON.parse(readFileSync(path, 'utf8')) }));

test('article IDs and slugs are unique', () => {
  const ids = entities.map(({ meta }) => meta.id);
  const slugs = entities.map(({ meta }) => `${meta.section ?? 'docs'}/${meta.slug}`);
  assert.equal(new Set(ids).size, ids.length);
  assert.equal(new Set(slugs).size, slugs.length);
});

test('published articles have sources and reviewed matching locales', () => {
  for (const { path, meta } of entities.filter(({ meta }) => meta.status === 'published')) {
    assert.ok(meta.sourceRefs.length > 0, `${meta.id} has sources`);
    for (const sourceRef of meta.sourceRefs) assert.ok(sourceIds.has(sourceRef), `${meta.id} resolves ${sourceRef}`);
    const ru = parseMarkdown(join(dirname(path), 'ru.md'));
    const en = parseMarkdown(join(dirname(path), 'en.md'));
    assert.equal(ru.meta.translationStatus, 'reviewed');
    assert.equal(en.meta.translationStatus, 'reviewed');
    assert.deepEqual(ru.sections, en.sections, `${meta.id} has matching section IDs`);
    assert.ok(ru.meta.title && ru.meta.summary && en.meta.title && en.meta.summary);
  }
});

test('article relations resolve', () => {
  const slugs = new Set(entities.map(({ meta }) => `${meta.section ?? 'docs'}/${meta.slug}`));
  for (const { meta } of entities) {
    if (meta.previous !== null) assert.ok(slugs.has(`${meta.section ?? 'docs'}/${meta.previous}`), `${meta.id} previous resolves`);
    if (meta.next !== null) assert.ok(slugs.has(`${meta.section ?? 'docs'}/${meta.next}`), `${meta.id} next resolves`);
  }
});

test('UI locale dictionaries expose the same keys', () => {
  const ru = JSON.parse(readFileSync(join(projectRoot, 'src', 'lib', 'i18n', 'ui.ru.json'), 'utf8'));
  const en = JSON.parse(readFileSync(join(projectRoot, 'src', 'lib', 'i18n', 'ui.en.json'), 'utf8'));
  assert.deepEqual(Object.keys(ru).sort(), Object.keys(en).sort());
});

test('source registry uses unique IDs, registered sets, and immutable hashes', () => {
  assert.equal(sourceIds.size, sources.length);
  for (const source of sources) {
    assert.ok(sourceSetIds.has(source.sourceSet), `${source.id} uses a registered source set`);
    assert.match(source.sha256, /^[A-F0-9]{64}$/, `${source.id} has a SHA-256`);
    assert.ok(source.relativeSourcePath && !/^[A-Za-z]:[\\/]/.test(source.relativeSourcePath), `${source.id} stores no absolute path`);
  }
});

test('navigation resolves published articles or the intentionally empty learning route', () => {
  const published = new Set(entities.filter(({ meta }) => meta.status === 'published').map(({ meta }) => `${meta.section ?? 'docs'}/${meta.slug}`.replace(/\/$/, '')));
  for (const section of ['docs', 'erm', 'plugins']) {
    const navigation = JSON.parse(readFileSync(join(projectRoot, 'content', '_navigation', `${section}.json`), 'utf8'));
    for (const item of navigation.groups.flatMap((group) => group.items)) {
      assert.ok(published.has(item.slug || section) || item.slug === 'erm/learn', `navigation resolves ${item.slug}`);
    }
  }
});

test('generated LLM manifest covers every published entity in both locales', () => {
  const manifest = JSON.parse(readFileSync(join(projectRoot, 'static', 'llm', 'manifest.json'), 'utf8'));
  const expected = entities.filter(({ meta }) => meta.status === 'published').length * 2;
  assert.equal(manifest.entities.length, expected);
  assert.equal(new Set(manifest.entities.map((entry) => `${entry.locale}:${entry.id}`)).size, expected);
});

test('publication omits retired ERM histories, credits, and WoG-team material', () => {
  for (const locale of ['ru', 'en']) {
    const start = prepareArticleMarkdown(readFileSync(join(contentRoot, 'erm', 'start', `${locale}.md`), 'utf8'), 'erm', 'start');
    assert.doesNotMatch(start, /ERA3-GENERATED:START|Changes in ERA 3|Изменения в ERA 3/i);

    const compatibility = prepareArticleMarkdown(readFileSync(join(contentRoot, 'erm', 'compatibility', `${locale}.md`), 'utf8'), 'erm', 'compatibility');
    assert.doesNotMatch(compatibility, /id="era3-changelog"|Complete ERA 3 change history|Полная история изменений ERA 3/i);
  }

  const root = prepareArticleMarkdown(readFileSync(join(contentRoot, 'erm', 'ru.md'), 'utf8'), 'erm', '');
  assert.doesNotMatch(root, /ref-cont-wogteam|ref-cont-abouthelp-(?:n1|o)|Перевод ERM-помощи|История изменений справочника/i);
});
