// ./lib/index.js
const run = require('./src/helpers/run');
const inquirer = require('inquirer');
const nodePlop = require('node-plop');
const path = require('path');
const Log = require('./src/helpers/log');

/**
 * Displays a string in the console
 *
 * @param {string_to_say} String string to show in the console
 */
const setup = async function(name) {
    const cwd = process.cwd();
    const dirName = cwd.split(path.sep).pop();

// load an instance of plop from a plopfile
    console.log(__dirname);
    const plop = nodePlop(`${__dirname}/plopfile.js`);
// get a generator by name
    const component = plop.getGenerator('rollup-component-library');


    inquirer
        .prompt([
            {
                type: 'input',
                name: 'componentName',
                message: 'What is your library name?',
                default: function () {
                    return name || dirName;
                },
            },
            {
                type: 'input',
                name: 'description',
                message: 'A brief description on you library',
                default: function () {
                    return 'Library component, no Description';
                },
            },
            {
                type: 'input',
                name: 'author',
                message: 'Author?',
                default: function () {
                    return process.env.USER;
                },
            },
        ])
        .then(answers => {
            console.log(JSON.stringify(answers, null, 3));
            const { componentName, description, author } = answers;
            Log.render();
            // run all the generator actions using the data specified
            component.runActions({name: componentName, description, author}).then(function (results) {
                Log.stop();
                if(results.failures.length > 0) {
                    console.log('Error creating component, make sure the directory is empty', results.failures);
                } else {
                    console.log('Successfully created component library');
                }
            }).catch(() => {
                Log.stop();
                console.log('Error creating component, make sure the directory is empty');
            });
        })
        .catch(error => {
            if(error.isTtyError) {
                // Prompt couldn't be rendered in the current environment
            } else {
                // Something else when wrong
            }
        });


};

exports.setup = setup;


