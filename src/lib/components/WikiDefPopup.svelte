<script lang="ts">
  import { onMount, onDestroy, createEventDispatcher, tick } from 'svelte';
  import { base } from '$app/paths';
  import { translator, type Locale } from '$lib/i18n';
  import { DefFile } from '$lib/wiki/def-decoder.mjs';
  import type { WikiResource } from '$lib/wiki/types';
  import WikiIcon from './WikiIcon.svelte';
  import groupLabels from '../../../content/wiki/_registry/def-groups.json';
  import { dismissOutside } from '$lib/wiki/dialog';

  export let resource: WikiResource;
  export let lang: Locale;
  const dispatch = createEventDispatcher();
  $: t = translator(lang);
  let dialog: HTMLDialogElement;
  let animation: HTMLCanvasElement;
  let def: DefFile | null = null;
  let groups: number[] = [];
  let group = 0;
  let frame = 0;
  let interval = 100;
  let playing = false;
  let error = '';
  let showMask = false;
  let raf = 0;
  let last = 0;
  const controller = new AbortController();
  const cache = new Map<string, HTMLCanvasElement>();
  $: frames = def ? def.rawData.filter(item => item.groupId === group) : [];
  function groupName(g: number) {
    const labels = (groupLabels as Record<string, Array<{ru:string;en:string}>>)[String(resource.type)];
    const name = labels?.[g];
    return name ? `${g} — ${name.en}${lang === 'ru' ? ` (${name.ru})` : ''}` : `${t('wiki.group')} ${g}`;
  }
  $: if (def && animation) draw(group,frame);
  function decoded(g: number, f: number) {
    const key = `${g}:${f}`;
    if (!cache.has(key)) {
      const canvas = def?.readImage('combined',g,f) as HTMLCanvasElement | null;
      if (canvas) cache.set(key,canvas);
    }
    return cache.get(key);
  }
  function paint(node: HTMLCanvasElement, args: {g:number;f:number}) {
    function update(next: typeof args) {
      const canvas = decoded(next.g,next.f);
      const image = def?.rawData.find(item=>item.groupId===next.g && item.imageId===next.f)?.image;
      if (canvas && image) { node.width=Math.max(1,image.width); node.height=Math.max(1,image.height); node.getContext('2d')?.drawImage(canvas,-image.marginLeft,-image.marginTop); }
    }
    update(args);
    return { update };
  }
  function draw(g: number,f: number) {
    if (!animation) return;
    const canvas = decoded(g,f);
    if (canvas) { animation.width=canvas.width; animation.height=canvas.height; animation.getContext('2d')?.drawImage(canvas,0,0); }
  }
  function animate(now: number) {
    if (!playing || !frames.length) return;
    if (now-last >= interval) {
      const steps = Math.floor((now-last)/interval);
      frame = (frame+steps)%frames.length; last += steps*interval;
    }
    raf = requestAnimationFrame(animate);
  }
  function pause() { playing=false; cancelAnimationFrame(raf); }
  function toggle() {
    if (playing) pause();
    else { playing=true; last=performance.now(); raf=requestAnimationFrame(animate); }
  }
  async function choose(g: number) { pause(); group=g; frame=0; cache.clear(); await tick(); if (!controller.signal.aborted) toggle(); }
  function close() { pause(); dispatch('close'); }
  onMount(async () => {
    dialog.showModal();
    try {
      const response = await fetch(base+resource.original,{signal:controller.signal});
      if (!response.ok) throw new Error(String(response.status));
      const data = new Uint8Array(await response.arrayBuffer());
      if (controller.signal.aborted) return;
      def = DefFile.open(data);
      groups = def.getGroups(); group=groups[0];
      await tick(); draw(group,0); if (!controller.signal.aborted) toggle();
    } catch (cause) { if (!controller.signal.aborted) error=t('wiki.defError'); }
  });
  onDestroy(() => { controller.abort(); pause(); cache.clear(); dialog?.close(); });
</script>

<dialog bind:this={dialog} use:dismissOutside={close} class="wiki-dialog" aria-labelledby="def-title" on:cancel={(event)=>{event.preventDefault();close();}}>
  <header class="wiki-dialog-header"><h2 id="def-title" class="wiki-heading">{resource.name}<small class="wiki-edition">SoD</small></h2><button class="wiki-raised-button" on:click={close} aria-label={t('wiki.close')}><WikiIcon name="close" /></button></header>
  <div class="wiki-dialog-content">
  {#if error}<p role="alert">{error}</p>{/if}
  <div class="wiki-def-layout">
    <nav class="wiki-def-groups" aria-label={t('wiki.groups')}>
      {#each groups as g}<button class:current={group===g} on:click={()=>choose(g)}>{groupName(g)}<small>{def?.getFrameCount(g)} {t('wiki.frames')}</small><small class="wiki-edition">SoD</small></button>{/each}
    </nav>
    <div class="wiki-def-body">
      <div class="wiki-def-stage">
        {#if def}<canvas bind:this={animation} width={resource.width} height={resource.height} aria-label={resource.name}></canvas>{:else}<img src={`${base}${resource.preview}`} width={resource.previewWidth} height={resource.previewHeight} alt={resource.name} />{/if}
      </div>
      {#if resource.mask}
        <button class="wiki-raised-button wiki-mask-toggle" on:click={()=>showMask=!showMask} aria-expanded={showMask}>{t(showMask?'wiki.hideMask':'wiki.showMask')}</button>
        {#if showMask}<figure class="wiki-object-mask"><img src={`${base}${resource.mask.image}`} width={resource.mask.width} height={resource.mask.height} alt={resource.mask.name} /><figcaption><code>{resource.mask.name}</code></figcaption></figure>{/if}
      {/if}
      {#if def}
        <div class="wiki-def-controls"><button class="wiki-raised-button wiki-def-play" on:click={toggle} aria-label={playing ? t('wiki.pause') : t('wiki.play')} title={playing ? t('wiki.pause') : t('wiki.play')}><WikiIcon name={playing ? 'pause' : 'play'} /></button><label title={t('wiki.gameFrameInterval')}>{t('wiki.frameInterval')} <input type="number" min="20" max="2000" step="10" bind:value={interval} on:change={()=>interval=Math.max(20,Math.min(2000,interval || 100))} /> {t('wiki.ms')}</label><span>{frame+1}/{frames.length}</span></div>
        <p class="wiki-hint">{t('wiki.defTiming')}</p>
        <h3 class="wiki-heading">{groupName(group)}<small class="wiki-edition">SoD</small></h3>
        <div class="wiki-frame-grid">
          {#each frames as item}<button class:current={frame===item.imageId} on:click={()=>{pause();frame=item.imageId;}}><canvas use:paint={{g:group,f:item.imageId}} width={resource.width} height={resource.height} aria-label={item.name}></canvas><code>{item.name}</code><small>#{item.imageId}</small></button>{/each}
        </div>
      {/if}
    </div>
  </div>
  </div>
</dialog>
