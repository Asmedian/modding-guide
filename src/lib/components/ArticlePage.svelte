<script lang="ts">
  import { base } from '$app/paths';
  import AppShell from '$lib/components/AppShell.svelte';
  import UiIcon from '$lib/components/UiIcon.svelte';
  import SymbolCatalog from '$lib/components/SymbolCatalog.svelte';
  import { translator, type Locale } from '$lib/i18n';
  import type { Article } from '$lib/server/content';
  import docsNavigation from '../../../content/_navigation/docs.json';
  import ermNavigation from '../../../content/_navigation/erm.json';
  import pluginsNavigation from '../../../content/_navigation/plugins.json';
  import ermAlphabet from '../../../content/erm/_registry/alphabet.json';
  import ermReceivers from '../../../content/erm/_registry/receivers.json';
  import ermTriggers from '../../../content/erm/_registry/trigger-families.json';

  export let article: Article;
  let lang: Locale;
  let t: ReturnType<typeof translator>;
  $: lang = article.lang as Locale;
  $: t = translator(lang);
  $: section = article.section ?? 'docs';
  $: navigation = section === 'erm' ? ermNavigation : section === 'plugins' ? pluginsNavigation : docsNavigation;
  $: articlePath = `${base}/${lang}/${section}/${article.slug ? `${article.slug}/` : ''}`;
  $: alternatePath = `${base}/${lang === 'ru' ? 'en' : 'ru'}/${section}/${article.slug ? `${article.slug}/` : ''}`;
  $: structuredData = JSON.stringify({
    '@context': 'https://schema.org',
    '@type': 'TechArticle',
    headline: article.title,
    description: article.summary,
    inLanguage: lang,
    isPartOf: { '@type': 'WebSite', name: 'ERA Modding Guide' }
  });

</script>

<svelte:head>
  <title>{article.title} — ERA Modding Guide</title>
  <meta name="description" content={article.summary} />
  <link rel="canonical" href={articlePath} />
  <link rel="alternate" hreflang={lang} href={articlePath} />
  <link rel="alternate" hreflang={lang === 'ru' ? 'en' : 'ru'} href={alternatePath} />
  <script type="application/ld+json">{structuredData}</script>
</svelte:head>

<AppShell {lang} {navigation} toc={article.sections} activeSlug={`${section}/${article.slug}`.replace(/\/$/, '')} {ermAlphabet} {ermReceivers} {ermTriggers}>
  <article class="docs-article" lang={lang} data-pagefind-body={article.slug === 'llm-map' ? undefined : true} data-pagefind-ignore={article.slug === 'llm-map' ? true : undefined} data-locale={lang} data-section={section} data-entity={article.id} data-pagefind-meta="locale[data-locale],topSection[data-section],pageId[data-entity],kind:article" data-pagefind-filter={`topSection:${section}`}>
    <div class="article-ornament" aria-hidden="true"><span></span><UiIcon name="ornament" /><span></span></div>
    <header class="article-header">
      <h1 data-pagefind-meta="title">{article.title}</h1>
      <p class="article-summary">{article.summary}</p>
    </header>

    <div class="mobile-toc">
      <details>
        <summary><span>{t('nav.onThisPage')}</span><span class="disclosure-chevron" aria-hidden="true"><UiIcon name="chevron" /></span></summary>
        <nav>
          {#each article.sections as section}
            <a href={`#${section.id}`}>{section.label}</a>
          {/each}
        </nav>
      </details>
    </div>

    <div class="article-body">{@html article.bodyHtml}</div>

    {#if article.symbols}<SymbolCatalog {lang} symbols={article.symbols} />{/if}

    {#if article.catalog?.length}
      <section class="llm-catalog" aria-label={t('llm.catalogTitle')}>
        {#each article.catalog as entry}
          <article class="llm-entry">
            <div>
              <code>{entry.id}</code>
              <h3><a href={`${base}/${lang}/${entry.section ?? 'docs'}/${entry.slug ? `${entry.slug}/` : ''}`}>{entry.title}</a></h3>
              <p>{entry.summary}</p>
            </div>
            <dl>
              <dt>{t('llm.questions')}</dt>
              <dd class="metadata-list">{#each entry.questions as question}<span>{question}</span>{/each}</dd>
              <dt>{t('llm.keywords')}</dt>
              <dd>{entry.keywords.join(', ')}</dd>
            </dl>
          </article>
        {/each}
      </section>
    {/if}

    <details class="source-panel" data-pagefind-ignore>
      <summary><span>{t('article.sources')}</span><span class="disclosure-chevron" aria-hidden="true"><UiIcon name="chevron" /></span></summary>
      <ul class="source-panel-content">
        {#each article.sources as source}
          <li><code>{source.id}</code><span class="metadata-list">{#if source.url}<a href={source.url}>{source.title}</a>{:else}<span>{source.title}</span>{/if}<span>{source.relativeSourcePath}</span><span>{source.version}</span></span></li>
        {/each}
      </ul>
    </details>

    <nav class="article-pagination" aria-label={t('article.adjacent')} data-pagefind-ignore>
      {#if article.previous !== null}
        <a class="previous" href={`${base}/${lang}/${section}/${article.previous ? `${article.previous}/` : ''}`}><small>{t('common.previous')}</small><UiIcon name="arrow-left" /></a>
      {:else}<span></span>{/if}
      {#if article.next !== null}
        <a class="next" href={`${base}/${lang}/${section}/${article.next ? `${article.next}/` : ''}`}><small>{t('common.next')}</small><UiIcon name="arrow-right" /></a>
      {/if}
    </nav>
  </article>
</AppShell>

<style>
  :global(.heading-anchor) { display: inline-flex; align-items: center; justify-content: center; width: 1em; height: 1em; margin-right: .38rem; padding: 0; border: 0; color: var(--text-subtle); background: transparent; text-decoration: none !important; vertical-align: -.08em; opacity: .68; cursor: pointer; }
  :global(.heading-anchor:hover),
  :global(.heading-anchor:focus-visible) { color: var(--gold); opacity: 1; }
  :global(.heading-anchor > span) { --icon-mask: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath fill='none' stroke='black' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' d='M10.6 13.4a4 4 0 0 0 5.7 0l2.1-2.1a4 4 0 0 0-5.7-5.7l-1.2 1.2m1.9 3.8a4 4 0 0 0-5.7 0l-2.1 2.1a4 4 0 0 0 5.7 5.7l1.2-1.2'/%3E%3C/svg%3E"); display: block; width: 100%; height: 100%; background: currentColor; -webkit-mask: var(--icon-mask) center / contain no-repeat; mask: var(--icon-mask) center / contain no-repeat; }
  :global(.code-block) { min-width: 0; overflow: hidden; margin: var(--space-5) 0; border: 1px solid var(--border); border-left: 3px solid var(--gold-soft); border-radius: var(--radius-md); background: var(--code-background, var(--bg-deep)); }
  :global(.code-toolbar) { display: flex; align-items: center; justify-content: space-between; gap: var(--space-3); min-height: 2.25rem; padding: .35rem .55rem .35rem .8rem; border-bottom: 1px solid var(--border); background: var(--surface-soft); }
  :global(.code-language) { color: var(--gold-soft); font: 700 .68rem/1 var(--font-body); letter-spacing: .09em; text-transform: uppercase; }
  :global(.code-copy) { position: relative; display: inline-grid; place-items: center; width: 2rem; height: 2rem; padding: .35rem; border: 1px solid var(--border); border-radius: 4px; color: var(--text-muted); background: var(--surface-raised); cursor: pointer; }
  :global(.code-copy-icon) { display: block; width: 1.1rem; height: 1.1rem; background: currentColor; -webkit-mask: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Crect x='8' y='8' width='12' height='12' rx='2' fill='none' stroke='black' stroke-width='2'/%3E%3Cpath d='M16 8V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h2' fill='none' stroke='black' stroke-width='2'/%3E%3C/svg%3E") center / contain no-repeat; mask: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Crect x='8' y='8' width='12' height='12' rx='2' fill='none' stroke='black' stroke-width='2'/%3E%3Cpath d='M16 8V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h2' fill='none' stroke='black' stroke-width='2'/%3E%3C/svg%3E") center / contain no-repeat; }
  :global(.code-copy.copied::after) { content: attr(data-copied-label); position: absolute; z-index: 2; right: calc(100% + .45rem); top: 50%; transform: translateY(-50%); padding: .3rem .5rem; border: 1px solid var(--border-strong); border-radius: 4px; color: var(--text); background: var(--surface-raised); white-space: nowrap; font: 650 .72rem/1.2 var(--font-body); pointer-events: none; }
  :global(.code-copy:hover),
  :global(.code-copy:focus-visible) { color: var(--gold); border-color: var(--border-strong); }
  :global(.code-frame) { --code-line-height: 1.364rem; display: grid; grid-template-columns: auto minmax(0, 1fr); min-width: 0; }
  :global(.code-line-numbers) { display: flex; flex-direction: column; padding: var(--space-5) .6rem; border-right: 1px solid var(--border); color: var(--text-subtle); background: rgba(0, 0, 0, .08); font: .68rem/var(--code-line-height) var(--font-mono); text-align: right; user-select: none; }
  :global(.code-frame > pre) { min-width: 0; margin: 0; padding: var(--space-5); border: 0; border-radius: 0; background: transparent; font-size: .88rem; line-height: var(--code-line-height); }
  :global(.code-frame > pre > code) { display: block; min-width: max-content; line-height: inherit; }
</style>
