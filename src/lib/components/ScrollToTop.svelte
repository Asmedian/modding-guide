<script lang="ts">
  import { onDestroy } from 'svelte';
  import { translator, type Locale } from '$lib/i18n';
  import UiIcon from './UiIcon.svelte';

  export let target: HTMLElement | undefined;
  export let lang: Locale;
  let visible = false;
  let dispose = () => {};
  $: t = translator(lang);
  $: {
    dispose();
    if (target) {
      const scroller = target;
      const update = () => {
        visible = scroller.scrollHeight > scroller.clientHeight && scroller.scrollTop > Math.min(240, scroller.clientHeight / 2);
      };
      scroller.addEventListener('scroll', update, { passive: true });
      const observer = new ResizeObserver(update);
      observer.observe(scroller);
      const content = scroller.querySelector('.content-inner');
      if (content) observer.observe(content);
      update();
      dispose = () => { scroller.removeEventListener('scroll', update); observer.disconnect(); };
    } else visible = false;
  }
  onDestroy(() => dispose());
  function scrollUp() {
    target?.scrollTo({ top: 0, behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth' });
  }
</script>

{#if visible}
  <button class="scroll-top icon-button" type="button" on:click={scrollUp} aria-label={t('nav.scrollTop')} title={t('nav.scrollTop')}><UiIcon name="arrow-up" /></button>
{/if}
