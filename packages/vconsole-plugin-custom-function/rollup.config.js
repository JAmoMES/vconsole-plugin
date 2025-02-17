import path from 'path'

import resolve from '@rollup/plugin-node-resolve'
import json from '@rollup/plugin-json'
import commonjs from '@rollup/plugin-commonjs'
import typescript from '@rollup/plugin-typescript'
import { visualizer } from 'rollup-plugin-visualizer'
import terser from '@rollup/plugin-terser'
import copy from 'rollup-plugin-copy'

export default {
	input: 'src/index.ts',
	output: [
		{
			file: 'dist/index.cjs',
			format: 'cjs',
			compact: true,
		},
		{
			file: 'dist/index.js',
			format: 'esm',
			compact: true,
		},
	],
	external: ['vconsole'],
	plugins: [
		terser(),
		resolve({
			browser: true,
		}),
		commonjs(),
		typescript({
			declaration: true,
			declarationDir: 'dist',
			exclude: 'src/**/*.test.ts',
		}),
		json(),
		visualizer({
			filename: path.resolve('dist', 'stat.html'),
		}),
		copy({
			targets: [
				{
					src: 'src/global.d.ts',
					dest: 'dist',
				},
			],
		}),
	],
}
