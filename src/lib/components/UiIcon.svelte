<script lang="ts">
  import { base } from '$app/paths';

  export let name: string;
</script>

<svg class="ui-icon" aria-hidden="true" viewBox="0 0 24 24">
  <use href={`${base}/assets/ui/icons.svg#${name}`} />
</svg>
