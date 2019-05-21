let SpecReporter = require('jasmine-spec-reporter').SpecReporter;
let AllureReporter = require('jasmine-allure-reporter');

exports.config = {
    directConnect: true,
    seleniumAddress: 'http://localhost:4444/wd/hub',
    onPrepare() {

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
        // 'freight/transfer/transfer.spec.js',
        // //'freight/home/home.spec.js',
        'freight/**/*.spec.js',
    ],
    exclude: [],
    capabilities: {
        'browserName': 'chrome',
        'chromeOptions': {
            'args': ['--window-size=1280,1024', '--no-sandbox']
        },
        // 'browserName': 'firefox',
        // 'moz:firefoxOptions': {
        //     'binary': '/opt/firefox_59/firefox/firefox',
        //     'args': ['--headless','--window-size=1280,1024', '--no-sandbox']

        // },
        jasmineNodeOpts: {
            print: function () { }
        },
    }
};
