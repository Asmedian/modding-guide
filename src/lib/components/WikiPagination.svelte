<script lang="ts">
  import { base } from '$app/paths';
  import { translator, type Locale } from '$lib/i18n';
  import type { WikiCatalogPage } from '$lib/wiki/types';
  import { paginationPages } from '$lib/wiki/pagination.mjs';
  export let page: WikiCatalogPage;
  export let lang: Locale;
  $: t=translator(lang);
  // Build destinations reactively: equal page numbers can survive a category change.
  $: links=paginationPages(page.number,page.pageCount).map(number=>({number,href:number==='gap'?'':`${base}/${lang}/wiki/${page.rootSlug}${number===1?'':`/page-${number}`}/`}));
</script>
<nav class="wiki-pagination" aria-label={t('wiki.pagination')}>
  {#if page.previous}<a class="wiki-page-arrow" href={`${base}/${lang}/wiki/${page.previous}/`} aria-label={t('common.previous')}>←</a>{:else}<span class="wiki-page-arrow" aria-hidden="true">←</span>{/if}
  {#if page.pageCount>2}
    {#each links as {number,href}}
      {#if number==='gap'}<span class="wiki-page-gap">…</span>
      {:else}<a class="wiki-page-number" class:current={page.number===number} {href} aria-current={page.number===number?'page':undefined} aria-label={`${t('wiki.page')} ${number}`}>{number}</a>{/if}
    {/each}
  {:else}<span>{page.number} / {page.pageCount}</span>{/if}
  {#if page.next}<a class="wiki-page-arrow" href={`${base}/${lang}/wiki/${page.next}/`} aria-label={t('common.next')}>→</a>{:else}<span class="wiki-page-arrow" aria-hidden="true">→</span>{/if}
</nav>
