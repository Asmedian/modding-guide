<script lang="ts">
  import { base } from '$app/paths';
  import { translator, type Locale } from '$lib/i18n';
  import { normalizeSymbol, type SymbolEntry } from '$lib/search/symbols';
  export let lang: Locale;
  export let symbols: SymbolEntry[];
  $: t = translator(lang);
  let query = '';
  let letter = '';
  let kind = '';
  let limit = 60;
  $: needle = normalizeSymbol(query);
  $: matches = symbols.filter((s) => (!kind || s.kind === kind) && (!letter || s.name.toUpperCase().startsWith(letter)) && (!needle || [s.name, ...s.aliases, s.label[lang]].some((v) => normalizeSymbol(v).includes(needle))));
  $: visible = matches.slice(0, limit);
  function reset() { limit = 60; }
</script>

<section class="symbol-catalog" aria-label={t('erm.index.title')}>
  <div class="symbol-controls">
    <label>{t('erm.index.filter')}<input type="search" bind:value={query} on:input={reset} placeholder={t('erm.index.placeholder')} /></label>
    <label>{t('erm.index.kind')}<select bind:value={kind} on:change={reset}>
      <option value="">{t('erm.index.all')}</option>
      {#each ['receiver', 'command', 'event', 'function', 'global', 'constant'] as type}
        <option value={type}>{t(`erm.kind.${type}`)}</option>
      {/each}
    </select></label>
  </div>
  <div class="symbol-letters" aria-label={t('erm.index.letter')}>
    {#each ['', ...'ABCDEFGHIJKLMNOPQRSTUVWXYZ'] as initial}
      <button type="button" class:active={letter === initial} aria-pressed={letter === initial} on:click={() => { letter = initial; reset(); }}>{initial || t('erm.index.all')}</button>
    {/each}
  </div>
  <p class="symbol-count" aria-live="polite">{t('erm.index.found')}: {matches.length}</p>
  <div class="table-wrap"><table>
    <thead><tr><th>{t('erm.index.symbol')}</th><th>{t('erm.index.kind')}</th><th>{t('erm.index.description')}</th></tr></thead>
    <tbody>{#each visible as entry}
      <tr><td><a href={`${base}/${lang}/erm/${entry.slug}/${entry.anchor ? `#${entry.anchor}` : ''}`}><code>{entry.name}</code></a></td><td>{t(`erm.kind.${entry.kind}`)}</td><td>{entry.label[lang]}</td></tr>
    {/each}</tbody>
  </table></div>
  {#if !matches.length}<p>{t('erm.index.empty')}</p>{/if}
  {#if matches.length > limit}<button type="button" class="button-outline" on:click={() => (limit += 100)}>{t('erm.index.more')}</button>{/if}
  <noscript><p>{t('erm.index.noscript')}</p></noscript>
</section>

<style>
  .symbol-catalog { margin: 2rem 0; }
  .symbol-controls { display: flex; flex-wrap: wrap; gap: 1rem; }
  label { display: grid; gap: .4rem; flex: 1 1 12rem; }
  input, select { width: 100%; min-height: 44px; color: inherit; background: var(--surface); border: 1px solid var(--border, #645b45); padding: .65rem; border-radius: 4px; }
  .symbol-letters { display: flex; flex-wrap: wrap; gap: .25rem; margin-top: 1rem; }
  .symbol-letters button { min-width: 32px; min-height: 38px; padding: .25rem .5rem; border: 1px solid var(--border, #645b45); color: inherit; background: transparent; border-radius: 3px; cursor: pointer; }
  .symbol-letters .active { background: #a38139; color: #14120d; }
  table { width: 100%; border-collapse: collapse; }
  th, td { text-align: left; padding: .65rem; border-bottom: 1px solid var(--border, #645b45); vertical-align: top; }
  td:first-child { min-width: 13rem; }
  code { overflow-wrap: anywhere; }
  .symbol-count { font-size: .85rem; }
</style>
