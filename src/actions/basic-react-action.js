const path = require('path');
const cwd = process.cwd();
const dirName = cwd.split(path.sep).pop();

function  action(data) {
    const dep = [
        'babel-polyfill',
        'react',
        'react-dom',
        'axios',
        'react-toastify',
        'react-loader-spinner',
        'react-router-dom',
        '@garney/event-dispatcher'
    ];

    const devDev = [
        'parcel-bundler',
        'npm-run-all',
        'nodemon'
    ];


    data.name = data.name === '' ? dirName : data.name;
    const actions = [
        {
            type: 'npmInit'
        },
        {
            type: 'add',
            path: 'index.html',
            force: true,
            templateFile: 'plop-templates/basic-react/index.html.hbs'
        },
        {
            type: 'add',
            path: 'index.js',
            force: true,
            templateFile: 'plop-templates/basic-react/index.js.hbs'
        },
        {
            type: 'add',
            path: 'src/app.js',
            force: true,
            templateFile: 'plop-templates/basic-react/app.js.hbs'
        },
        {
            type: 'add',
            path: 'src/app.scss',
            force: true,
            templateFile: 'plop-templates/basic-react/app.scss.hbs'
        },
        {
            type: 'add',
            path: 'src/components/busy-indicator.scss',
            force: true,
            templateFile: 'plop-templates/basic-react/busy-indicator.scss.hbs'
        },
        {
            type: 'add',
            path: 'src/components/busy-indicator.js',
            force: true,
            templateFile: 'plop-templates/basic-react/busy-indicator.js.hbs'
        },
        {
            type: 'npmI',
            packages: dep,
            dev: false
        },
        {
            type: 'npmI',
            packages: devDev,
            dev: true
        },
        {
            type: 'append',
            path: './package.json',
            pattern: /\"scripts\"\:\s*\{/gi,
            template: '\n"start": "parcel index.html",'
        }
    ];
    return actions;
}
module.exports = action;