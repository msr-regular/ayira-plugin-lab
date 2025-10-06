import { createApp, h } from 'vue';
import { createHostClient } from '@ayira/plugin-sdk';

const client = createHostClient();
client.ready().then(() => console.log('[vue] plugin ready'));

const App = {
  name: 'App',
  setup() {
    return () => h('div', { style: 'padding:1rem;font:14px sans-serif' }, [
      h('h2', 'Sample Plugin (Vue)'),
      h('button', { onclick: () => client.emit('demo:clicked', { ts: Date.now() }) }, 'Emit event')
    ]);
  }
};

createApp(App).mount('#app');
