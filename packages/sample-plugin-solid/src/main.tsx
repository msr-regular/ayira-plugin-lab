/**
 * @file Solid plugin bootstrap.
 */
import { render } from 'solid-js/web';
import { createSignal, onCleanup, onMount } from 'solid-js';
import { createPluginClient } from './client';

const client = createPluginClient();

const App = () => {
  const [ready, setReady] = createSignal(false);

  onMount(() => {
    client?.ready().then(() => {
      console.log('[solid] plugin ready');
      setReady(true);
    });
  });

  onCleanup(() => {
    setReady(false);
  });

  const emit = () => client?.emit('demo:clicked', { ts: Date.now() });

  return (
    <div style={{ padding: '1rem', font: '14px sans-serif' }}>
      <h2>Sample Plugin (Solid)</h2>
      <button type="button" onClick={emit} disabled={!ready()}>
        Emit event
      </button>
    </div>
  );
};

render(() => <App />, document.getElementById('root') as HTMLElement);
