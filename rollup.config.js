import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import external from 'rollup-plugin-peer-deps-external';
import postcss from 'rollup-plugin-postcss';
import { terser } from 'rollup-plugin-terser';
import typescript from 'rollup-plugin-typescript2';
import replace from 'rollup-plugin-replace';
import babel from 'rollup-plugin-babel';
import path from 'path';
import pkg from './package.json';
import { readdirSync } from 'fs';
const tailwindcss = require('tailwindcss');

const EXTENSIONS = ['.ts', '.tsx', '.js', '.jsx', '.json'];
const CODES = ['THIS_IS_UNDEFINED', 'MISSING_GLOBAL_NAME', 'CIRCULAR_DEPENDENCY'];

const getChunks = URI =>
    readdirSync(path.resolve(URI))
        .filter(x => x.includes('.ts'))
        .reduce((a, c) => ({ ...a, [c.replace('.ts', '')]: `src/${c}` }), {});

const discardWarning = warning => {
    if (CODES.includes(warning.code)) {
        return;
    }

    console.error(warning);
};

const env = process.env.NODE_ENV;

const commonPlugins = () => [
    external({
        includeDependencies: true,
    }),
    postcss({
        extract: true,
        plugins: [require('postcss-import'), tailwindcss('./tailwind.config/tailwind.config.js'), require('autoprefixer')],
    }),
    typescript({
        useTsconfigDeclarationDir: true,
        rollupCommonJSResolveHack: true,
        exclude: ['**/__tests__/**', '**/*.stories.tsx'],
        clean: true,
    }),
    babel({
        babelrc: false,
        presets: [['@babel/preset-env', { modules: false }], '@babel/preset-react'],
        extensions: EXTENSIONS,
        exclude: ['**/__tests__/**', '**/*.stories.tsx', 'node_modules/**'],
    }),
    commonjs({
        include: /node_modules/,
    }),
    replace({ 'process.env.NODE_ENV': JSON.stringify(env) }),
    resolve({
        extensions: EXTENSIONS,
        preferBuiltins: false,
    }),
];

export default [
    {
        onwarn: discardWarning,
        input: 'src/index.ts',
        output: [
            {
                dir: 'build',
                format: 'esm',
                sourcemap: true,
                name: 'solardesignsystem',
                globals: {
                    'react': 'React',
                    'react-dom': 'ReactDOM',
                },
            },
        ],
        plugins: [...commonPlugins(), env === 'production' && terser()],
    },
];
