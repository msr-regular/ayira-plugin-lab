<!--
  @file Sample Svelte plugin root component.
  @description Renders a simple UI that emits a demo event through the Ayira host client.
-->
<script lang="ts">
  import { createEventDispatcher, onMount } from 'svelte';
  import type { PluginClient } from './client';
  import { createPluginClient } from './client';

  const dispatch = createEventDispatcher();
  let client: PluginClient = null;

  onMount(() => {
    client = createPluginClient();
    client?.ready().then(() => console.log('[svelte] plugin ready'));
  });

  function emitDemo() {
    const payload = { ts: Date.now() };
    client?.emit('demo:clicked', payload);
    dispatch('demo', payload);
  }
</script>

<style>
  :global(body) {
    margin: 0;
    font-family: 'Inter', system-ui, sans-serif;
  }

  main {
    padding: 1rem;
    font: 14px sans-serif;
  }

  button {
    margin-top: 0.5rem;
    cursor: pointer;
  }
</style>

<main>
  <h2>Sample Plugin (Svelte)</h2>
  <button type="button" on:click={emitDemo}>Emit event</button>
</main>
