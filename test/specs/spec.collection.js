const url = 'https://the-internet.herokuapp.com/add_remove_elements/';
const addButton = 'div#content button';
const deleteButtonSection = '#elements';
const deleteButton = '#elements .added-manually';
const clicks = 4;


describe('Add element', () => {
    it('Add elements', async () => {
        await browser.url(url);
        for (let i = 0; i < clicks; i++) {
            await $(addButton).click();
        }

        await expect($(deleteButtonSection)).toHaveChildren(clicks);
    });

    it('Delete elements', async () => {
        for await (let el of $$(deleteButton)) {
            await el.click();
        }

        await expect($(deleteButtonSection)).toHaveChildren(0);
    });


})
