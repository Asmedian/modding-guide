<script lang="ts">
  import { onMount } from 'svelte';
  import { base } from '$app/paths';
  import { translator, type Locale } from '$lib/i18n';
  import UiIcon from '$lib/components/UiIcon.svelte';
  export let lang: Locale;
  export let activeSlug = '';
  export let receivers: Array<{ code: string; slug: string; title: Record<Locale, string> }>;
  export let triggers: Array<{ code: string; slug: string; title: Record<Locale, string> }>;

  $: t = translator(lang);
  const name = (title: string) => title.replace(/\s+\([A-Z]{2}\)$/, '');
  const objectReceiverCodes = ['CB', 'CH', 'DW', 'FR', 'GD', 'GR', 'KT', 'LN', 'ML', 'MN', 'MT', 'PA', 'PM', 'QU', 'SC', 'SG', 'SK', 'SP', 'SR', 'ST', 'SW', 'SY', 'UR', 'WG', 'WH', 'WM', 'WT'];
  const objectCodes = new Set(objectReceiverCodes);
  const regularReceivers = receivers.filter((item) => !objectCodes.has(item.code));
  const objectReceivers = objectReceiverCodes
    .map((code) => receivers.find((item) => item.code === code))
    .filter((item): item is (typeof receivers)[number] => Boolean(item));
  $: currentItem = [...triggers, ...receivers].find((item) => `erm/${item.slug}` === activeSlug);
  let expanded = true;
  let stateReady = false;
  let quickLinks: HTMLDetailsElement;

  function positionTooltip(anchor: HTMLAnchorElement) {
    const frame = quickLinks.getBoundingClientRect();
    const scale = frame.width / quickLinks.offsetWidth || 1;
    const available = Math.max(0, quickLinks.clientWidth - 32);
    anchor.style.setProperty('--tooltip-max-width', `${available}px`);
    anchor.dataset.tooltipPositioned = 'true';
    anchor.removeAttribute('title');
    const measured = parseFloat(getComputedStyle(anchor, '::after').width);
    const width = Math.min(Number.isFinite(measured) && measured > 0 ? measured : available, available) * scale;
    const bounds = anchor.getBoundingClientRect();
    const center = (bounds.left + bounds.right) / 2;
    const clamped = Math.max(frame.left + 16 * scale + width / 2, Math.min(center, frame.right - 16 * scale - width / 2));
    anchor.style.setProperty('--tooltip-shift', `${(clamped - center) / scale}px`);
  }

  function refreshTooltip() {
    quickLinks?.querySelectorAll<HTMLAnchorElement>('a:hover, a:focus-visible').forEach(positionTooltip);
  }

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

<svelte:window on:resize={refreshTooltip} />

<details class="erm-quick-links" bind:this={quickLinks} open={expanded} on:toggle={updateState}>
  <summary>
    <strong>{t('erm.quick.title')}</strong>
    {#if !expanded && currentItem}<span class="current-summary">{currentItem.code}: {name(currentItem.title[lang])}</span>{/if}
    <span class="disclosure-chevron" aria-hidden="true"><UiIcon name="chevron" /></span>
  </summary>
  <nav aria-label={t('erm.quick.title')}>
    <div class="quick-row"><strong>{t('erm.quick.triggers')}</strong><span>
      {#each triggers as item}<a class:current={`erm/${item.slug}` === activeSlug} href={`${base}/${lang}/erm/${item.slug}/`} data-tooltip={item.title[lang]} title={item.title[lang]} aria-label={`${item.code}: ${item.title[lang]}`} aria-current={`erm/${item.slug}` === activeSlug ? 'page' : undefined} on:mouseenter={(event) => positionTooltip(event.currentTarget)} on:focus={(event) => positionTooltip(event.currentTarget)}>{item.code}</a>{/each}
    </span></div>
    <div class="quick-row"><strong>{t('erm.quick.receivers')}</strong><span>
      {#each regularReceivers as item}<a class:current={`erm/${item.slug}` === activeSlug} href={`${base}/${lang}/erm/${item.slug}/`} data-tooltip={name(item.title[lang])} title={name(item.title[lang])} aria-label={`${item.code}: ${name(item.title[lang])}`} aria-current={`erm/${item.slug}` === activeSlug ? 'page' : undefined} on:mouseenter={(event) => positionTooltip(event.currentTarget)} on:focus={(event) => positionTooltip(event.currentTarget)}>{item.code}</a>{/each}
    </span></div>
    <div class="quick-row object-receivers"><strong>{t('erm.quick.objectReceivers')}</strong><span>
      {#each objectReceivers as item}<a class:current={`erm/${item.slug}` === activeSlug} href={`${base}/${lang}/erm/${item.slug}/`} data-tooltip={name(item.title[lang])} title={name(item.title[lang])} aria-label={`${item.code}: ${name(item.title[lang])}`} aria-current={`erm/${item.slug}` === activeSlug ? 'page' : undefined} on:mouseenter={(event) => positionTooltip(event.currentTarget)} on:focus={(event) => positionTooltip(event.currentTarget)}>{item.code}</a>{/each}
    </span></div>
  </nav>
</details>

<style>
  .erm-quick-links { position: sticky; top: 0; z-index: 12; background: var(--quick-links-background, var(--surface-background, var(--surface))); border-bottom: 1px solid var(--border); font-size: .76rem; }
  summary { display: flex; align-items: center; gap: .7rem; min-height: 2.35rem; padding: .45rem 1rem; color: var(--text-muted); background: var(--quick-links-heading-background, transparent); cursor: pointer; list-style: none; }
  summary::-webkit-details-marker { display: none; }
  summary > strong { color: var(--gold); }
  .current-summary { min-width: 0; overflow: hidden; color: var(--text); text-overflow: ellipsis; white-space: nowrap; }
  nav { padding: .05rem 1rem .7rem; border-top: 1px solid var(--border); }
  .quick-row { display: flex; gap: .8rem; align-items: baseline; }
  .quick-row + .quick-row { margin-top: .3rem; }
  .quick-row > strong { flex: 0 0 7.4rem; color: var(--text-muted); font-weight: 600; }
  .quick-row > span { display: flex; flex-wrap: wrap; column-gap: .48rem; row-gap: .15rem; }
  a { position: relative; display: inline-block; padding: .1rem; border-radius: 2px; color: var(--gold); font-family: var(--font-mono, monospace); }
  a:hover, a:focus-visible, a.current { color: var(--text); background: var(--gold-soft); }
  a::after { content: attr(data-tooltip); display: none; position: absolute; z-index: 30; left: calc(50% + var(--tooltip-shift, 0px)); bottom: calc(100% + .42rem); width: max-content; max-width: min(22rem, var(--tooltip-max-width, 70vw)); padding: .35rem .5rem; border: 1px solid var(--border-strong); border-radius: 4px; color: var(--text); background: var(--bg-deep); box-shadow: var(--shadow-soft); font: .78rem var(--font-body); overflow-wrap: anywhere; pointer-events: none; }
  @media(min-width:601px) { a:global([data-tooltip-positioned]):hover::after, a:global([data-tooltip-positioned]):focus-visible::after { display: block; transform: translate(-50%, 0); } }
  @media(max-width:1200px) { .erm-quick-links { position: relative; top: auto; } }
  @media(max-width:600px) { .quick-row { display: block; } .quick-row > strong { display: block; margin-bottom: .3rem; } a { min-height: 28px; min-width: 26px; display: grid; place-items: center; } a::after { display: none; } }
</style>
