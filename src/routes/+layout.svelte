<script lang="ts">
  import "./reset.css";
  import "virtual:windi.css";
  import "./global.css";
  import { page } from "$app/stores";
  import { SITE_NAME } from "$lib/constants";
</script>

<svelte:head>
  {#if $page.data?._seo?.title}
    <title>{$page.data._seo.title}</title>
  {:else}
    <title>{SITE_NAME}</title>
  {/if}
</svelte:head>

<div class="container mx-auto">
  <nav class="flex items-center gap-8">
    <p class="text-2xl font-bold mr-auto font-serif">{SITE_NAME}</p>
    <a href="/">Home</a>
  </nav>
  <main>
    <slot />
  </main>
</div>

<style>
  /* :global(body) {
    max-width: 80ch;
    margin-inline: auto;
    font-family: sans-serif;
    padding: 1rem;
  } */
</style>
