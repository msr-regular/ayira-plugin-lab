/**
 * @file Qwik root component for Ayira sample plugin.
 */
import { $, component$, useSignal, useStylesScoped$, useVisibleTask$ } from '@builder.io/qwik';
import { createPluginClient, type PluginClient } from './client';
import styles from './styles.css?inline';

export const App = component$(() => {
  useStylesScoped$(styles);
  const ready = useSignal(false);
  const clientRef = useSignal<PluginClient | null>(null);

  useVisibleTask$(async () => {
    const instance = createPluginClient();
    clientRef.value = instance;

    if (!instance) {
      return;
    }

    await instance.ready();
    console.log('[qwik] plugin ready');
    ready.value = true;
  });

  const emit = $(() => {
    clientRef.value?.emit('demo:clicked', { ts: Date.now() });
  });

  return (
    <div class="container">
      <h2>Sample Plugin (Qwik)</h2>
      <button type="button" onClick$={emit} disabled={!ready.value}>
        Emit event
      </button>
    </div>
  );
});

export default App;
