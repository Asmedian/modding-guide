import symbols from '$lib/generated/symbol-index.json';
import type { SymbolEntry } from '$lib/search/symbols';
import { addImageDimensions } from '$lib/server/image-dimensions';
import { renderReference, highlightErm } from '$lib/reference/rich.mjs';

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
  eager: true,
  query: '?raw',
  import: 'default'
}) as Record<string, string>;

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

function directoryKey(path: string) {
  return path.replace(/\\/g, '/').replace(/\/(entity\.json|(?:ru|en)\.md)$/, '');
}

const articles: Article[] = [];

for (const [metaPath, meta] of Object.entries(metaModules)) {
  if (meta.status !== 'published') continue;
  const key = directoryKey(metaPath);
  for (const lang of ['ru', 'en'] as const) {
    const markdownEntry = Object.entries(markdownModules).find(([path]) => directoryKey(path) === key && path.endsWith(`/${lang}.md`));
    if (!markdownEntry) throw new Error(`Missing ${lang}.md for ${meta.id}`);
    const { frontmatter, body } = parseFrontmatter(markdownEntry[1]);
    const rendered = renderMarkdown(body);
    const section = meta.section ?? 'docs';
    const articleUrl = `/${lang}/${section}/${meta.slug ? `${meta.slug}/` : ''}`;
    articles.push({
      ...meta,
      lang,
      title: frontmatter.title,
      summary: frontmatter.summary,
      bodyHtml: addImageDimensions(rendered.html, articleUrl),
      sections: rendered.sections,
      sources: meta.sourceRefs.map((id) => {
        const source = sourceMap.get(id);
        if (!source) throw new Error(`Unknown source ${id} in ${meta.id}`);
        return source;
      }),
      ...(meta.section === 'erm' && meta.slug === 'index' ? { symbols: symbols as SymbolEntry[] } : {})
    });
  }
}

for (const article of articles.filter((entry) => entry.slug === 'llm-map')) {
  article.catalog = articles
    .filter((entry) => entry.lang === article.lang)
    .map((entry) => ({
      id: entry.id,
      section: entry.section ?? 'docs',
      slug: entry.slug,
      title: entry.title,
      summary: entry.summary,
      keywords: entry.keywords,
      questions: entry.questions
    }))
    .sort((a, b) => a.title.localeCompare(b.title, article.lang));
}

export function getArticle(lang: 'ru' | 'en', slug: string, section: 'docs' | 'erm' = 'docs') {
  const normalizedSlug = slug.replace(/^\/+|\/+$/g, '');
  return articles.find((article) => article.lang === lang && article.slug === normalizedSlug && (article.section ?? 'docs') === section);
}

export function getArticleEntries(section: 'docs' | 'erm' = 'docs') {
  return articles.filter((article) => article.slug && (article.section ?? 'docs') === section).map((article) => ({ lang: article.lang, slug: article.slug }));
}
