import { mkdirSync, writeFileSync, rmSync } from 'node:fs';
import { dirname, join, resolve, sep } from 'node:path';
import { referenceText } from '../../src/lib/reference/rich.mjs';

export const LLM_FILE_LIMIT = 48 * 1024;
const targetBytes = 24 * 1024;
const bytes = (text) => Buffer.byteLength(text, 'utf8');

/** Drop duplicate translations, retaining original identifiers, paths and code. */
export function englishLlmRecord(value) {
  if (Array.isArray(value)) return value.map(englishLlmRecord);
  if (!value || typeof value !== 'object') return value;
  if ('en' in value && Object.keys(value).every((key) => key === 'en' || key === 'ru')) return englishLlmRecord(value.en);
  return Object.fromEntries(Object.entries(value).filter(([key]) => key !== 'ru').map(([key, child]) => [key,
    ['keywords', 'questions'].includes(key) && Array.isArray(child)
      ? child.filter((item) => !/[\p{Script=Cyrillic}]/u.test(item)).map(englishLlmRecord)
      : englishLlmRecord(child)
  ]));
}

export function englishLlmEntity(entry) {
  const result = englishLlmRecord(entry);
  if (!result.keywords.length) result.keywords = [result.title];
  if (!result.questions.length) result.questions = [`What does ${result.title} document?`];
  return result;
}

/** Lossless excerpts; keep examples atomic and prefer command/paragraph/row boundaries. */
export function splitLlmBody(body) {
  const protectedRanges = [...body.matchAll(/<pre\b[^>]*>[\s\S]*?<\/pre>|^```[^\n]*\n[\s\S]*?^```[^\n]*(?:\n|$)/gm)]
    .map((match) => [match.index, match.index + match[0].length]);
  const boundaries = [0];
  for (const match of body.matchAll(/\n(?=#{2,3} |<span class="erm-anchor"|<div|\n)|<\/tr>|\n/g)) {
    const end = match.index + match[0].length;
    if (!protectedRanges.some(([start, stop]) => end > start && end < stop)) boundaries.push(end);
  }
  boundaries.push(body.length);
  const pieces = [];
  let start = 0;
  for (let i = 1; i < boundaries.length; i++) {
    const end = boundaries[i];
    if (bytes(body.slice(start, end)) <= targetBytes) continue;
    const previous = boundaries[i - 1];
    if (previous > start) { pieces.push(body.slice(start, previous)); start = previous; }
    // A complete example may exceed the target, but must fit the hard budget.
    if (bytes(body.slice(start, end)) > LLM_FILE_LIMIT - 8 * 1024) {
      throw new Error('LLM block exceeds 40 KiB; introduce a semantic boundary without cutting an example.');
    }
  }
  if (start < body.length) pieces.push(body.slice(start));
  if (!pieces.length) pieces.push('');
  if (pieces.length > 1 && bytes(pieces.at(-1)) < 4 * 1024 && bytes(pieces.at(-2) + pieces.at(-1)) <= 36 * 1024) {
    pieces.splice(-2, 2, pieces.at(-2) + pieces.at(-1));
  }
  return pieces;
}

function topicOf(entry) {
  if (entry.section === 'docs') return /^(era|game|tools)\//.exec(entry.slug)?.[1] ?? 'guide';
  if (entry.section === 'erm') {
    if (entry.slug.startsWith('framework/')) return `framework-${entry.slug.split('/')[1]}`;
    return /^(receivers|triggers|tables)\//.exec(entry.slug)?.[1] ?? 'language';
  }
  if (entry.section === 'plugins') return /^(nh3api|h3api)(?:\/|$)/.exec(entry.slug)?.[1] ?? 'development';
  return entry.slug.split('/').slice(0, 2).join('-') || 'overview';
}

function topicTitle(topic, locale, fallback) {
  const labels = {
    guide: ['Начало работы и общие вопросы', 'Getting started and general guidance'],
    era: ['Установка, структура и совместимость ERA', 'ERA installation, structure and compatibility'],
    game: ['Устройство игры и загрузка ресурсов', 'Game architecture and resource loading'],
    tools: ['Инструменты моддинга', 'Modding tools'],
    language: ['Основы ERM, синтаксис, переменные и примеры', 'ERM fundamentals, syntax, variables and examples'],
    receivers: ['Все ресиверы и контракты команд', 'All receivers and command contracts'],
    triggers: ['Все триггеры и события', 'All triggers and events'],
    tables: ['Таблицы ID, объектов, существ и параметров', 'ID, object, creature and parameter tables'],
    'framework-functions': ['Функции ERA ERM Framework', 'ERA ERM Framework functions'],
    'framework-constants': ['Константы ERA ERM Framework', 'ERA ERM Framework constants'],
    'framework-events': ['События ERA ERM Framework', 'ERA ERM Framework events'],
    'framework-globals': ['Глобальные переменные Framework', 'Framework global variables'],
    development: ['Создание плагина и ERA API', 'Plugin development and ERA API'],
    h3api: ['H3API', 'H3API'], nh3api: ['NH3API', 'NH3API']
  };
  return labels[topic]?.[locale === 'ru' ? 0 : 1] ?? fallback;
}

function describePart(body) {
  const anchors = [...body.matchAll(/\{#([\w-]+)\}|\bid="([\w-]+)"/g)].map((m) => m[1] ?? m[2]);
  const headings = [...body.matchAll(/^#{2,3} (.+)|<h[2-4]\b[^>]*>([\s\S]*?)<\/h[2-4]>/gm)]
    .map((m) => referenceText(m[1] ?? m[2]).replace(/\s*\{#[^}]+\}/g, '')).filter(Boolean);
  return { fromAnchor: anchors[0] ?? null, toAnchor: anchors.at(-1) ?? null, headings: headings.slice(0, 16) };
}

export function buildLlmCatalog({ staticRoot, entities, sources, reference, wikiResources, symbols, publicUrl }) {
  if (entities.some((entry) => entry.locale !== 'en')) throw new Error('LLM exports must contain English articles only');
  const llmRoot = resolve(staticRoot, 'llm');
  const root = resolve(llmRoot, 'browse');
  // This directory is exclusively generator-owned; never remove adjacent exports.
  if (!root.startsWith(`${llmRoot}${sep}`) || root !== join(llmRoot, 'browse')) throw new Error('Unsafe LLM output directory');
  rmSync(root, { recursive: true, force: true });
  const outputs = [];
  function write(path, text) {
    const size = bytes(text);
    if (size > LLM_FILE_LIMIT) throw new Error(`LLM budget exceeded: ${path}: ${size}`);
    mkdirSync(dirname(join(root, path)), { recursive: true });
    writeFileSync(join(root, path), text, 'utf8');
    outputs.push({ url: publicUrl(`/llm/browse/${path}`), bytes: size });
    return publicUrl(`/llm/browse/${path}`);
  }
  const json = (path, value) => write(path, `${JSON.stringify(value, null, 2)}\n`);
  function pages(path, records, key, field = 'records') {
    const sorted = [...records].sort((a, b) => key(a).localeCompare(key(b), 'en'));
    const batches = [];
    let batch = [];
    for (const record of sorted) {
      if (batch.length && bytes(JSON.stringify([...batch, record], null, 2)) > targetBytes) { batches.push(batch); batch = []; }
      batch.push(record);
    }
    if (batch.length) batches.push(batch);
    const parts = batches.map((records, i) => ({
      url: json(`${path}/page-${String(i + 1).padStart(3, '0')}.json`, { schemaVersion: 1, [field]: records }),
      count: records.length, first: key(records[0]), last: key(records.at(-1))
    }));
    return { count: sorted.length, url: json(`${path}/index.json`, { schemaVersion: 1, order: 'localeCompare(en)', field, count: sorted.length, pages: parts }) };
  }

  const navigation = {};
  const entityFiles = new Map();
  const topics = new Map();
  for (const entry of entities) {
    const key = `${entry.locale}/${entry.section}/${topicOf(entry)}`;
    if (!topics.has(key)) topics.set(key, []);
    topics.get(key).push(entry);
  }
  for (const [path, entries] of topics) {
    const records = [];
    let packed = '', packedParts = [], number = 0;
    function flush() {
      if (!packed) return;
      const url = write(`${path}/text-${String(++number).padStart(3, '0')}.md`, packed);
      packedParts.forEach((part) => { part.url = url; });
      packed = ''; packedParts = [];
    }
    for (const entry of entries) {
      const { markdown, text, segments, ...meta } = entry;
      const record = { ...meta, url: publicUrl(meta.url), parts: [] };
      const pieces = splitLlmBody(markdown);
      pieces.forEach((piece, i) => {
        const fragment = `# ${entry.title}\n\nID: ${entry.id}\nURL: ${publicUrl(entry.url)}\nPart: ${i + 1}/${pieces.length}\nSource references: ${entry.sourceRefs.join(', ')}\nResolve relative body links against URL above. Rich HTML is inert source text; comments are included even when collapsed on the site.\n\n<!-- llm:body ${entry.id} ${i + 1} -->\n${piece}\n<!-- llm:end ${entry.id} ${i + 1} -->\n\n`;
        if (packed && bytes(packed + fragment) > targetBytes) flush();
        packed += fragment;
        const part = { part: i + 1, url: '', ...describePart(piece) };
        record.parts.push(part); packedParts.push(part);
      });
      records.push(record);
    }
    flush();
    const catalog = pages(path, records, (entry) => entry.title, 'entities');
    const [locale, section, topic] = path.split('/');
    navigation[locale] ??= {};
    navigation[locale][section] ??= [];
    navigation[locale][section].push({ topic, title: topicTitle(topic, locale, entries[0].title), ...catalog, keywords: [...new Set(entries.flatMap((entry) => entry.keywords))].slice(0, 32) });
    records.forEach((record) => entityFiles.set(`${record.locale}:${record.id}`, record.parts));
  }
  for (const [locale, sections] of Object.entries(navigation)) {
    for (const [section, topics] of Object.entries(sections)) {
      json(`${locale}/${section}/index.json`, { schemaVersion: 1, locale, section, instructions: 'Select topics by task and keywords. Open their index, the matching catalog page, then only the needed text parts. Read every part needed for a command contract. For cross-section tasks follow related article URLs and the sibling section indexes.', topics });
    }
    write(`${locale}/index.md`, `# ERA Modding Guide — ${locale}\n\nRead only the topics relevant to the task. Never fetch the whole site into context.\n\n${Object.keys(sections).map((section) => `- [${section}](${publicUrl(`/llm/browse/${locale}/${section}/index.json`)})`).join('\n')}\n\nERM syntax and commands → erm; native C++ / hooks / H3API / NH3API → plugins; archive files / DEF / images / sounds / fonts / palettes → wiki; installation / packaging / tools / compatibility → docs. A mod may require several sections.\n`);
  }
  const sourceIndex = pages('sources', sources, (source) => source.id, 'sources');
  const registries = Object.fromEntries(Object.entries(reference).map(([name, data]) => {
    const records = Array.isArray(data) ? data : Object.entries(data).map(([id, value]) => ({ id, value }));
    return [name, pages(`reference/${name}`, records, (record) => String(record.id ?? record.code ?? record.name ?? record.slug ?? JSON.stringify(record)), 'records')];
  }));
  const referenceIndex = json('reference/index.json', { schemaVersion: 1, instructions: 'Pick the registry, then the page whose first/last range contains the needed ID or name. Read contracts in the linked canonical articles, not just symbol names.', registries });
  const articleBySlug = new Map(entities.map((entry) => [`${entry.locale}:${entry.section}:${entry.slug}`, entry.id]));
  const byFamily = new Map();
  for (const symbol of symbols) {
    const family = symbol.slug.split('/').slice(0, symbol.slug.startsWith('framework/') ? 2 : 1).join('-');
    if (!byFamily.has(family)) byFamily.set(family, []);
    byFamily.get(family).push({ ...englishLlmRecord(symbol), destinations: { en: publicUrl(`/en/erm/${symbol.slug}/${symbol.anchor ? `#${symbol.anchor}` : ''}`) }, texts: { en: entityFiles.get(`en:${articleBySlug.get(`en:erm:${symbol.slug}`)}`) ?? [] } });
  }
  const symbolIndex = json('symbols/index.json', { schemaVersion: 1, families: Object.fromEntries([...byFamily].map(([family, entries]) => [family, pages(`symbols/${family}`, entries, (symbol) => symbol.name, 'symbols')])) });
  const byKind = new Map();
  for (const resource of wikiResources) {
    const key = `${resource.edition ?? 'sod'}-${resource.kind}`;
    if (!byKind.has(key)) byKind.set(key, []);
    byKind.get(key).push(resource);
  }
  const resourceIndex = json('wiki-resources/index.json', { schemaVersion: 1, instructions: 'Use exact original filename (case-insensitive), edition and resource kind. Page first/last keys are lowercase filenames. Category, archive, downloads and English destinations are retained for every record. TXT is not imported; never infer a missing file.', kinds: Object.fromEntries([...byKind].map(([kind, records]) => [kind, pages(`wiki-resources/${kind}`, records, (resource) => resource.name.toLowerCase(), 'resources')])) });
  json('index.json', {
    schemaVersion: 1, language: 'en', maxFileBytes: LLM_FILE_LIMIT,
    catalog: publicUrl('/llm/browse/en/index.md'),
    sources: sourceIndex.url, reference: referenceIndex, symbols: symbolIndex, wikiResources: resourceIndex,
    protocol: ['All reference exports use English. Answer in the requested language without retrieving translated copies.', 'Select all relevant sections, then topics, catalog pages and text parts; never load bulk mirrors by default.', 'Catalog records contain exact IDs, summaries, questions, keywords, relations, sectionSources and ordered text parts. A file can contain several articles; select by ID.', 'Parts are lossless source excerpts between llm:body / llm:end markers. Concatenate in part order without the marker newlines to recover a complete article. Follow remaining parts before drawing conclusions about a command.', 'Resolve relative links in a body against its canonical article URL. Follow cross-section links when a task spans scripting, plugins and resources.', 'Use the symbol index for exact commands/events/functions and the resource index for filenames. Resolve sourceRefs / sectionSources through sources. State version limits and distinguish source review from in-game execution.', 'Cite canonical article URLs and anchors in answers. If retrieval is unavailable, request the specific linked files; do not pretend the reference was read.']
  });
  return { entrypoint: publicUrl('/llm/browse/index.json'), navigation, entityFiles, files: outputs };
}
