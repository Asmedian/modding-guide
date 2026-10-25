import assert from 'node:assert/strict';
import { spawn } from 'node:child_process';
import { mkdirSync, writeFileSync } from 'node:fs';
import { chromium } from 'playwright-core';

const origin = 'http://127.0.0.1:4185';
const base = process.env.BASE_PATH ?? '';
const server = spawn(process.execPath, ['scripts/preview.mjs', '--port', '4185'], { windowsHide: true, stdio: 'ignore' });
const report = [];
let browser;
try {
  for (let attempt = 0; attempt < 80; attempt++) {
    try { if ((await fetch(`${origin}${base}/`)).ok) break; } catch {}
    await new Promise((resolve) => setTimeout(resolve, 100));
  }
  browser = await chromium.launch({ executablePath: process.env.CHROMIUM_PATH ?? 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe', headless: true });
  const context = await browser.newContext({ viewport: { width: 1440, height: 900 } });
  await context.addInitScript(() => localStorage.setItem('modding-guide:erm-quick-links:v1', JSON.stringify({ expanded: true })));
  const page = await context.newPage();
  const errors = [];
  page.on('pageerror', (error) => errors.push(error.message));
  const measure = () => page.locator('.content-column').evaluate((main) => ({ client: main.clientWidth, scroll: main.scrollWidth }));
  async function fits(label) {
    const result = await measure();
    assert.ok(result.scroll <= result.client + 1, `${label}: column overflow ${JSON.stringify(result)}`);
    return result;
  }
  async function tipFits(anchor) {
    const bounds = await anchor.evaluate((link) => {
      const style = getComputedStyle(link, '::after');
      const panel = link.closest('.erm-quick-links');
      const frame = panel.getBoundingClientRect(), rect = link.getBoundingClientRect();
      const scale = frame.width / panel.offsetWidth || 1;
      const width = parseFloat(style.width) * scale;
      const center = (rect.left + rect.right) / 2 + parseFloat(link.style.getPropertyValue('--tooltip-shift') || '0') * scale;
      return { shown: style.display !== 'none', left: center - width / 2, right: center + width / 2, frameLeft: frame.left, frameRight: frame.right };
    });
    assert.equal(bounds.shown, page.viewportSize().width > 600, 'custom hints must be visible on desktop and disabled at phone widths');
    if (bounds.shown) assert.ok(bounds.left >= bounds.frameLeft - 1 && bounds.right <= bounds.frameRight + 1, `Tooltip escaped column: ${JSON.stringify(bounds)}`);
  }
  for (const lang of ['ru', 'en']) for (const width of [1920, 1440, 1280, 1201, 1024, 600, 390]) {
    await page.setViewportSize({ width, height: 900 });
    for (const slug of ['', 'learn/', 'receivers/sn/', 'tables/objects/', 'tables/creatures/', 'framework/functions/']) {
      await page.goto(`${origin}${base}/${lang}/erm/${slug}`, { waitUntil: 'networkidle' });
      await page.waitForSelector('.erm-quick-links');
      const initial = await fits(`${lang}/${slug} width ${width}`);
      if (!slug) {
        const links = page.locator('.erm-quick-links a');
        const count = await links.count();
        const indexes = width === 1440 ? [...Array(count).keys()] : [...new Set([0, 1, 27, 28, 50, 75, count - 2, count - 1])].filter((index) => index < count);
        for (const index of indexes) {
          const link = links.nth(index);
          await link.hover();
          await fits(`${lang} ${width}: hover ${index}`);
          await tipFits(link);
        }
        await links.first().focus(); await page.keyboard.press('Tab');
        await fits(`${lang} ${width}: keyboard tooltip`);
        await tipFits(page.locator('.erm-quick-links a:focus-visible'));
        await page.setViewportSize({ width: width - 37, height: 900 });
        await fits(`${lang} ${width}: resize with tooltip`);
        await tipFits(page.locator('.erm-quick-links a:focus-visible'));
        await page.setViewportSize({ width, height: 900 });
      }
      const localScroll = await page.locator('.content-column').evaluate((main) => {
        const node = [...main.querySelectorAll('.table-wrap, .code-frame > pre')].find((element) => element.scrollWidth > element.clientWidth + 2);
        if (!node) return false;
        node.scrollLeft = node.scrollWidth;
        return node.scrollLeft > 0;
      });
      report.push({ lang, width, slug, ...initial, localScroll });
    }
    console.log(`${lang} ${width}px: six ERM pages and tooltip hover/focus fit the center column`);
  }
  const noJs = await browser.newContext({ javaScriptEnabled: false, viewport: { width: 1440, height: 900 } });
  const fallback = await noJs.newPage();
  await fallback.goto(`${origin}${base}/ru/erm/`);
  const link = fallback.locator('.erm-quick-links a').last();
  assert.ok(await link.getAttribute('title'), 'native tooltip remains available without JavaScript');
  await link.hover();
  assert.ok(await fallback.locator('.content-column').evaluate((node) => node.scrollWidth <= node.clientWidth + 1));
  assert.ok(report.some((entry) => entry.localScroll), 'wide code/tables keep their own usable horizontal scrolling');
  assert.deepEqual(errors, []);
  mkdirSync('reports', { recursive: true });
  writeFileSync('reports/erm-overflow.json', `${JSON.stringify(report, null, 2)}\n`);
  console.log('ERM overflow checks passed, including native no-JavaScript hints and local table/code scrolling.');
} finally {
  await browser?.close(); server.kill();
}
