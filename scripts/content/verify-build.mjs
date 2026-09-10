import assert from 'node:assert/strict';
import { existsSync, mkdirSync, readFileSync, readdirSync, statSync, writeFileSync } from 'node:fs';
import { dirname, join, relative, resolve, sep } from 'node:path';
import { fileURLToPath } from 'node:url';
import { gunzipSync } from 'node:zlib';
import { prepareContextHtml } from '../../src/lib/reference/context.mjs';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '../..');
const build = join(root, 'build');
const base = (process.env.BASE_PATH ?? '').replace(/\/$/, '');
const origin = process.env.SITE_ORIGIN || 'https://local.invalid';
const localTargets = new Map();

function walk(directory) {
  return readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
    const path = join(directory, entry.name);
    return entry.isDirectory() ? walk(path) : [path];
  });
}

function localFile(url) {
  const path = decodeURIComponent(url.pathname);
  if (localTargets.has(path)) return localTargets.get(path);
  assert.ok(!base || path === base || path.startsWith(`${base}/`), `URL escapes BASE_PATH: ${url}`);
  let target = resolve(build, `.${path.slice(base.length) || '/'}`);
  assert.ok(target === build || target.startsWith(`${build}${sep}`), `URL escapes build: ${url}`);
  if (existsSync(target) && statSync(target).isDirectory()) target = join(target, 'index.html');
  assert.ok(existsSync(target), `Missing built target: ${url}`);
  localTargets.set(path, target);
  return target;
}

const files = walk(build);
const htmlFiles = files.filter((path) => path.endsWith('.html'));
const html = new Map(htmlFiles.map((path) => [path, readFileSync(path, 'utf8')]));
const htmlIds = new Map([...html].map(([path, body]) => [path, [...body.matchAll(/\bid="([^"]+)"/g)].map((match) => match[1])]));
const anchorSets = new Map([...htmlIds].map(([path, ids]) => [path, new Set(ids)]));
let checkedLinks = 0;
let checkedAnchors = 0;
let referenceFiles = 0;

for (const [path, body] of html) {
  const ids = htmlIds.get(path);
  assert.equal(new Set(ids).size, ids.length, `Duplicate HTML IDs in ${relative(build, path)}`);
  const route = relative(build, path).split(sep).join('/').replace(/index\.html$/, '');
  const current = new URL(`${base}/${route}`, origin);
  for (const match of body.matchAll(/\b(?:href|src)="([^"]+)"/g)) {
    const href = match[1].replaceAll('&amp;', '&');
    if (/^(?:data:|mailto:|tel:|javascript:)/i.test(href)) continue;
    const targetUrl = new URL(href, current);
    if (targetUrl.origin !== current.origin) continue;
    const target = localFile(targetUrl);
    checkedLinks += 1;
    if (targetUrl.hash && html.has(target)) {
      const id = decodeURIComponent(targetUrl.hash.slice(1));
      assert.ok(anchorSets.get(target).has(id), `Missing anchor ${targetUrl}`);
      checkedAnchors += 1;
    }
  }
}

const manifest = JSON.parse(readFileSync(join(build, 'llm/manifest.json'), 'utf8'));
for (const entry of manifest.entities) {
  const target = localFile(new URL(entry.url, origin));
  assert.ok(html.has(target), `${entry.id} must resolve to built HTML`);
  assert.ok(entry.title && entry.summary && entry.questions.length && entry.keywords.length, `${entry.id} has complete LLM metadata`);
  if (entry.section === 'erm') {
    const reference = localFile(new URL(`${base}/api/reference/${entry.locale}/${entry.slug || '_overview'}.json`, origin));
    const data = JSON.parse(readFileSync(reference, 'utf8'));
    assert.equal(data.slug, entry.slug, `${entry.id}: contextual slug matches`);
    assert.equal(data.title, entry.title, `${entry.id}: contextual title matches`);
    const articlePath = new URL(entry.url, origin).pathname;
    const preparedArticle = prepareContextHtml(html.get(target), articlePath);
    assert.ok(data.bodyHtml && preparedArticle.includes(data.bodyHtml), `${entry.id}: context has the complete canonical article body`);
    referenceFiles += 1;
  }
}

const symbols = JSON.parse(readFileSync(join(root, 'src/lib/generated/symbol-index.json'), 'utf8'));
for (const symbol of symbols) {
  for (const lang of ['ru', 'en']) {
    const target = localFile(new URL(`${base}/${lang}/erm/${symbol.slug}/`, origin));
    assert.ok(!symbol.anchor || anchorSets.get(target)?.has(symbol.anchor), `${symbol.name}: missing ${lang} symbol destination`);
  }
}

if (process.env.SITE_ORIGIN) {
  const sitemap = readFileSync(join(build, 'sitemap.xml'), 'utf8');
  const urls = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((match) => match[1]);
  for (const entry of manifest.entities) assert.ok(urls.includes(entry.url), `${entry.id} is in sitemap`);
  for (const lang of ['ru', 'en']) assert.ok(urls.includes(`${origin}${base}/${lang}/`), `${lang} home is in sitemap`);
  urls.forEach((url) => localFile(new URL(url)));
}

for (const path of files.filter((path) => /\.(?:html|js|json|css|txt|md)$/.test(path))) {
  assert.doesNotMatch(readFileSync(path, 'utf8'), /[A-Z]:[\\/](?:Users|dev|Games)[\\/]/i, `Local development path leaked into ${relative(build, path)}`);
}
assert.ok(existsSync(join(build, 'pagefind/pagefind.js')), 'Pagefind output exists');
assert.ok(existsSync(join(build, 'icon.png')), 'Brand image is included');
const fragments = files.filter((path) => path.endsWith('.pf_fragment'));
assert.equal(fragments.length, manifest.entities.length, 'Pagefind covers every localized article');
for (const path of fragments) {
  const compressed = readFileSync(path);
  const raw = compressed.subarray(0, 12).toString().startsWith('pagefind_dcd') ? compressed : gunzipSync(compressed);
  const fragment = JSON.parse(raw.subarray(12).toString());
  assert.ok(manifest.entities.some((entry) => entry.id === fragment.meta.pageId && entry.locale === fragment.meta.locale), `Pagefind has usable entity metadata: ${path}`);
  assert.ok(['docs', 'erm', 'plugins'].includes(fragment.meta.topSection));
}

const report = { articles: manifest.entities.length / 2, localizedArticles: manifest.entities.length, htmlPages: htmlFiles.length, referenceFiles, symbols: symbols.length, checkedLinks, checkedAnchors, basePath: base, passed: true };
mkdirSync(join(root, 'reports'), { recursive: true });
writeFileSync(join(root, 'reports/build-validation.json'), `${JSON.stringify(report, null, 2)}\n`);
console.log(`Validated ${report.localizedArticles} localized articles, ${checkedLinks} links, and ${checkedAnchors} anchors (base: ${base || '/'}).`);
