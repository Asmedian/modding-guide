import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { join } from 'node:path';
import test from 'node:test';
import { prepareContextHtml } from '../../src/lib/reference/context.mjs';

const root = join(import.meta.dirname, '../..');

test('navigation waits for an intentional tap and restores the saved theme before paint', () => {
  const template = readFileSync(join(root, 'src/app.html'), 'utf8');
  assert.match(template, /data-sveltekit-preload-data="tap"/);
  assert.doesNotMatch(template, /data-sveltekit-preload-data="hover"/);
  assert.ok(template.indexOf("localStorage.getItem('modding-guide:preferences:v1')") < template.indexOf('%sveltekit.head%'));
});

test('search code and production index loading stay outside the initial application bundle', () => {
  const shell = readFileSync(join(root, 'src/lib/components/AppShell.svelte'), 'utf8');
  const search = readFileSync(join(root, 'src/lib/components/SearchDialog.svelte'), 'utf8');
  assert.doesNotMatch(shell, /^\s*import SearchDialog/m);
  assert.match(shell, /import\('\$lib\/components\/SearchDialog\.svelte'\)/);
  const developmentBranch = search.match(/if \(!dev\) return;[\s\S]+?loading = false;/)?.[0] ?? '';
  assert.match(developmentBranch, /import\('\$lib\/generated\/search-index'\)/);
  assert.match(search, /normalized\.length >= 2[\s\S]+?loadPagefind\(\)/);
});

test('context reference URLs and IDs are prepared during prerendering', () => {
  const html = '<h2 id="part">Part</h2><a href="../tables/#row?a=1&amp;b=2">Table</a><img src="../../assets/a.png"><a href="https://example.com/x?a=1&amp;b=2">External</a>';
  const prepared = prepareContextHtml(html, '/guide/ru/erm/receivers/he/');
  assert.match(prepared, /id="context-part"/);
  assert.match(prepared, /href="\/guide\/ru\/erm\/receivers\/tables\/#row\?a=1&amp;b=2"/);
  assert.match(prepared, /src="\/guide\/ru\/erm\/assets\/a\.png"/);
  assert.match(prepared, /href="https:\/\/example\.com\/x\?a=1&amp;b=2"/);
});

test('long documents use progressive rendering without expensive fixed-page effects', () => {
  const base = readFileSync(join(root, 'src/styles/base.css'), 'utf8');
  const layout = readFileSync(join(root, 'src/styles/layout.css'), 'utf8');
  const components = readFileSync(join(root, 'src/styles/components.css'), 'utf8');
  assert.doesNotMatch(base, /background-attachment:\s*fixed/);
  assert.doesNotMatch(layout, /backdrop-filter/);
  assert.match(components, /@supports \(content-visibility: auto\)/);
  assert.match(components, /contain-intrinsic-size:\s*auto 8rem/);
});

test('prerendered local images keep intrinsic dimensions and the build enforces them', () => {
  const content = readFileSync(join(root, 'src/lib/server/content.ts'), 'utf8');
  const dimensions = readFileSync(join(root, 'src/lib/server/image-dimensions.ts'), 'utf8');
  const verifier = readFileSync(join(root, 'scripts/content/verify-performance.mjs'), 'utf8');
  assert.match(content, /addImageDimensions/);
  assert.match(dimensions, /toString\('ascii'\) === 'PNG'/);
  assert.match(dimensions, /'GIF87a', 'GIF89a'/);
  assert.match(dimensions, /toString\('ascii'\) === 'BM'/);
  assert.match(dimensions, /jpegSizeMarkers/);
  assert.match(verifier, /Image is missing intrinsic width/);
  assert.match(verifier, /Image is missing intrinsic height/);
});
