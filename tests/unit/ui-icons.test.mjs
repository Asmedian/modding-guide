import assert from 'node:assert/strict';
import test from 'node:test';
import { readFileSync } from 'node:fs';
import { join } from 'node:path';

const root = join(import.meta.dirname, '..', '..');
const read = (path) => readFileSync(join(root, path), 'utf8');

test('decorative interface glyphs are provided by SVG assets', () => {
  const sources = [
    'src/lib/components/AppShell.svelte',
    'src/lib/components/ArticlePage.svelte',
    'src/lib/components/ContextReference.svelte',
    'src/lib/components/ErmAlphabet.svelte',
    'src/lib/components/LanguageMenu.svelte',
    'src/lib/components/SearchDialog.svelte',
    'src/routes/[lang=locale]/+page.svelte',
    'src/styles/components.css'
  ].map(read).join('\n');
  const sprite = read('static/assets/ui/icons.svg');
  const icon = read('src/lib/components/UiIcon.svelte');
  const interfaceCopy = `${read('src/lib/i18n/ui.ru.json')}\n${read('src/lib/i18n/ui.en.json')}`;

  assert.doesNotMatch(sources, /[←→↗×⌄⌘◆◇☀◐✕✖▲▼▶◀⌕◎☰✦↕♜⌁⌑□≡↑↓]/u);
  assert.doesNotMatch(interfaceCopy, /[←→↗×⌄⌘◆◇☀◐✕✖▲▼▶◀⌕◎☰✦↕♜⌁⌑□≡↑↓]/u);
  assert.match(icon, /<use href=\{`\$\{base\}\/assets\/ui\/icons\.svg#\$\{name\}`\}/);
  for (const name of ['search', 'sun', 'moon', 'menu', 'close', 'external', 'arrow-left', 'arrow-right', 'arrow-up', 'arrow-down', 'chevron', 'globe', 'info', 'book', 'platform', 'resources', 'tools', 'glossary', 'shield', 'sparkle', 'diamond', 'ornament']) {
    assert.match(sprite, new RegExp(`id="${name}"`));
  }
});

test('symbol catalog offers incremental and complete expansion in both locales', () => {
  const catalog = read('src/lib/components/SymbolCatalog.svelte');
  assert.match(catalog, /function showAll\(\) \{ limit = matches\.length; \}/);
  assert.match(catalog, /t\('erm\.index\.more'\)/);
  assert.match(catalog, /t\('erm\.index\.showAll'\)/);
  assert.equal(JSON.parse(read('src/lib/i18n/ui.ru.json'))['erm.index.showAll'], 'Показать всё');
  assert.equal(JSON.parse(read('src/lib/i18n/ui.en.json'))['erm.index.showAll'], 'Show all');
});
