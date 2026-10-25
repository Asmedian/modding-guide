import assert from 'node:assert/strict';
import { spawn } from 'node:child_process';
import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { chromium } from 'playwright-core';

const origin = 'http://127.0.0.1:4182';
const base = process.env.BASE_PATH ?? '';
const server = spawn(process.execPath, ['scripts/preview.mjs', '--port', '4182'], { windowsHide: true, stdio: 'ignore' });
let browser;
const report = { alphabets: [], rails: [], panels: [], wiki: [], screenshots: [] };
const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
try {
  for (let attempt = 0; attempt < 80; attempt++) {
    try { if ((await fetch(`${origin}${base}/`)).ok) break; } catch {}
    await wait(100);
  }
  browser = await chromium.launch({ executablePath: process.env.CHROMIUM_PATH ?? 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe', headless: true, args: ['--enable-features=MiddleClickAutoscroll'] });
  const context = await browser.newContext({ viewport: { width: 1600, height: 900 } });
  const page = await context.newPage();
  const errors = [];
  page.on('pageerror', (error) => errors.push(error.message));
  for (const lang of ['ru', 'en']) for (const height of [900, 600, 400]) {
    await page.setViewportSize({ width: 1600, height });
    await page.goto(`${origin}${base}/${lang}/erm/receivers/sn/`);
    await page.waitForSelector('.alphabet-scroll');
    await page.waitForSelector('.alphabet-rail .active');
    assert.equal(await page.locator('.alphabet-end-space').count(), 0, 'alphabet has no artificial spacer');
    assert.ok(await page.evaluate(() => [...document.querySelectorAll('.sidebar-scroll .nav-group[open]')].every((group) => group.scrollHeight <= group.clientHeight + 1)), 'sidebar groups never clip their links');
    await page.evaluate(() => document.querySelector('.alphabet-scroll').scrollTop = 1e7);
    await page.waitForFunction(() => document.querySelector('.alphabet-rail button.active')?.textContent === [...document.querySelectorAll('.alphabet-group')].at(-1)?.dataset.letter).catch(async (error) => {
      console.log(await page.evaluate(() => ({ lang: document.documentElement.lang, active: document.querySelector('.alphabet-rail .active')?.textContent, groups: [...document.querySelectorAll('.alphabet-group')].slice(-3).map((group) => [group.textContent, group.dataset.letter]) })));
      throw error;
    });
    const state = await page.evaluate(() => {
      const frame = document.querySelector('.alphabet-rail').getBoundingClientRect();
      const active = document.querySelector('.alphabet-rail button.active');
      const bounds = active.getBoundingClientRect();
      const scroll = document.querySelector('.alphabet-scroll');
      const last = document.querySelector('.alphabet-rail button:last-child').getBoundingClientRect();
      const trailingSpace = scroll.getBoundingClientRect().bottom - [...scroll.querySelectorAll('.alphabet-group')].at(-1).getBoundingClientRect().bottom;
      return { active: active.textContent, visible: bounds.top >= frame.top - 1 && bounds.bottom <= frame.bottom + 1, lastVisible: last.bottom <= frame.bottom + 1, trailingSpace, outerOverflow: document.querySelector('.site-grid').scrollHeight - document.querySelector('.site-grid').clientHeight, listOverflow: scroll.scrollHeight - scroll.clientHeight };
    });
    assert.equal(state.active, lang === 'ru' ? 'Я' : 'W');
    assert.ok(state.visible, 'last active letter is visible even in a short window');
    assert.ok(state.lastVisible, 'rail also reaches the final disabled letter');
    assert.ok(state.trailingSpace >= 0 && state.trailingSpace < 24, 'list ends with ordinary padding, without a blank tail');
    assert.equal(state.outerOverflow, 0, 'the center is not an ancestor scroller of the right panel');
    report.alphabets.push({ lang, height, ...state });
  }
  await page.setViewportSize({ width: 1600, height: 900 });
  for (const theme of ['dark', 'light']) {
    await page.evaluate((theme) => localStorage.setItem('modding-guide:preferences:v1', JSON.stringify({ theme })), theme);
    await page.goto(`${origin}${base}/ru/erm/receivers/sn/`);
    await page.waitForSelector('.alphabet-rail .active');
    await page.evaluate((theme) => { document.documentElement.dataset.theme = theme; document.querySelector('.erm-quick-links').open = true; }, theme);
    const state = await page.evaluate(() => {
      const rail = document.querySelector('.erm-page-rail');
      const scroll = document.querySelector('.erm-page-rail-scroll');
      const link = scroll.querySelector('a');
      const before = link.getBoundingClientRect().width;
      scroll.style.overflowY = 'hidden';
      const without = link.getBoundingClientRect().width;
      scroll.style.overflowY = '';
      return { before, without, outer: rail.getBoundingClientRect().width, scrollbar: getComputedStyle(scroll, '::-webkit-scrollbar').width, thumb: getComputedStyle(scroll, '::-webkit-scrollbar-thumb').backgroundColor };
    });
    assert.equal(state.before, state.without, 'scrollbar does not change letter space');
    assert.equal(state.scrollbar, '3px');
    report.rails.push({ theme, ...state });
    mkdirSync('reports/interface', { recursive: true });
    const screenshot = `reports/interface/erm-${theme}.png`;
    await page.screenshot({ path: screenshot }); report.screenshots.push(screenshot);
  }
  for (const zoom of [.8, 1, 1.25, 1.5]) {
    await page.goto(`${origin}${base}/ru/erm/receivers/ma/`);
    await page.evaluate((zoom) => document.documentElement.style.zoom = String(zoom), zoom);
    const link = page.locator('.content-column .article-body a[href*="tables/creatures/"]').first();
    await link.click();
    await page.waitForSelector('.reference-body table');
    const pane = page.locator('.reference-scroll');
    const box = await pane.boundingBox();
    assert.ok(box);
    const states = [];
    for (const ratio of [.08, .5, .92]) {
      await page.evaluate(() => { document.querySelector('.reference-scroll').scrollTop = 0; document.querySelector('.content-column').scrollTop = 0; });
      await page.mouse.move(box.x + box.width * ratio, box.y + box.height * .5);
      await page.mouse.wheel(0, 400);
      await wait(150);
      const state = await page.evaluate(() => ({ center: document.querySelector('.content-column').scrollTop, panel: document.querySelector('.reference-scroll').scrollTop }));
      assert.equal(state.center, 0, `zoom ${zoom}: panel wheel never moves center`);
      assert.ok(state.panel > 0, `zoom ${zoom}: panel moves across its full width`);
      states.push({ ratio, ...state });
    }
    const bounds = await pane.boundingBox();
    const middle = [];
    for (const ratio of [.08, .5, .92]) {
      await page.evaluate(() => { document.querySelector('.reference-scroll').scrollTop = 0; });
      await page.mouse.click(bounds.x + bounds.width * ratio, bounds.y + bounds.height * .4, { button: 'middle' });
      await page.mouse.move(bounds.x + bounds.width * ratio, bounds.y + bounds.height * .7);
      await wait(250);
      const state = await page.evaluate(() => ({ center: document.querySelector('.content-column').scrollTop, panel: document.querySelector('.reference-scroll').scrollTop }));
      await page.keyboard.press('Escape');
      assert.equal(state.center, 0, 'middle click in panel never moves center');
      assert.ok(state.panel > 0, 'middle click actually scrolls the reference at every tested horizontal position');
      middle.push({ ratio, ...state });
    }
    report.panels.push({ zoom, wheel: states, middle });
  }
  await page.evaluate(() => document.documentElement.style.zoom = '1');
  const pages = JSON.parse(readFileSync('content/wiki/_registry/pages.json', 'utf8')).filter((item) => item.outline?.length > 1).slice(0, 2);
  assert.equal(pages.length, 2);
  await page.goto(`${origin}${base}/ru/wiki/${pages[0].slug}/`);
  await page.locator('.wiki-outline summary').click();
  await page.waitForFunction(() => localStorage.getItem('modding-guide:wiki-outline:v1') === 'closed');
  await page.goto(`${origin}${base}/en/wiki/${pages[1].slug}/`);
  await page.waitForFunction(() => !document.querySelector('.wiki-outline').open);
  await page.locator('.wiki-outline summary').click();
  await page.waitForFunction(() => localStorage.getItem('modding-guide:wiki-outline:v1') === 'open');
  await page.reload();
  await page.waitForFunction(() => document.querySelector('.wiki-outline').open);
  report.wiki.push('collapse persists across pages and locales; expansion persists after reload');
  for (const theme of ['dark', 'light']) {
    await page.evaluate((theme) => document.documentElement.dataset.theme = theme, theme);
    await page.screenshot({ path: `reports/interface/wiki-${theme}.png` });
  }
  for (const lang of ['ru', 'en']) {
    await page.goto(`${origin}${base}/${lang}/erm/learn/`);
    assert.equal(await page.locator('.learn-example').count(), 4);
    for (const link of await page.locator('.article-body a[href*="docs/llm-map/"]').all()) assert.ok((await link.getAttribute('href')).includes('/en/docs/llm-map/'));
    assert.doesNotMatch(await page.locator('.learn-examples').innerText(), /небольшое упражнение|small exercise/);
    await page.locator('.learn-example summary').first().click();
    assert.ok(await page.locator('.learn-example[open]').count());
    await page.goto(`${origin}${base}/${lang}/docs/llm-map/`);
    assert.equal(await page.locator('.llm-entry').count(), 0);
  }
  for (const theme of ['dark', 'light']) {
    await page.evaluate((theme) => localStorage.setItem('modding-guide:preferences:v1', JSON.stringify({ theme })), theme);
    await page.goto(`${origin}${base}/ru/wiki/sprite/2/0/`);
    await page.waitForFunction((theme) => document.documentElement.dataset.theme === theme, theme);
    const cell = page.locator('.wiki-spell-surface').first();
    const color = await cell.evaluate((element) => getComputedStyle(element).backgroundColor);
    if (theme === 'light') {
      assert.equal(color, 'rgba(0, 0, 0, 0)');
      await cell.screenshot({ path: 'reports/interface/wiki-spell-light.png' });
    }
    report.wiki.push(`${theme} spell background: ${color}`);
  }
  await page.setViewportSize({ width: 390, height: 700 });
  await page.goto(`${origin}${base}/ru/erm/learn/`);
  const main = page.locator('.content-column');
  await main.evaluate((element) => element.scrollTop = element.scrollHeight);
  assert.ok(await main.evaluate((element) => element.scrollTop > 0));
  assert.equal(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth), true, 'mobile has no page overflow');
  await page.getByRole('button', { name: 'Открыть меню', exact: true }).click();
  await page.waitForSelector('.sidebar.open');
  assert.deepEqual(errors, []);
  writeFileSync('reports/interface-validation.json', `${JSON.stringify(report, null, 2)}\n`);
  console.log('Interface checks passed: RU/EN end letters, both themes, stable 3px rail, panel isolation at 80–150%, Wiki persistence, learning prompts and mobile.');
} finally {
  await browser?.close();
  server.kill();
}
