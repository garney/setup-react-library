const { exec } = require("child_process");

const run = (line) => {
    return new Promise((resolve, reject) => {
        exec(line, (error, stdout, stderr) => {
            if (error) {
                reject(error);
            }
            resolve();
        });
    });

};
module.exports = run;