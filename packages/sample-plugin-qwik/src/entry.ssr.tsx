/**
 * @file Qwik SSR entry point used for preview/build outputs.
 */
import { renderToStream, type RenderToStreamOptions } from '@builder.io/qwik/server';
import App from './root';

export default function (opts: RenderToStreamOptions) {
  return renderToStream(<App />, opts);
}
