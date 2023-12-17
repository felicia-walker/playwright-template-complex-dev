import { buildSync } from 'esbuild'
import glob from 'glob'
import { existsSync, rmSync } from 'node:fs'

const { sync } = glob

console.log('Building dist for node (cjs)...')

// Generate entry-points for cjs compatibility
const localeDir = 'locale'
const target = ['ES2019', 'node14.17']

if (existsSync(localeDir)) {
    rmSync(localeDir, { recursive: true, force: true })
}

buildSync({
    entryPoints: sync('./src/**/*.ts'),
    outdir: './dist/cjs',
    bundle: false,
    sourcemap: true,
    minify: false,
    format: 'cjs',
    platform: 'node',
    loader: {
        '.node': 'file',
    },
    target,
})

console.log('Building dist for node type=module (esm)...')
buildSync({
    entryPoints: ['./src/index.ts'],
    outdir: './dist/esm',
    bundle: true,
    sourcemap: true,
    minify: false,
    splitting: true,
    format: 'esm',
    platform: 'node',
    loader: {
        '.node': 'file',
    },
    target,
    outExtension: { '.js': '.mjs' },
})
