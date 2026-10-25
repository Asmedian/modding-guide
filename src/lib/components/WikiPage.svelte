<script lang="ts">
  import { onDestroy, tick } from 'svelte';
  import { base } from '$app/paths';
  import AppShell from '$lib/components/AppShell.svelte';
  import UiIcon from '$lib/components/UiIcon.svelte';
  import WikiIcon from './WikiIcon.svelte';
  import WikiPagination from './WikiPagination.svelte';
  import WikiOutline from './WikiOutline.svelte';
  import { translator } from '$lib/i18n';
  import type { Article } from '$lib/server/content';
  import type { WikiCatalogPage, WikiResource } from '$lib/wiki/types';
  import navigation from '../../../content/_navigation/wiki.json';
  import '../../styles/wiki.css';

  export let article: Article;
  export let catalogPage: WikiCatalogPage | undefined = undefined;
  export let catalog: {resourceCount: number; roots: Array<{title:{ru:string;en:string}; items: Array<{labelKey:string;slug:string}>; href?:string | null; count:number}>} | undefined = undefined;
  $: lang = article.lang;
  $: t = translator(lang);
  $: canonical = `${base}/${lang}/wiki/${article.slug ? article.slug+'/' : ''}`;
  $: toc = catalogPage ? catalogPage.sections.map((section,i) => ({id:`group-${i}`,label:section.path.map(p=>p[lang]).join(' / ')})) : catalog ? catalog.roots.map((root,i)=>({id:`catalog-${i}`,label:root.title[lang]})) : article.sections;
  let active: WikiResource | null = null;
  let audio: HTMLAudioElement;
  let video: HTMLVideoElement;
  let playing = false;
  let elapsed = 0;
  let volume = .5;
  let mediaError = '';
  let popup: WikiResource | null = null;
  let Popup: typeof import('./WikiDefPopup.svelte').default | typeof import('./WikiResourcePopup.svelte').default | null = null;
  let intent = 0;
  let activePage = '';
  let opener: HTMLElement | null = null;
  let visiblePage: WikiCatalogPage | undefined;
  let maskVisible = new Set<string>();
  $: if (catalogPage !== visiblePage) { visiblePage = catalogPage; maskVisible = new Set(); }
  function toggleMask(id: string) { const next = new Set(maskVisible); if (next.has(id)) next.delete(id); else next.add(id); maskVisible = next; }
  $: if (article.slug !== activePage) {
    activePage = article.slug;
    stopMedia(); active = null; popup = null; intent += 1;
  }
  function stopMedia() {
    for (const element of [audio,video]) {
      if (element) { element.pause(); element.removeAttribute('src'); element.load(); }
    }
    playing = false; elapsed = 0;
  }
  onDestroy(() => { intent += 1; stopMedia(); });
  function clock(seconds = 0) { return `${Math.floor(seconds/60)}:${String(Math.floor(seconds%60)).padStart(2,'0')}`; }
  async function activate(item: WikiResource) {
    mediaError = '';
    if (active?.id === item.id) {
      const element = item.kind === 'video' ? video : audio;
      if (element.paused) { try { await element.play(); } catch { mediaError = t('wiki.playError'); } }
      else element.pause();
      return;
    }
    const request = ++intent;
    stopMedia(); active = item; volume = .5;
    await tick();
    if (request !== intent) return;
    const element = item.kind === 'video' ? video : audio;
    element.volume = volume;
    element.src = base+item.media;
    try { await element.play(); } catch { if (request === intent) mediaError = t('wiki.playError'); }
  }
  function seek(event: Event) {
    const element = active?.kind === 'video' ? video : audio;
    if (element && Number.isFinite(element.duration)) element.currentTime = Number((event.currentTarget as HTMLInputElement).value);
  }
  function setVolume(event: Event) {
    volume = Number((event.currentTarget as HTMLInputElement).value);
    const element = active?.kind === 'video' ? video : audio;
    if (element) element.volume = volume;
  }
  function rewind() {
    const element = active?.kind === 'video' ? video : audio;
    if (element) { element.pause(); element.currentTime = 0; elapsed = 0; }
  }
  async function openResource(item: WikiResource, event: MouseEvent) {
    const request = ++intent;
    stopMedia(); active = null;
    opener = event.currentTarget as HTMLElement;
    try {
      const component = item.kind==='def' ? await import('./WikiDefPopup.svelte') : await import('./WikiResourcePopup.svelte');
      if (request !== intent) return;
      Popup = component.default; popup = item;
    } catch { mediaError = t(item.kind==='def'?'wiki.defError':'wiki.resourceError'); }
  }
  async function closeDef() { popup = null; await tick(); opener?.focus(); }

  // Keep the native preview/play button as the keyboard and focus-return target.
  // Blank-cell clicks invoke it once, while media controls keep their own actions.
  function resourceCell(node: HTMLTableCellElement) {
    const activateCell = (event: MouseEvent) => {
      if (event.defaultPrevented || event.button !== 0 || !(event.target instanceof Element)) return;
      if (event.target.closest('button, a, input, select, textarea, label, summary, video[controls], audio[controls]')) return;
      if (window.getSelection()?.isCollapsed === false) return;
      node.querySelector<HTMLButtonElement>('button.wiki-preview, button.wiki-play')?.click();
    };
    node.addEventListener('click', activateCell);
    return { destroy: () => node.removeEventListener('click', activateCell) };
  }
</script>

<svelte:head>
  <title>{article.title} — Wiki — ERA Modding Guide</title>
  <meta name="description" content={article.summary} />
  <link rel="canonical" href={canonical} />
  <link rel="alternate" hreflang={lang === 'ru' ? 'en' : 'ru'} href={`${base}/${lang === 'ru' ? 'en' : 'ru'}/wiki/${article.slug ? article.slug+'/' : ''}`} />
</svelte:head>

<AppShell {lang} {navigation} {toc} activeSlug={`wiki/${catalogPage?.rootSlug ?? article.slug}`}>
  <article class="docs-article wiki-article" lang={lang} data-pagefind-body data-locale={lang} data-section="wiki" data-entity={article.id} data-pagefind-meta="locale[data-locale],topSection[data-section],pageId[data-entity],kind:article" data-pagefind-filter="topSection:wiki">
    <div class="article-ornament" aria-hidden="true"><span></span><UiIcon name="ornament" /><span></span></div>
    <header class="article-header"><h1 class="wiki-heading" data-pagefind-meta="title">{article.title}<small class="wiki-edition">SoD</small></h1><p class="article-summary">{article.summary}</p></header>
    {#if catalog}
      <div class="article-body">{@html article.bodyHtml}</div>
      <div class="wiki-catalog">
        {#each catalog.roots as root,i}
          <section class="wiki-card" id={`catalog-${i}`}>
            <h2 class="wiki-heading">{#if root.href}<a href={`${base}/${lang}/${root.href}/`}>{root.title[lang]}</a><small class="wiki-edition">SoD</small>{:else}{root.title[lang]}{/if}</h2>
            <p>{root.count} {t('wiki.resources')}</p>
            {#each root.items as item}<a class="wiki-card-link" href={`${base}/${lang}/${item.slug}/`}>{t(item.labelKey)}<small class="wiki-edition">SoD</small></a>{/each}
          </section>
        {/each}
      </div>
    {/if}
    {#if catalogPage}
      {#if catalogPage.number===1 && catalogPage.outline && catalogPage.outline.length>1}
        <WikiOutline {lang} entries={catalogPage.outline} />
      {/if}
      {#if catalogPage.pageCount>1}<WikiPagination page={catalogPage} {lang} />{/if}
      <p class="wiki-hint">{t('wiki.lazyHint')}</p>
      {#each catalogPage.sections as section, sectionIndex}
        <section class="wiki-section" id={`group-${sectionIndex}`} aria-label={section.path.map(p=>p[lang]).join(' / ')}>
          {#each section.path as part, depth}
            {#if sectionIndex === 0 || section.path.slice(0,depth+1).some((p,i)=>p[lang] !== catalogPage?.sections[sectionIndex-1].path[i]?.[lang])}
              <svelte:element this={depth === 0 ? 'h2' : 'h3'} id={`group-${sectionIndex}-depth-${depth}`} class="wiki-heading">{part[lang]}<small class="wiki-edition">SoD</small></svelte:element>
            {/if}
          {/each}
          <table class="wiki-table" class:wiki-font-table={section.resources.every(item=>item.kind==='fnt')}>
            <thead><tr><th>{t('wiki.resource')}</th><th>{t('wiki.filename')}</th></tr></thead>
            <tbody>
              {#each section.resources as item}
                <tr id={item.anchor}>
                  <td class="wiki-resource" use:resourceCell class:wiki-resource-action={Boolean(item.preview) || ['audio', 'video', 'h3c'].includes(item.kind)} class:wiki-spell-surface={catalogPage.rootSlug==='sprite/2/0'}>
                    {#if item.kind === 'audio' || item.kind === 'video'}
                      {#if item.kind === 'video'}
                        {#if active?.id === item.id}
                          <video bind:this={video} width={item.width} height={item.height} poster={`${base}${item.preview}`} preload="none" playsinline on:timeupdate={(e)=>elapsed=e.currentTarget.currentTime} on:play={()=>playing=true} on:pause={()=>playing=false} on:ended={()=>playing=false} on:error={()=>mediaError=t('wiki.playError')}><track kind="captions" /></video>
                        {:else}
                          <button class="wiki-preview" on:click={()=>activate(item)} aria-label={`${t('wiki.play')} ${item.name}`}><img src={`${base}${item.preview}`} alt={item.name} width={item.previewWidth} height={item.previewHeight} loading="lazy" decoding="async" /><span class="wiki-play-overlay">▶</span></button>
                        {/if}
                      {/if}
                      <div class="wiki-player" class:wiki-player-active={active?.id === item.id}>
                        <button class="wiki-play wiki-raised-button" on:click={()=>activate(item)} aria-label={`${active?.id === item.id && playing ? t('wiki.pause') : t('wiki.play')} ${item.name}`}><WikiIcon name={active?.id === item.id && playing?'pause':'play'} /></button>
                        <input type="range" min="0" max={item.duration || 1} step=".01" value={active?.id === item.id ? elapsed : 0} disabled={active?.id !== item.id} on:input={seek} aria-label={`${t('wiki.seek')} ${item.name}`} />
                        <span class="wiki-time">{clock(active?.id === item.id ? elapsed : 0)} / {clock(item.duration)}</span>
                        <button class="wiki-raised-button" disabled={active?.id !== item.id} on:click={rewind} aria-label={`${t('wiki.stop')} ${item.name}`}><WikiIcon name="stop" /></button>
                        <input class="wiki-volume" type="range" min="0" max="1" step=".01" value={active?.id === item.id ? volume : .5} disabled={active?.id !== item.id} on:input={setVolume} aria-label={`${t('wiki.volume')} ${item.name}`} />
                      </div>
                    {:else if item.kind==='h3c'}
                      <div class="wiki-campaign-summary">
                        <button class="wiki-preview" on:click={(event)=>openResource(item,event)} aria-label={`${t('wiki.openResource')} ${item.name}`}>{#if item.preview}<img src={`${base}${item.preview}`} alt={item.campaign?.name||item.name} width={item.previewWidth} height={item.previewHeight} loading="lazy" decoding="async" />{/if}<span><strong>{item.campaign?.name}</strong><small>{item.campaign?.version} · {item.campaign?.scenarioCount} {t('wiki.scenarios')}</small></span></button>
                        <p>{item.campaign?.description.replace(/[{}]/g,'')}</p>
                      </div>
                    {:else if item.preview}
                      <div class:wiki-font-surface={item.kind==='fnt'}><button class="wiki-preview" class:wiki-font-preview={item.kind==='fnt'} on:click={(event)=>openResource(item,event)} aria-label={`${t(item.kind==='def'?'wiki.openDef':'wiki.openResource')} ${item.name}`}><img src={`${base}${item.preview}`} alt={item.name} width={item.previewWidth} height={item.previewHeight} loading="lazy" decoding="async" /></button></div>
                    {:else}<code class="wiki-hex">{item.hex}</code>{/if}
                  </td>
                  <td class="wiki-resource-info"><code class="wiki-filename">{item.name}</code><small>{item.kind.toUpperCase()} · {Math.ceil(item.bytes/1024)} KiB{#if item.frames} · {item.frames} {t('wiki.frames')}{/if}</small>
                    {#if item.mask}<span id={item.mask.anchor}></span><button class="wiki-raised-button wiki-mask-toggle" aria-expanded={maskVisible.has(item.id)} on:click={()=>toggleMask(item.id)}>{t(maskVisible.has(item.id)?'wiki.hideMask':'wiki.showMask')}</button>
                      {#if maskVisible.has(item.id)}<figure class="wiki-object-mask"><img src={`${base}${item.mask.image}`} width={item.mask.width} height={item.mask.height} alt={item.mask.name} loading="lazy" decoding="async" /><figcaption><code>{item.mask.name}</code></figcaption></figure>{/if}
                    {/if}
                  </td>
                </tr>
              {/each}
            </tbody>
          </table>
        </section>
      {/each}
      {#if catalogPage.pageCount>1}<WikiPagination page={catalogPage} {lang} />{/if}
      <noscript><p>{t('wiki.nojs')}</p></noscript>
    {/if}
    {#if mediaError}<p class="wiki-error" role="alert">{mediaError}</p>{/if}
  </article>
</AppShell>
<audio bind:this={audio} preload="none" on:timeupdate={(e)=>elapsed=e.currentTarget.currentTime} on:play={()=>playing=true} on:pause={()=>playing=false} on:ended={()=>playing=false} on:error={()=>{if(active?.kind==='audio') mediaError=t('wiki.playError');}}></audio>
{#if popup && Popup}<svelte:component this={Popup} resource={popup} {lang} on:close={closeDef} />{/if}
