import { build } from 'esbuild';
import postcss from 'postcss';
import { readFile } from 'node:fs/promises';
import tailwindcss from '@tailwindcss/postcss';


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

await build({
    entryPoints: ['public/index.jsx'],
    bundle: true,
    outfile: 'dist/bundle.js',
    inject: ['./react-shim.js'],
    plugins: [
        postcssPlugin({ plugins: [tailwindcss] }),
    ],
    loader: { '.jsx': 'jsx', '.ttf': 'file', '.png': 'file', '.gif': 'dataurl' },
    publicPath: '/dist/',
    minify: true,
    sourcemap: false
}).catch(() => process.exit(1));
