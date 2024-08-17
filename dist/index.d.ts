import { UnpluginInstance } from 'unplugin';
import { O as Options } from './index-DBCBOn9w.js';
export { M as MacroContext } from './index-DBCBOn9w.js';
import 'vite';
import '@rollup/pluginutils';
import 'vite-node/client';

/**
 * This entry file is for main unplugin.
 * @module
 */

/**
 * The main unplugin instance.
 */
declare const plugin: UnpluginInstance<Options | undefined, false>;

export { Options, plugin as default };
