import ElementsPage from "../pages/elements.page.js";

describe('Add/Remove Elements', () => {
    const elementsPage = new ElementsPage();

    it('should add elements on click', async () => {
        await elementsPage.open();
        await elementsPage.addElements(10);

        await expect(elementsPage.listButtonsDelete).toBeElementsArrayOfSize(10);
    });

    it('should remove elements on click', async () => {
        await elementsPage.refresh();
        await elementsPage.addElements(10);
        await elementsPage.deleteElements();

        await expect(elementsPage.listButtonsDelete).toBeElementsArrayOfSize(0);
    });
})