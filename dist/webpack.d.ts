import plugin from './index.js';
import 'unplugin';
import './index-DBCBOn9w.js';
import 'vite';
import '@rollup/pluginutils';
import 'vite-node/client';

/**
 * This entry file is for webpack plugin.
 *
 * @module
 */

/**
 * Webpack plugin
 *
 * @example
 * ```ts
 * // webpack.config.js
 * module.exports = {
 *  plugins: [require('unplugin-macros/webpack')()],
 * }
 * ```
 */
declare const _default: typeof plugin.webpack;

export { _default as default };
