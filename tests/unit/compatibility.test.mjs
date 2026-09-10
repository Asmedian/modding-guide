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

test('GitHub Actions builds with Node 24 while local Node 20.19 remains supported', () => {
  const packageJson = readFileSync(join(projectRoot, 'package.json'), 'utf8');
  const workflows = ['validate.yml', 'deploy-pages.yml']
    .map((file) => readFileSync(join(projectRoot, '.github', 'workflows', file), 'utf8'))
    .join('\n');
  assert.match(packageJson, /"node": "\^20\.19\.0 \|\| >=22\.12\.0"/);
  assert.equal((workflows.match(/node-version:\s*24/g) ?? []).length, 2);
  assert.equal((workflows.match(/BASE_PATH:\s*\/\$\{\{ github\.event\.repository\.name \}\}/g) ?? []).length, 2);
  assert.doesNotMatch(workflows, /node-version:\s*(20|22)\b/);
  for (const action of ['actions/checkout@v7', 'actions/setup-node@v7', 'actions/upload-artifact@v7']) assert.match(workflows, new RegExp(action));
  for (const action of ['actions/configure-pages@v6', 'actions/upload-pages-artifact@v5', 'actions/deploy-pages@v5']) assert.match(workflows, new RegExp(action));
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
