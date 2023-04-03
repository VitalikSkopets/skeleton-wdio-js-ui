export const config = {
    runner: 'local',
    specs: [
        './test/specs/**/spec.login.js'
    ],
    maxInstances: 10,
    capabilities: [{
        maxInstances: 1,
        browserName: 'chrome',
        'goog:chromeOptions': {
            args: ['--window-size=1920,1080'],
        },
        acceptInsecureCerts: true
    }],
    logLevel: 'info',
    bail: 0,
    baseUrl: 'http://localhost',
    waitforTimeout: 3000,
    connectionRetryTimeout: 120000,
    connectionRetryCount: 3,
    services: ['chromedriver'],
    framework: 'mocha',
    reporters: ['concise', ['allure', {outputDir: 'allure-results', disableWebdriverStepsReporting: true}]],
    mochaOpts: {
        ui: 'bdd',
        timeout: 120000
    },

    afterTest: async function (test, context, {error, result, duration, passed, retries}) {
        if (!passed) {
            await browser.takeScreenshot();
        }
    },
}
