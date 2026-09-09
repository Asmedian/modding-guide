<script lang="ts">
  import { onMount } from 'svelte';
  import { base } from '$app/paths';
  import { translator, type Locale } from '$lib/i18n';
  import receivers from '../../../content/erm/_registry/receivers.json';
  import triggers from '../../../content/erm/_registry/trigger-families.json';

  export let lang: Locale;
  export let activeSlug = '';

  $: t = translator(lang);
  const name = (title: string) => title.replace(/\s+\([A-Z]{2}\)$/, '');
  const objectReceiverRows = [
    ['CB', 'CH', 'DW', 'FR', 'GD', 'GR', 'KT', 'LN', 'ML', 'MN', 'MT', 'PA', 'PM'],
    ['QU', 'SC', 'SG', 'SK', 'SP', 'SR', 'ST', 'SW', 'SY', 'UR', 'WG', 'WH', 'WM'],
    ['WT']
  ];
  const objectCodes = new Set(objectReceiverRows.flat());
  const regularReceivers = receivers.filter((item) => !objectCodes.has(item.code));
  const objectReceivers = objectReceiverRows.map((row) => row
    .map((code) => receivers.find((item) => item.code === code))
    .filter((item): item is (typeof receivers)[number] => Boolean(item)));
  $: currentItem = [...triggers, ...receivers].find((item) => `erm/${item.slug}` === activeSlug);
  let expanded = true;
  let stateReady = false;

  function saveState() {
    try {
      localStorage.setItem('modding-guide:erm-quick-links:v1', JSON.stringify({ expanded }));
    } catch {
      // The block remains usable when local storage is unavailable.
    }
  }

  function updateState(event: Event) {
    if (!stateReady) return;
    expanded = (event.currentTarget as HTMLDetailsElement).open;
    saveState();
  }

  onMount(() => {
    try {
      const saved = JSON.parse(localStorage.getItem('modding-guide:erm-quick-links:v1') ?? '{}');
      if (typeof saved.expanded === 'boolean') expanded = saved.expanded;
    } catch {
      expanded = true;
    }
    const readyFrame = requestAnimationFrame(() => { stateReady = true; });
    const reset = () => { expanded = true; };
    window.addEventListener('modding-guide:settings-reset', reset);
    return () => {
      cancelAnimationFrame(readyFrame);
      window.removeEventListener('modding-guide:settings-reset', reset);
    };
  });
</script>

<details class="erm-quick-links" open={expanded} on:toggle={updateState}>
  <summary>
    <strong>{t('erm.quick.title')}</strong>
    {#if !expanded && currentItem}<span class="current-summary">{currentItem.code}: {name(currentItem.title[lang])}</span>{/if}
    <span class="chevron" aria-hidden="true">⌄</span>
  </summary>
  <nav aria-label={t('erm.quick.title')}>
    <div class="quick-row"><strong>{t('erm.quick.triggers')}</strong><span>
      {#each triggers as item}<a class:current={`erm/${item.slug}` === activeSlug} href={`${base}/${lang}/erm/${item.slug}/`} data-tooltip={item.title[lang]} aria-label={`${item.code}: ${item.title[lang]}`} aria-current={`erm/${item.slug}` === activeSlug ? 'page' : undefined}>{item.code}</a>{/each}
    </span></div>
    <div class="quick-row"><strong>{t('erm.quick.receivers')}</strong><span>
      {#each regularReceivers as item}<a class:current={`erm/${item.slug}` === activeSlug} href={`${base}/${lang}/erm/${item.slug}/`} data-tooltip={name(item.title[lang])} aria-label={`${item.code}: ${name(item.title[lang])}`} aria-current={`erm/${item.slug}` === activeSlug ? 'page' : undefined}>{item.code}</a>{/each}
    </span></div>
    <div class="quick-row object-receivers"><strong>{t('erm.quick.objectReceivers')}</strong><div class="object-rows">
      {#each objectReceivers as row}<span>
        {#each row as item}<a class:current={`erm/${item.slug}` === activeSlug} href={`${base}/${lang}/erm/${item.slug}/`} data-tooltip={name(item.title[lang])} aria-label={`${item.code}: ${name(item.title[lang])}`} aria-current={`erm/${item.slug}` === activeSlug ? 'page' : undefined}>{item.code}</a>{/each}
      </span>{/each}
    </div></div>
  </nav>
</details>

<style>
  .erm-quick-links { position: sticky; top: var(--header-height); z-index: 12; background: var(--surface); border-bottom: 1px solid var(--border); font-size: .76rem; }
  summary { display: flex; align-items: center; gap: .7rem; min-height: 2.35rem; padding: .45rem 1rem; color: var(--text-muted); cursor: pointer; list-style: none; }
  summary::-webkit-details-marker { display: none; }
  summary > strong { color: var(--gold); }
  .current-summary { min-width: 0; overflow: hidden; color: var(--text); text-overflow: ellipsis; white-space: nowrap; }
  .chevron { margin-left: auto; color: var(--gold-soft); transition: transform 150ms ease; }
  details:not([open]) .chevron { transform: rotate(-90deg); }
  nav { padding: .05rem 1rem .7rem; border-top: 1px solid var(--border); }
  .quick-row { display: flex; gap: .8rem; align-items: baseline; }
  .quick-row + .quick-row { margin-top: .3rem; }
  .quick-row > strong { flex: 0 0 7.4rem; color: var(--text-muted); font-weight: 600; }
  .quick-row > span, .object-rows span { display: flex; flex-wrap: wrap; column-gap: .48rem; row-gap: .15rem; }
  .object-rows { display: grid; gap: .1rem; }
  a { position: relative; display: inline-block; padding: .1rem; border-radius: 2px; color: var(--gold); font-family: var(--font-mono, monospace); }
  a:hover, a:focus-visible, a.current { color: var(--text); background: var(--gold-soft); }
  a::after { content: attr(data-tooltip); position: absolute; z-index: 30; left: 50%; bottom: calc(100% + .42rem); width: max-content; max-width: min(22rem, 70vw); padding: .35rem .5rem; border: 1px solid var(--border-strong); border-radius: 4px; color: var(--text); background: var(--bg-deep); box-shadow: var(--shadow-soft); font: .78rem var(--font-body); opacity: 0; pointer-events: none; transform: translate(-50%, .2rem); visibility: hidden; }
  a:hover::after, a:focus-visible::after { opacity: 1; transform: translate(-50%, 0); visibility: visible; }
  @media(max-width:1200px) { .erm-quick-links { position: relative; top: auto; } }
  @media(max-width:600px) { .quick-row { display: block; } .quick-row > strong { display: block; margin-bottom: .3rem; } a { min-height: 28px; min-width: 26px; display: grid; place-items: center; } a::after { display: none; } }
</style>
