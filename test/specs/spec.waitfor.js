const testUrl = 'https://the-internet.herokuapp.com/dynamic_controls';

describe('WaitFor', () => {
    it('Checkbox is displayed ', async () => {
        await browser.url(testUrl);

        await expect($('#checkbox')).toBeDisplayed();
    });

    it('Checkbox  doesn\'t exist', async () => {
        await $('button[onclick="swapCheckbox()"]').click();

        await $('#checkbox').waitForExist({timeout: 5000, reverse: true});
        await expect($('#checkbox')).not.toBeDisplayed();
    });
});