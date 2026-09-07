<script lang="ts">
  import { onMount } from 'svelte';
  import { base } from '$app/paths';

  onMount(() => {
    let preferred = 'ru';
    try {
      const saved = JSON.parse(localStorage.getItem('modding-guide:preferences:v1') ?? '{}');
      preferred = saved.language === 'en' ? 'en' : saved.language === 'ru' ? 'ru' : navigator.language.toLowerCase().startsWith('en') ? 'en' : 'ru';
    } catch {
      preferred = navigator.language.toLowerCase().startsWith('en') ? 'en' : 'ru';
    }
    window.location.replace(`${base}/${preferred}/`);
  });
</script>

<svelte:head>
  <title>ERA Modding Guide</title>
  <meta name="description" content="Bilingual documentation for the ERA modding platform." />
</svelte:head>

<main class="language-gateway">
  <div class="brand-mark" aria-hidden="true">ERA</div>
  <h1>ERA Modding Guide</h1>
  <p><a href={`${base}/ru/`}>Русская версия</a> · <a href={`${base}/en/`}>English version</a></p>
</main>

