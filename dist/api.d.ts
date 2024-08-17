import { M as MacroContext } from './index-Ju27Nud0.js';
export { O as Options, a as OptionsResolved, r as resolveOptions, t as transformMacros } from './index-Ju27Nud0.js';
import 'vite';
import '@rollup/pluginutils';
import 'ast-kit';
import 'unplugin';
import '@babel/types';
import 'vite-node/client';

/**
 * A TypeScript helper function that defines a macro.
 *
 * @param fn - The function that represents the macro.
 * @returns A function that can be called with the macro arguments.
 */
declare function defineMacro<Args extends any[], Return>(fn: (this: MacroContext, ...args: Args) => Return): (...args: Args) => Return;

export { MacroContext, defineMacro };
