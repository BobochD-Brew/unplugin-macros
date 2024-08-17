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
 * This entry file is for esbuild plugin. Requires esbuild >= 0.15
 *
 * @module
 */

/**
 * Esbuild plugin
 *
 * @example
 * ```ts
 * // esbuild.config.js
 * import { build } from 'esbuild'
 *
 * build({
 *   plugins: [require('unplugin-macros/esbuild')()],
 * })
 * ```
 */
declare const _default: typeof plugin.esbuild;

export { _default as default };
