const run = require('../helpers/run');
const path = require('path');
const cwd = process.cwd();
const dirName = cwd.split(path.sep).pop();

function  generator(plop) {

    plop.setGenerator('rollup-component-library', {
        description: 'create a react library using rollup',
        prompts: [{
            type: 'input',
            name: 'name',
            message: `What the name of your library? (${dirName})`
        }, {
            type: 'input',
            name: 'description',
            message: `Description of your library?`
        },
            {
                type: 'input',
                name: 'author',
                message: `Author?`
            }],
        actions: (data) => {
            console.log('starting rollup generator');
            data.name = data.name === '' ? dirName : data.name;
            data.description = data.description === '' ? 'Put your description here' : data.description;
            data.author = data.author || '';
            const rollupDevDep = ['rollup', 'rollup-plugin-terser', '@rollup/plugin-babel',
                '@rollup/plugin-commonjs', '@rollup/plugin-node-resolve', '@rollup/plugin-replace',
                'npm-run-all', '@babel/core', '@babel/plugin-transform-runtime',
            '@babel/preset-env', '@babel/preset-react'];
            return [
                {
                    type: 'add',
                    path: `${cwd}/.babelrc`,
                    templateFile: 'src/plop-templates/rollup-component-library/.babelrc'
                },
                {
                    type: 'add',
                    path: `${cwd}/package.json`,
                    templateFile: 'src/plop-templates/rollup-component-library/package.json'
                },
                {
                    type: 'add',
                    path: `${cwd}/.gitignore`,
                    templateFile: 'src/plop-templates/rollup-component-library/.gitignore'
                },
                {
                    type: 'add',
                    path: `${cwd}/README.md`,
                    templateFile: 'src/plop-templates/rollup-component-library/README.md'
                },
                {
                    type: 'add',
                    path: `${cwd}/.npmignore`,
                    templateFile: 'src/plop-templates/rollup-component-library/.npmignore'
                },
                {
                    type: 'add',
                    path: `${cwd}/src/index.js`,
                    templateFile: 'src/plop-templates/rollup-component-library/src/index.js'
                },
                {
                    type: 'add',
                    path: `${cwd}/.nvmrc`,
                    templateFile: 'src/plop-templates/rollup-component-library/.nvmrc'
                },
                {
                    type: 'add',
                    path: `${cwd}/rollup.config.js`,
                    templateFile: 'src/plop-templates/rollup-component-library/rollup.config.js'
                },
                {
                    type: 'npmInstall'
                },
                {
                    type: 'npmI',
                    packages: rollupDevDep,
                    dev: true
                }
            ]
        }
    });
}
module.exports = generator;