<script lang="ts">
  import { onMount, onDestroy, createEventDispatcher } from 'svelte';
  import { base } from '$app/paths';
  import { translator, type Locale } from '$lib/i18n';
  import type { WikiResource, WikiCampaign as Campaign } from '$lib/wiki/types';
  import WikiIcon from './WikiIcon.svelte';
  import WikiPalette from './WikiPalette.svelte';
  import WikiCampaign from './WikiCampaign.svelte';
  import { dismissOutside } from '$lib/wiki/dialog';
  export let resource:WikiResource;
  export let lang:Locale;
  $: t=translator(lang);
  const dispatch=createEventDispatcher();
  const controller=new AbortController();
  let dialog:HTMLDialogElement;
  let campaign:Campaign|null=null;
  let error='';
  onMount(async()=>{
    dialog.showModal();
    if(resource.details)try{
      const response=await fetch(base+resource.details,{signal:controller.signal});
      if(!response.ok)throw new Error(String(response.status));
      const data=await response.json();if(!controller.signal.aborted)campaign=data;
    }catch{if(!controller.signal.aborted)error=t('wiki.resourceError');}
  });
  onDestroy(()=>{controller.abort();dialog?.close();});
  function close(){dispatch('close');}
</script>
<dialog bind:this={dialog} use:dismissOutside={close} class="wiki-dialog wiki-resource-dialog" aria-labelledby="resource-title" on:cancel={(event)=>{event.preventDefault();close();}}>
  <header class="wiki-dialog-header"><h2 id="resource-title" class="wiki-heading">{resource.name}{#if resource.kind !== 'h3c'}<small class="wiki-edition">{resource.edition}</small>{/if}</h2>
    {#if resource.image}<a class="wiki-raised-button" href={`${base}${resource.image}`} target="_blank" rel="noreferrer" title={t('wiki.openImageTab')} aria-label={t('wiki.openImageTab')}><WikiIcon name="external" /></a>{/if}
    <button class="wiki-raised-button" on:click={close} aria-label={t('wiki.close')}><WikiIcon name="close" /></button>
  </header>
  <div class="wiki-dialog-content">
  {#if error}<p role="alert">{error}</p>{/if}
  {#if resource.kind==='pal'}<WikiPalette {resource} {lang} />
  {:else if resource.kind==='h3c'}
    {#if campaign}<WikiCampaign {campaign} {lang} />{:else}<p>{resource.campaign?.name}</p><p>{resource.campaign?.description}</p>{/if}
  {:else if resource.image}
    <div class="wiki-popup-image" class:wiki-font-surface={resource.kind==='fnt'}><img src={`${base}${resource.image}`} alt={resource.name} width={resource.width} height={resource.height} /></div>
  {/if}
  </div>
</dialog>
