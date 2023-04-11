export const config = {
    runner: 'local',
    specs: [
        './test/specs/**/spec.*.js'
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
    baseUrl: 'https://the-internet.herokuapp.com',
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

    before: async function () {
        await browser.overwriteCommand('pause', function () {
            throw 'Usage of browser.pause is not allowed!!!';
        });


        await browser.overwriteCommand('selectByVisibleText', async function (origFunction, value) {
            if ((await this.getTagName()) !== 'select') {
                if ((await this.getTagName()) === 'div') {
                    await this.click();
                    await $(`a=${value}`).click();
                }
            } else {
                await origFunction(value);
            }
        }, true);
    },

    afterTest: async function (test, context, {error, result, duration, passed, retries}) {
        if (!passed) {
            await browser.takeScreenshot();
        }
    },
}
