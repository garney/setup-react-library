const run = require('../helpers/run');
const cwd = process.cwd();

function  generator(plop) {
    plop.setGenerator('helper', {
        description: 'Helper class',
        prompts: [{
            type: 'input',
            name: 'name',
            message: `Helper class name?`
        }],
        actions: [
            {
                type: 'add',
                path: `${cwd}/src/helpers/{{name}}.js`,
                templateFile: 'plop-templates/helper.hbs'
            }
        ]
    });
}
module.exports = generator;