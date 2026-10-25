<script lang="ts">
  import WikiPage from '$lib/components/WikiPage.svelte';
  export let data;
</script>
<WikiPage article={data.article} catalogPage={data.catalogPage} catalog={data.catalog} />
