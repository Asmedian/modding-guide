import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { join } from 'node:path';
import test from 'node:test';
import { findTextRanges, matchSnippet, advanceMatch, createPageSearch } from '../../src/lib/search/page-search.mjs';
import { matchUsesInputScript } from '../../src/lib/search/result-language.mjs';

test('page search finds all literal RU/EN matches without treating punctuation as regex', () => {
  assert.deepEqual(findTextRanges('ERA era Era', ' era '), [{start: 0, end: 3}, {start: 4, end: 7}, {start: 8, end: 11}]);
  assert.equal(findTextRanges('МОД мод Мод', 'мод').length, 3);
  for (const value of ['[test]', '!!UN:C', 'a+b', 'file.txt', 'Mods\\Data', '(ERA)', '.*']) {
    assert.deepEqual(findTextRanges(value, value), [{start: 0, end: value.length}]);
  }
  assert.deepEqual(findTextRanges('archive', ''), []);
  assert.deepEqual(findTextRanges('archive', 'a'), []);
  assert.deepEqual(findTextRanges('archive', 'missing'), []);
});

test('match snippets contain the exact selected occurrence with surrounding context', () => {
  const value = `${'before '.repeat(30)}Mods/Data${' after'.repeat(30)}`;
  const parts = matchSnippet(value, findTextRanges(value, 'Mods/Data')[0]);
  assert.equal(parts.filter(part => part.match).map(part => part.text).join(''), 'Mods/Data');
  assert.ok(parts[0].text.startsWith('…'));
  assert.ok(parts[2].text.endsWith('…'));
});

test('match arrows advance in document order without wrapping', () => {
  assert.equal(advanceMatch(2, 1, 3), 2);
  assert.equal(advanceMatch(0, -1, 3), 0);
  assert.equal(advanceMatch(1, 1, 3), 2);
  assert.equal(advanceMatch(0, 1, 1), 0);
  assert.equal(advanceMatch(0, -1, 0), 0);
});

test('fuzzy search results stay in the alphabet used by the query', () => {
  assert.equal(matchUsesInputScript('ERM command', 'ууау'), false);
  assert.equal(matchUsesInputScript('команда', 'ууау'), true);
  assert.equal(matchUsesInputScript('ресивер', 'receiver'), false);
  assert.equal(matchUsesInputScript('receiver', 'receiver'), true);
  assert.equal(matchUsesInputScript('SN:T', 'SN:T'), true);
});

// Minimal DOM adapter for testing highlight transactions, not browser rendering.
function fixture(specs) {
  const blocks = [];
  const doc = {
    createTextNode(data) {
      return { data, get length() { return this.data.length; }, parentNode: null, parentElement: null,
        replaceWith(fragment) {
          const parent = this.parentNode;
          const at = parent.children.indexOf(this);
          parent.children.splice(at, 1, ...fragment.childNodes);
          for (const child of fragment.childNodes) child.parentNode = parent;
          this.parentNode = null;
        }
      };
    },
    createDocumentFragment() { return {childNodes: [], append(node) { this.childNodes.push(node); }}; },
    createElement() { return {className: '', textContent: '', parentNode: null, active: false,
      get classList() { return {toggle: (name, active) => { this.active = active; }}; }}; },
    createTreeWalker(article, what, filter) {
      const nodes = blocks.flatMap(block => block.originals).filter(node => filter.acceptNode(node) === 1);
      let index = -1;
      return {currentNode: null, nextNode() { this.currentNode = nodes[++index]; return !!this.currentNode; }};
    }
  };
  for (const {parts, excluded = false} of specs) {
    const block = {
      children: [], originals: [],
      closest(selector) { return selector.startsWith('.source-panel') ? (excluded ? this : null) : this; },
      insertBefore(node, reference) { this.children.splice(this.children.indexOf(reference), 0, node); node.parentNode = this; },
      removeChild(node) { this.children.splice(this.children.indexOf(node), 1); node.parentNode = null; }
    };
    block.originals = parts.map(part => {const node = doc.createTextNode(part); node.parentElement = block; node.parentNode = block; return node;});
    block.children = [...block.originals];
    blocks.push(block);
  }
  return {article: {ownerDocument: doc}, blocks};
}

test('page highlighting spans inline nodes, excludes auxiliary content and restores original nodes', () => {
  const {article, blocks} = fixture([
    {parts: ['Use ', 'Mods/', 'Data', '. Then Mods/Data.']},
    {parts: ['Mods/Data source note'], excluded: true},
    {parts: ['Mods/']}, {parts: ['Data']}
  ]);
  const search = createPageSearch(article);
  const matches = search.search('Mods/Data');
  assert.equal(matches.length, 2);
  assert.equal(matches[0].marks.length, 2);
  assert.equal(matches[0].marks.map(mark => mark.textContent).join(''), 'Mods/Data');
  search.activate(1);
  assert.ok(matches[1].marks.every(mark => mark.active));
  assert.ok(matches[0].marks.every(mark => !mark.active));
  search.clear();
  search.clear();
  for (const block of blocks) {
    assert.equal(block.children.length, block.originals.length);
    block.children.forEach((node, index) => assert.equal(node, block.originals[index]));
  }
  assert.equal(search.search('Mods/Data').length, 2);
  assert.equal(search.search('missing').length, 0);
  for (const block of blocks) assert.deepEqual(block.children, block.originals);
});

test('closing the dropdown retains parent-owned query and scope; outside events are cleaned up', () => {
  const root = join(import.meta.dirname, '../..');
  const shell = readFileSync(join(root, 'src/lib/components/AppShell.svelte'), 'utf8');
  assert.match(shell, /bind:query=\{searchQuery\} bind:scope=\{searchScope\}/);
  assert.match(shell, /addEventListener\('pointerdown', handleOutsideSearch, true\)/);
  assert.match(shell, /removeEventListener\('pointerdown', handleOutsideSearch, true\)/);
  const handler = shell.match(/function handleOutsideSearch[\s\S]+?\n  \}/)[0];
  assert.match(handler, /closest\('\.search-dropdown-host, \.search-trigger'\)/);
  assert.doesNotMatch(handler, /searchQuery\s*=|searchScope\s*=/);
  assert.doesNotMatch(shell, /PageFind|search-click-catcher|on:pageSearch/);
});

test('This page stays in the same search field and both arrows immediately scroll to the match', () => {
  const source = readFileSync(join(import.meta.dirname, '../../src/lib/components/SearchDialog.svelte'), 'utf8');
  assert.equal((source.match(/<input /g) ?? []).length, 1);
  assert.doesNotMatch(source, /dispatch\('pageSearch'/);
  assert.match(source, /on:click=\{\(\) => movePageMatch\(-1\)\}/);
  assert.match(source, /on:click=\{\(\) => movePageMatch\(1\)\}/);
  assert.match(source, /window\.scrollTo/);
  assert.match(source, /beforeNavigate\(\(\) => pageSearch\?\.clear\(\)\)/);
});

test('language summary displays only the current language and a stationary text-colored chevron', () => {
  const menu = readFileSync(join(import.meta.dirname, '../../src/lib/components/LanguageMenu.svelte'), 'utf8');
  const styles = readFileSync(join(import.meta.dirname, '../../src/styles/components.css'), 'utf8');
  const summary = menu.match(/<summary[\s\S]*?<\/summary>/)[0];
  assert.match(summary, /<span>\{lang\.toUpperCase\(\)\}<\/span>/);
  assert.doesNotMatch(summary, /'EN' : 'RU'/);
  assert.match(summary, /class="language-chevron"/);
  const rule = styles.match(/\.language-chevron\s*\{([^}]+)\}/)[1];
  assert.match(rule, /color: currentColor/);
  assert.match(rule, /align-self: center/);
  assert.match(rule, /width: 1\.25rem/);
  assert.doesNotMatch(styles, /\[open\] \.language-chevron/);
});
