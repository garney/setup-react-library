const run = require('../helpers/run');

function  action(plop) {
    plop.setActionType('chdir', function (answers, config) {
        return new Promise((resolve, reject) => {
            const { dir } = config;
            process.chdir(dir);
            resolve(`changed Dir ${dir}`)
        });
    });

}
module.exports = action;