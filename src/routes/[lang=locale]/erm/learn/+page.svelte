<script lang="ts">
  import { page } from '$app/stores';
  import AppShell from '$lib/components/AppShell.svelte';
  import { translator, type Locale } from '$lib/i18n';
  import ermNavigation from '../../../../../content/_navigation/erm.json';
  $: lang = $page.params.lang as Locale;
  $: t = translator(lang);
</script>

<svelte:head><title>{t('erm.page.learn')} — ERA Modding Guide</title><meta name="robots" content="noindex" /></svelte:head>
<AppShell {lang} activeSlug="erm/learn" toc={[]} navigation={ermNavigation}>
  <header class="article-header" id="overview"><h1>{t('erm.page.learn')}</h1></header>
</AppShell>
