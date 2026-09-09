<script lang="ts">
  import { base } from '$app/paths';
  const redirect = `(() => {
    let preferred = navigator.language.toLowerCase().startsWith('ru') ? 'ru' : 'en';
    try {
      const saved = JSON.parse(localStorage.getItem('modding-guide:preferences:v1') || '{}');
      if (saved.language === 'ru' || saved.language === 'en') preferred = saved.language;
    } catch {}
    window.location.replace(${JSON.stringify(base)} + '/' + preferred + '/');
  })();`;
</script>

<svelte:head>
  <title>ERA Modding Guide</title>
  <meta name="description" content="Bilingual documentation for the ERA modding platform." />
  {@html `<script>${redirect}</script>`}
</svelte:head>

<noscript>
  <nav class="language-fallback" aria-label="Language">
    <a href={`${base}/ru/`}>Русская версия</a>
    <a href={`${base}/en/`}>English version</a>
  </nav>
</noscript>
