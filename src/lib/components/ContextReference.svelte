<script lang="ts">
  import { onDestroy, onMount, tick } from 'svelte';
  import { base } from '$app/paths';
  import { translator, type Locale } from '$lib/i18n';
  import { pushReference, moveReference } from '$lib/reference/history.mjs';
  export let lang: Locale;
  export let expanded = false;
  $: t = translator(lang);
  type Entry = { url: string; title: string; bodyHtml: string; scroll: number };
  let history: { entries: Entry[]; index: number } = { entries: [], index: -1 };
  $: current = history.entries[history.index];
  let scroller: HTMLDivElement;
  let heading: HTMLHeadingElement;
  let loading = false;
  let failure = '';
  let pendingUrl = '';
  let request = 0;
  let abort: AbortController | null = null;
  let pointerInside = false;
  let historyButtonDown = false;
  onDestroy(() => { request++; abort?.abort(); });
  function saveScroll() { if (current && scroller) current.scroll = scroller.scrollTop; }
  export async function openReference(href: string) {
    const url = new URL(href, window.location.href);
    const prefix = `${base}/${lang}/erm/`;
    if (url.origin !== window.location.origin || !url.pathname.startsWith(prefix)) return false;
    const slug = url.pathname.slice(prefix.length).replace(/\/$/, '');
    if (slug === 'learn') return false;
    saveScroll(); expanded = true; loading = true; failure = ''; pendingUrl = url.href;
    const token = ++request;
    abort?.abort(); abort = new AbortController();
    try {
      const response = await fetch(`${base}/api/reference/${lang}/${slug || '_overview'}.json`, { signal: abort.signal });
      if (!response.ok) throw new Error(String(response.status));
      const data = await response.json();
      if (token !== request) return true;
      history = pushReference(history, { url: url.href, title: data.title, bodyHtml: data.bodyHtml, scroll: 0 });
      loading = false;
      await tick();
      heading?.focus({ preventScroll: true });
      const id = decodeURIComponent(url.hash.slice(1));
      const target = id && scroller.querySelector<HTMLElement>(`#${CSS.escape(`context-${id}`)}`);
      scroller.scrollTop = target ? scroller.scrollTop + target.getBoundingClientRect().top - scroller.getBoundingClientRect().top : 0;
      saveScroll();
    } catch (e) {
      if (token === request && !(e instanceof DOMException && e.name === 'AbortError')) { failure = t('erm.context.error'); loading = false; }
    }
    return true;
  }
  async function move(direction: number) {
    saveScroll(); request++; abort?.abort(); loading = false; failure = '';
    history = moveReference(history, direction);
    await tick();
    if (current) scroller.scrollTop = current.scroll;
  }
  function follow(event: MouseEvent) {
    if (event.button !== 0 || event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) return;
    const anchor = (event.target as Element).closest('a');
    if (!anchor || !current) return;
    const url = new URL(anchor.href, current.url);
    if (url.origin !== window.location.origin || !url.pathname.startsWith(`${base}/${lang}/erm/`) || url.pathname.endsWith('/learn/')) return;
    event.preventDefault(); event.stopPropagation(); void openReference(url.href);
  }
  function ownMouseHistory(event: MouseEvent) {
    if (!pointerInside || (event.button !== 3 && event.button !== 4)) return;
    event.preventDefault();
    event.stopImmediatePropagation();
    if (event.type === 'mousedown' && !historyButtonDown) {
      historyButtonDown = true;
      void move(event.button === 3 ? -1 : 1);
    }
    if (event.type === 'mouseup' || event.type === 'auxclick') historyButtonDown = false;
  }

  onMount(() => {
    window.addEventListener('mousedown', ownMouseHistory, true);
    window.addEventListener('mouseup', ownMouseHistory, true);
    window.addEventListener('auxclick', ownMouseHistory, true);
    return () => {
      window.removeEventListener('mousedown', ownMouseHistory, true);
      window.removeEventListener('mouseup', ownMouseHistory, true);
      window.removeEventListener('auxclick', ownMouseHistory, true);
    };
  });
</script>

<!-- Global capture prevents browser history from also moving the main column. -->
<!-- svelte-ignore a11y_no_static_element_interactions -->
<div class="reference-pane" on:pointerenter={() => (pointerInside = true)} on:pointerleave={() => { pointerInside = false; historyButtonDown = false; }}>
  <div class="reference-toolbar">
    <h2>{t('erm.context.title')}</h2>
    <div>
      <button type="button" aria-label={t('erm.context.back')} title={t('erm.context.back')} disabled={history.index <= 0} on:click={() => move(-1)}>←</button>
      <button type="button" aria-label={t('erm.context.forward')} title={t('erm.context.forward')} disabled={history.index >= history.entries.length - 1} on:click={() => move(1)}>→</button>
      {#if current}<a href={current.url} title={t('erm.context.open')} aria-label={t('erm.context.open')}>↗</a>{/if}
      <button type="button" class="reference-close" aria-label={t('erm.context.close')} on:click={() => (expanded = false)}>×</button>
    </div>
  </div>
  <div class="reference-scroll" bind:this={scroller}>
    {#if failure}<p role="alert">{failure}</p><a href={pendingUrl}>{t('erm.context.open')}</a>{/if}
    {#if current}
      <h3 class="reference-title" bind:this={heading} tabindex="-1">{current.title}</h3>
      <!-- svelte-ignore a11y_click_events_have_key_events a11y_no_static_element_interactions -->
      <div class="article-body reference-body" on:click={follow}>{@html current.bodyHtml}</div>
    {:else if !loading && !failure}
      <p class="reference-empty">{t('erm.context.empty')}</p>
    {/if}
  </div>
</div>

<style>
  .reference-pane { position: sticky; top: var(--header-height); height: calc(100vh - var(--header-height)); display: flex; flex-direction: column; min-height: 0; }
  .reference-toolbar { flex-shrink: 0; padding: 1rem; border-bottom: 1px solid var(--border); background: var(--surface); }
  .reference-toolbar h2 { font-size: .82rem; line-height: 1.4; margin: 0 0 .5rem; color: var(--gold); }
  .reference-toolbar > div { display: flex; gap: .4rem; }
  .reference-toolbar button, .reference-toolbar a { min-width: 34px; height: 30px; padding: 0 .4rem; display: grid; place-items: center; border: 1px solid var(--border); border-radius: 3px; color: var(--gold); background: transparent; cursor: pointer; }
  .reference-toolbar button:disabled { opacity: .3; cursor: default; }
  .reference-toolbar .reference-close { display: none; margin-left: auto; }
  .reference-scroll { overflow: auto; overscroll-behavior: contain; padding: 1rem; position: relative; min-height: 0; flex: 1; }
  .reference-title { font-size: 1.15rem; color: var(--gold); margin: 0 0 1rem; }
  .reference-empty { font-size: .85rem; color: var(--text-muted); }
  .reference-body { font-size: .83rem; }
  .reference-body :global(h2) { font-size: 1rem; margin-top: 1.4rem; }
  .reference-body :global(h3) { font-size: .92rem; }
  .reference-body :global(table) { font-size: .78rem; min-width: 0; }
  .reference-body :global(th), .reference-body :global(td) { padding: .45rem; }
  .reference-body :global(pre) { font-size: .73rem; }
  @media(max-width:1200px) { .reference-pane { position: relative; top: 0; height: 100%; } .reference-toolbar .reference-close { display: grid; } }
</style>
