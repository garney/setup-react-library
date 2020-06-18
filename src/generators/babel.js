const run = require('../helpers/run');
const cwd = process.cwd();

function  generator(plop) {
    const babelDep = [
        'babel-register',
        'babel-preset-es2015',
        'babel-preset-stage-1',
        'babel-plugin-transform-runtime'
    ];
    plop.setGenerator('babel', {
        description: 'Babel helper',
        prompts: [{
            type: 'input',
            name: 'name',
            message: `What the name of your js file?`
        }],
        actions: [
            {
                type: 'npmI',
                packages: babelDep
            },
            {
                type: 'add',
                path: `${cwd}/start.js`,
                templateFile: 'plop-templates/babel/start.js'
            }

        ]
    });
}
module.exports = generator;