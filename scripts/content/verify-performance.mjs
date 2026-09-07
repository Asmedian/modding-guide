import assert from 'node:assert/strict';
import { existsSync, mkdirSync, readFileSync, readdirSync, statSync, writeFileSync } from 'node:fs';
import { dirname, join, relative, resolve, sep } from 'node:path';
import { fileURLToPath } from 'node:url';
import { brotliCompressSync, constants } from 'node:zlib';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '../..');
const build = join(root, 'build');
const base = (process.env.BASE_PATH ?? '').replace(/\/$/, '');
const kib = 1024;
const budgets = {
  homeHtml: 32 * kib,
  initialJavaScript: 190 * kib,
  initialCss: 48 * kib,
  initialBrotli: 72 * kib,
  deferredJavaScriptChunk: 768 * kib
};

function walk(directory) {
  return readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
    const path = join(directory, entry.name);
    return entry.isDirectory() ? walk(path) : [path];
  });
}

function localAsset(href) {
  const pathname = new URL(href, 'https://local.invalid').pathname;
  assert.ok(!base || pathname.startsWith(`${base}/`), `Asset escapes BASE_PATH: ${href}`);
  const relativePath = pathname.slice(base.length).replace(/^\//, '').split('/').join(sep);
  const target = resolve(build, relativePath);
  assert.ok(target.startsWith(`${build}${sep}`) && existsSync(target), `Missing performance asset: ${href}`);
  return target;
}

function linkedAssets(html, relation) {
  const files = [];
  for (const match of html.matchAll(/<link\b[^>]*>/g)) {
    const tag = match[0];
    const rel = tag.match(/\brel="([^"]+)"/)?.[1];
    const href = tag.match(/\bhref="([^"]+)"/)?.[1];
    if (rel === relation && href) files.push(localAsset(href));
  }
  return [...new Set(files)];
}

function brotliSize(buffer) {
  return brotliCompressSync(buffer, {
    params: { [constants.BROTLI_PARAM_QUALITY]: 11 }
  }).length;
}

const pages = [];
for (const locale of ['ru', 'en']) {
  const path = join(build, locale, 'index.html');
  const html = readFileSync(path);
  const source = html.toString('utf8');
  const scripts = linkedAssets(source, 'modulepreload').filter((file) => file.endsWith('.js'));
  const styles = linkedAssets(source, 'stylesheet').filter((file) => file.endsWith('.css'));
  const scriptBytes = scripts.reduce((sum, file) => sum + statSync(file).size, 0);
  const styleBytes = styles.reduce((sum, file) => sum + statSync(file).size, 0);
  const compressedBytes = brotliSize(html) + [...scripts, ...styles].reduce((sum, file) => sum + brotliSize(readFileSync(file)), 0);

  assert.ok(html.length <= budgets.homeHtml, `${locale} home HTML exceeds ${budgets.homeHtml / kib} KiB`);
  assert.ok(scriptBytes <= budgets.initialJavaScript, `${locale} initial JavaScript exceeds ${budgets.initialJavaScript / kib} KiB`);
  assert.ok(styleBytes <= budgets.initialCss, `${locale} initial CSS exceeds ${budgets.initialCss / kib} KiB`);
  assert.ok(compressedBytes <= budgets.initialBrotli, `${locale} initial Brotli payload exceeds ${budgets.initialBrotli / kib} KiB`);
  pages.push({ locale, htmlBytes: html.length, initialJavaScriptBytes: scriptBytes, initialCssBytes: styleBytes, initialBrotliBytes: compressedBytes });
}

const chunks = walk(join(build, '_app')).filter((file) => file.endsWith('.js'));
const largestChunk = chunks.map((file) => ({ file: relative(build, file).split(sep).join('/'), bytes: statSync(file).size }))
  .sort((a, b) => b.bytes - a.bytes)[0];
assert.ok(largestChunk.bytes <= budgets.deferredJavaScriptChunk, `JavaScript chunk ${largestChunk.file} exceeds ${budgets.deferredJavaScriptChunk / kib} KiB`);

for (const path of walk(build).filter((file) => file.endsWith('.html'))) {
  const html = readFileSync(path, 'utf8');
  for (const match of html.matchAll(/<img\b[^>]*>/g)) {
    assert.match(match[0], /\bwidth="\d+"/, `Image is missing intrinsic width in ${relative(build, path)}`);
    assert.match(match[0], /\bheight="\d+"/, `Image is missing intrinsic height in ${relative(build, path)}`);
  }
}

const report = { budgets, pages, largestJavaScriptChunk: largestChunk, passed: true };
mkdirSync(join(root, 'reports'), { recursive: true });
writeFileSync(join(root, 'reports', 'performance-budget.json'), `${JSON.stringify(report, null, 2)}\n`);
console.log(`Performance budgets passed: max initial JS ${Math.max(...pages.map((page) => page.initialJavaScriptBytes))} bytes; largest deferred chunk ${largestChunk.bytes} bytes.`);
