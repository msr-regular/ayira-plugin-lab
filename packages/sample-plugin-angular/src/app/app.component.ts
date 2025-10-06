import { Component } from '@angular/core';
import { createHostClient } from '@ayira/plugin-sdk';

@Component({
  selector: 'app-root',
  standalone: true,
  template: `
    <div style="padding:1rem;font:14px sans-serif">
      <h2>Sample Plugin (Angular)</h2>
      <button (click)="emit()">Emit event</button>
    </div>
  `
})
export class AppComponent {
  #client = createHostClient();
  constructor() {
    this.#client.ready().then(() => console.log('[angular] plugin ready'));
  }
  emit() {
    this.#client.emit('demo:clicked', { ts: Date.now() });
  }
}
