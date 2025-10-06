/**
 * @file Qwik development entry point.
 */
import { render, type RenderOptions } from '@builder.io/qwik';
import App from './root';

export default function (opts: RenderOptions) {
  return render(document, <App />, opts);
}
