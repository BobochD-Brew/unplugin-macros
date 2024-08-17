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
