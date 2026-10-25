import assert from 'node:assert/strict';
import { spawn } from 'node:child_process';
import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { chromium } from 'playwright-core';

const origin = 'http://127.0.0.1:4184';
const base = process.env.BASE_PATH ?? '';
const pages = JSON.parse(readFileSync('content/wiki/_registry/pages.json', 'utf8'));
function example(kind) {
  for (const page of pages) {
    const resource = page.sections.flatMap((section) => section.resources).find((item) => item.kind === kind &&
      (kind !== 'def' || item.bytes < 50000) && (kind !== 'audio' || item.duration >= 3));
    if (resource) return { slug: page.slug, resource };
  }
  throw new Error(`Missing ${kind} example`);
}
const server = spawn(process.execPath, ['scripts/preview.mjs', '--port', '4184'], { windowsHide: true, stdio: 'ignore' });
let browser;
const report = [];
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
try {
  for (let attempt = 0; attempt < 80; attempt++) {
    try { if ((await fetch(`${origin}${base}/`)).ok) break; } catch {}
    await delay(100);
  }
  browser = await chromium.launch({ executablePath: process.env.CHROMIUM_PATH ?? 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe', headless: true, args: ['--mute-audio'] });
  const context = await browser.newContext({ viewport: { width: 1600, height: 900 } });
  const page = await context.newPage();
  const errors = [];
  page.on('pageerror', (error) => errors.push(error.message));
  mkdirSync('reports/wiki-interactions', { recursive: true });
  for (const theme of ['dark', 'light']) {
    await context.addInitScript((theme) => localStorage.setItem('modding-guide:preferences:v1', JSON.stringify({ theme })), theme);
    for (const kind of ['pcx', 'def', 'pal', 'fnt', 'h3c', 'audio', 'video']) {
      const { slug, resource } = example(kind);
      await page.goto(`${origin}${base}/${theme === 'dark' ? 'ru' : 'en'}/wiki/${slug}/`, { waitUntil: 'networkidle' });
      const cell = page.locator(`#${resource.anchor} .wiki-resource`);
      await cell.scrollIntoViewIfNeeded();
      await page.mouse.move(5, 5);
      assert.equal(await cell.evaluate((node) => getComputedStyle(node).cursor), 'pointer');
      const preview = cell.locator('.wiki-preview');
      const hasPreview = await preview.count();
      const background = await cell.evaluate((node) => getComputedStyle(node).backgroundColor);
      let border;
      if (hasPreview) border = await preview.evaluate((node) => getComputedStyle(node).borderTopColor);
      await cell.hover({ position: { x: 4, y: 4 } });
      assert.equal(await cell.evaluate((node) => getComputedStyle(node).backgroundColor), background, 'hover does not paint the cell');
      if (hasPreview) assert.notEqual(await preview.evaluate((node) => getComputedStyle(node).borderTopColor), border, 'blank-cell hover highlights only the preview');
      if (kind === 'pcx') await cell.screenshot({ path: `reports/wiki-interactions/cell-${theme}.png` });
      await cell.click({ position: { x: 4, y: 4 } });
      if (kind === 'audio' || kind === 'video') {
        const media = kind === 'audio' ? 'audio' : 'video';
        await page.waitForFunction((selector) => {
          const element = document.querySelector(selector);
          return element && !element.paused;
        }, media);
        if (kind === 'video') {
          await cell.locator('video').click();
          await page.waitForFunction(() => document.querySelector('video').paused);
          await cell.locator('.wiki-play').click();
          await page.waitForFunction(() => !document.querySelector('video').paused);
        }
        const seek = cell.locator('input[type="range"]').first();
        await seek.hover();
        assert.equal(await seek.evaluate((node) => getComputedStyle(node).cursor), 'pointer');
        assert.notEqual(await seek.evaluate((node) => getComputedStyle(node).boxShadow), 'none');
        await seek.click();
        assert.ok(await page.evaluate((selector) => !document.querySelector(selector).paused, media), 'seeking does not toggle playback');
        await cell.locator('.wiki-player button').nth(1).click();
        await page.waitForFunction((selector) => document.querySelector(selector).paused && document.querySelector(selector).currentTime === 0, media);
      } else {
        const dialog = page.locator('.wiki-dialog[open]');
        await dialog.waitFor();
        assert.equal(await dialog.count(), 1, 'cell delegates to one popup');
        if (kind === 'def') {
          const play = dialog.locator('.wiki-def-play');
          await play.waitFor();
          const size = await play.boundingBox();
          assert.equal(size.width, 60); assert.equal(size.height, 30);
          assert.equal(await play.evaluate((node) => getComputedStyle(node).cursor), 'pointer');
          const input = dialog.locator('.wiki-def-controls input');
          assert.equal(await input.evaluate((node) => getComputedStyle(node).textAlign), 'center');
          await input.fill('150'); await input.press('Tab');
          assert.equal(await input.inputValue(), '150');
          for (const selector of ['.wiki-def-groups button', '.wiki-frame-grid button']) {
            const button = dialog.locator(selector).first();
            await page.evaluate(() => { if (document.activeElement instanceof HTMLElement) document.activeElement.blur(); });
            await page.mouse.move(5, 5);
            const before = await button.evaluate((node) => getComputedStyle(node).backgroundColor);
            await button.hover();
            assert.equal(await button.evaluate((node) => getComputedStyle(node).cursor), 'pointer');
            assert.notEqual(await button.evaluate((node) => getComputedStyle(node).backgroundColor), before, `${theme} ${selector}: hover changes the surface`);
          }
          await play.scrollIntoViewIfNeeded();
          await page.screenshot({ path: `reports/wiki-interactions/popup-${theme}.png` });
        }
        if (kind === 'pal') {
          const swatch = dialog.locator('.wiki-palette-grid button').nth(1);
          const color = await swatch.evaluate((node) => getComputedStyle(node).backgroundColor);
          await swatch.hover();
          assert.equal(await swatch.evaluate((node) => getComputedStyle(node).cursor), 'crosshair');
          assert.equal(await swatch.evaluate((node) => getComputedStyle(node).backgroundColor), color, 'palette hover preserves source color');
          assert.notEqual(await swatch.evaluate((node) => getComputedStyle(node).boxShadow), 'none');
        }
        if (kind === 'h3c') {
          const summary = dialog.locator('summary').first();
          await summary.hover();
          assert.equal(await summary.evaluate((node) => getComputedStyle(node).cursor), 'pointer');
          assert.ok((await summary.evaluate((node) => getComputedStyle(node).textDecorationLine)).includes('underline'));
        }
        await page.keyboard.press('Escape');
        await dialog.waitFor({ state: 'detached' });
        assert.ok(await preview.evaluate((node) => document.activeElement === node), 'focus returns to the native preview button');
        await preview.click();
        await page.locator('.wiki-dialog[open]').waitFor();
        assert.equal(await page.locator('.wiki-dialog[open]').count(), 1, 'direct preview click is not duplicated');
        await page.keyboard.press('Escape');
        await page.locator('.wiki-dialog').waitFor({ state: 'detached' });
        if (kind === 'pcx') {
          await preview.focus(); await page.keyboard.press('Space');
          await page.locator('.wiki-dialog[open]').waitFor();
          await page.keyboard.press('Escape');
          await page.locator('.wiki-dialog').waitFor({ state: 'detached' });
        }
      }
      report.push({ theme, kind, filename: resource.name, passed: true });
      console.log(`${theme} ${kind}: cell hover/click and native controls passed`);
    }
  }
  assert.deepEqual(errors, []);
  writeFileSync('reports/wiki-interactions.json', `${JSON.stringify(report, null, 2)}\n`);
  console.log('Wiki interaction checks passed for seven resource types in both themes.');
} finally {
  await browser?.close(); server.kill();
}
