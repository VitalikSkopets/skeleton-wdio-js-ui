import dynamicControlsPage from "../pages/dynamic-controls-page.class.js";

describe('Wait for', () => {
    it('Checkbox is displayed ', async () => {
        await dynamicControlsPage.open();

        await expect(dynamicControlsPage.checkbox).toBeDisplayed();
    });

    it('Checkbox  doesn\'t exist', async () => {
        await dynamicControlsPage.open();
        await dynamicControlsPage.buttonRemove.click();

        await dynamicControlsPage.checkbox.waitForExist({timeout: 5000, reverse: true});
        await expect(dynamicControlsPage.checkbox).not.toBeExisting();
    });
});