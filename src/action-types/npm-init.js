const run = require('../helpers/run');

function  action(plop) {
    plop.setActionType('npmInit', function (answers, config) {

        return new Promise((resolve, reject) => {
            run('npm init -y').then(() => {
                resolve(`npm Initialised`);
            }).catch((err) => {
                reject(err)
            })
        });
    });
}
module.exports = action;