<script lang="ts">
  import { onMount } from 'svelte';
  import { base } from '$app/paths';
  import { translator, type Locale } from '$lib/i18n';
  import { wikiOutlineKey, wikiOutlineOpen, readWikiOutline, saveWikiOutline } from '$lib/wiki/preferences';
  import UiIcon from './UiIcon.svelte';
  export let lang: Locale;
  export let entries: Array<{depth: number; slug: string; id: string; label: Record<Locale, string>}>;
  $: t = translator(lang);
  let ready = false;
  onMount(() => {
    readWikiOutline();
    ready = true;
    const storage = (event: StorageEvent) => { if (event.key === wikiOutlineKey || event.key === null) readWikiOutline(); };
    const reset = () => wikiOutlineOpen.set(true);
    window.addEventListener('storage', storage);
    window.addEventListener('modding-guide:settings-reset', reset);
    return () => {
      window.removeEventListener('storage', storage);
      window.removeEventListener('modding-guide:settings-reset', reset);
    };
  });
</script>

<details class="wiki-outline" open={$wikiOutlineOpen} on:toggle={(event) => {
  if (ready && event.currentTarget.open !== $wikiOutlineOpen) saveWikiOutline(event.currentTarget.open);
}}>
  <summary><h2>{t('wiki.contents')}</h2><span class="disclosure-chevron" aria-hidden="true"><UiIcon name="chevron" /></span></summary>
  <nav aria-label={t('wiki.contents')}>
    <ul>{#each entries as entry}<li style={`--wiki-depth:${entry.depth}`}><a href={`${base}/${lang}/wiki/${entry.slug}/#${entry.id}`}>{entry.label[lang]}</a></li>{/each}</ul>
  </nav>
</details>
