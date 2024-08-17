import { UnpluginInstance } from 'unplugin';
import { O as Options } from './index-Ju27Nud0.js';
export { M as MacroContext } from './index-Ju27Nud0.js';
import 'vite';
import '@rollup/pluginutils';
import 'ast-kit';
import '@babel/types';
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
