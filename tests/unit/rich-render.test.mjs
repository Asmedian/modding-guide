import assert from 'node:assert/strict';
import test from 'node:test';
import { renderReference } from '../../src/lib/reference/rich.mjs';

test('legacy alphabetical pre becomes a compact native disclosure', () => {
  const rendered = renderReference('<div class="erm-align-center erm-paragraph"><span>Алфавитный \nуказатель</span></div><pre><span class="erm-anchor" id="ref-cont-list-1"></span>Первый\nПоследний\n\n\n</pre>');
  assert.match(rendered, /<details class="erm-index-disclosure"><summary><span>Алфавитный \nуказатель<\/span><\/summary><pre>/);
  assert.doesNotMatch(rendered, /erm-index-disclosure" open/);
  assert.match(rendered, /Последний\n<\/pre><\/details>$/);
});

test('legacy DO disclosures render without spacer breaks between them', () => {
  const rendered = renderReference('<details class="erm-comment"><summary>Outer (<strong class="erm-toggle-label">show</strong>)</summary><div class="erm-comment-body"><span class="erm-anchor" id="ref-rec-do-7"></span><details class="erm-comment"><summary>Note (<strong class="erm-toggle-label">show</strong>)</summary><div class="erm-comment-body">A</div></details><br><br><u></u><span class="erm-anchor" id="ref-rec-do-2"></span><details class="erm-comment"><summary>Example 1 (<strong class="erm-toggle-label">show</strong>)</summary><div class="erm-comment-body">B</div></details><br><u></u><span class="erm-anchor" id="ref-rec-do-3"></span><details class="erm-comment"><summary>Example 2 (<strong class="erm-toggle-label">show</strong>)</summary><div class="erm-comment-body">C</div></details></div></details>');
  assert.doesNotMatch(rendered, /<\/details><br>\s*(?:<br>)?<u><\/u><span class="erm-anchor" id="ref-rec-do-[23]"/);
  assert.match(rendered, /<\/details>\n<span class="erm-anchor" id="ref-rec-do-2"/);
  assert.match(rendered, /<\/details>\n<span class="erm-anchor" id="ref-rec-do-3"/);
});
