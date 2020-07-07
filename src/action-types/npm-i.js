const run = require('../helpers/run');
const { log } = require('../helpers/log');

function  action(plop) {
    plop.setActionType('npmI', function (answers, config) {
        log('performing npmI');
        return new Promise((resolve, reject) => {
            let line = `npm i ${config.packages.join(' ')}`;
            if(config.dev === true) {
                line = `${line} --save-dev`;
            } else {
                line = `${line} --save`;
            }

            run(line).then((data) => {
                resolve(`Installed ${config.packages.join(' ')}`);
            }).catch((err) => {
                reject(err)
            })
        });
    });

    plop.setActionType('npmInstall', function (answers, config) {
        log('performing npm install');
        return new Promise((resolve, reject) => {
            let line = `npm i`;

            run(line).then((data) => {
                resolve(`npm Install done!`);
            }).catch((err) => {
                reject(err)
            })
        });
    });
}
module.exports = action;