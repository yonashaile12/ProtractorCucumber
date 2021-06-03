protractor = require('./conf.js');
let config = protractor.config;

config.capabilities = {
    'browserName':'chrome',
    'directConnect':true,
    chromeOptions: {
        'useAutomationExtension': false,
        'args': [
            'show-fps-counter=true',
            'allow-file-access-from-files'
        ],
        'binary': ''
    },
    metadata: {
        browser: {
            name: 'chrome',
            version: '58'
        },
        device: 'macOS Big Sur',
        platform: {
            name: 'osx',
            version: '11.4'
        }
    }
}

exports.config = config;