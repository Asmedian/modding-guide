<script lang="ts">
  import { base } from '$app/paths';
  import { translator, type Locale } from '$lib/i18n';
  import type { WikiResource } from '$lib/wiki/types';
  export let resource:WikiResource;
  export let lang:Locale;
  $: t=translator(lang);
  $: palette=resource.palette;
  $: columns=(palette?.colors.length??0)<=32?8:16;
  $: size=(columns===8?48:24)*zoom;
  let zoom=1;
  let table=false;
  let selected=0;
  function hex(color:number[]){return '#'+color.map(v=>v.toString(16).padStart(2,'0')).join('').toUpperCase();}
  function info(index:number){const color=palette?.colors[index];return color?`#${index} · ${hex(color)} · R=${color[0]} G=${color[1]} B=${color[2]}${palette?.flags?` · flags=0x${palette.flags[index].toString(16).padStart(2,'0')}`:''}`:'';}
</script>
{#if palette}
  <div class="wiki-palette-toolbar"><span>{palette.colors.length} {t('wiki.colors')} · {palette.type.toUpperCase()} PAL</span>
    {#each [1,2,4] as value}<button class="wiki-raised-button" class:current={zoom===value} on:click={()=>zoom=value} aria-pressed={zoom===value}>{value}×</button>{/each}
    <button class="wiki-raised-button" on:click={()=>table=!table} aria-pressed={table}>{t('wiki.colorTable')}</button>
    <a href={`${base}${resource.image}`} download>{t('wiki.exportPng')}</a>
  </div>
  <p class="wiki-palette-value" aria-live="polite">{info(selected)}</p>
  <div class="wiki-palette-scroll">
    {#if table}
      <table class="wiki-palette-table"><thead><tr><th>{t('wiki.color')}</th><th>#</th><th>HEX</th><th>RGB</th>{#if palette.flags}<th>Flags</th>{/if}</tr></thead><tbody>
        {#each palette.colors as color,index}<tr><td><span class="wiki-swatch" style={`background:${hex(color)}`}></span></td><td>{index}</td><td><code>{hex(color)}</code></td><td><code>R={color[0]} G={color[1]} B={color[2]}</code></td>{#if palette.flags}<td><code>0x{palette.flags[index].toString(16).padStart(2,'0')}</code></td>{/if}</tr>{/each}
      </tbody></table>
    {:else}
      <div class="wiki-palette-grid" style={`grid-template-columns:repeat(${columns},${size}px)`}>
        {#each palette.colors as color,index}<button style={`background:${hex(color)};width:${size}px;height:${size}px`} title={info(index)} aria-label={info(index)} on:click={()=>selected=index} on:focus={()=>selected=index} on:mouseenter={()=>selected=index}></button>{/each}
      </div>
    {/if}
  </div>
{/if}
