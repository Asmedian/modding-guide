<script lang="ts">
  import { onMount } from 'svelte';
  import { base } from '$app/paths';
  import { page } from '$app/stores';
  import type { Locale } from '$lib/i18n';
  import UiIcon from '$lib/components/UiIcon.svelte';

  export let lang: Locale;
  let menu: HTMLDetailsElement;

  $: currentPath = $page.url.pathname;
  $: routePath = base && currentPath.startsWith(base) ? currentPath.slice(base.length) || '/' : currentPath;
  $: currentHash = $page.url.hash;
  $: ruPath = `${base}${routePath.replace(/^\/(?:ru|en)(?=\/|$)/, '/ru')}${currentHash}`;
  $: enPath = `${base}${routePath.replace(/^\/(?:ru|en)(?=\/|$)/, '/en')}${currentHash}`;

  function rememberLanguage(next: Locale) {
    menu.open = false;
    try {
      const current = JSON.parse(localStorage.getItem('modding-guide:preferences:v1') ?? '{}');
      localStorage.setItem('modding-guide:preferences:v1', JSON.stringify({ ...current, language: next }));
    } catch {
      // Language selection still works when localStorage is unavailable.
    }
  }

  onMount(() => {
    function closeOutside(event: PointerEvent) {
      if (menu.open && event.target instanceof Node && !menu.contains(event.target)) menu.open = false;
    }
    document.addEventListener('pointerdown', closeOutside, true);
    return () => document.removeEventListener('pointerdown', closeOutside, true);
  });
</script>

<details bind:this={menu} class="language-menu">
  <summary aria-label={lang === 'ru' ? 'Выбрать язык' : 'Choose language'}>
    <UiIcon name="globe" />
    <span>{lang.toUpperCase()}</span>
    <svg class="language-chevron" aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" focusable="false"><path d="m6 9 6 6 6-6" /></svg>
  </summary>
  <!-- Use a document navigation for locale changes: Chrome DevTools' injected
       web-vitals can crash on soft navigation (GoogleChrome/web-vitals#792). -->
  <div class="language-options" data-sveltekit-reload>
    <a class:current={lang === 'en'} href={enPath} lang="en" hreflang="en" on:click={() => rememberLanguage('en')}>English</a>
    <a class:current={lang === 'ru'} href={ruPath} lang="ru" hreflang="ru" on:click={() => rememberLanguage('ru')}>Русский</a>
  </div>
</details>
