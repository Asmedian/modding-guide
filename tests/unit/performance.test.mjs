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
  const productionGuard = search.indexOf('if (!dev) return;');
  const developmentImport = search.indexOf("import('$lib/generated/search-index')");
  assert.ok(productionGuard >= 0 && developmentImport > productionGuard);
  assert.match(search, /normalized\.length >= 2[\s\S]+?loadPagefind\(\)/);
});

test('home navigation data stays outside the initial client bundle', () => {
  const page = readFileSync(join(root, 'src/routes/[lang=locale]/+page.svelte'), 'utf8');
  const server = readFileSync(join(root, 'src/routes/[lang=locale]/+page.server.ts'), 'utf8');
  assert.doesNotMatch(page, /content\/_navigation\/docs\.json/);
  assert.match(page, /navigation=\{data\.navigation\}/);
  assert.match(server, /content\/_navigation\/docs\.json/);
});

test('development loads only the requested article and exposes no visual preloaders', () => {
  const content = readFileSync(join(root, 'src/lib/server/content.ts'), 'utf8');
  const shell = readFileSync(join(root, 'src/lib/components/AppShell.svelte'), 'utf8');
  const search = readFileSync(join(root, 'src/lib/components/SearchDialog.svelte'), 'utf8');
  const reference = readFileSync(join(root, 'src/lib/components/ContextReference.svelte'), 'utf8');
  const rootPage = readFileSync(join(root, 'src/routes/+page.svelte'), 'utf8');
  const markdownGlob = content.match(/const markdownModules[\s\S]+?as Record<string, \(\) => Promise<string>>;/)?.[0] ?? '';
  assert.match(markdownGlob, /import\.meta\.glob/);
  assert.doesNotMatch(markdownGlob, /eager:\s*true/);
  assert.match(shell, /preloadData\(`\$\{base\}\/\$\{lang\}\/erm\/`\)/);
  assert.doesNotMatch(`${shell}\n${search}\n${reference}`, /search-dialog-loading|search\.loading|erm\.context\.loading/);
  assert.doesNotMatch(rootPage, /onMount|language-gateway/);
  assert.match(rootPage, /window\.location\.replace/);
  assert.match(rootPage, /<noscript>/);
});

test('context reference URLs and IDs are prepared during prerendering', () => {
  const html = '<h2 id="part">Part</h2><a href="../tables/#row?a=1&amp;b=2">Table</a><img src="../../assets/a.png"><a href="https://example.com/x?a=1&amp;b=2">External</a>';
  const prepared = prepareContextHtml(html, '/guide/ru/erm/receivers/he/');
  assert.match(prepared, /id="context-part"/);
  assert.match(prepared, /href="\/guide\/ru\/erm\/receivers\/tables\/#row\?a=1&amp;b=2"/);
  assert.match(prepared, /src="\/guide\/ru\/erm\/assets\/a\.png"/);
  assert.match(prepared, /href="https:\/\/example\.com\/x\?a=1&amp;b=2"/);
});

test('long documents render completely without expensive fixed-page effects', () => {
  const base = readFileSync(join(root, 'src/styles/base.css'), 'utf8');
  const layout = readFileSync(join(root, 'src/styles/layout.css'), 'utf8');
  const components = readFileSync(join(root, 'src/styles/components.css'), 'utf8');
  assert.doesNotMatch(base, /background-attachment:\s*fixed/);
  assert.doesNotMatch(layout, /backdrop-filter/);
  assert.doesNotMatch(components, /content-visibility/);
  assert.doesNotMatch(components, /contain-intrinsic-size/);
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
