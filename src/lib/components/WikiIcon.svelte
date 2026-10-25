<script lang="ts">export let name: 'play' | 'pause' | 'stop' | 'external' | 'close';</script>
<svg class="wiki-icon" aria-hidden="true" viewBox="0 0 24 24" fill="currentColor">
  {#if name === 'play'}<path d="M7 4v16l14-8z" />
  {:else if name === 'pause'}<path d="M5 4h5v16H5zM14 4h5v16h-5z" />
  {:else if name === 'stop'}<path d="M5 5h14v14H5z" />
  {:else if name === 'external'}<path d="M14 3h7v7M21 3l-11 11M10 3H3v18h18v-7" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
  {:else}<path d="m6 6 12 12M18 6 6 18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" />{/if}
</svg>
