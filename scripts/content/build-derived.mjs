import { mkdirSync, readFileSync, readdirSync, writeFileSync, rmSync } from 'node:fs';
import { dirname, join, relative, resolve, sep } from 'node:path';
import { fileURLToPath } from 'node:url';
import { buildSymbols } from './build-symbols.mjs';
import { buildLlmCatalog, englishLlmRecord, englishLlmEntity } from './build-llm.mjs';
import { referenceText, referenceSegments } from '../../src/lib/reference/rich.mjs';
import { prepareArticleMarkdown } from '../../src/lib/content/publication.mjs';

const projectRoot = join(dirname(fileURLToPath(import.meta.url)), '..', '..');
const sections = ['docs', 'wiki', 'erm', 'plugins'];
const contentRoots = sections.map((section) => join(projectRoot, 'content', section));
const generatedRoot = join(projectRoot, 'src', 'lib', 'generated');
const staticRoot = join(projectRoot, 'static');
const locales = ['ru', 'en'];
const siteOrigin = process.env.SITE_ORIGIN?.replace(/\/$/, '') ?? '';
const basePath = (process.env.BASE_PATH ?? '').replace(/\/$/, '');
const publicUrl = (path) => `${siteOrigin}${basePath}${path}`;

function walk(directory, name) {
  const matches = [];
  for (const entry of readdirSync(directory, { withFileTypes: true })) {
    const fullPath = join(directory, entry.name);
    if (entry.isDirectory()) matches.push(...walk(fullPath, name));
    else if (entry.name === name) matches.push(fullPath);
  }
  return matches;
}

function parseMarkdown(raw, section, slug, locale) {
  const match = raw.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n/);
  if (!match) throw new Error('Missing JSON frontmatter.');
  const frontmatter = JSON.parse(match[1]);
  const battlefieldText = locale === 'ru'
    ? 'Сетка поля боя: клетки 0–186, 11 рядов по 17 клеток.'
    : 'Battlefield grid: cells 0–186, 11 rows of 17 cells.';
  const body = prepareArticleMarkdown(raw.slice(match[0].length).trim(), section, slug)
    .replace(/<img\b[^>]*7176e1b1eafc3a84\.png[^>]*\/?\s*>/gi, battlefieldText)
    .replace(/!\[[^\]]*\]\([^)]*7176e1b1eafc3a84\.png\)/gi, battlefieldText);
  const plain = toPlain(body);
  return { frontmatter, body, plain, segments: buildSegments(body) };
}

function toPlain(value) {
  return value
    .replace(/^:::erm\r?\n([\s\S]*?)\r?\n:::/gm, (_, fragment) => referenceText(fragment))
    .replace(/^```[^\n]*$/gm, '')
    .replace(/^\s*\|?\s*:?-{3,}.*$/gm, '')
    .replace(/\{#[a-z0-9-]+\}/gi, '')
    .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1')
    .replace(/^#{2,3}\s+/gm, '')
    .replace(/\*\*([^*]+)\*\*/g, '$1')
    .replace(/[`|]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

function buildSegments(body) {
  const segments = [];
  let current = { id: '', heading: '', lines: [] };
  let rich = null;
  for (const line of body.replaceAll('\r\n', '\n').split('\n')) {
    if (rich !== null) {
      if (line.trim() === ':::') { segments.push(...referenceSegments(rich.join('\n'))); rich = null; }
      else rich.push(line);
      continue;
    }
    if (line.trim() === ':::erm') { rich = []; continue; }
    const rowAnchor = line.startsWith('|') && line.match(/\{#([a-z0-9-]+)\}/);
    if (rowAnchor) {
      segments.push({ id: rowAnchor[1], heading: current.heading, text: toPlain(line) });
      continue;
    }
    const heading = line.match(/^#{2,3}\s+(.+?)\s+\{#([a-z0-9-]+)\}\s*$/i);
    if (heading) {
      const text = toPlain(current.lines.join('\n'));
      if (text) segments.push({ id: current.id, heading: current.heading, text });
      current = { id: heading[2], heading: toPlain(heading[1]), lines: [] };
    } else {
      current.lines.push(line);
    }
  }
  const text = toPlain(current.lines.join('\n'));
  if (text) segments.push({ id: current.id, heading: current.heading, text });
  return segments;
}

const sources = JSON.parse(readFileSync(join(projectRoot, 'content', '_sources', 'sources.json'), 'utf8'));
const sourceIds = new Set(sources.map((source) => source.id));
const entities = [];

for (const entityPath of contentRoots.flatMap((root) => walk(root, 'entity.json'))) {
  const meta = JSON.parse(readFileSync(entityPath, 'utf8'));
  if (meta.status !== 'published') continue;
  if (!meta.sourceRefs.length || meta.sourceRefs.some((id) => !sourceIds.has(id))) {
    throw new Error(`Invalid sourceRefs in ${relative(projectRoot, entityPath)}`);
  }
  for (const locale of locales) {
    const markdownPath = join(dirname(entityPath), `${locale}.md`);
    const parsed = parseMarkdown(readFileSync(markdownPath, 'utf8'), meta.section ?? 'docs', meta.slug, locale);
    if (parsed.frontmatter.translationStatus !== 'reviewed') {
      throw new Error(`Unreviewed translation in ${relative(projectRoot, markdownPath)}`);
    }
    entities.push({
      id: meta.id,
      kind: meta.kind,
      section: meta.section ?? 'docs',
      locale,
      slug: meta.slug,
      url: `/${locale}/${meta.section ?? 'docs'}/${meta.slug ? `${meta.slug}/` : ''}`,
      title: parsed.frontmatter.title,
      summary: parsed.frontmatter.summary,
      keywords: meta.keywords,
      questions: meta.questions,
      sourceRefs: meta.sourceRefs,
      sectionSources: meta.sectionSources ?? {},
      previous: meta.previous ?? null,
      next: meta.next ?? null,
      text: parsed.plain,
      segments: parsed.segments,
      markdown: parsed.body
    });
  }
}

entities.sort((a, b) => a.url.localeCompare(b.url));
const searchEntities = entities.filter((entry) => entry.slug !== 'llm-map');
mkdirSync(generatedRoot, { recursive: true });
buildSymbols(projectRoot, entities);
writeFileSync(
  join(generatedRoot, 'search-index.ts'),
  `// Generated by scripts/content/build-derived.mjs. Do not edit.\nexport const searchIndex = ${JSON.stringify(searchEntities.map(({ markdown, sectionSources, previous, next, ...entry }) => entry), null, 2)} as const;\n`,
  'utf8'
);

const llmEntities = entities.filter((entry) => entry.locale === 'en').map(englishLlmEntity);
const llmSources = englishLlmRecord(sources);
const manifest = {
  schemaVersion: 2,
  language: 'en',
  generatedAt: process.env.SOURCE_DATE_EPOCH ? new Date(Number(process.env.SOURCE_DATE_EPOCH) * 1000).toISOString() : null,
  scope: sections,
  deferredSections: ['lua'],
  sources: publicUrl('/llm/sources.json'),
  reference: publicUrl('/llm/reference.json'),
  bundles: { en: Object.fromEntries(sections.map((section) => [section, publicUrl(`/llm/en/${section}.md`)])) },
  entities: llmEntities.map(({ markdown, text, segments, ...entity }) => ({ ...entity, url: publicUrl(entity.url) }))
};

// Remove the obsolete generator-owned Russian mirrors, including earlier builds.
const llmRoot = resolve(staticRoot, 'llm');
const russianMirror = resolve(llmRoot, 'ru');
if (russianMirror !== join(llmRoot, 'ru') || !russianMirror.startsWith(`${llmRoot}${sep}`)) throw new Error('Unsafe LLM mirror directory');
rmSync(russianMirror, { recursive: true, force: true });
mkdirSync(join(staticRoot, 'llm', 'en'), { recursive: true });

writeFileSync(join(staticRoot, 'llm', 'sources.json'), `${JSON.stringify(llmSources, null, 2)}\n`, 'utf8');
const referenceRegistries = ['alphabet', 'receivers', 'trigger-families', 'events', 'functions', 'constants', 'globals', 'framework-events', 'framework-files', 'legacy-commands', 'legacy-links', 'assets'];
const reference = englishLlmRecord(Object.fromEntries(referenceRegistries.map((name) => [name, JSON.parse(readFileSync(join(projectRoot, 'content', 'erm', '_registry', `${name}.json`), 'utf8'))])));
writeFileSync(join(staticRoot, 'llm', 'reference.json'), `${JSON.stringify({ schemaVersion: 1, ...reference }, null, 2)}\n`, 'utf8');

for (const locale of ['en']) for (const section of sections) {
  const bundle = llmEntities
    .filter((entry) => entry.locale === locale && entry.section === section)
    .map((entry) => `# ${entry.title}\n\nID: ${entry.id}\nURL: ${publicUrl(entry.url)}\nSource references: ${entry.sourceRefs.join(', ')}\n\n${entry.summary}\n\n${entry.markdown}`)
    .join('\n\n---\n\n');
  writeFileSync(join(staticRoot, 'llm', locale, `${section}.md`), `${bundle}\n`, 'utf8');
}

const wikiPages = JSON.parse(readFileSync(join(projectRoot, 'content/wiki/_registry/pages.json'), 'utf8'));
const wikiResources = new Map();
for (const page of wikiPages) for (const section of page.sections) for (const resource of section.resources.flatMap(resource => resource.mask ? [resource,resource.mask] : [resource])) {
  let entry = wikiResources.get(resource.id);
  if (!entry) {
    entry = { ...resource, mask: undefined, maskId: resource.mask?.id, original: publicUrl(resource.original), sourceOriginal: resource.sourceOriginal ? publicUrl(resource.sourceOriginal) : undefined, preview: resource.preview ? publicUrl(resource.preview) : undefined, image: resource.image ? publicUrl(resource.image) : undefined, media: resource.media ? publicUrl(resource.media) : undefined, details: resource.details ? publicUrl(resource.details) : undefined, destinations: [] };
    wikiResources.set(resource.id, entry);
  }
  entry.destinations.push({ category: englishLlmRecord(section.path), en: publicUrl(`/en/wiki/${page.slug}/`) });
}
writeFileSync(join(staticRoot, 'llm/wiki-resources.json'), `${JSON.stringify({ schemaVersion: 1, editions: [...new Set([...wikiResources.values()].map(resource => resource.edition.toLowerCase()))], resources: [...wikiResources.values()] }, null, 2)}\n`, 'utf8');

const catalog = buildLlmCatalog({ staticRoot, entities: llmEntities, sources: llmSources, reference, wikiResources: [...wikiResources.values()], symbols: JSON.parse(readFileSync(join(generatedRoot, 'symbol-index.json'), 'utf8')), publicUrl });
manifest.retrieval = { entrypoint: catalog.entrypoint, maxFileBytes: 48 * 1024, default: 'bounded topic catalogs and text excerpts; bundles are optional offline mirrors' };
writeFileSync(join(staticRoot, 'llm/manifest.json'), `${JSON.stringify(manifest, null, 2)}\n`, 'utf8');

const compactLines = llmEntities.map((entry) => `- ${entry.title}: ${publicUrl(entry.url)} — ${entry.summary}`);
writeFileSync(join(staticRoot, 'llms.txt'), `# ERA Modding Guide\n\nEnglish-only LLM reference exports: Docs, Wiki (SoD, AB and WoG resources), ERM, native plugins, H3API and NH3API. ERM learning contains an AI-assisted introduction; Lua is deferred.\n\nStart here: ${catalog.entrypoint}\n- English section routing: ${publicUrl('/llm/browse/en/index.md')}\n- Exact ERM commands/functions/events: ${publicUrl('/llm/browse/symbols/index.json')}\n- Exact Wiki filenames and downloads: ${publicUrl('/llm/browse/wiki-resources/index.json')}\n- Source versions and locators: ${publicUrl('/llm/browse/sources/index.json')}\n- ERM registries: ${publicUrl('/llm/browse/reference/index.json')}\n\nChoose relevant sections and topics, open a matching catalog page, then the ordered text parts. Typical files target 24 KiB; every browse file is at most 48 KiB. All exports use English; answer in the requested language without loading translated copies. Read complete command contracts, follow cross-section relations, cite canonical article URLs and anchors, distinguish evidence from assumptions and in-game testing. If browsing is unavailable, request the specific files instead of claiming to have read them.\n\nOptional bulk/offline mirrors (large; never fetch by default):\n- Manifest: ${publicUrl('/llm/manifest.json')}\n- Full catalog: ${publicUrl('/llms-full.txt')}\n${['en'].flatMap(locale => sections.map(section => `- ${locale}/${section}: ${publicUrl(`/llm/${locale}/${section}.md`)}`)).join('\n')}\n`, 'utf8');
writeFileSync(join(staticRoot, 'llms-full.txt'), `# ERA Modding Guide — full catalog\n\n${compactLines.join('\n')}\n`, 'utf8');

if (siteOrigin) {
  const urls = ['/', '/ru/', '/en/', ...entities.map((entry) => entry.url)].map(publicUrl);
  writeFileSync(join(staticRoot, 'sitemap.xml'), `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls.map((url) => `  <url><loc>${url}</loc></url>`).join('\n')}\n</urlset>\n`, 'utf8');
} else {
  // Never carry the sitemap from an earlier deployment target into a local build.
  rmSync(join(staticRoot, 'sitemap.xml'), { force: true });
}
