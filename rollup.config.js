import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import json from '@rollup/plugin-json';
import babel from '@rollup/plugin-babel';
import { terser } from 'rollup-plugin-terser';

export default {
    input: './index.js',
    output: {
        file: 'lib/index.js',
        format: 'cjs'
    },
    plugins: [
        babel({
            exclude: /node_modules\/.*/,
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
        json(),
        terser({
            output: {
                comments: false
            }
        })

    ]
};