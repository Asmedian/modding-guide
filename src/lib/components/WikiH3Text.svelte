<script lang="ts">
  export let text='';
  $: parts=text.split(/(\{[^}]*\})/g);
</script>
{#each parts as part}{#if part.startsWith('{') && part.endsWith('}')}<span class="wiki-h3-emphasis">{part.slice(1,-1)}</span>{:else}{part}{/if}{/each}
