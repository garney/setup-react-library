const run = require('../helpers/run');

function  action(plop) {
    plop.setActionType('run', function (answers, config) {
        return new Promise((resolve, reject) => {
            const { lines } = config;
            lines.forEach(async (item) => {
                await run(`${item}`);
            });
            resolve(`Run the following scripts: ${lines}`)
        });
    });

}
module.exports = action;