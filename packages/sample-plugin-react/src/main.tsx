import React from 'react';
import { createRoot } from 'react-dom/client';
import { createHostClient } from '@ayira/plugin-sdk';

const client = createHostClient();
client.ready().then(() => console.log('[react] plugin ready'));

function App() {
  return (
    <div style={{ padding: '1rem', font: '14px sans-serif' }}>
      <h2>Sample Plugin (React)</h2>
      <button onClick={() => client.emit('demo:clicked', { ts: Date.now() })}>
        Emit event
      </button>
    </div>
  );
}

createRoot(document.getElementById('root')!).render(<App />);
