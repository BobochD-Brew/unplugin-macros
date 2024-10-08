import { M as MacroContext } from './index-BFcuYP5-.cjs';
export { O as Options, a as OptionsResolved, r as resolveOptions, t as transformMacros } from './index-BFcuYP5-.cjs';
import 'vite';
import '@rollup/pluginutils';
import 'ast-kit';
import 'magic-string-ast';
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
