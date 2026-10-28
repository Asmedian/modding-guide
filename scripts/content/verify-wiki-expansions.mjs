import assert from 'node:assert/strict';
import { spawn } from 'node:child_process';
import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { chromium } from 'playwright-core';

const origin = 'http://127.0.0.1:4186';
const base = process.env.BASE_PATH ?? '';
const pages = JSON.parse(readFileSync('content/wiki/_registry/pages.json', 'utf8'));
const server = spawn(process.execPath, ['scripts/preview.mjs', '--port', '4186'], { windowsHide: true, stdio: 'ignore' });
const delay = ms => new Promise(resolve => setTimeout(resolve, ms));
const report = [];
let browser;
function example(edition, kind) {
  for (const catalogPage of pages) {
    const resource = catalogPage.sections.flatMap(s => s.resources).find(r => r.edition === edition && r.kind === kind &&
      (kind !== 'def' || (r.mask && r.bytes < 50000)) && (kind !== 'audio' || r.duration > 1));
    if (resource) return { catalogPage, resource };
  }
  throw new Error(`No ${edition} ${kind}`);
}
try {
  for (let attempt = 0; attempt < 80; attempt++) {
    try { if ((await fetch(origin + base + '/')).ok) break; } catch {}
    await delay(100);
  }
  browser = await chromium.launch({ executablePath: process.env.CHROMIUM_PATH ?? 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe', headless: true, args: ['--mute-audio'] });
  mkdirSync('reports/wiki-expansions', { recursive: true });
  for (const [lang, theme] of [['ru', 'dark'], ['en', 'light']]) {
    const context = await browser.newContext({ viewport: { width: 1600, height: 900 } });
    await context.addInitScript(theme => localStorage.setItem('modding-guide:preferences:v1', JSON.stringify({ theme })), theme);
    const page = await context.newPage();
    const errors = [];
    page.on('pageerror', error => errors.push(error.message));
    await page.goto(`${origin}${base}/${lang}/wiki/bitmap/3/1/`, { waitUntil: 'networkidle' });
    assert.deepEqual(await page.locator('.topnav a').evaluateAll(links => links.map(link => link.getAttribute('href').split('/').filter(Boolean).at(-1))), ['docs', 'erm', 'plugins', 'wiki']);
    assert.deepEqual(await page.locator('[data-group="wiki-0-3"] li a').evaluateAll(links => links.map(link => link.getAttribute('href'))), [0, 1, 2].map(i => `${base}/${lang}/wiki/bitmap/3/${i}/`));
    assert.equal(await page.locator('[data-group="wiki-0-3"] .wiki-nav-edition').count(), 0);
    assert.equal(await page.locator('.wiki-outline a').count(), 7);
    assert.equal(await page.locator('.wiki-section').count(), 7);
    assert.equal(await page.locator('.wiki-resource-info .wiki-filename').count(), 7);
    for (const slug of ['bitmap/3/0', 'bitmap/3/1', 'bitmap/3/2']) {
      await page.goto(`${origin}${base}/${lang}/wiki/${slug}/`, { waitUntil: 'networkidle' });
      assert.equal(await page.locator('article .wiki-edition').count(), 0);
    }
    const wogLinks = page.locator('.sidebar .wiki-nav-direct').filter({ has: page.locator('.wiki-nav-edition', { hasText: 'WoG' }) });
    assert.equal(await wogLinks.count(), 5);
    for (const [edition, kind] of [['AB', 'h3c'], ['AB', 'pcx'], ['WoG', 'pcx'], ['WoG', 'def'], ['WoG', 'fnt'], ['WoG', 'audio'], ['WoG', 'video']]) {
      const { catalogPage, resource } = example(edition, kind);
      await page.goto(`${origin}${base}/${lang}/wiki/${catalogPage.slug}/`, { waitUntil: 'networkidle' });
      if(catalogPage.showEdition===false)assert.equal(await page.locator('h1 .wiki-edition').count(),0);
      else assert.equal(await page.locator('h1 .wiki-edition').textContent(), edition);
      const row = page.locator(`#${resource.anchor}`);
      await row.scrollIntoViewIfNeeded();
      if(kind==='h3c')assert.equal(await row.locator('.wiki-edition').count(),0);
      else {
        assert.equal(await row.locator('.wiki-resource-info > .wiki-edition').textContent(), edition);
        assert.equal(await row.locator('.wiki-resource-info > .wiki-edition').evaluate(node => getComputedStyle(node).position), 'static');
      }
      if(edition==='AB'&&kind==='pcx')assert.equal(catalogPage.rootSlug,'bitmap/0/1');
      await row.locator('.wiki-resource .wiki-preview, .wiki-resource .wiki-play').first().click();
      if (kind === 'audio' || kind === 'video') {
        await page.waitForFunction(kind => {
          const element = document.querySelector(kind);
          return element && !element.paused && element.readyState >= 2;
        }, kind === 'audio' ? 'audio' : 'video');
        assert.equal(await page.locator('.wiki-error').count(), 0);
      } else {
        const dialog = page.locator('.wiki-dialog[open]');
        await dialog.waitFor();
        if(kind==='h3c')assert.equal(await dialog.locator('.wiki-edition').count(),0);
        else assert.equal(await dialog.locator('header .wiki-edition').textContent(), edition);
        if (kind === 'h3c') {
          await dialog.locator('.wiki-scenario-card').first().waitFor();
          assert.equal(await dialog.locator('.wiki-scenario-card').count(), resource.campaign.scenarioCount);
          await dialog.locator('.wiki-scenario-actions button').first().click();
          await dialog.locator('.wiki-campaign-map').waitFor();
          assert.ok(await dialog.locator('.wiki-campaign-map').evaluate(img => img.complete && img.naturalWidth > 0));
        } else if (kind === 'def') {
          await dialog.locator('.wiki-def-controls').waitFor();
          await dialog.locator('.wiki-mask-toggle').click();
          assert.ok(await dialog.locator('.wiki-object-mask img').isVisible());
        } else {
          assert.ok(await dialog.locator('.wiki-popup-image img').evaluate(img => img.complete && img.naturalWidth > 0));
        }
        assert.equal(await dialog.locator('[role="alert"]').count(), 0);
        await page.screenshot({ path: `reports/wiki-expansions/${lang}-${edition}-${kind}.png` });
        await page.keyboard.press('Escape');
      }
      report.push({ lang, theme, edition, kind, slug: catalogPage.slug });
    }
    await page.goto(`${origin}${base}/${lang}/wiki/wog/defs/page-7/`, { waitUntil: 'networkidle' });
    assert.equal(await page.locator('tbody tr').count(), 41);
    assert.ok(await page.locator('a[href$="/wiki/wog/defs/page-6/"]').count());
    await page.setViewportSize({ width: 390, height: 844 });
    assert.ok(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth));
    assert.deepEqual(errors, []);
    await context.close();
  }
  const nojs = await browser.newContext({ javaScriptEnabled: false });
  const page = await nojs.newPage();
  await page.goto(`${origin}${base}/en/wiki/`);
  for (const i of [0,1,2])assert.equal(await page.locator(`.wiki-card-link[href$="/wiki/bitmap/3/${i}/"] .wiki-edition`).count(),0);
  assert.equal(await page.locator('.wiki-card h2 .wiki-edition', { hasText: 'WoG' }).count(), 5);
  await nojs.close();
  writeFileSync('reports/wiki-expansions/results.json', JSON.stringify({ checks: report, errors: [] }, null, 2) + '\n');
  console.log(`Verified ${report.length} AB/WoG resource views, menus, pagination, mobile layout and no-JavaScript catalog.`);
} finally {
  await browser?.close();
  server.kill();
}
