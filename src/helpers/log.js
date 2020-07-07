const elegantSpinner = require('elegant-spinner');
const logUpdate = require('log-update');

const messages = [];
let message = '';
const frame = elegantSpinner();
let timer;

const render = () => {
    timer = setInterval(() => {
        if(messages.length > 0) {
            message = messages.shift();
        }
        logUpdate(`${frame()} ` + message);
    }, 50);
};

const log = (msg) => {
    messages.push(msg);
};

const stop = () => {
    clearInterval(timer);
};

module.exports = {
    render,
    log,
    stop
};