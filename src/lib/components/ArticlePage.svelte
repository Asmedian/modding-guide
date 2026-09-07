<script lang="ts">
  import { base } from '$app/paths';
  import AppShell from '$lib/components/AppShell.svelte';
  import SymbolCatalog from '$lib/components/SymbolCatalog.svelte';
  import { translator, type Locale } from '$lib/i18n';
  import type { Article } from '$lib/server/content';

  export let article: Article;
  let lang: Locale;
  let t: ReturnType<typeof translator>;
  $: lang = article.lang as Locale;
  $: t = translator(lang);
  $: section = article.section ?? 'docs';
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

<AppShell {lang} toc={article.sections} activeSlug={`${section}/${article.slug}`.replace(/\/$/, '')}>
  <article class="docs-article" data-pagefind-body data-locale={lang} data-section={section} data-entity={article.id} data-pagefind-meta="locale[data-locale],topSection[data-section],pageId[data-entity],kind:article" data-pagefind-filter={`topSection:${section}`}>
    <div class="article-ornament" aria-hidden="true"><span></span><b>◇ ◆ ◇</b><span></span></div>
    <header class="article-header">
      <p class="eyebrow">{t(section === 'erm' ? 'nav.ermScripts' : 'nav.documentation')}</p>
      <h1 data-pagefind-meta="title">{article.title}</h1>
      <p class="article-summary">{article.summary}</p>
    </header>

    <div class="mobile-toc">
      <details>
        <summary>{t('nav.onThisPage')}</summary>
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
              <dd>{entry.questions.join(' · ')}</dd>
              <dt>{t('llm.keywords')}</dt>
              <dd>{entry.keywords.join(', ')}</dd>
            </dl>
          </article>
        {/each}
      </section>
    {/if}

    <details class="source-panel" data-pagefind-ignore>
      <summary><span>{t('article.sources')}</span><span class="source-panel-arrow" aria-hidden="true">⌃</span></summary>
      <ul class="source-panel-content">
        {#each article.sources as source}
          <li><code>{source.id}</code><span>{#if source.url}<a href={source.url}>{source.title}</a>{:else}{source.title}{/if} · {source.relativeSourcePath} · {source.version}</span></li>
        {/each}
      </ul>
    </details>

    <nav class="article-pagination" aria-label={t('article.adjacent')} data-pagefind-ignore>
      {#if article.previous !== null}
        <a class="previous" href={`${base}/${lang}/${section}/${article.previous ? `${article.previous}/` : ''}`}><small>{t('common.previous')}</small><span>←</span></a>
      {:else}<span></span>{/if}
      {#if article.next !== null}
        <a class="next" href={`${base}/${lang}/${section}/${article.next ? `${article.next}/` : ''}`}><small>{t('common.next')}</small><span>→</span></a>
      {/if}
    </nav>
  </article>
</AppShell>
