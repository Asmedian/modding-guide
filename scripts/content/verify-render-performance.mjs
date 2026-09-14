import assert from 'node:assert/strict';
import { spawn } from 'node:child_process';
import { createServer } from 'node:http';
import { existsSync, mkdirSync, writeFileSync } from 'node:fs';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { chromium } from 'playwright-core';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '../..');
const base = (process.env.BASE_PATH ?? '').replace(/\/$/, '');
const pagePath = process.env.RENDER_PERF_PATH ?? '/ru/erm/framework/functions/';
const preferenceKey = 'modding-guide:preferences:v1';

function positiveNumber(name, fallback) {
  const value = Number(process.env[name] ?? fallback);
  assert.ok(Number.isFinite(value) && value > 0, `${name} must be a positive number`);
  return value;
}

const settings = {
  durationMs: positiveNumber('RENDER_PERF_DURATION_MS', 6000),
  runsPerTheme: positiveNumber('RENDER_PERF_RUNS', 2),
  viewport: { width: 1440, height: 900 },
  budgets: {
    maxDroppedFrameRatio: positiveNumber('RENDER_PERF_MAX_DROPPED_RATIO', 0.1),
    maxRasterTimeMsPerSecond: positiveNumber('RENDER_PERF_MAX_RASTER_MS_PER_SECOND', 1200),
    maxLightToDarkRasterRatio: positiveNumber('RENDER_PERF_MAX_THEME_RASTER_RATIO', 2),
    maxLightToDarkRasterDeltaMs: positiveNumber('RENDER_PERF_MAX_THEME_RASTER_DELTA_MS', 120)
  }
};
assert.ok(Number.isInteger(settings.runsPerTheme), 'RENDER_PERF_RUNS must be a positive integer');

function chromiumPath() {
  const candidates = [
    process.env.CHROMIUM_PATH,
    process.env.CHROME_PATH,
    process.platform === 'win32' && 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
    process.platform === 'win32' && 'C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe',
    process.platform === 'win32' && 'C:\\Program Files\\Chromium\\Application\\chrome.exe',
    process.platform === 'win32' && 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe',
    process.platform === 'darwin' && '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
    process.platform === 'darwin' && '/Applications/Chromium.app/Contents/MacOS/Chromium',
    process.platform === 'linux' && '/usr/bin/google-chrome',
    process.platform === 'linux' && '/usr/bin/google-chrome-stable',
    process.platform === 'linux' && '/usr/bin/chromium',
    process.platform === 'linux' && '/usr/bin/chromium-browser',
    chromium.executablePath()
  ].filter(Boolean);
  const executable = candidates.find((candidate) => existsSync(candidate));
  assert.ok(executable, 'Chromium was not found. Set CHROMIUM_PATH to a Chrome, Chromium, or Edge executable.');
  return executable;
}

async function freePort() {
  return await new Promise((resolvePort, reject) => {
    const server = createServer();
    server.once('error', reject);
    server.listen(0, '127.0.0.1', () => {
      const address = server.address();
      server.close((error) => error ? reject(error) : resolvePort(address.port));
    });
  });
}

const delay = (milliseconds) => new Promise((resolveDelay) => setTimeout(resolveDelay, milliseconds));

async function startPreview(port) {
  const child = spawn(process.execPath, ['scripts/preview.mjs', '--host', '127.0.0.1', '--port', String(port)], {
    cwd: root,
    env: process.env,
    stdio: ['ignore', 'pipe', 'pipe'],
    windowsHide: true
  });
  let output = '';
  child.stdout.on('data', (chunk) => { output += chunk; });
  child.stderr.on('data', (chunk) => { output += chunk; });
  const origin = `http://127.0.0.1:${port}`;
  const deadline = Date.now() + 15_000;
  while (Date.now() < deadline) {
    if (child.exitCode !== null) throw new Error(`Preview exited early.\n${output}`);
    try {
      const response = await fetch(`${origin}${base}/`);
      if (response.ok) return { child, origin };
    } catch {}
    await delay(150);
  }
  child.kill();
  throw new Error(`Preview did not become ready.\n${output}`);
}

async function readTrace(session, stream) {
  let trace = '';
  let eof = false;
  while (!eof) {
    const chunk = await session.send('IO.read', { handle: stream });
    trace += chunk.data;
    eof = chunk.eof;
  }
  await session.send('IO.close', { handle: stream });
  return JSON.parse(trace).traceEvents;
}

function median(values) {
  const ordered = [...values].sort((a, b) => a - b);
  const middle = Math.floor(ordered.length / 2);
  return ordered.length % 2 ? ordered[middle] : (ordered[middle - 1] + ordered[middle]) / 2;
}

function frameMetrics(frameTimes, refreshIntervalMs) {
  const intervals = frameTimes.slice(1).map((time, index) => time - frameTimes[index]);
  const droppedFrames = intervals.reduce((sum, interval) => {
    if (interval < refreshIntervalMs * 1.5) return sum;
    return sum + Math.max(1, Math.round(interval / refreshIntervalMs) - 1);
  }, 0);
  const renderedFrames = intervals.length;
  return {
    renderedFrames,
    droppedFrames,
    droppedFrameRatio: droppedFrames / Math.max(1, renderedFrames + droppedFrames),
    longestFrameMs: Math.max(...intervals),
    p95FrameMs: [...intervals].sort((a, b) => a - b)[Math.floor(intervals.length * 0.95)]
  };
}

function traceMetrics(events) {
  const completeEvents = events.filter((event) => event.ph === 'X' && Number.isFinite(event.dur));
  const rasterTasks = completeEvents.filter((event) => event.name === 'RasterTask');
  const droppedFrameEvents = events.filter((event) => /^(?:DroppedFrame|MissedFrame)$/.test(event.name));
  return {
    rasterTaskCount: rasterTasks.length,
    rasterTimeMs: rasterTasks.reduce((sum, event) => sum + event.dur, 0) / 1000,
    traceDroppedFrameEvents: droppedFrameEvents.length,
    drawFrameEvents: events.filter((event) => event.name === 'DrawFrame').length
  };
}

async function preparePage(browser, url, theme) {
  const context = await browser.newContext({ viewport: settings.viewport, deviceScaleFactor: 1 });
  await context.addInitScript(({ key, selectedTheme }) => {
    localStorage.setItem(key, JSON.stringify({ theme: selectedTheme, language: 'ru' }));
  }, { key: preferenceKey, selectedTheme: theme });
  const page = await context.newPage();
  await page.goto(url, { waitUntil: 'networkidle' });
  await page.waitForSelector('.site-grid');
  await page.addStyleTag({ content: '*,*::before,*::after{animation:none!important;transition:none!important;scroll-behavior:auto!important}' });
  const state = await page.evaluate(async (selectedTheme) => {
    if (document.fonts) await document.fonts.ready;
    await Promise.all([...document.images].map((image) => image.complete ? Promise.resolve() : image.decode().catch(() => {})));
    const scroller = document.querySelector('.site-grid');
    if (!(scroller instanceof HTMLElement)) throw new Error('Missing .site-grid scroll container');
    const gradients = [];
    for (const element of document.querySelectorAll('*')) {
      for (const pseudo of [null, '::before', '::after']) {
        const background = getComputedStyle(element, pseudo).backgroundImage;
        if (background.includes('gradient(')) gradients.push(`${element.tagName.toLowerCase()}${pseudo ?? ''}: ${background}`);
      }
    }
    return {
      selectedTheme,
      appliedTheme: document.documentElement.dataset.theme,
      maxScrollTop: scroller.scrollHeight - scroller.clientHeight,
      gradients: gradients.slice(0, 10)
    };
  }, theme);
  assert.equal(state.appliedTheme, theme, `Expected ${theme} theme before tracing`);
  assert.deepEqual(state.gradients, [], `${theme} theme still paints CSS gradients`);
  assert.ok(state.maxScrollTop > settings.viewport.height * 4, `${pagePath} is not long enough for the scroll benchmark`);
  return { context, page, state };
}

async function refreshInterval(page) {
  return await page.evaluate(() => new Promise((resolveInterval) => {
    const times = [];
    const sample = (time) => {
      times.push(time);
      if (times.length < 31) requestAnimationFrame(sample);
      else {
        const intervals = times.slice(1).map((value, index) => value - times[index]).sort((a, b) => a - b);
        resolveInterval(intervals[Math.floor(intervals.length / 2)]);
      }
    };
    requestAnimationFrame(sample);
  }));
}

async function measureScroll(browser, url, theme, targetScrollTop) {
  const { context, page, state } = await preparePage(browser, url, theme);
  const session = await context.newCDPSession(page);
  try {
    assert.ok(state.maxScrollTop >= targetScrollTop);
    const refreshIntervalMs = await refreshInterval(page);
    const traceFinished = new Promise((resolveTrace) => session.once('Tracing.tracingComplete', resolveTrace));
    await session.send('Tracing.start', {
      categories: 'devtools.timeline,disabled-by-default-devtools.timeline,cc,gpu',
      options: 'record-as-much-as-possible',
      transferMode: 'ReturnAsStream'
    });
    const scroll = await page.evaluate(({ durationMs, target }) => new Promise((resolveScroll) => {
      const scroller = document.querySelector('.site-grid');
      if (!(scroller instanceof HTMLElement)) throw new Error('Missing .site-grid scroll container');
      scroller.scrollTop = 0;
      const frameTimes = [];
      requestAnimationFrame((startedAt) => {
        frameTimes.push(startedAt);
        const step = (time) => {
          const elapsed = Math.min(durationMs, time - startedAt);
          scroller.scrollTop = Math.round(target * (elapsed / durationMs));
          frameTimes.push(time);
          if (elapsed < durationMs) requestAnimationFrame(step);
          else requestAnimationFrame((finalTime) => {
            frameTimes.push(finalTime);
            resolveScroll({ frameTimes, finalScrollTop: scroller.scrollTop });
          });
        };
        requestAnimationFrame(step);
      });
    }), { durationMs: settings.durationMs, target: targetScrollTop });
    await session.send('Tracing.end');
    const { stream } = await traceFinished;
    const events = await readTrace(session, stream);
    assert.ok(Math.abs(scroll.finalScrollTop - targetScrollTop) <= 1, `${theme} scroll stopped at ${scroll.finalScrollTop}, expected ${targetScrollTop}`);
    return {
      theme,
      scrollDistancePx: targetScrollTop,
      refreshIntervalMs,
      ...frameMetrics(scroll.frameTimes, refreshIntervalMs),
      ...traceMetrics(events)
    };
  } finally {
    await session.detach().catch(() => {});
    await context.close();
  }
}

function aggregate(runs) {
  const numericKeys = Object.keys(runs[0]).filter((key) => typeof runs[0][key] === 'number');
  return Object.fromEntries(numericKeys.map((key) => [key, median(runs.map((run) => run[key]))]));
}

assert.ok(existsSync(join(root, 'build', 'ru', 'erm', 'framework', 'functions', 'index.html')), 'Missing production page. Run npm run build first.');
const executablePath = chromiumPath();
const port = await freePort();
const preview = await startPreview(port);
let browser;
try {
  browser = await chromium.launch({
    executablePath,
    headless: process.env.RENDER_PERF_HEADLESS !== '0',
    chromiumSandbox: false,
    args: [
      '--disable-background-timer-throttling',
      '--disable-backgrounding-occluded-windows',
      '--disable-renderer-backgrounding',
      '--enable-gpu-rasterization'
    ]
  });
} catch (error) {
  preview.child.kill();
  throw error;
}

try {
  const route = `${base}${pagePath.startsWith('/') ? pagePath : `/${pagePath}`}`;
  const url = `${preview.origin}${route}`;
  const extents = {};
  for (const theme of ['dark', 'light']) {
    const prepared = await preparePage(browser, url, theme);
    extents[theme] = prepared.state.maxScrollTop;
    await prepared.context.close();
  }
  assert.ok(Math.abs(extents.dark - extents.light) <= 1, `Theme layouts have different scroll extents: ${JSON.stringify(extents)}`);
  const targetScrollTop = Math.min(extents.dark, extents.light);

  const runs = { dark: [], light: [] };
  for (let index = 0; index < settings.runsPerTheme; index += 1) {
    const order = index % 2 ? ['light', 'dark'] : ['dark', 'light'];
    for (const theme of order) {
      const result = await measureScroll(browser, url, theme, targetScrollTop);
      runs[theme].push(result);
      console.log(`${theme} run ${index + 1}: dropped ${(result.droppedFrameRatio * 100).toFixed(2)}%; raster ${result.rasterTimeMs.toFixed(1)} ms`);
    }
  }

  const themes = { dark: aggregate(runs.dark), light: aggregate(runs.light) };
  const rasterRatio = themes.light.rasterTimeMs / Math.max(themes.dark.rasterTimeMs, 0.001);
  const rasterDeltaMs = themes.light.rasterTimeMs - themes.dark.rasterTimeMs;
  const browserSession = await browser.newBrowserCDPSession();
  const systemInfo = await browserSession.send('SystemInfo.getInfo');
  await browserSession.detach();
  const report = {
    page: route,
    browser: { executablePath, version: browser.version(), headless: process.env.RENDER_PERF_HEADLESS !== '0' },
    gpu: systemInfo.gpu,
    settings,
    scrollExtents: extents,
    runs,
    themes,
    comparison: { lightToDarkRasterRatio: rasterRatio, lightToDarkRasterDeltaMs: rasterDeltaMs },
    passed: true
  };

  for (const theme of ['dark', 'light']) {
    assert.ok(themes[theme].rasterTaskCount > 0, `${theme} trace contained no RasterTask events`);
    assert.ok(themes[theme].droppedFrameRatio <= settings.budgets.maxDroppedFrameRatio,
      `${theme} dropped-frame ratio ${(themes[theme].droppedFrameRatio * 100).toFixed(2)}% exceeds ${(settings.budgets.maxDroppedFrameRatio * 100).toFixed(2)}%`);
    const rasterMsPerSecond = themes[theme].rasterTimeMs / (settings.durationMs / 1000);
    assert.ok(rasterMsPerSecond <= settings.budgets.maxRasterTimeMsPerSecond,
      `${theme} raster time ${rasterMsPerSecond.toFixed(1)} ms/s exceeds ${settings.budgets.maxRasterTimeMsPerSecond} ms/s`);
  }
  assert.ok(rasterRatio <= settings.budgets.maxLightToDarkRasterRatio || rasterDeltaMs <= settings.budgets.maxLightToDarkRasterDeltaMs,
    `Light-theme raster cost is ${rasterRatio.toFixed(2)}x dark (+${rasterDeltaMs.toFixed(1)} ms)`);

  mkdirSync(join(root, 'reports'), { recursive: true });
  writeFileSync(join(root, 'reports', 'render-performance.json'), `${JSON.stringify(report, null, 2)}\n`);
  console.log(`Render performance passed: light/dark raster ${rasterRatio.toFixed(2)}x; dropped dark ${(themes.dark.droppedFrameRatio * 100).toFixed(2)}%, light ${(themes.light.droppedFrameRatio * 100).toFixed(2)}%.`);
} finally {
  await browser.close();
  preview.child.kill();
}
