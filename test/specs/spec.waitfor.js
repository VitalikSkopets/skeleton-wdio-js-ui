import DynamicControlsPage from "../pages/waitfor.page.js";

describe('Dynamic Controls', () => {
    const dynamicControlsPage = new DynamicControlsPage();

    it('should be displayed checkbox ', async () => {
        await dynamicControlsPage.open();

        await expect(dynamicControlsPage.checkbox).toBeDisplayed();
    });

    it('should be checkbox disappear after clicking the Remove button', async () => {
        await dynamicControlsPage.refresh();
        await dynamicControlsPage.buttonRemove.click();
        await dynamicControlsPage.checkbox.waitForDisplayed({ timeout: 5000, reverse: true });

        await expect(dynamicControlsPage.checkbox).not.toBeExisting();
    });
})