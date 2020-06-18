const run = require('../helpers/run');

function  action(plop) {
    plop.setActionType('npmLink', function (answers, config) {
        return new Promise((resolve, reject) => {
            run('nom link').then(() => {
                resolve('Linked')
            }).catch(e => {
                reject(e);
            });        });
    });

}
module.exports = action;