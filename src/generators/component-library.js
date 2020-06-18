const run = require('../helpers/run');
const path = require('path');
const cwd = process.cwd();
const dirName = cwd.split(path.sep).pop();

function  generator(plop) {

    plop.setGenerator('webpack-react-component-library', {
        description: 'create a react library using webpack',
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
            data.name = data.name === '' ? dirName : data.name;
            data.description = data.description === '' ? 'Put your description here' : data.description;
            const sassDep = ['sass-loader', 'node-sass', 'css-loader', 'style-loader@7.3.1', 'webpack'];
            return [
                {
                    type: 'add',
                    path: `${cwd}/.babelrc`,
                    templateFile: 'plop-templates/component-library/.babelrc'
                },
                {
                    type: 'add',
                    path: `${cwd}/package.json`,
                    templateFile: 'plop-templates/component-library/package.json'
                },
                {
                    type: 'add',
                    path: `${cwd}/.gitignore`,
                    templateFile: 'plop-templates/component-library/.gitignore'
                },
                {
                    type: 'add',
                    path: `${cwd}/README.md`,
                    templateFile: 'plop-templates/component-library/README.md'
                },
                {
                    type: 'add',
                    path: `${cwd}/.npmignore`,
                    templateFile: 'plop-templates/component-library/.npmignore'
                },
                {
                    type: 'add',
                    path: `${cwd}/src/index.js`,
                    templateFile: 'plop-templates/component-library/src/index.js'
                },
                {
                    type: 'add',
                    path: `${cwd}/.nvmrc`,
                    templateFile: 'plop-templates/component-library/.nvmrc'
                },
                {
                    type: 'npmInstall'
                },
                {
                    type: 'npmRun',
                    scripts: ['build']
                },
                {
                    type: 'npmLink'
                }
            ]
        }
    });
}
module.exports = generator;