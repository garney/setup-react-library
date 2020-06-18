// ./lib/index.js
const run = require('./src/helpers/run');

/**
 * Displays a string in the console
 *
 * @param {string_to_say} String string to show in the console
 */
const setup = async function(name) {
    const nodePlop = require('node-plop');
    // if(name) {
    //     await run(`mkdir ${name}`);
    //     process.chdir(name);
    // }

// load an instance of plop from a plopfile
    const cwd = process.cwd();
    console.log(__dirname);
    const plop = nodePlop(`${__dirname}/plopfile.js`);
// get a generator by name
    const component = plop.getGenerator('rollup-component-library');
// const component = plop.grollup.config.jsetGenerator('component');

// run all the generator actions using the data specified
    component.runActions({name, description: '{DESCRIPTION HERE}', author: '{AUTHOR NAME}'}).then(function (results) {
        // do something after the actions have run
        console.log('results', results);
    });
};

exports.setup = setup;


