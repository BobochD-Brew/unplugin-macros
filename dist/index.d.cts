import { UnpluginInstance } from 'unplugin';
import { O as Options } from './index-BFcuYP5-.cjs';
export { M as MacroContext } from './index-BFcuYP5-.cjs';
import 'vite';
import '@rollup/pluginutils';
import 'ast-kit';
import 'magic-string-ast';
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
