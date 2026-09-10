import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { join } from 'node:path';
import test from 'node:test';

const root = join(import.meta.dirname, '..', '..');
const shell = readFileSync(join(root, 'src/lib/components/AppShell.svelte'), 'utf8');
const layout = readFileSync(join(root, 'src/styles/layout.css'), 'utf8');

test('the header and all columns share a centered, bounded site frame', () => {
  const tokens = readFileSync(join(root, 'src/styles/tokens.css'), 'utf8');
  assert.match(tokens, /--site-max:\s*1920px/);
  assert.match(shell, /<div class="site-frame">\s*<header class="topbar">/);
  assert.match(shell, /<\/aside>\s*<\/div>\s*<\/div>\s*$/);
  const frame = layout.match(/\.site-frame\s*\{([^}]+)\}/)?.[1];
  assert.ok(frame);
  assert.match(frame, /width:\s*100%/);
  assert.match(frame, /max-width:\s*var\(--site-max\)/);
  assert.match(frame, /margin-inline:\s*auto/);
  assert.match(frame, /height:\s*100vh/);
  assert.match(frame, /overflow:\s*hidden/);
  assert.match(layout, /\.site-grid\s*\{[^}]*overflow-y:\s*auto/);
});

test('header text keeps its intrinsic width while search can shrink', () => {
  const topbar = layout.match(/\.topbar\s*\{([^}]+)\}/)?.[1];
  assert.match(topbar, /display:\s*flex/);
  assert.doesNotMatch(topbar, /grid-template-columns/);
  for (const selector of ['brand', 'topnav']) {
    const rule = layout.match(new RegExp(`\\.${selector}\\s*\\{([^}]+)\\}`))?.[1];
    assert.match(rule, /flex:\s*0 0 auto/);
  }
  const search = layout.match(/\.topbar > \.search-trigger\s*\{([^}]+)\}/)?.[1];
  assert.match(search, /flex:\s*0 1 430px/);
  assert.match(search, /min-width:\s*0/);
  assert.match(layout, /@media \(max-width: 1440px\)/);
});

test('search truncates only its label and keeps the shortcut on one line', () => {
  const components = readFileSync(join(root, 'src/styles/components.css'), 'utf8');
  const label = components.match(/\.search-trigger > span:nth-child\(2\)\s*\{([^}]+)\}/)?.[1];
  const shortcut = components.match(/\.search-trigger kbd\s*\{([^}]+)\}/)?.[1];
  assert.match(label, /min-width:\s*0/);
  assert.match(label, /text-overflow:\s*ellipsis/);
  assert.match(shortcut, /flex:\s*0 0 auto/);
  assert.match(shortcut, /white-space:\s*nowrap/);
  assert.match(layout, /\.mobile-search-row \.search-trigger kbd\s*\{\s*display:\s*none/);
});

test('locale options use document navigation without disabling the site router', () => {
  const menu = readFileSync(join(root, 'src/lib/components/LanguageMenu.svelte'), 'utf8');
  assert.match(menu, /<div class="language-options" data-sveltekit-reload>/);
  assert.match(menu, /href=\{ruPath\}/);
  assert.match(menu, /href=\{enPath\}/);
  assert.doesNotMatch(shell, /data-sveltekit-reload/);
});

test('the background fills the middle column; only its inner content has a width limit', () => {
  assert.match(shell, /<main class="content-column">[\s\S]*?<div class="content-inner">\s*<slot \/>/);
  const columnRules = [...layout.matchAll(/\.content-column\s*\{([^}]+)\}/g)];
  assert.ok(columnRules.length > 0);
  for (const [, rule] of columnRules) assert.doesNotMatch(rule, /max-width|margin|padding/);
  assert.match(columnRules[0][1], /background:\s*linear-gradient/);
  assert.match(layout, /\.content-inner\s*\{[^}]*max-width:/);
});

test('the right-sidebar quick start card has no shield glyph', () => {
  const card = shell.match(/<div class="new-card">([\s\S]*?)<\/div>/)?.[1];
  assert.ok(card);
  assert.doesNotMatch(card, /shield-glyph/);
  assert.match(card, /home\.newTitle/);
  assert.match(card, /home\.newAction/);
});

test('article sources are a collapsed disclosure that expands below its toggle', () => {
  const article = readFileSync(join(root, 'src/lib/components/ArticlePage.svelte'), 'utf8');
  const components = readFileSync(join(root, 'src/styles/components.css'), 'utf8');
  assert.match(article, /<details class="source-panel" data-pagefind-ignore>/);
  assert.doesNotMatch(article, /<details class="source-panel"[^>]*\bopen\b/);
  assert.match(components, /\.source-panel\s*\{[^}]*flex-direction:\s*column[;}]/);
});
