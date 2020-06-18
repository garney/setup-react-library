import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import babel from '@rollup/plugin-babel';
import { terser } from 'rollup-plugin-terser';

export default {
    input: './src/index.js',
    output: {
        file: 'build/index.js',
        format: 'cjs'
    },
    external: [ 'react' ],
    plugins: [
        babel({
            exclude: /node_modules\//,
            babelHelpers: 'runtime',
            presets:[
                ["@babel/preset-env", {
                    "targets": {
                        "ie": 8
                    },
                    "modules": false
                }],
            ],
            plugins: [['@babel/plugin-transform-runtime', { useESModules: false }]]
        }),
        resolve(),
        commonjs(),
        terser({
            output: {
                comments: false
            }
        })

    ]
};