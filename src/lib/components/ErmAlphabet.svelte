<script lang="ts">
  import { base } from '$app/paths';
  import { translator, type Locale } from '$lib/i18n';
  import index from '../../../content/erm/_registry/alphabet.json';
  export let lang: Locale;
  $: t = translator(lang);
  let scroller: HTMLDivElement;
  let activeLetter = '';
  $: alphabet = lang === 'ru' ? [...'АБВГДЕЖЗИКЛМНОПРСТУФХЦЧШЩЭЮЯ'] : [...'ABCDEFGHIJKLMNOPQRSTUVWXYZ'];
  $: groups = index.filter((r) => r.depth === 0).map((r) => ({ ...r, children: index.filter((c) => c.parent === r.id) })).sort((a,b) => a.label[lang].localeCompare(b.label[lang],lang));
  $: letters = new Set(groups.map((g) => g.label[lang][0].toUpperCase()));
  function jump(letter: string) {
    const target = Array.from(scroller.querySelectorAll<HTMLElement>('[data-letter]')).find((el) => el.dataset.letter === letter);
    if (target) { scroller.scrollTop += target.getBoundingClientRect().top - scroller.getBoundingClientRect().top; activeLetter = letter; }
  }
  function updateLetter() {
    const top = scroller.getBoundingClientRect().top;
    const headings = Array.from(scroller.querySelectorAll<HTMLElement>('[data-letter]'));
    const first = headings.find((el) => el.getBoundingClientRect().bottom > top + 2);
    if (first) activeLetter = first.dataset.letter ?? '';
  }
</script>

<details class="nav-group erm-alphabet" open>
  <summary><h2>{t('erm.index.title')}</h2><span aria-hidden="true">⌄</span></summary>
  <div class="alphabet-frame">
    <!-- Keyboard users can focus and scroll this independent region. -->
    <!-- svelte-ignore a11y_no_noninteractive_tabindex -->
    <div class="alphabet-scroll" bind:this={scroller} on:scroll={updateLetter} tabindex="0" role="region" aria-label={t('erm.index.title')}>
      {#each groups as group}
        <div class="alphabet-group" data-letter={group.label[lang][0].toUpperCase()}>
          <a href={`${base}/${lang}/erm/${group.slug}/${group.anchor ? `#${group.anchor}` : ''}`}>{group.label[lang]}</a>
          {#each group.children as child}
            <a class="alphabet-child" href={`${base}/${lang}/erm/${child.slug}/${child.anchor ? `#${child.anchor}` : ''}`}>{child.label[lang]}</a>
          {/each}
        </div>
      {/each}
    </div>
    <nav class="alphabet-rail" aria-label={t('erm.index.letter')}>
      {#each alphabet as letter}
        <button type="button" disabled={!letters.has(letter)} class:active={activeLetter === letter} aria-label={`${t('erm.index.letter')} ${letter}`} on:click={() => jump(letter)}>{letter}</button>
      {/each}
    </nav>
  </div>
  <a class="full-symbol-index" href={`${base}/${lang}/erm/index/`}>{t('erm.index.symbols')} →</a>
</details>

<style>
  .erm-alphabet { margin: .8rem -.45rem 1rem; padding-top: .65rem; border-top: 1px solid var(--border); }
  .alphabet-frame { display: flex; height: clamp(380px, 64vh, 670px); border-top: 1px solid var(--border); border-bottom: 1px solid var(--border); }
  .alphabet-scroll { flex: 1; min-width: 0; overflow-y: auto; overscroll-behavior: contain; scrollbar-width: thin; padding: .5rem .25rem; }
  .alphabet-group { margin-bottom: .65rem; }
  .alphabet-group a { display: block; padding: .3rem .45rem; line-height: 1.35; font-size: .83rem; overflow-wrap: anywhere; }
  .alphabet-group > a:first-child { color: var(--gold); font-weight: 600; }
  .alphabet-group .alphabet-child { margin-left: .8rem; padding-left: .7rem; border-left: 1px solid var(--border); color: var(--text-muted); font-size: .79rem; }
  a:hover, a:focus-visible { color: var(--text); background: var(--gold-soft); border-radius: 3px; }
  .alphabet-rail { width: 24px; flex: 0 0 24px; display: flex; flex-direction: column; justify-content: space-between; padding: .15rem 0; background: var(--surface); }
  .alphabet-rail button { flex: 1; min-height: 0; width: 24px; border: 0; padding: 0; font: 600 .71rem/1 var(--font-body, sans-serif); color: var(--gold); background: transparent; cursor: pointer; }
  .alphabet-rail button:disabled { color: var(--text-muted); opacity: .3; cursor: default; }
  .alphabet-rail button.active { background: var(--gold-soft); color: var(--text); }
  .full-symbol-index { display: block; margin-top: .6rem; padding: .3rem .5rem; font-size: .8rem; color: var(--gold); }
</style>
