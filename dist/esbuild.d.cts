import plugin from './index.cjs';
import 'unplugin';
import './index-DBCBOn9w.cjs';
import 'vite';
import '@rollup/pluginutils';
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

export = _default;
