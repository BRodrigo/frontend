let SpecReporter = require('jasmine-spec-reporter').SpecReporter;
let AllureReporter = require('jasmine-allure-reporter');

exports.config = {
    seleniumAddress: 'http://localhost:4444/wd/hub',
    onPrepare() {
        const global = require('./global-spec.js');

        global.user.isAdmin = browser.params.user.isAdmin == 'true';

        jasmine.getEnv().addReporter(new SpecReporter({
            spec: {
                displayErrorMessages: false
            }
        }));
        jasmine.getEnv().addReporter(new AllureReporter({
            resultsDir: 'allure-results'
        }));
    },
    specs: [
        'global-spec.js',
        'king/home-king/01-Classificar-protocolo-sem-WF-validando-CPF.spec.js',
    ],
    exclude: [],
    capabilities: {
        'browserName': 'chrome',
        'chromeOptions': {
            'args': ['--window-size=1280,1024', '--no-sandbox']
        },

        //     'browserName': 'firefox',
        //     'moz:firefoxOptions': {
        //         'binary': '/opt/firefox_59/firefox/firefox',
        //         'args': ['--window-size=1280,1024', '--no-sandbox']

        // },
        jasmineNodeOpts: {
            print: function () { }
        },
    }
};
