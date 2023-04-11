import addRemovePage from "../pages/add-remove-page.class.js";

describe('Add / remove element', () => {

    const clicks = 4;

    it('Add elements', async () => {
        await addRemovePage.open();
        await addRemovePage.addElements(clicks);
        await expect(addRemovePage.buttonsDeleteElements).toBeElementsArrayOfSize(clicks);
    });

    it('Remove elements', async () => {
        await addRemovePage.open();
        await addRemovePage.addElements(clicks);
        await addRemovePage.removeAllElements()

        await expect(addRemovePage.buttonsDeleteElements).toBeElementsArrayOfSize(0);
    });
});
