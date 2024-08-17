import plugin from './index.js';
import 'unplugin';
import './index-B_CvgDsz.js';
import 'vite';
import '@rollup/pluginutils';
import 'ast-kit';
import '@babel/types';
import 'vite-node/client';

/**
 * This entry file is for Rollup plugin.
 *
 * @module
 */

/**
 * Rollup plugin
 *
 * @example
 * ```ts
 * // rollup.config.js
 * import Macros from 'unplugin-macros/rollup'
 *
 * export default {
 *   plugins: [Macros()],
 * }
 * ```
 */
declare const _default: typeof plugin.rollup;

export { _default as default };
