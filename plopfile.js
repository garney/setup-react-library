const path = require('path');
const cwd = process.cwd();
const dirName = cwd.split(path.sep).pop();
const { exec } = require('child_process');

console.log('Directory name: ', dirName);

const findInFiles = require('find-in-files');

// actions
const basicReactAction = require('./src/actions/basic-react-action');

// action types
const npmInit = require ('./src/action-types/npm-init');
const npmI = require ('./src/action-types/npm-i');
const runS = require ('./src/action-types/run-s');
const chdir = require ('./src/action-types/chdir');
const mkdir = require ('./src/action-types/mkdir');

// generators
const helperGenerator = require('./src/generators/helper');
const babelGenerator = require('./src/generators/babel');
const webpackReactComponentLibrary = require('./src/generators/component-library');
const rollupComponentLibrary = require('./src/generators/rollup-component-library');

const run = (line) => {
    return new Promise((resolve, reject) => {
        exec(line, (error, stdout, stderr) => {
            if (error) {
                reject(error);
            }
            resolve();
        });
    });

};

module.exports = function (plop) {

    npmInit(plop);
    npmI(plop);
    runS(plop);
    chdir(plop);
    mkdir(plop);


    plop.addPartial('greeting', 'Hello, my name is {{ properCase name }} .');

    helperGenerator(plop);
    babelGenerator(plop);
    webpackReactComponentLibrary(plop);
    rollupComponentLibrary(plop);

    plop.setGenerator('component', {
        description: 'components logic',
        prompts: [{
            type: 'input',
            name: 'name',
            message: `components name please`
        }, {
            type: 'input',
            name: 'sourceFolder',
            message: `Source Folder (src) ?`
        }, {
            type: 'confirm',
            name: 'hasState',
            message: 'Do you want to add a state?'
        }],
        actions: function(data) {
            console.log('component generator');
            const sourceFolder = data.sourceFolder || 'src';
            var addState = {
                type: 'append',
                path: `${cwd}/${sourceFolder}/components/{{name}}/{{name}}.js`,
                pattern: /(-- ADD STATES HERE --)/gi,
                template: 'test State'
            };
            var actions = [
                {
                    type: 'add',
                    path: `${cwd}/${sourceFolder}/components/{{name}}/{{name}}.js`,
                    templateFile: 'plop-templates/component.hbs'
                },
                {
                    type: 'add',
                    path: `${cwd}/${sourceFolder}/components/{{name}}/{{name}}.scss`,
                    templateFile: 'plop-templates/Sass,scss.hbs'
                }
            ];
            return actions;
        }
    });
    plop.setGenerator('basic-react', {
        description: 'Setup a basic react application',
        prompts: [{
            type: 'input',
            name: 'name',
            message: `Application Name (${dirName}):`
        }],

        actions: basicReactAction
    });

};
