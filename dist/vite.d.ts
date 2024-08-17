import plugin from './index.js';
import 'unplugin';
import './index-BFcuYP5-.js';
import 'vite';
import '@rollup/pluginutils';
import 'ast-kit';
import 'magic-string-ast';
import '@babel/types';
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

export { _default as default };
