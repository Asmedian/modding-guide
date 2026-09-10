import { mkdirSync, readFileSync, readdirSync, writeFileSync, rmSync } from 'node:fs';
import { dirname, join, relative } from 'node:path';
import { fileURLToPath } from 'node:url';
import { buildSymbols } from './build-symbols.mjs';
import { referenceText, referenceSegments } from '../../src/lib/reference/rich.mjs';
import { prepareArticleMarkdown } from '../../src/lib/content/publication.mjs';

const projectRoot = join(dirname(fileURLToPath(import.meta.url)), '..', '..');
const contentRoots = ['docs', 'erm'].map((section) => join(projectRoot, 'content', section));
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
      text: parsed.plain,
      segments: parsed.segments,
      markdown: parsed.body
    });
  }
}

entities.sort((a, b) => a.url.localeCompare(b.url));
mkdirSync(generatedRoot, { recursive: true });
buildSymbols(projectRoot, entities);
writeFileSync(
  join(generatedRoot, 'search-index.ts'),
  `// Generated by scripts/content/build-derived.mjs. Do not edit.\nexport const searchIndex = ${JSON.stringify(entities.map(({ markdown, ...entry }) => entry), null, 2)} as const;\n`,
  'utf8'
);

const manifest = {
  schemaVersion: 1,
  generatedAt: process.env.SOURCE_DATE_EPOCH ? new Date(Number(process.env.SOURCE_DATE_EPOCH) * 1000).toISOString() : null,
  scope: ['docs', 'erm'],
  deferredSections: ['erm/learn', 'plugins'],
  entities: entities.map(({ markdown, text, segments, ...entity }) => ({ ...entity, url: publicUrl(entity.url) }))
};

mkdirSync(join(staticRoot, 'llm', 'ru'), { recursive: true });
mkdirSync(join(staticRoot, 'llm', 'en'), { recursive: true });
writeFileSync(join(staticRoot, 'llm', 'manifest.json'), `${JSON.stringify(manifest, null, 2)}\n`, 'utf8');

for (const locale of locales) for (const section of ['docs', 'erm']) {
  const bundle = entities
    .filter((entry) => entry.locale === locale && entry.section === section)
    .map((entry) => `# ${entry.title}\n\nURL: ${publicUrl(entry.url)}\n\n${entry.summary}\n\n${entry.markdown}`)
    .join('\n\n---\n\n');
  writeFileSync(join(staticRoot, 'llm', locale, `${section}.md`), `${bundle}\n`, 'utf8');
}

const compactLines = entities.map((entry) => `- ${entry.title}: ${publicUrl(entry.url)} — ${entry.summary}`);
writeFileSync(join(staticRoot, 'llms.txt'), `# ERA Modding Guide\n\nBilingual static documentation for ERA modding.\n\nCurrent scope: general documentation and ERM reference. ERM learning and plugins are deferred.\n\n- Manifest: ${publicUrl('/llm/manifest.json')}\n- Russian documentation: ${publicUrl('/llm/ru/docs.md')}\n- English documentation: ${publicUrl('/llm/en/docs.md')}\n- Russian ERM reference: ${publicUrl('/llm/ru/erm.md')}\n- English ERM reference: ${publicUrl('/llm/en/erm.md')}\n`, 'utf8');
writeFileSync(join(staticRoot, 'llms-full.txt'), `# ERA Modding Guide — full catalog\n\n${compactLines.join('\n')}\n`, 'utf8');

if (siteOrigin) {
  const urls = ['/', '/ru/', '/en/', ...entities.map((entry) => entry.url)].map(publicUrl);
  writeFileSync(join(staticRoot, 'sitemap.xml'), `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls.map((url) => `  <url><loc>${url}</loc></url>`).join('\n')}\n</urlset>\n`, 'utf8');
} else {
  // Never carry the sitemap from an earlier deployment target into a local build.
  rmSync(join(staticRoot, 'sitemap.xml'), { force: true });
}
