const run = require('../helpers/run');

function  action(plop) {
    plop.setActionType('mkdir', function (answers, config) {
        return new Promise(async (resolve, reject) => {
            const { dir } = config;
            await run(`mkdir ${dir}`);
            process.chdir(dir);
            resolve(`changed Dir ${process.cwd()}`);
        });
    });

}
module.exports = action;