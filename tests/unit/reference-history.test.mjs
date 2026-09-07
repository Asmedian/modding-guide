import assert from 'node:assert/strict';
import test from 'node:test';
import { pushReference, moveReference } from '../../src/lib/reference/history.mjs';

test('reference navigation restores entries and their scroll positions within history bounds', () => {
  let state = { entries: [], index: -1 };
  assert.equal(moveReference(state, -1), state);
  state = pushReference(state, { url: '/ru/erm/tables/artifacts/', scroll: 420 });
  state = pushReference(state, { url: '/ru/erm/tables/objects/#id-5', scroll: 125 });
  state = moveReference(state, -1);
  assert.equal(state.entries[state.index].url, '/ru/erm/tables/artifacts/');
  assert.equal(state.entries[state.index].scroll, 420);
  assert.equal(moveReference(state, -1).index, 0);
  state = moveReference(state, 1);
  assert.equal(state.entries[state.index].scroll, 125);
  assert.equal(moveReference(state, 1).index, 1);
});

test('following a new reference after going back replaces the forward branch', () => {
  let state = { entries: [], index: -1 };
  for (const url of ['artifacts', 'objects', 'towns']) state = pushReference(state, { url });
  state = moveReference(state, -1);
  state = pushReference(state, { url: 'heroes' });
  assert.deepEqual(state.entries.map((e) => e.url), ['artifacts', 'objects', 'heroes']);
  assert.equal(pushReference(state, { url: 'heroes' }), state);
  assert.equal(moveReference(state, 1).index, 2);
});
