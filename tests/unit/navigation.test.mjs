import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { join } from 'node:path';
import test from 'node:test';

const projectRoot = join(import.meta.dirname, '..', '..');
const navigation = { groups: ['docs', 'erm', 'plugins'].flatMap((section) => JSON.parse(readFileSync(join(projectRoot, 'content', '_navigation', `${section}.json`), 'utf8')).groups) };

test('sidebar is two levels deep with bounded leaf groups', () => {
  assert.ok(Array.isArray(navigation.groups));
  for (const group of navigation.groups) {
    assert.ok(group.items.length <= 12, `${group.id} has no more than 12 leaves`);
    for (const item of group.items) {
      assert.equal(typeof item.slug, 'string');
      assert.equal('items' in item, false, `${group.id}/${item.slug} is a leaf`);
    }
  }
});

test('navigation has no duplicate slugs', () => {
  const slugs = navigation.groups.flatMap((group) => group.items.map((item) => item.slug));
  assert.equal(new Set(slugs).size, slugs.length);
});

test('published sections are active and future sections stay absent', () => {
  const top = JSON.parse(readFileSync(join(projectRoot, 'content', '_navigation', 'top.json'), 'utf8'));
  assert.deepEqual(top.items.filter((item) => item.enabled).map((item) => item.id), ['docs', 'erm', 'plugins']);
  assert.deepEqual(top.items.filter((item) => !item.enabled).map((item) => item.id), []);
});
