import assert from 'node:assert/strict';
import { readFileSync, readdirSync } from 'node:fs';
import { join } from 'node:path';
import test from 'node:test';

const projectRoot = join(import.meta.dirname, '..', '..');

test('Vite keeps the declared browser baseline', () => {
  const config = readFileSync(join(projectRoot, 'vite.config.ts'), 'utf8');
  for (const target of ['chrome109', 'edge109', 'firefox115']) assert.match(config, new RegExp(target));
});

test('GitHub Pages paths stay rooted at the configured deployment base', () => {
  const config = readFileSync(join(projectRoot, 'svelte.config.js'), 'utf8');
  assert.match(config, /base:\s*process\.env\.BASE_PATH/);
  assert.match(config, /relative:\s*false/);
});

test('required CSS avoids color-mix', () => {
  const stylesRoot = join(projectRoot, 'src', 'styles');
  const files = [];
  const walk = (directory) => {
    for (const entry of readdirSync(directory, { withFileTypes: true })) {
      const path = join(directory, entry.name);
      if (entry.isDirectory()) walk(path);
      else if (entry.name.endsWith('.css')) files.push(path);
    }
  };
  walk(stylesRoot);
  for (const file of files) assert.doesNotMatch(readFileSync(file, 'utf8'), /color-mix\(/i, file);
});
