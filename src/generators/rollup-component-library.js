const run = require('../helpers/run');
const path = require('path');
const cwd = process.cwd();
const dirName = cwd.split(path.sep).pop();
const { log } = require('../helpers/log');

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
            log('starting rollup generator');
            const folderPath = cwd;
            const setupArray = [];
            data.name = (!data.name || data.name === '') ? dirName : data.name;
            data.description = data.description === '' ? 'Put your description here' : data.description;
            data.author = data.author || '';
            const rollupDevDep = ['rollup', 'rollup-plugin-terser', '@rollup/plugin-babel',
                '@rollup/plugin-commonjs', '@rollup/plugin-node-resolve', '@rollup/plugin-replace',
                'npm-run-all', '@babel/core', '@babel/plugin-transform-runtime',
                '@babel/preset-env', '@babel/preset-react', 'parcel', 'react', 'react-dom', 'rollup-plugin-scss',
                'rollup-plugin-svg', 'sass', '@rollup/plugin-json', 'rollup-plugin-eslint',
                'babel-eslint', 'eslint-plugin-jsx-a11y',
                'eslint-plugin-unicorn', 'eslint-config-standard', 'eslint-config-standard-react',
                'eslint-plugin-react', 'eslint-plugin-standard', 'eslint-plugin-node',
                'eslint-plugin-import'];
            const actionsArray =  [
                {
                    type: 'add',
                    path: `${folderPath}/.babelrc`,
                    templateFile: 'src/plop-templates/rollup-component-library/.babelrc'
                },
                {
                    type: 'add',
                    path: `${folderPath}/package.json`,
                    templateFile: 'src/plop-templates/rollup-component-library/package.json'
                },
                {
                    type: 'add',
                    path: `${folderPath}/.gitignore`,
                    templateFile: 'src/plop-templates/rollup-component-library/.gitignore'
                },
                {
                    type: 'add',
                    path: `${folderPath}/README.md`,
                    templateFile: 'src/plop-templates/rollup-component-library/README.md'
                },
                {
                    type: 'add',
                    path: `${folderPath}/.npmignore`,
                    templateFile: 'src/plop-templates/rollup-component-library/.npmignore'
                },
                {
                    type: 'add',
                    path: `${folderPath}/src/index.js`,
                    templateFile: 'src/plop-templates/rollup-component-library/src/index.js'
                },
                {
                    type: 'add',
                    path: `${folderPath}/src/index.scss`,
                    templateFile: 'src/plop-templates/rollup-component-library/src/index.scss'
                },
                {
                    type: 'add',
                    path: `${folderPath}/.nvmrc`,
                    templateFile: 'src/plop-templates/rollup-component-library/.nvmrc'
                },
                {
                    type: 'add',
                    path: `${folderPath}/rollup.config.js`,
                    templateFile: 'src/plop-templates/rollup-component-library/rollup.config.js'
                },
                {
                    type: 'add',
                    path: `${folderPath}/tester/index.js`,
                    templateFile: 'src/plop-templates/rollup-component-library/tester/index.js'
                },
                {
                    type: 'add',
                    path: `${folderPath}/tester/index.html`,
                    templateFile: 'src/plop-templates/rollup-component-library/tester/index.html'
                },
                {
                    type: 'add',
                    path: `${folderPath}/tester/index.scss`,
                    templateFile: 'src/plop-templates/rollup-component-library/tester/index.scss'
                },
                {
                    type: 'add',
                    path: `${folderPath}/tester/app.js`,
                    templateFile: 'src/plop-templates/rollup-component-library/tester/app.js'
                },
                {
                    type: 'npmInstall'
                },
                {
                    type: 'npmI',
                    packages: rollupDevDep,
                    dev: true
                }
            ];

            return setupArray.concat(actionsArray);
        }
    });
}
module.exports = generator;