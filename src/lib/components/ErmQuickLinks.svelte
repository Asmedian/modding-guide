<script lang="ts">
  import { base } from '$app/paths';
  import { translator, type Locale } from '$lib/i18n';
  import receivers from '../../../content/erm/_registry/receivers.json';
  import triggers from '../../../content/erm/_registry/trigger-families.json';
  export let lang: Locale;
  $: t = translator(lang);
  const name = (title: string) => title.replace(/\s+\([A-Z]{2}\)$/, '');
</script>

<nav class="erm-quick-links" aria-label={t('erm.quick.title')}>
  <div><strong>{t('erm.quick.triggers')}</strong><span>
    {#each triggers as item}<a href={`${base}/${lang}/erm/${item.slug}/`} title={item.title[lang]} aria-label={`${item.code}: ${item.title[lang]}`}>{item.code}</a>{/each}
  </span></div>
  <div><strong>{t('erm.quick.receivers')}</strong><span>
    {#each receivers as item}<a href={`${base}/${lang}/erm/${item.slug}/`} title={name(item.title[lang])} aria-label={`${item.code}: ${name(item.title[lang])}`}>{item.code}</a>{/each}
  </span></div>
</nav>

<style>
  .erm-quick-links { position: sticky; top: var(--header-height); z-index: 12; padding: .7rem 1rem; background: var(--surface); border-bottom: 1px solid var(--border); font-size: .76rem; }
  .erm-quick-links > div { display: flex; gap: .8rem; align-items: baseline; }
  .erm-quick-links > div + div { margin-top: .3rem; }
  strong { flex: 0 0 5.5rem; color: var(--text-muted); font-weight: 600; }
  span { display: flex; flex-wrap: wrap; column-gap: .48rem; row-gap: .15rem; }
  a { display: inline-block; font-family: var(--font-mono, monospace); color: var(--gold); padding: .1rem; border-radius: 2px; }
  a:hover, a:focus-visible { background: var(--gold-soft); color: var(--text); }
  @media(max-width:1200px) { .erm-quick-links { position: relative; top: auto; } }
  @media(max-width:600px) { .erm-quick-links > div { display: block; } strong { display: block; margin-bottom: .3rem; } a { min-height: 28px; min-width: 26px; display: grid; place-items: center; } }
</style>
