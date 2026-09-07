import assert from 'node:assert/strict';
import { existsSync, readFileSync, readdirSync } from 'node:fs';
import { dirname, join } from 'node:path';
import test from 'node:test';

const projectRoot = join(import.meta.dirname, '..', '..');
const contentRoot = join(projectRoot, 'content');

function walk(directory, name) {
  return readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
    const fullPath = join(directory, entry.name);
    return entry.isDirectory() ? walk(fullPath, name) : entry.name === name ? [fullPath] : [];
  });
}

const entityPaths = walk(contentRoot, 'entity.json');
const entities = entityPaths.map((path) => ({ path, meta: JSON.parse(readFileSync(path, 'utf8')) }));
const records = new Map(entities.map(({ path, meta }) => [`${meta.section ?? 'docs'}/${meta.slug}`.replace(/\/$/, ''), { path, meta }]));

test('Markdown links and fragments resolve across all published sections', () => {
  const failures = [];
  for (const { path, meta } of entities) {
    for (const locale of ['ru', 'en']) {
      const markdown = readFileSync(join(dirname(path), `${locale}.md`), 'utf8').replace(/```[\s\S]*?```/g, '').replace(/<pre\b[^>]*>[\s\S]*?<\/pre>/g, '');
      const anchors = [...markdown.matchAll(/\{#([a-z0-9-]+)\}|\bid="([^"]+)"/g)].map((match) => match[1] || match[2]);
      if (new Set(anchors).size !== anchors.length) failures.push(`${meta.id} (${locale}) has duplicate anchors`);
      const current = new URL(`https://guide.test/${locale}/${meta.section ?? 'docs'}/${meta.slug ? `${meta.slug}/` : ''}`);
      const links = [...markdown.matchAll(/\[[^\]]+\]\(([^)]+)\)/g)].map((match) => ({ href: match[1], image: match.index > 0 && markdown[match.index - 1] === '!' }));
      links.push(...[...markdown.matchAll(/\b(href|src)="([^"]+)"/g)].map((match) => ({ href: match[2].replaceAll('&amp;', '&'), image: match[1] === 'src' })));
      for (const link of links) {
        const href = link.href;
        if (/^(?:https?:|mailto:)/i.test(href)) continue;
        const target = new URL(href, current);
        if (link.image || target.pathname.startsWith('/assets/')) {
          if (!existsSync(join(projectRoot, 'static', target.pathname))) failures.push(`${meta.id} missing image → ${href}`);
          continue;
        }
        const key = target.pathname.replace(/^\/(ru|en)\//, '').replace(/\/$/, '');
        if (key === 'erm/learn') continue;
        const record = records.get(key);
        if (!record) { failures.push(`${meta.id} (${locale}) → ${href}`); continue; }
        if (target.hash) {
          const body = readFileSync(join(dirname(record.path), `${locale}.md`), 'utf8');
          if (!body.includes(`{${target.hash}}`) && !body.includes(`id="${target.hash.slice(1)}"`)) failures.push(`${meta.id} (${locale}) missing anchor → ${href}`);
        }
      }
    }
  }
  assert.deepEqual(failures, []);
});

test('maintainer guides have valid local links and documented directories', () => {
  for (const file of ['AGENTS.md', 'README.md', 'CONTRIBUTING.md', 'docs/EDITING_GUIDE.md', 'docs/PROJECT_MAP.md']) {
    const path = join(projectRoot, file);
    const markdown = readFileSync(path, 'utf8');
    for (const match of markdown.matchAll(/\[[^\]]+\]\(([^)]+)\)/g)) {
      if (/^(?:https?:|#)/.test(match[1])) continue;
      assert.ok(existsSync(join(dirname(path), match[1].split('#')[0])), `${file} resolves ${match[1]}`);
    }
  }
  const projectMap = readFileSync(join(projectRoot, 'docs/PROJECT_MAP.md'), 'utf8');
  for (const match of projectMap.matchAll(/^- `([^`]+\/)`:/gm)) {
    assert.ok(existsSync(join(projectRoot, match[1])), `project map path exists: ${match[1]}`);
  }
});
