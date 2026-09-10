<script lang="ts">
  import { onDestroy, onMount, tick } from 'svelte';
  import { dev } from '$app/environment';
  import { beforeNavigate } from '$app/navigation';
  import { base } from '$app/paths';
  import { translator, type Locale } from '$lib/i18n';
  import { advanceMatch, createPageSearch, type PageMatch } from '$lib/search/page-search.mjs';
  import { matchUsesInputScript } from '$lib/search/result-language.mjs';
  import { normalizeSymbol, type SymbolEntry } from '$lib/search/symbols';

  export let open = false;
  export let lang: Locale;
  export let activeSlug = '';
  export let query = '';
  export let scope: 'everywhere' | 'section' | 'page' = 'everywhere';

  type SearchEntry = {
    id: string;
    locale: string;
    section: string;
    slug: string;
    url: string;
    title: string;
    summary: string;
    keywords: readonly string[];
    questions: readonly string[];
    text: string;
    segments: ReadonlyArray<{ id: string; heading: string; text: string }>;
  };

  type RankedResult = {
    entry: SearchEntry;
    score: number;
    snippet: string;
    snippetParts?: Array<{ text: string; match: boolean }>;
    anchor: string;
    group: 'symbols' | 'titles' | 'descriptions';
  };

  $: t = translator(lang);
  let entries: readonly SearchEntry[] = [];
  let symbols: SymbolEntry[] = [];
  let selected = 0;
  let inputElement: HTMLInputElement;
  let dialogElement: HTMLElement;
  let pageSearch: ReturnType<typeof createPageSearch> | null = null;
  let pageMatches: PageMatch[] = [];
  let pageSelected = 0;
  type PagefindData = {
    url: string;
    excerpt: string;
    meta: { pageId?: string; locale?: string; title?: string; topSection?: string };
    sub_results?: Array<{ url: string; excerpt: string }>;
  };
  type Pagefind = {
    destroy: () => Promise<void>;
    options: (options: { baseUrl: string }) => Promise<void>;
    init: () => Promise<void>;
    debouncedSearch: (query: string, options: { filters?: Record<string, string> }) => Promise<{ results: Array<{ data: () => Promise<PagefindData> }> } | null>;
  };
  let engine: Pagefind | null = null;
  let engineLoading = false;
  let fullTextLoading = false;
  let engineUnavailable = false;
  let fullTextResults: RankedResult[] = [];
  let requestId = 0;
  let disposed = false;
  beforeNavigate(() => pageSearch?.clear());
  onDestroy(() => { disposed = true; requestId += 1; pageSearch?.clear(); });

  onMount(async () => {
    const article = document.querySelector('.docs-article');
    if (article) pageSearch = createPageSearch(article);
    inputElement?.focus();
    if (!dev) return;
    const [module, symbolModule] = await Promise.all([import('$lib/generated/search-index'), import('$lib/generated/symbol-index.json')]);
    if (disposed) return;
    entries = module.searchIndex as readonly SearchEntry[];
    symbols = symbolModule.default as SymbolEntry[];
  });

  function setScope(next: typeof scope) {
    scope = next;
    selected = 0;
    inputElement?.focus();
    try {
      const current = JSON.parse(localStorage.getItem('modding-guide:preferences:v1') ?? '{}');
      localStorage.setItem('modding-guide:preferences:v1', JSON.stringify({ ...current, lastSearchScope: scope }));
    } catch {
      // Search scope persistence is optional.
    }
  }

  $: normalized = query.trim().toLocaleLowerCase(lang);
  $: symbolQuery = normalizeSymbol(query);
  $: if (!dev && scope !== 'page' && normalized.length >= 2 && !engine && !engineLoading && !engineUnavailable) void loadPagefind();
  $: symbolResults = scope === 'page' || symbolQuery.length < 2 || (scope === 'section' && !activeSlug.startsWith('erm')) ? [] : symbols
    .filter((symbol) => [symbol.name, ...symbol.aliases].some((name) => normalizeSymbol(name) === symbolQuery))
    .flatMap((symbol): RankedResult[] => {
      const entry = entries.find((item) => item.locale === lang && item.section === 'erm' && item.slug === symbol.slug);
      return entry ? [{ entry, score: -1, snippet: `${symbol.name} — ${symbol.label[lang]}`, anchor: symbol.anchor, group: 'symbols' }] : [];
    })
    .filter((result, index, matches) => matches.findIndex((other) => other.entry.id === result.entry.id && other.anchor === result.anchor) === index);
  $: updatePageMatches(pageSearch, query, scope);
  $: exactResults = scope === 'page' || normalized.length < 2 ? [] : entries
    .filter((entry) => entry.locale === lang && (scope !== 'section' || entry.section === (activeSlug.split('/')[0] || 'docs')))
    .map((entry): RankedResult => {
      const title = entry.title.toLocaleLowerCase(lang);
      const question = entry.questions.find((item) => item.toLocaleLowerCase(lang).includes(normalized));
      const segment = entry.segments?.find((item) => `${item.heading} ${item.text}`.toLocaleLowerCase(lang).includes(normalized));
      const keyword = entry.keywords.find((item) => item.toLocaleLowerCase(lang).includes(normalized));
      const summaryMatches = entry.summary.toLocaleLowerCase(lang).includes(normalized);
      const score = title === normalized ? 0 : title.startsWith(normalized) || title.includes(normalized) ? 1 : keyword ? 2 : summaryMatches || question || segment ? 3 : 99;
      const snippetSource = summaryMatches ? entry.summary : question ?? (segment ? `${segment.heading}. ${segment.text}` : keyword ?? entry.summary);
      return {
        entry,
        score,
        snippet: excerpt(snippetSource, normalized),
        anchor: segment?.id ?? '',
        group: score === 2 ? 'symbols' : score < 2 ? 'titles' : 'descriptions'
      };
    })
    .filter((result) => result.score < 99)
    .sort((a, b) => a.score - b.score || a.entry.title.localeCompare(b.entry.title, lang))
    .slice(0, 12);
  $: if (engine) void fullTextSearch(engine, normalized, lang, scope);
  $: results = [...symbolResults, ...exactResults.filter((result) => !symbolResults.some((symbol) => symbol.entry.id === result.entry.id)), ...fullTextResults.filter((result) => ![...symbolResults, ...exactResults].some((exact) => exact.entry.id === result.entry.id))]
    .sort((a, b) => a.score - b.score)
    .slice(0, 12);
  $: if (selected >= results.length) selected = 0;

  function updatePageMatches(search: typeof pageSearch, value: string, area: typeof scope) {
    search?.clear();
    pageSelected = 0;
    pageMatches = area === 'page' && search ? search.search(value) : [];
    search?.activate(0);
  }

  async function movePageMatch(delta: number) {
    if (!pageMatches.length) return;
    pageSelected = advanceMatch(pageSelected, delta, pageMatches.length);
    const mark = pageSearch?.activate(pageSelected);
    await tick();
    if (!mark?.isConnected || disposed) return;
    // Keep the highlighted occurrence below the open dropdown, not behind it.
    const top = Math.min(dialogElement.getBoundingClientRect().bottom + 20, window.innerHeight - 60);
    const target = top + (window.innerHeight - top) / 2;
    window.scrollTo({ top: Math.max(0, window.scrollY + mark.getBoundingClientRect().top - target), behavior: 'smooth' });
  }

  function excerptParts(html: string) {
    // Read only text and <mark> state; never inject result HTML into the page.
    const parsed = new DOMParser().parseFromString(html, 'text/html');
    const parts: Array<{ text: string; match: boolean }> = [];
    function visit(node: Node, match = false) {
      if (node.nodeType === Node.TEXT_NODE) parts.push({ text: node.textContent ?? '', match });
      else for (const child of node.childNodes) visit(child, match || (node instanceof Element && node.tagName === 'MARK'));
    }
    visit(parsed.body);
    return parts;
  }

  async function loadPagefind() {
    engineLoading = true;
    try {
      const path = `${base}/pagefind/pagefind.js`;
      const pagefind = await import(/* @vite-ignore */ path) as Pagefind;
      if (disposed) return;
      await pagefind.destroy();
      if (disposed) return;
      await pagefind.options({ baseUrl: `${base}/` });
      if (disposed) return;
      await pagefind.init();
      if (!disposed) engine = pagefind;
    } catch {
      if (!disposed) engineUnavailable = true;
    } finally {
      if (!disposed) {
        engineLoading = false;
      }
    }
  }

  async function fullTextSearch(pagefind: Pagefind, needle: string, locale: Locale, area: typeof scope) {
    const request = ++requestId;
    fullTextResults = [];
    if (area === 'page' || needle.length < 2) {
      fullTextLoading = false;
      return;
    }
    fullTextLoading = true;
    try {
      const response = await pagefind.debouncedSearch(needle, area === 'section' ? { filters: { topSection: activeSlug.split('/')[0] || 'docs' } } : {});
      if (!response || disposed || request !== requestId) return;
      const data = await Promise.all(response.results.slice(0, 12).map((result) => result.data()));
      if (disposed || request !== requestId) return;
      fullTextResults = data.flatMap((result, index): RankedResult[] => {
        if (result.meta.locale && result.meta.locale !== locale) return [];
        const section = result.meta.topSection === 'erm' ? 'erm' : result.meta.topSection === 'plugins' ? 'plugins' : 'docs';
        const title = result.meta.title ?? result.url;
        const slug = stripBase(result.url).replace(/^\/(?:ru|en)\/(?:docs|erm|plugins)\/?/, '').replace(/\/$/, '');
        const entry: SearchEntry = {
          id: result.meta.pageId ?? result.url,
          locale,
          section,
          slug,
          url: result.url,
          title,
          summary: '',
          keywords: [],
          questions: [],
          text: '',
          segments: []
        };
        const sub = result.sub_results?.find((item) => item.url.includes('#') && item.excerpt.includes('<mark>'));
        const parts = excerptParts(sub?.excerpt ?? result.excerpt);
        if (!parts.some((part) => part.match) || !highlightMatchesInputScript(parts, needle)) return [];
        const titleMatch = title.toLocaleLowerCase(locale).includes(needle);
        const symbolMatch = section === 'erm' && /^[!?$%A-Z0-9:_-]+$/i.test(needle) && Boolean(sub?.url.includes('#'));
        return [{
          entry,
          score: (titleMatch ? 1 : symbolMatch ? 2 : 4) + index / 100,
          snippet: parts.map((part) => part.text).join(''),
          snippetParts: parts,
          anchor: (sub?.url ?? result.url).split('#')[1] ?? '',
          group: titleMatch ? 'titles' : symbolMatch ? 'symbols' : 'descriptions'
        }];
      });
    } catch {
      if (!disposed && request === requestId) fullTextResults = [];
    } finally {
      if (!disposed && request === requestId) fullTextLoading = false;
    }
  }

  function highlightMatchesInputScript(parts: Array<{ text: string; match: boolean }>, needle: string) {
    const marked = parts.filter((part) => part.match).map((part) => part.text).join('');
    return matchUsesInputScript(marked, needle);
  }

  function stripBase(value: string) {
    let pathname = value.split('#')[0] || '/';
    if (base && (pathname === base || pathname.startsWith(`${base}/`))) pathname = pathname.slice(base.length) || '/';
    return pathname;
  }

  function resultHref(result: RankedResult) {
    const [rawPath, rawAnchor = ''] = result.entry.url.split('#');
    const pathname = base && (rawPath === base || rawPath.startsWith(`${base}/`))
      ? rawPath
      : `${base}${rawPath.startsWith('/') ? rawPath : `/${rawPath}`}`;
    const anchor = result.anchor || rawAnchor;
    return `${pathname}${anchor ? `#${anchor}` : ''}`;
  }

  function excerpt(value: string, needle: string) {
    const compact = value.replace(/\s+/g, ' ').trim();
    const index = compact.toLocaleLowerCase(lang).indexOf(needle);
    if (index < 0 || compact.length <= 190) return compact;
    const start = Math.max(0, index - 72);
    const end = Math.min(compact.length, index + needle.length + 108);
    return `${start ? '…' : ''}${compact.slice(start, end).trim()}${end < compact.length ? '…' : ''}`;
  }

  function highlighted(value: string) {
    if (!normalized) return [{ text: value, match: false }];
    const parts: Array<{ text: string; match: boolean }> = [];
    const lower = value.toLocaleLowerCase(lang);
    let cursor = 0;
    let index = lower.indexOf(normalized);
    while (index >= 0) {
      if (index > cursor) parts.push({ text: value.slice(cursor, index), match: false });
      parts.push({ text: value.slice(index, index + normalized.length), match: true });
      cursor = index + normalized.length;
      index = lower.indexOf(normalized, cursor);
    }
    if (cursor < value.length) parts.push({ text: value.slice(cursor), match: false });
    return parts.length ? parts : [{ text: value, match: false }];
  }

  function keydown(event: KeyboardEvent) {
    if (event.isComposing || !(event.target instanceof Node) || !dialogElement?.contains(event.target)) return;
    // Enter on a focused button keeps its native action (including Previous).
    if (event.key === 'Enter' && event.target !== inputElement) return;
    if (scope === 'page' && ['ArrowDown', 'ArrowUp', 'Enter'].includes(event.key)) {
      event.preventDefault();
      void movePageMatch(event.key === 'ArrowUp' || (event.key === 'Enter' && event.shiftKey) ? -1 : 1);
    } else if (event.key === 'ArrowDown' && results.length) {
      event.preventDefault();
      selected = (selected + 1) % results.length;
    } else if (event.key === 'ArrowUp' && results.length) {
      event.preventDefault();
      selected = (selected - 1 + results.length) % results.length;
    } else if (event.key === 'Enter' && results[selected]) {
      window.location.href = resultHref(results[selected]);
    } else if (event.key === 'Escape') {
      open = false;
    }
  }
</script>

<svelte:window on:keydown={keydown} />

<section bind:this={dialogElement} class="search-dialog" aria-label={t('search.label')}>
    <div class="search-dialog-row">
      <span aria-hidden="true">⌕</span>
      <input bind:this={inputElement} bind:value={query} placeholder={t('search.placeholder')} aria-label={t('search.label')} />
      <button type="button" aria-label={t('search.close')} on:click={() => (open = false)}>×</button>
    </div>
    <div class="search-scopes" aria-label={t('search.scope')}>
      {#each ['everywhere', 'section', 'page'] as option}
        <button type="button" class:active={scope === option} disabled={option === 'page' && !activeSlug} on:click={() => setScope(option as typeof scope)}>
          {t(`search.${option}`)}
        </button>
      {/each}
    </div>
    {#if scope === 'page'}
      <div class="search-page-controls">
        <output aria-live="polite">{t('search.matches')}: {pageMatches.length ? pageSelected + 1 : 0}/{pageMatches.length}</output>
        <button type="button" disabled={!pageMatches.length || pageSelected === 0} aria-label={t('common.previous')} on:click={() => movePageMatch(-1)}>↑</button>
        <button type="button" disabled={!pageMatches.length || pageSelected === pageMatches.length - 1} aria-label={t('common.next')} on:click={() => movePageMatch(1)}>↓</button>
      </div>
    {/if}
    <div class="search-results" aria-live="polite">
      {#if scope === 'page'}
        {#if normalized.length < 2}
          <p>{t('search.prompt')}</p>
        {:else if !pageMatches.length}
          <p>{t('search.pageEmpty')}</p>
        {:else}
          <div class="search-page-snippet">{#each pageMatches[pageSelected].parts as part}{#if part.match}<mark>{part.text}</mark>{:else}{part.text}{/if}{/each}</div>
        {/if}
      {:else if normalized.length < 2}
        <p>{t('search.prompt')}</p>
      {:else if (engineLoading || fullTextLoading) && !results.length}
        <p class="search-loading">{t('search.searching')}</p>
      {:else if !results.length}
        <p>{t('search.empty')}</p>
      {:else}
        <h2>{t('search.results')}</h2>
        <ul>
          {#each results as result, index}
            <li>
              <a class:selected={selected === index} href={resultHref(result)} on:mouseenter={() => (selected = index)} on:click={(event) => { if (!event.ctrlKey && !event.metaKey && !event.shiftKey && !event.altKey) open = false; }}>
                <small>{t(`search.group.${result.group}`)}</small>
                <strong>{#each highlighted(result.entry.title) as part}{#if part.match}<mark>{part.text}</mark>{:else}{part.text}{/if}{/each}</strong>
                <span>{#each result.snippetParts ?? highlighted(result.snippet) as part}{#if part.match}<mark>{part.text}</mark>{:else}{part.text}{/if}{/each}</span>
              </a>
            </li>
          {/each}
        </ul>
      {/if}
    </div>
    <p class="search-hint">{t(scope === 'page' ? 'search.pageHint' : 'search.hint')}</p>
  </section>
