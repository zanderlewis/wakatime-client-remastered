import babel from '@rollup/plugin-babel';
import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import localResolve from 'rollup-plugin-local-resolve';
import filesize from 'rollup-plugin-filesize';
import minify from 'rollup-plugin-babel-minify';
import pkg from './package.json';

export default {
  input: 'src/index.js',
  external: ['axios'],
  output: [
    {
      file: pkg.browser,
      format: 'umd',
      name: pkg.name,
      globals: {
        axios: 'axios',
      },
    },
    {
      file: pkg.main,
      format: 'cjs',
      name: pkg.name,
      globals: {
        axios: 'axios',
      },
    },
    {
      file: pkg.module,
      format: 'esm',
      name: pkg.name,
      globals: {
        axios: 'axios',
      },
    },
  ],
  plugins: [
    resolve(),
    commonjs(),
    babel({ babelHelpers: 'bundled' }),
    localResolve(),
    filesize(),
    minify(),
  ],
};