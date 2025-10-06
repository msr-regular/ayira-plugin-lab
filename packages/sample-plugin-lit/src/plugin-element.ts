/**
 * @file Lit custom element that integrates with the Ayira host client.
 */
import { LitElement, css, html } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import { createPluginClient, type PluginClient } from './client';

@customElement('sample-plugin-lit')
export class SamplePluginLitElement extends LitElement {
  static styles = css`
    :host {
      display: block;
      padding: 1rem;
      font: 14px sans-serif;
    }

    button {
      margin-top: 0.5rem;
      cursor: pointer;
    }
  `;

  #client: PluginClient = null;

  protected ready = false;

  connectedCallback(): void {
    super.connectedCallback();
    this.#client = createPluginClient();
    void this.#client?.ready().then(() => {
      this.ready = true;
      // eslint-disable-next-line no-console
      console.log('[lit] plugin ready');
    });
  }

  disconnectedCallback(): void {
    super.disconnectedCallback();
    this.ready = false;
  }

  protected render() {
    return html`
      <h2>Sample Plugin (Lit)</h2>
      <p>Loading...</p>
      <button type="button" ?disabled=${!this.ready} @click=${this.#emitDemo}>Emit event</button>
    `;
  }

  #emitDemo = () => {
    this.#client?.emit('demo:clicked', { ts: Date.now() });
  };
}
