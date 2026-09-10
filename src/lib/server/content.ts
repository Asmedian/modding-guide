import type { SymbolEntry } from '$lib/search/symbols';
import { addImageDimensions } from '$lib/server/image-dimensions';
import { renderReference, highlightErm } from '$lib/reference/rich.mjs';
import { prepareArticleMarkdown } from '$lib/content/publication.mjs';

export type ContentSection = 'docs' | 'erm' | 'plugins';

type ArticleMeta = {
  id: string;
  kind: 'article';
  section?: ContentSection;
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
    section?: ContentSection;
    slug: string;
    title: string;
    summary: string;
    keywords: string[];
    questions: string[];
  }>;
};

const metaModules = import.meta.glob(['../../../content/docs/**/entity.json', '../../../content/erm/**/entity.json', '../../../content/plugins/**/entity.json'], {
  eager: true,
  import: 'default'
}) as Record<string, ArticleMeta>;

const markdownModules = import.meta.glob(['../../../content/docs/**/{ru,en}.md', '../../../content/erm/**/{ru,en}.md', '../../../content/plugins/**/{ru,en}.md'], {
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

const normalizedReferenceTableSlugs = new Set([
  'tables/combination-artifacts',
  'tables/artifact-slots',
  'tables/bits',
  'tables/hero-levels',
  'tables/specialty-pictures',
  'tables/building-pictures',
  'tables/buildings',
  'tables/sounds',
  'tables/music',
  'tables/dialog-pictures',
  'framework/constants/key-codes',
  'tables/commanders',
  'tables/cursors',
  'tables/creature-banks',
  'tables/creature-dwellings',
  'tables/mines',
  'tables/wog-object-variants',
  'tables/battlefield',
  'tables/combat-animations',
  'tables/obstacles',
  'tables/battle-terrain',
  'tables/battle-backgrounds',
  'tables/blessings',
  'tables/stack-experience-abilities',
  'tables/creature-flags',
  'tables/creature-resources',
  'tables/text-colors'
]);

const retainedLegacySections = new Map<string, string[]>([
  ['tables/artifact-slots', ['ref-form-ap', 'ref-form-ap2', 'ref-form-ap3']],
  ['tables/bits', ['ref-form-16to10']],
  ['tables/combat-animations', ['ref-form-defspell']]
]);

function sortableCell(cell: string, value: string) {
  if (/\bdata-sort-value=/i.test(cell)) return cell;
  return cell.replace(/^<td\b/i, `<td data-sort-value="${escapeHtml(value)}"`);
}

function headingBlock(html: string, id: string) {
  const start = html.search(new RegExp(`<h2 id="${id}">`, 'i'));
  if (start < 0) return '';
  const next = html.slice(start + 1).search(/<h2 id="[a-z0-9-]+">/i);
  return html.slice(start, next < 0 ? html.length : start + 1 + next);
}

function tableCells(row: string) {
  return Array.from(row.matchAll(/<t[dh]\b[^>]*>[\s\S]*?<\/t[dh]>/gi), (match) => match[0]);
}

function cellBody(cell: string) {
  return cell.replace(/^<t[dh]\b[^>]*>/i, '').replace(/<\/t[dh]>$/i, '');
}

function tableRows(html: string) {
  return Array.from(html.matchAll(/<tr\b[^>]*>[\s\S]*?<\/tr>/gi), (match) => ({
    html: match[0],
    cells: tableCells(match[0])
  }));
}

function addColumnsToFirstTable(
  html: string,
  headingId: string,
  headers: string[],
  buildCells: (cells: string[]) => string[]
) {
  const headingIndex = html.indexOf(`<h2 id="${headingId}">`);
  if (headingIndex < 0) return html;
  const tableStart = html.indexOf('<table', headingIndex);
  const tableEnd = html.indexOf('</table>', tableStart);
  if (tableStart < 0 || tableEnd < 0) return html;
  const original = html.slice(tableStart, tableEnd + 8);
  let table = original.replace(/(<thead><tr>[\s\S]*?)(<\/tr><\/thead>)/i, (_, before, after) =>
    `${before}${headers.map((header) => `<th>${header}</th>`).join('')}${after}`
  );
  table = table.replace(/(<tbody>)([\s\S]*?)(<\/tbody>)/i, (_, open, body, close) => {
    const rows = body.replace(/<tr\b[^>]*>[\s\S]*?<\/tr>/gi, (row: string) => {
      const additions = buildCells(tableCells(row));
      return additions.length ? row.replace(/<\/tr>$/i, `${additions.map((cell) => `<td>${cell || '—'}</td>`).join('')}</tr>`) : row;
    });
    return `${open}${rows}${close}`;
  });
  return `${html.slice(0, tableStart)}${table}${html.slice(tableEnd + 8)}`;
}

function numericRowMap(section: string) {
  const rows = new Map<string, string[]>();
  for (const row of tableRows(section)) {
    const key = plainText(row.cells[0] ?? '');
    if (/^-?\d+$/.test(key)) rows.set(key, row.cells);
  }
  return rows;
}

function enrichCombinationArtifacts(html: string, legacy: string, lang: 'ru' | 'en') {
  const rows = numericRowMap(headingBlock(legacy, 'ref-form-a2'));
  return addColumnsToFirstTable(html, 'values', [lang === 'ru' ? 'Вид и состав' : 'Appearance and composition'], (cells) => {
    const source = rows.get(plainText(cells[0] ?? ''));
    if (!source) return [''];
    return [`<div class="erm-reference erm-merged-source-cell">${cellBody(source[1] ?? '')}${cellBody(source[2] ?? '')}</div>`];
  });
}

function enrichSpecialtyPictures(html: string, legacy: string, lang: 'ru' | 'en') {
  const rows = numericRowMap(headingBlock(legacy, 'ref-form-heroesspec'));
  return addColumnsToFirstTable(html, 'values', [lang === 'ru' ? 'Исходный вид' : 'Source appearance'], (cells) => {
    const source = rows.get(plainText(cells[0] ?? ''));
    const current = cells.join('');
    const missingImages = Array.from((source?.join('') ?? '').matchAll(/<img\b[^>]*>/gi), (match) => match[0])
      .filter((image) => {
        const src = image.match(/\bsrc="([^"]+)"/i)?.[1];
        return src && !current.includes(`src="${src}"`);
      });
    return [`<div class="erm-reference erm-merged-source-cell">${missingImages.join(' + ')}</div>`];
  });
}

function enrichCombatAnimations(html: string, legacy: string, lang: 'ru' | 'en') {
  const rows = numericRowMap(headingBlock(legacy, 'ref-form-formatanimation'));
  return addColumnsToFirstTable(html, 'values', [lang === 'ru' ? 'Анимация' : 'Animation'], (cells) => {
    const source = rows.get(plainText(cells[0] ?? ''));
    return [`<div class="erm-reference erm-merged-source-cell">${cellBody(source?.[1] ?? '')}</div>`];
  });
}

function enrichBattleTerrain(html: string, legacy: string, lang: 'ru' | 'en') {
  const rows = numericRowMap(headingBlock(legacy, 'ref-form-bug'));
  return addColumnsToFirstTable(html, 'values', [lang === 'ru' ? 'Вид' : 'View'], (cells) => {
    const source = rows.get(plainText(cells[0] ?? ''));
    const image = source?.find((cell) => /<img\b/i.test(cell))?.match(/<img\b[^>]*>/i)?.[0] ?? '';
    return [`<div class="erm-reference erm-merged-source-cell">${image}</div>`];
  });
}

function enrichMusic(html: string, legacy: string, lang: 'ru' | 'en') {
  const descriptions = new Map<string, string>();
  let group = '';
  for (const row of tableRows(headingBlock(legacy, 'ref-form-mp3'))) {
    const key = plainText(row.cells[0] ?? '');
    const description = plainText(row.cells[1] ?? '');
    if (key === '#') {
      group = description;
      continue;
    }
    if (!/^(?:\d+|\d+[.…-]+\d+)$/.test(key)) continue;
    const detail = description.replace(/^"[^"]+"\s*-\s*/, '');
    descriptions.set(key, [group, detail && detail !== description ? detail : ''].filter(Boolean).join(' — '));
  }
  return addColumnsToFirstTable(html, 'values', [lang === 'ru' ? 'Назначение' : 'Use'], (cells) => [escapeHtml(descriptions.get(plainText(cells[0] ?? '')) ?? '')]);
}

function enrichKeyCodes(html: string, legacy: string, lang: 'ru' | 'en') {
  const names = new Map<string, string>();
  for (const row of tableRows(headingBlock(legacy, 'ref-form-keys'))) {
    const decimal = plainText(row.cells[1] ?? '');
    if (/^\d+$/.test(decimal) && !names.has(decimal)) names.set(decimal, plainText(row.cells[0] ?? ''));
  }
  return addColumnsToFirstTable(
    html,
    'values',
    [lang === 'ru' ? 'Клавиша' : 'Key', 'HEX'],
    (cells) => {
      const decimal = plainText(cells[1] ?? '');
      const number = Number(decimal);
      return [escapeHtml(names.get(decimal) ?? ''), Number.isInteger(number) ? `<code>0x${number.toString(16).toUpperCase().padStart(2, '0')}</code>` : ''];
    }
  );
}

function normalizeTableKey(value: string) {
  return value.replaceAll('…', '-').replace(/[–—]/g, '-').replace(/\s+/g, '').replace(/\(.+$/, '');
}

function enrichWogObjects(html: string, legacy: string, lang: 'ru' | 'en') {
  const rows = tableRows(headingBlock(legacy, 'ref-form-newobj'));
  const usage = new Map<string, string>();
  for (let index = 0; index < rows.length; index += 1) {
    const cells = rows[index].cells;
    if (cells.length < 3 || !/<img\b/i.test(cells[0])) continue;
    const type = normalizeTableKey(plainText(cells[1]));
    const subtype = normalizeTableKey(plainText(cells[2]));
    const note = plainText(rows[index + 1]?.cells.at(-1) ?? '');
    if (type && subtype) usage.set(`${type}:${subtype}`, note);
  }
  return addColumnsToFirstTable(html, 'values', [lang === 'ru' ? 'Использование' : 'Use'], (cells) => {
    const key = `${normalizeTableKey(plainText(cells[0] ?? ''))}:${normalizeTableKey(plainText(cells[1] ?? ''))}`;
    return [escapeHtml(usage.get(key) ?? '')];
  });
}

function enrichTextColors(html: string, lang: 'ru' | 'en') {
  return addColumnsToFirstTable(html, 'values', [lang === 'ru' ? 'Образец' : 'Sample'], (cells) => {
    const rgb = plainText(cells[1] ?? '').replace(/^0x/i, '');
    return [/^[0-9a-f]{6}$/i.test(rgb) ? `<span class="erm-color-swatch" style="--swatch:#${rgb}" aria-label="#${rgb}"></span>` : ''];
  });
}

function enrichCursors(html: string, legacy: string, lang: 'ru' | 'en') {
  const firstTable = headingBlock(legacy, 'ref-form-mousepointers').match(/<table\b[^>]*>[\s\S]*?<\/table>/i)?.[0] ?? '';
  const typeThree = tableRows(firstTable).find((row) => plainText(row.cells[0] ?? '') === '3');
  const image = typeThree?.html.match(/<img\b[^>]*>/i)?.[0];
  if (!image) return html;
  const label = lang === 'ru' ? 'Курсор типа 3' : 'Type 3 cursor';
  return html.replace(/(<h2 id="meaning">[\s\S]*?<\/h2>\s*<p>)([\s\S]*?)(<\/p>)/i, `$1$2 <span class="erm-merged-inline-visual" aria-label="${label}">${image}</span>$3`);
}

function appendLegacyLinks(html: string, legacy: string, lang: 'ru' | 'en') {
  const existingHrefs = new Set(Array.from(html.matchAll(/<a\b[^>]*\bhref="([^"]+)"[^>]*>/gi), (match) => match[1]));
  const seen = new Set<string>();
  const links: string[] = [];
  for (const match of legacy.matchAll(/<a\b[^>]*\bhref="([^"]+)"[^>]*>[\s\S]*?<\/a>/gi)) {
    const href = match[1];
    const label = plainText(match[0]);
    const key = `${href}\u0000${label}`;
    if (!label || existingHrefs.has(href) || seen.has(key)) continue;
    seen.add(key);
    links.push(match[0]);
  }
  if (!links.length) return html;
  const label = lang === 'ru' ? 'Ссылки исходной таблицы' : 'Original table links';
  const block = `<nav class="erm-merged-links" aria-label="${label}"><strong>${label}:</strong>${links.join('')}</nav>`;
  const insertion = html.search(/<h2 id="(?:related|reference-links)">/i);
  return insertion < 0 ? `${html}${block}` : `${html.slice(0, insertion)}${block}${html.slice(insertion)}`;
}

function collapseLegacyReferenceTables(html: string, slug: string, lang: 'ru' | 'en') {
  if (!normalizedReferenceTableSlugs.has(slug)) return { html, removedSections: [] as string[] };
  const markerId = ['tables/combination-artifacts', 'tables/text-colors'].includes(slug) ? 'values' : 'meaning';
  const markerIndex = html.indexOf(`<h2 id="${markerId}">`);
  if (markerIndex < 0) return { html, removedSections: [] as string[] };
  const legacy = html.slice(0, markerIndex);
  const retained = (retainedLegacySections.get(slug) ?? []).map((id) => headingBlock(legacy, id)).filter(Boolean).join('');
  const retainedIds = new Set(Array.from(retained.matchAll(/\bid="([a-z0-9-]+)"/gi), (match) => match[1]));
  const legacyIds = Array.from(new Set(Array.from(legacy.matchAll(/\bid="([a-z0-9-]+)"/gi), (match) => match[1])));
  const aliases = legacyIds.filter((id) => !retainedIds.has(id)).map((id) => `<span class="erm-anchor erm-legacy-alias" id="${id}"></span>`).join('');
  let result = `${retained}${aliases}\n${html.slice(markerIndex)}`;
  if (slug === 'tables/combination-artifacts') result = enrichCombinationArtifacts(result, legacy, lang);
  if (slug === 'tables/specialty-pictures') result = enrichSpecialtyPictures(result, legacy, lang);
  if (slug === 'tables/combat-animations') result = enrichCombatAnimations(result, legacy, lang);
  if (slug === 'tables/battle-terrain') result = enrichBattleTerrain(result, legacy, lang);
  if (slug === 'tables/music') result = enrichMusic(result, legacy, lang);
  if (slug === 'framework/constants/key-codes') result = enrichKeyCodes(result, legacy, lang);
  if (slug === 'tables/wog-object-variants') result = enrichWogObjects(result, legacy, lang);
  if (slug === 'tables/text-colors') result = enrichTextColors(result, lang);
  if (slug === 'tables/cursors') result = enrichCursors(result, legacy, lang);
  result = appendLegacyLinks(result, legacy, lang);
  result = result.replace(/<span class="erm-anchor erm-legacy-alias" id="([a-z0-9-]+)"><\/span>/gi, (alias, id: string, _offset: number, source: string) => {
    const occurrences = source.split(`id="${id}"`).length - 1;
    return occurrences > 1 ? '' : alias;
  });
  const removedSections = Array.from(legacy.matchAll(/<h2 id="([a-z0-9-]+)">/gi), (match) => match[1]).filter((id) => !retainedIds.has(id));
  return { html: result, removedSections };
}

function unifyIdReferenceTable(html: string, slug: string, lang: 'ru' | 'en') {
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
    const icon = icons.get(decimal) ?? `<span class="erm-icon-empty" aria-label="${lang === 'ru' ? 'Нет значка' : 'No icon'}">—</span>`;
    return `<tr${row[1]}>${sortableCell(cells[0], String(decimal))}${sortableCell(cells[1], String(hexadecimal))}<td class="erm-icon-cell">${icon}</td>${sortableCell(cells[2], name)}</tr>`;
  }).join('');
  const labels = lang === 'ru'
    ? ['ID (цел.)', 'ID (HEX)', 'Значок', 'Название']
    : ['ID (int)', 'ID (HEX)', 'Icon', 'Name'];
  const header = `<thead><tr><th aria-sort="none"><button type="button" data-erm-sort="0" data-sort-type="number">${labels[0]}</button></th><th aria-sort="none"><button type="button" data-erm-sort="1" data-sort-type="number">${labels[1]}</button></th><th>${labels[2]}</th><th aria-sort="none"><button type="button" data-erm-sort="3" data-sort-type="text">${labels[3]}</button></th></tr></thead>`;
  const table = `<div class="table-wrap"><table class="erm-unified-table">${header}<tbody>${rows}</tbody></table></div>`;
  result = result.replace(match[0], `${match[1]}${table}`);
  return { html: result, removedSections };
}

function prefixHexCell(cell: string) {
  if (/0x[0-9a-f]+/i.test(plainText(cell))) return cell;
  return cell.replace(/(^|>)(\s*)(-?)([0-9a-f]+)(?=\s*(?:<|$))/i, (_, boundary, whitespace, sign, digits) =>
    `${boundary}${whitespace}${sign ? '-0x' : '0x'}${digits}`
  );
}

function prefixTableHexValues(html: string) {
  return html.replace(/<table\b[^>]*>[\s\S]*?<\/table>/gi, (table) => {
    const rows = tableRows(table);
    const header = rows.find((row) => row.cells.some((cell) => /\b(?:hex|rgb)\b/i.test(plainText(cell))));
    if (!header) return table;
    const hexColumns = header.cells.map((cell, index) => /\b(?:hex|rgb)\b/i.test(plainText(cell)) ? index : -1).filter((index) => index >= 0);
    return table.replace(/<tr\b[^>]*>[\s\S]*?<\/tr>/gi, (row) => {
      if (row === header.html) return row;
      let index = -1;
      return row.replace(/<td\b[^>]*>[\s\S]*?<\/td>/gi, (cell) => {
        index += 1;
        return hexColumns.includes(index) ? prefixHexCell(cell) : cell;
      });
    });
  });
}

function sortableValue(cell: string, hexadecimal: boolean) {
  const value = plainText(cell).trim();
  const exactNumber = value.replaceAll('−', '-').match(/^-?(?:0x[0-9a-f]+|\d+)$/i);
  if (!exactNumber) return value;
  if (/^-?0x/i.test(value)) {
    const sign = value.startsWith('-') ? -1 : 1;
    return String(sign * Number.parseInt(value.replace(/^-?0x/i, ''), 16));
  }
  return hexadecimal ? String(Number.parseInt(value, 16)) : value;
}

function makeNativeTablesSortable(html: string) {
  return html.replace(/<table\b([^>]*)>([\s\S]*?)<\/table>/gi, (table: string, attributes: string, inside: string) => {
    if (!/<thead>/i.test(inside)) return table;
    const headerRow = inside.match(/<thead><tr>([\s\S]*?)<\/tr><\/thead>/i);
    if (!headerRow) return table;
    if (/\bdata-erm-sort=/i.test(headerRow[1])) return table;
    const headers = Array.from(headerRow[1].matchAll(/<th\b[^>]*>([\s\S]*?)<\/th>/gi), (match) => match[1]);
    const visualColumn = (label: string) => /^(?:вид|view|значок|icon|фон|background|анимация|animation|образец|sample|состав|composition)$/i.test(plainText(label));
    const rewrittenHeader = headers.map((header, index) => {
      if (visualColumn(header)) return `<th>${header}</th>`;
      const type = /(?:id|номер|бит|маск|hex|rgb|код|code|тип|type|подтип|уров|level|опыт|experience|байт|byte)/i.test(plainText(header)) ? 'number' : 'text';
      return `<th aria-sort="none"><button type="button" data-erm-sort="${index}" data-sort-type="${type}">${header}</button></th>`;
    }).join('');
    let rewritten = inside.replace(headerRow[0], `<thead><tr>${rewrittenHeader}</tr></thead>`);
    rewritten = rewritten.replace(/<tbody>([\s\S]*?)<\/tbody>/i, (_match: string, body: string) => `<tbody>${body.replace(/<tr\b[^>]*>[\s\S]*?<\/tr>/gi, (row: string) => {
      let index = -1;
      return row.replace(/<td\b[^>]*>[\s\S]*?<\/td>/gi, (cell) => {
        index += 1;
        const hexadecimal = /\b(?:hex|rgb)\b/i.test(plainText(headers[index] ?? ''));
        return sortableCell(cell, sortableValue(cell, hexadecimal));
      });
    })}</tbody>`);
    const classMatch = attributes.match(/\bclass="([^"]*)"/i);
    const nextAttributes = classMatch
      ? attributes.replace(classMatch[0], `class="${classMatch[1]} erm-unified-table"`)
      : `${attributes} class="erm-unified-table"`;
    return `<table${nextAttributes}>${rewritten}</table>`;
  });
}

function battlefieldDiagram(lang: 'ru' | 'en') {
  const label = lang === 'ru' ? 'Нумерация клеток поля боя от 0 до 186' : 'Battlefield hex numbering from 0 to 186';
  const rows = Array.from({ length: 11 }, (_, row) => {
    const cells = Array.from({ length: 17 }, (_, column) => {
      const value = row * 17 + column;
      const edge = column === 0 || column === 16 ? ' battlefield-edge' : '';
      return `<span class="battlefield-cell${edge}">${value}</span>`;
    }).join('');
    return `<span class="battlefield-row">${cells}</span>`;
  }).join('');
  return `<span class="battlefield-diagram" role="img" aria-label="${label}">${rows}</span>`;
}

function applyReferenceCorrections(html: string, slug: string, lang: 'ru' | 'en') {
  let result = html.replace(/<img\b[^>]*7176e1b1eafc3a84\.png[^>]*\/?\s*>/gi, battlefieldDiagram(lang));
  if (slug === 'tables/object-control-words') {
    result = result.replace(/>VR:&amp;amp<\/a>/g, '>VR:&amp;</a>').replace(/>VR:\|<\/a>/g, '>VR:<u>|</u></a>');
  }
  if (slug === 'receivers/if') {
    result = result
      .replace(
        '<span class="erm-game-text">бежево-белого и<span class="erm-anchor" id="ref-era-color-text-dl2"></span><span class="erm-game-text">золотисто-жёлтого.</span></span>',
        '<span class="erm-game-text"><span class="erm-color-beige">бежево-белого</span> и <span class="erm-anchor" id="ref-era-color-text-dl2"></span><span class="erm-color-gold">золотисто-жёлтого.</span></span>'
      )
      .replace(
        '<span class="erm-game-text">beige and white<span class="erm-anchor" id="ref-era-color-text-dl2"></span><span class="erm-game-text">golden yellow.</span></span>',
        '<span class="erm-game-text"><span class="erm-color-beige">beige-white</span> and <span class="erm-anchor" id="ref-era-color-text-dl2"></span><span class="erm-color-gold">golden yellow.</span></span>'
      )
      .replace(
        '<span class="erm-game-text">Белый <span class="erm-tone-red">Красный <span class="erm-tone-accent">Золотой</span> Красный</span> Белый</span>',
        '<span class="erm-game-text"><span class="erm-color-white">Белый</span> <span class="erm-color-red">Красный</span> <span class="erm-color-gold">Золотой</span> <span class="erm-color-red">Красный</span> <span class="erm-color-white">Белый</span></span>'
      )
      .replace(
        '<span class="erm-game-text">White <span class="erm-tone-red">Red <span class="erm-tone-accent">Golden</span> Red</span> White</span>',
        '<span class="erm-game-text"><span class="erm-color-white">White</span> <span class="erm-color-red">Red</span> <span class="erm-color-gold">Golden</span> <span class="erm-color-red">Red</span> <span class="erm-color-white">White</span></span>'
      );
  }
  return result;
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
  const unifiedTable = section === 'erm'
    ? unifyIdReferenceTable(rendered.html, meta.slug, lang)
    : { html: rendered.html, removedSections: [] as string[] };
  const normalizedTable = section === 'erm'
    ? collapseLegacyReferenceTables(unifiedTable.html, meta.slug, lang)
    : { html: unifiedTable.html, removedSections: [] as string[] };
  const consolidated = section === 'erm'
    ? consolidateReferenceHeading(normalizedTable.html, frontmatter.title, frontmatter.summary)
    : { html: normalizedTable.html, removedSections: [] as string[] };
  const finalHtml = section === 'erm'
    ? applyReferenceCorrections(makeNativeTablesSortable(prefixTableHexValues(consolidated.html)), meta.slug, lang)
    : consolidated.html;
  const articleUrl = `/${lang}/${section}/${meta.slug ? `${meta.slug}/` : ''}`;
  const publishedMeta = { ...meta } as ArticleMeta & { sectionSources?: Record<string, string[]> };
  delete publishedMeta.sectionSources;
  const article: Article = {
    ...publishedMeta,
    lang,
    title: frontmatter.title,
    summary: frontmatter.summary,
    bodyHtml: addImageDimensions(finalHtml, articleUrl),
    sections: rendered.sections.filter((item) =>
      !consolidated.removedSections.includes(item.id) &&
      !unifiedTable.removedSections.includes(item.id) &&
      !normalizedTable.removedSections.includes(item.id)
    ),
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

export function getArticle(lang: 'ru' | 'en', slug: string, section: ContentSection = 'docs') {
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

export function getArticleEntries(section: ContentSection = 'docs') {
  return publishedMeta
    .filter(({ meta }) => meta.slug && articleSection(meta) === section)
    .flatMap(({ meta }) => (['ru', 'en'] as const).map((lang) => ({ lang, slug: meta.slug })));
}
