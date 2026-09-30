<script lang="ts">
  import { onMount, tick, createEventDispatcher } from 'svelte';
  import { afterNavigate } from '$app/navigation';
  import { translator, type Locale } from '$lib/i18n';
  import { convertInteger } from '$lib/reference/radix.mjs';
  import UiIcon from './UiIcon.svelte';

  export let lang: Locale;
  const dispatch = createEventDispatcher<{ open: void }>();
  let open = false;
  let from: 'hex' | 'dec' = 'hex';
  let value = '';
  let copied = false;
  let copying = false;
  let copyTimer: ReturnType<typeof setTimeout> | undefined;
  let widget: HTMLDivElement;
  let trigger: HTMLButtonElement;
  let input: HTMLInputElement;
  $: t = translator(lang);
  $: result = convertInteger(value, from);
  $: invalid = value.trim().length > 0 && result === null;
  $: if (value || from) copied = false;
  afterNavigate(() => { open = false; });

  async function toggle() {
    open = !open;
    if (open) {
      dispatch('open');
      await tick();
      input.focus();
    }
  }
  function switchRadix() {
    if (result !== null) value = result;
    from = from === 'hex' ? 'dec' : 'hex';
    input.focus();
  }
  async function copy() {
    if (result === null) return;
    const text = result;
    copying = true;
    let success = false;
    try { await navigator.clipboard.writeText(text); success = true; }
    catch {
      const field = document.createElement('textarea');
      field.value = text;
      field.setAttribute('readonly', '');
      field.style.cssText = 'position:fixed;opacity:0';
      document.body.append(field);
      field.select();
      success = document.execCommand('copy');
      field.remove();
      input.focus();
    }
    copying = false;
    if (success && text === result) {
      copied = true;
      clearTimeout(copyTimer);
      copyTimer = setTimeout(() => { copied = false; }, 2000);
    }
  }
  onMount(() => {
    const outside = (event: PointerEvent) => {
      if (open && event.target instanceof Node && !widget.contains(event.target)) open = false;
    };
    const keyboard = (event: KeyboardEvent) => {
      if (open && event.key === 'Escape') { open = false; trigger.focus(); }
    };
    const focus = (event: FocusEvent) => {
      if (open && !copying && event.target instanceof Node && !widget.contains(event.target)) open = false;
    };
    document.addEventListener('pointerdown', outside, true);
    document.addEventListener('keydown', keyboard);
    document.addEventListener('focusin', focus);
    return () => {
      clearTimeout(copyTimer);
      document.removeEventListener('pointerdown', outside, true);
      document.removeEventListener('keydown', keyboard);
      document.removeEventListener('focusin', focus);
    };
  });
</script>

<div class="radix-widget" bind:this={widget}>
  <button class="radix-trigger" bind:this={trigger} type="button" aria-label={t('radix.title')} aria-expanded={open} on:click={toggle}>HEX↔DEC</button>
  {#if open}
    <div class="radix-dropdown" role="group" aria-label={t('radix.title')}>
      <button class="radix-switch" type="button" role="switch" aria-checked={from === 'dec'} aria-label={t('radix.decimalInput')} title={t('radix.switch')} on:click={switchRadix}>
        <span class:active={from === 'hex'}>HEX</span>
        <span class:active={from === 'dec'}>DEC</span>
      </button>
      <div class="radix-field">
        <input bind:this={input} bind:value type="text" inputmode="text" autocomplete="off" spellcheck="false" aria-label={t(from === 'hex' ? 'radix.hexInput' : 'radix.decimalInput')} aria-invalid={invalid} placeholder={from === 'hex' ? '0xFF' : '255'} />
        <output class:invalid aria-live="polite">{invalid ? t('radix.invalid') : result === null ? '—' : `${from === 'hex' ? 'DEC' : 'HEX'}: ${result}`}</output>
      </div>
      <button class="icon-button radix-copy" type="button" disabled={result === null} aria-label={t(copied ? 'code.copied' : 'radix.copy')} title={t(copied ? 'code.copied' : 'radix.copy')} on:click={copy}>
        <UiIcon name={copied ? 'check' : 'copy'} />
      </button>
    </div>
  {/if}
</div>
