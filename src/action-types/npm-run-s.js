const run = require('../helpers/run');

function  action(plop) {
    plop.setActionType('npmRun', function (answers, config) {
        return new Promise((resolve, reject) => {
            const { scripts } = config;
            scripts.forEach(async (item) => {
                await run(`npm run ${item}`);
            });
            resolve(`Run the following scrpts: ${scripts}`)
        });
    });

}
module.exports = action;