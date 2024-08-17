import plugin from './index.cjs';
import 'unplugin';
import './index-DBCBOn9w.cjs';
import 'vite';
import '@rollup/pluginutils';
import 'vite-node/client';

/**
 * This entry file is for Vite plugin.
 *
 * @module
 */

/**
 * Vite plugin
 *
 * @example
 * ```ts
 * // vite.config.ts
 * import Macros from 'unplugin-macros/vite'
 *
 * export default defineConfig({
 *   plugins: [Macros()],
 * })
 * ```
 */
declare const _default: typeof plugin.vite;

export = _default;
