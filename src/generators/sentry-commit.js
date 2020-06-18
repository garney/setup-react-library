const path = require('path');
const cwd = process.cwd();
const dirName = cwd.split(path.sep).pop();

function  generator(plop) {
    plop.setGenerator('sentryCommit', {
        description: 'setup your application',
        prompts: [
            {
                type: 'input',
                name: 'name',
                message: `Extension name (${dirName})?`
            },
            {
                type: 'input',
                name: 'description',
                message: 'Description?'
            },
            {
                type: 'list',
                name: 'chromeAction',
                message: 'Extension action?',
                choices: ['browser', 'page']
            }
        ],
        actions: function(data) {
            const folderName = data.name || dirName;
            const actions = [];

            let paths = ['package.json', 'manifest.json'];

            paths.forEach(item => {
                actions.push({
                    type: 'modify',
                    path: `${cwd}/${item}`,
                    pattern: /\"name\"\s*:.+?,/gi,
                    template: `"name": "${folderName}",`
                })
            });

            paths.forEach(item => {
                actions.push({
                    type: 'modify',
                    path: `${cwd}/${item}`,
                    pattern: /\"description\"\s*:.+?,/gi,
                    template: '"description": "{{description}}",'
                })
            });


            actions.push({
                type: 'modify',
                path: `${cwd}/manifest.json`,
                pattern: /\"default_title\"\s*:.+?,/gi,
                template: `"default_title": "${folderName}",`
            });


            actions.push({
                type: 'modify',
                path: `${cwd}/manifest.json`,
                pattern: /browser_action/gi,
                template: `${data.chromeAction}_action`
            });


            actions.push({
                type: 'modify',
                path: `${cwd}src/background.js`,
                pattern: /'starting\s+.+?'/gi,
                template: `\'Starting ${folderName}\'`
            });

            return actions;
        }
    });
}
module.exports = generator;