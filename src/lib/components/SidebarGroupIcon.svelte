<script lang="ts">
  import { base } from '$app/paths';

  export let name: string;
</script>

<span class="sidebar-group-icon" aria-hidden="true" data-icon={name}>
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" focusable="false">
    <use href={`${base}/assets/ui/sidebar-icons.svg#${name}`} />
  </svg>
</span>
