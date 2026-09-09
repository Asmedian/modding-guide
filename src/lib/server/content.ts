import type { SymbolEntry } from '$lib/search/symbols';
import { addImageDimensions } from '$lib/server/image-dimensions';
import { renderReference, highlightErm } from '$lib/reference/rich.mjs';
import { prepareArticleMarkdown } from '$lib/content/publication.mjs';

type ArticleMeta = {
  id: string;
  kind: 'article';
  section?: 'docs' | 'erm';
  slug: string;
  status: 'draft' | 'reviewed' | 'published';
  sourceRefs: string[];
  keywords: string[];
  questions: string[];
  previous: string | null;
  next: string | null;
};

type SourceRecord = {
  id: string;
  title: string;
  type: string;
  url?: string;
  relativeSourcePath: string;
  version: string;
};

export type Article = ArticleMeta & {
  lang: 'ru' | 'en';
  title: string;
  summary: string;
  bodyHtml: string;
  sections: Array<{ id: string; label: string }>;
  sources: SourceRecord[];
  symbols?: SymbolEntry[];
  catalog?: Array<{
    id: string;
    section?: 'docs' | 'erm';
    slug: string;
    title: string;
    summary: string;
    keywords: string[];
    questions: string[];
  }>;
};

const metaModules = import.meta.glob(['../../../content/docs/**/entity.json', '../../../content/erm/**/entity.json'], {
  eager: true,
  import: 'default'
}) as Record<string, ArticleMeta>;

const markdownModules = import.meta.glob(['../../../content/docs/**/{ru,en}.md', '../../../content/erm/**/{ru,en}.md'], {
  query: '?raw',
  import: 'default'
}) as Record<string, () => Promise<string>>;

const sourceModules = import.meta.glob('../../../content/_sources/sources.json', {
  eager: true,
  import: 'default'
}) as Record<string, SourceRecord[]>;

const sourceList = Object.values(sourceModules)[0] ?? [];
const sourceMap = new Map(sourceList.map((source) => [source.id, source]));

function escapeHtml(value: string) {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;');
}

function renderInline(value: string) {
  let result = escapeHtml(value);
  result = result.replace(/!\[([^\]]*)\]\(([^)]+)\)/g, '<img src="$2" alt="$1" loading="lazy" decoding="async" />');
  result = result.replace(/`([^`]+)`/g, '<code>$1</code>');
  result = result.replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>');
  result = result.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2">$1</a>');
  return result;
}

function parseFrontmatter(raw: string) {
  const match = raw.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n/);
  if (!match) throw new Error('Markdown file is missing JSON frontmatter.');
  const frontmatter = JSON.parse(match[1]) as {
    title: string;
    summary: string;
    translationStatus: string;
  };
  if (frontmatter.translationStatus !== 'reviewed') {
    throw new Error(`Unreviewed translation: ${frontmatter.title}`);
  }
  return { frontmatter, body: raw.slice(match[0].length).trim() };
}

function isTableDivider(line: string) {
  return /^\|?\s*:?-{3,}:?\s*(\|\s*:?-{3,}:?\s*)+\|?$/.test(line.trim());
}

function splitTableRow(line: string) {
  // Pipes in ERM inline code are operators, not column boundaries.
  const cells: string[] = [];
  let cell = '';
  let inCode = false;
  for (const character of line.trim().replace(/^\|/, '').replace(/\|$/, '')) {
    if (character === '`') inCode = !inCode;
    if (character === '|' && !inCode) { cells.push(cell.trim()); cell = ''; }
    else cell += character;
  }
  cells.push(cell.trim());
  return cells;
}

function renderMarkdown(markdown: string) {
  const lines = markdown.replaceAll('\r\n', '\n').split('\n');
  const html: string[] = [];
  const sections: Array<{ id: string; label: string }> = [];
  let index = 0;

  while (index < lines.length) {
    const line = lines[index];
    if (!line.trim()) {
      index += 1;
      continue;
    }

    if (line.trim() === ':::erm') {
      const fragment: string[] = [];
      index += 1;
      while (index < lines.length && lines[index].trim() !== ':::') fragment.push(lines[index++]);
      if (index >= lines.length) throw new Error('Unclosed ERM reference block');
      index += 1;
      html.push(renderReference(fragment.join('\n')));
      continue;
    }

    if (line.startsWith('```')) {
      const language = line.slice(3).trim();
      const code: string[] = [];
      index += 1;
      while (index < lines.length && !lines[index].startsWith('```')) {
        code.push(lines[index]);
        index += 1;
      }
      index += 1;
      const escaped = escapeHtml(code.join('\n'));
      html.push(`<pre><code${language ? ` class="language-${escapeHtml(language)}"` : ''}>${language === 'erm' ? highlightErm(escaped) : escaped}</code></pre>`);
      continue;
    }

    const heading = line.match(/^(#{2,3})\s+(.+?)\s+\{#([a-z0-9-]+)\}\s*$/i);
    if (heading) {
      const level = heading[1].length;
      const label = heading[2];
      const id = heading[3];
      if (level === 2) sections.push({ id, label });
      html.push(`<h${level} id="${id}">${renderInline(label)}</h${level}>`);
      index += 1;
      continue;
    }

    if (line.includes('|') && index + 1 < lines.length && isTableDivider(lines[index + 1])) {
      const header = splitTableRow(line);
      const rows: string[][] = [];
      index += 2;
      while (index < lines.length && lines[index].includes('|') && lines[index].trim()) {
        rows.push(splitTableRow(lines[index]));
        index += 1;
      }
      html.push(`<div class="table-wrap"><table><thead><tr>${header.map((cell) => `<th>${renderInline(cell)}</th>`).join('')}</tr></thead><tbody>${rows.map((row) => {
        const anchor = row[0]?.match(/\s+\{#([a-z0-9-]+)\}$/)?.[1];
        return `<tr${anchor ? ` id="${anchor}"` : ''}>${row.map((cell, i) => `<td>${renderInline(i === 0 && anchor ? cell.replace(/\s+\{#[a-z0-9-]+\}$/, '') : cell)}</td>`).join('')}</tr>`;
      }).join('')}</tbody></table></div>`);
      continue;
    }

    if (/^[-*]\s+/.test(line)) {
      const items: string[] = [];
      while (index < lines.length && /^[-*]\s+/.test(lines[index])) {
        items.push(lines[index].replace(/^[-*]\s+/, ''));
        index += 1;
      }
      html.push(`<ul>${items.map((item) => `<li>${renderInline(item)}</li>`).join('')}</ul>`);
      continue;
    }

    if (/^\d+\.\s+/.test(line)) {
      const items: string[] = [];
      while (index < lines.length && /^\d+\.\s+/.test(lines[index])) {
        items.push(lines[index].replace(/^\d+\.\s+/, ''));
        index += 1;
      }
      html.push(`<ol>${items.map((item) => `<li>${renderInline(item)}</li>`).join('')}</ol>`);
      continue;
    }

    const paragraph: string[] = [line.trim()];
    index += 1;
    while (
      index < lines.length &&
      lines[index].trim() &&
      !lines[index].startsWith('```') &&
      !/^#{2,3}\s+/.test(lines[index]) &&
      !/^[-*]\s+/.test(lines[index]) &&
      !/^\d+\.\s+/.test(lines[index]) &&
      !(lines[index].includes('|') && index + 1 < lines.length && isTableDivider(lines[index + 1]))
    ) {
      paragraph.push(lines[index].trim());
      index += 1;
    }
    html.push(`<p>${renderInline(paragraph.join(' '))}</p>`);
  }

  return { html: html.join('\n'), sections };
}

function plainText(value: string) {
  return value
    .replace(/<[^>]+>/g, ' ')
    .replace(/&nbsp;|&#160;/gi, ' ')
    .replace(/&amp;/gi, '&')
    .replace(/&lt;/gi, '<')
    .replace(/&gt;/gi, '>')
    .replace(/\s+/g, ' ')
    .trim();
}

function titleSimilarity(left: string, right: string) {
  const tokens = (value: string) => new Set(plainText(value).toLocaleLowerCase().match(/[\p{L}\p{N}]+/gu) ?? []);
  const a = tokens(left);
  const b = tokens(right);
  if (!a.size || !b.size) return 0;
  let shared = 0;
  for (const token of a) if (b.has(token)) shared += 1;
  return shared / Math.min(a.size, b.size);
}

function anchorPlaceholders(value: string) {
  return Array.from(value.matchAll(/\bid="([a-z0-9-]+)"/gi), (match) => `<span class="erm-anchor" id="${match[1]}"></span>`).join('');
}

function consolidateReferenceHeading(html: string, title: string, summary: string) {
  let result = html.replace(
    /(<h2 id="[a-z0-9-]+">([\s\S]*?)<\/h2>\s*)(<section class="erm-reference"[\s\S]*?<\/section>)/gi,
    (block, heading, headingHtml, reference) => {
      const leading = reference.slice(0, 1800);
      const sourceTitle = leading.match(/<([a-z][a-z0-9]*)\b[^>]*class="[^"]*\berm-source-title\b[^"]*"[^>]*>[\s\S]*?<\/\1>/i);
      const centeredTitle = leading.match(/<h3\b[^>]*class="[^"]*\berm-align-center\b[^"]*"[^>]*>[\s\S]*?<\/h3>/i);
      const innerTitle = sourceTitle ?? centeredTitle;
      if (!innerTitle || titleSimilarity(innerTitle[0], headingHtml) < 0.5) return block;
      const start = innerTitle.index ?? 0;
      const consolidated = `${reference.slice(0, start)}${anchorPlaceholders(innerTitle[0])}${reference.slice(start + innerTitle[0].length)}`;
      return `${heading}${consolidated}`;
    }
  );

  const removedSections: string[] = [];
  const sectionHeadings = new Set<string>();
  const firstHeadingIndex = result.search(/<h2 id="[a-z0-9-]+">/i);
  result = result.replace(/<h2 id="([a-z0-9-]+)">([\s\S]*?)<\/h2>\s*/gi, (heading, headingId, headingHtml, offset) => {
    const legacyWrapper = /^(?:ref-rec-|ref-tr-|ref-form-|ref-cont-(?:receivers|triggers))/.test(headingId);
    const duplicateOfPage = offset === firstHeadingIndex && titleSimilarity(headingHtml, `${title} ${summary}`) >= 0.5;
    const obsoleteOverviewLabel = ['ref-cont-abouthelp', 'ref-index', 'ref-titre'].includes(headingId) && /^(?:ERM-скрипты|ERM scripts)$/i.test(title);
    const headingKey = plainText(headingHtml).toLocaleLowerCase().replace(/[^\p{L}\p{N}]+/gu, '');
    const repeatedHeading = sectionHeadings.has(headingKey);
    if (!legacyWrapper && !duplicateOfPage && !obsoleteOverviewLabel && !repeatedHeading) {
      sectionHeadings.add(headingKey);
      return heading;
    }
    removedSections.push(headingId);
    return `<span class="erm-anchor erm-page-anchor" id="${headingId}"></span>\n`;
  });
  return { html: result, removedSections };
}

const unifiedIdTableSlugs = new Set([
  'tables/artifacts',
  'tables/creatures',
  'tables/hero-classes',
  'tables/heroes',
  'tables/objects',
  'tables/players',
  'tables/resources',
  'tables/secondary-skills',
  'tables/spells',
  'tables/terrain',
  'tables/towns'
]);

function sortableCell(cell: string, value: string) {
  return cell.replace(/^<td\b/i, `<td data-sort-value="${escapeHtml(value)}"`);
}

function unifyIdReferenceTable(html: string, slug: string) {
  if (!unifiedIdTableSlugs.has(slug)) return { html, removedSections: [] as string[] };
  const meaningIndex = html.indexOf('<h2 id="meaning">');
  if (meaningIndex < 0) return { html, removedSections: [] as string[] };
  const legacy = html.slice(0, meaningIndex);
  const removedSections = Array.from(legacy.matchAll(/<h2 id="([a-z0-9-]+)">/gi), (match) => match[1]);
  const ids = Array.from(new Set(Array.from(legacy.matchAll(/\bid="([a-z0-9-]+)"/gi), (match) => match[1])));
  const icons = new Map<number, string>();
  for (const row of legacy.matchAll(/<tr\b[^>]*>[\s\S]*?<\/tr>/gi)) {
    const cells = Array.from(row[0].matchAll(/<td\b[^>]*>[\s\S]*?<\/td>/gi), (match) => match[0]);
    const decimalCell = cells.find((cell) => /^-?\d+$/.test(plainText(cell)));
    const image = row[0].match(/<img\b[^>]*>/i)?.[0];
    if (decimalCell && image) icons.set(Number(plainText(decimalCell)), image);
  }
  const aliases = ids.map((id) => `<span class="erm-anchor erm-legacy-alias" id="${id}"></span>`).join('');
  let result = `${aliases}\n${html.slice(meaningIndex)}`;
  const valuesTable = /(<h2 id="values">[\s\S]*?<\/h2>\s*)<div class="table-wrap"><table>([\s\S]*?)<\/table><\/div>/i;
  const match = result.match(valuesTable);
  if (!match) return { html: result, removedSections };
  const body = match[2].match(/<tbody>([\s\S]*?)<\/tbody>/i)?.[1];
  if (!body) return { html: result, removedSections };
  const rows = Array.from(body.matchAll(/<tr\b([^>]*)>([\s\S]*?)<\/tr>/gi), (row) => {
    const cells = Array.from(row[2].matchAll(/<td\b[^>]*>[\s\S]*?<\/td>/gi), (cell) => cell[0]);
    if (cells.length !== 3) return row[0];
    const decimal = Number(plainText(cells[0]));
    const hexadecimal = Number.parseInt(plainText(cells[1]).replace(/^0x/i, ''), 16);
    const name = plainText(cells[2]);
    const icon = icons.get(decimal) ?? '<span class="erm-icon-empty" aria-label="No icon">—</span>';
    return `<tr${row[1]}>${sortableCell(cells[0], String(decimal))}${sortableCell(cells[1], String(hexadecimal))}<td class="erm-icon-cell">${icon}</td>${sortableCell(cells[2], name)}</tr>`;
  }).join('');
  const header = '<thead><tr><th aria-sort="none"><button type="button" data-erm-sort="0" data-sort-type="number">id (int)</button></th><th aria-sort="none"><button type="button" data-erm-sort="1" data-sort-type="number">id (hex)</button></th><th>icon</th><th aria-sort="none"><button type="button" data-erm-sort="3" data-sort-type="text">name</button></th></tr></thead>';
  const table = `<div class="table-wrap"><table class="erm-unified-table">${header}<tbody>${rows}</tbody></table></div>`;
  result = result.replace(match[0], `${match[1]}${table}`);
  return { html: result, removedSections };
}

function directoryKey(path: string) {
  return path.replace(/\\/g, '/').replace(/\/(entity\.json|(?:ru|en)\.md)$/, '');
}

const publishedMeta = Object.entries(metaModules)
  .filter(([, meta]) => meta.status === 'published')
  .map(([path, meta]) => ({ directory: directoryKey(path), meta }));

const markdownByLocale = new Map<string, () => Promise<string>>();
for (const [path, load] of Object.entries(markdownModules)) {
  const lang = path.match(/\/(ru|en)\.md$/)?.[1];
  if (lang) markdownByLocale.set(`${directoryKey(path)}:${lang}`, load);
}

const articleCache = new Map<string, Promise<Article>>();
const catalogCache = new Map<'ru' | 'en', Promise<NonNullable<Article['catalog']>>>();

function articleSection(meta: ArticleMeta) {
  return meta.section ?? 'docs';
}

function markdownLoader(directory: string, lang: 'ru' | 'en', id: string) {
  const load = markdownByLocale.get(`${directory}:${lang}`);
  if (!load) throw new Error(`Missing ${lang}.md for ${id}`);
  return load;
}

function getCatalog(lang: 'ru' | 'en') {
  let request = catalogCache.get(lang);
  if (request) return request;
  request = Promise.all(publishedMeta.map(async ({ directory, meta }) => {
    const raw = await markdownLoader(directory, lang, meta.id)();
    const { frontmatter } = parseFrontmatter(raw);
    return {
      id: meta.id,
      section: articleSection(meta),
      slug: meta.slug,
      title: frontmatter.title,
      summary: frontmatter.summary,
      keywords: meta.keywords,
      questions: meta.questions
    };
  })).then((catalog) => catalog.sort((a, b) => a.title.localeCompare(b.title, lang)));
  catalogCache.set(lang, request);
  return request;
}

async function materializeArticle(directory: string, meta: ArticleMeta, lang: 'ru' | 'en') {
  const { frontmatter, body } = parseFrontmatter(await markdownLoader(directory, lang, meta.id)());
  const section = articleSection(meta);
  const rendered = renderMarkdown(prepareArticleMarkdown(body, section, meta.slug));
  const consolidated = section === 'erm'
    ? consolidateReferenceHeading(rendered.html, frontmatter.title, frontmatter.summary)
    : { html: rendered.html, removedSections: [] as string[] };
  const unifiedTable = section === 'erm'
    ? unifyIdReferenceTable(consolidated.html, meta.slug)
    : { html: consolidated.html, removedSections: [] as string[] };
  const articleUrl = `/${lang}/${section}/${meta.slug ? `${meta.slug}/` : ''}`;
  const publishedMeta = { ...meta } as ArticleMeta & { sectionSources?: Record<string, string[]> };
  delete publishedMeta.sectionSources;
  const article: Article = {
    ...publishedMeta,
    lang,
    title: frontmatter.title,
    summary: frontmatter.summary,
    bodyHtml: addImageDimensions(unifiedTable.html, articleUrl),
    sections: rendered.sections.filter((item) => !consolidated.removedSections.includes(item.id) && !unifiedTable.removedSections.includes(item.id)),
    sources: meta.sourceRefs.map((id) => {
      const source = sourceMap.get(id);
      if (!source) throw new Error(`Unknown source ${id} in ${meta.id}`);
      return source;
    })
  };
  if (section === 'erm' && meta.slug === 'index') {
    const symbolModule = await import('$lib/generated/symbol-index.json');
    article.symbols = symbolModule.default as SymbolEntry[];
  }
  if (meta.slug === 'llm-map') article.catalog = await getCatalog(lang);
  return article;
}

export function getArticle(lang: 'ru' | 'en', slug: string, section: 'docs' | 'erm' = 'docs') {
  const normalizedSlug = slug.replace(/^\/+|\/+$/g, '');
  const entry = publishedMeta.find(({ meta }) => meta.slug === normalizedSlug && articleSection(meta) === section);
  if (!entry) return undefined;
  const key = `${lang}:${section}:${normalizedSlug}`;
  let article = articleCache.get(key);
  if (!article) {
    article = materializeArticle(entry.directory, entry.meta, lang);
    articleCache.set(key, article);
  }
  return article;
}

export function getArticleEntries(section: 'docs' | 'erm' = 'docs') {
  return publishedMeta
    .filter(({ meta }) => meta.slug && articleSection(meta) === section)
    .flatMap(({ meta }) => (['ru', 'en'] as const).map((lang) => ({ lang, slug: meta.slug })));
}
