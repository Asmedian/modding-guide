<script lang="ts">
  import { base } from '$app/paths';
  import AppShell from '$lib/components/AppShell.svelte';
  import LanguageMenu from '$lib/components/LanguageMenu.svelte';
  import { translator, type Locale } from '$lib/i18n';
  import docsNavigation from '../../../content/_navigation/docs.json';

  export let data: { lang: Locale };
  $: t = translator(data.lang);
  $: homePath = `${base}/${data.lang}/`;
  $: alternateHomePath = `${base}/${data.lang === 'ru' ? 'en' : 'ru'}/`;

  const quickSteps = [
    ['home.quickOneTitle', 'home.quickOneText', 'docs/era/installation'],
    ['home.quickTwoTitle', 'home.quickTwoText', 'docs/era/mod-structure'],
    ['home.quickThreeTitle', 'home.quickThreeText', 'docs/game/resources']
  ] as const;

  const topics = [
    ['◇', 'home.platformTitle', 'home.platformText', 'docs/era'],
    ['□', 'home.resourcesTitle', 'home.resourcesText', 'docs/game/resources'],
    ['⌁', 'home.toolsTitle', 'home.toolsText', 'docs/tools'],
    ['≡', 'home.glossaryTitle', 'home.glossaryText', 'docs/glossary']
  ] as const;
</script>

<svelte:head>
  <title>{t('meta.title')}</title>
  <meta name="description" content={t('meta.description')} />
  <link rel="canonical" href={homePath} />
  <link rel="alternate" hreflang={data.lang} href={homePath} />
  <link rel="alternate" hreflang={data.lang === 'ru' ? 'en' : 'ru'} href={alternateHomePath} />
</svelte:head>

<AppShell lang={data.lang} activeSlug="" navigation={docsNavigation}>
  <article class="home-page">
    <div class="hero-ornament" aria-hidden="true"><span></span><b>◇ ◆ ◇ ◆ ◇</b><span></span></div>
    <header class="hero" id="overview">
      <p class="eyebrow">{t('home.eyebrow')}</p>
      <h1>{t('home.title')}</h1>
      <p class="hero-copy">{t('home.intro')}</p>
      <LanguageMenu lang={data.lang} variant="hero" />
    </header>

    <section class="info-banner">
      <span class="info-icon" aria-hidden="true">i</span>
      <div>
        <h2>{t('home.infoTitle')}</h2>
        <p>{t('home.infoText')}</p>
      </div>
      <span class="banner-runes" aria-hidden="true">⌁ ◇ ⌁ ◇ ⌁</span>
    </section>

    <section class="primary-card">
      <span class="feature-icon amber" aria-hidden="true">⌑</span>
      <div>
        <h2>{t('home.documentationTitle')}</h2>
        <p>{t('home.documentationText')}</p>
      </div>
      <a href={`${base}/${data.lang}/docs/`}>{t('home.documentationAction')} <span class="css-arrow" aria-hidden="true"></span></a>
    </section>

    <section id="quick-start" class="home-section">
      <div class="section-title"><span aria-hidden="true">✦</span><h2>{t('home.quickTitle')}</h2><i></i></div>
      <div class="steps-grid">
        {#each quickSteps as step, index}
          <a class="step-card" href={`${base}/${data.lang}/${step[2]}/`}>
            <span class="step-number">{index + 1}</span>
            <div><h3>{t(step[0])}</h3><p>{t(step[1])}</p></div>
            {#if index < quickSteps.length - 1}<span class="step-arrow css-arrow" aria-hidden="true"></span>{/if}
          </a>
        {/each}
      </div>
    </section>

    <section id="topics" class="home-section">
      <div class="section-title"><span aria-hidden="true">✦</span><h2>{t('home.findTitle')}</h2><i></i></div>
      <div class="topics-grid">
        {#each topics as topic}
          <a class="topic-card" href={`${base}/${data.lang}/${topic[3]}/`}>
            <span class="feature-icon" aria-hidden="true">{topic[0]}</span>
            <div><h3>{t(topic[1])}</h3><p>{t(topic[2])}</p></div>
            <span class="topic-arrow" aria-hidden="true"><span class="css-arrow"></span></span>
          </a>
        {/each}
      </div>
    </section>

    <section class="bottom-cta">
      <span class="shield-glyph" aria-hidden="true">♜</span>
      <div><h2>{t('home.newTitle')}</h2><p>{t('home.newText')}</p></div>
      <a class="button-outline" href={`${base}/${data.lang}/docs/quick-start/`}>{t('home.newAction')} <span class="css-arrow" aria-hidden="true"></span></a>
    </section>
    <div class="footer-ornament" aria-hidden="true"><span></span><b>◇ ◆ ◇</b><span></span></div>
  </article>
</AppShell>
