import tailwindcss from '@tailwindcss/postcss';
import { readFile } from 'node:fs/promises';
import postcss from 'postcss';
import * as esbuild from 'esbuild';


const postcssPlugin = ({ plugins = [] } = {}) => {
    return {
        name: 'postcss',
        setup(build) {
            build.onLoad({ filter: /\.css$/ }, async (args) => {
                const raw = await readFile(args.path, 'utf8');
                const source = await postcss(plugins).process(raw, {
                    from: args.path,
                });
                return {
                    contents: source.css,
                    loader: 'css'
                };
            });
        },
    };
};

const buildOptions = {
    entryPoints: ['src/index.jsx'],
    bundle: true,
    outfile: 'dist/bundle.js',
    inject: ['./react-shim.js'],
    plugins: [
        postcssPlugin({ plugins: [tailwindcss] }),
    ],
    loader: { '.jsx': 'jsx', '.ttf': 'file', '.png': 'file', '.gif': 'dataurl' },
    publicPath: '/dist/',
    minify: false
}

async function runBuildAndWatch() {
    try {
        const ctx = await esbuild.context(buildOptions);
        await ctx.watch();

        console.log('[esbuild] watching for changes...');
    } catch (err) {
        console.error('[esbuild] build failed:', err);
        process.exit(1);
    }
}

runBuildAndWatch();
