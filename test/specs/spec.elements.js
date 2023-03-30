describe('Add/Remove Elements', () => {
    const link = 'https://the-internet.herokuapp.com/add_remove_elements/';
    const addBtn = '.example button';
    const deleteBtn = '.example button.added-manually';
    const addElem = async (btn) => {
        for (let i = 0; i < 10; i++) {
            await $(btn).click();
        };
    };

    it('should add elements on click', async () => {
        await browser.url(link);

        addElem(addBtn); // click the Add Element button 10 times

        await expect($$(deleteBtn)).toBeElementsArrayOfSize(10); // 10 Delete buttons in the list
    });

    it('should remove elements on click', async () => {
        await browser.url(link);

        addElem(addBtn); // click the Add Element button 10 times
        const listDelBtn = await $$(deleteBtn);
        for await (let btn of listDelBtn) { // click on each Delete button
            await btn.click();
        };
        
        // for (let i = listDelBtn.length-1; i >= 0; i--) { // click on each Delete button
        //     await listDelBtn[i].click();
        // };

        // for (let i = 0; i < listDelBtn.length; i++) { // click on each Delete button
        //     await listDelBtn[i].click();
        // };

        await expect(listDelBtn).toBeElementsArrayOfSize(0); // the list Delete buttons is empty
    });
})

describe('Dynamic Controls', () => {
    it('checkbox should disappear after clicking the Remove button', async () => {
        const checkbox = 'input[type="checkbox"]'
        await browser.url('https://the-internet.herokuapp.com/dynamic_controls');

        await $('button[type="button"]').click(); // one click on Remove button
        await $(checkbox).waitForDisplayed({ timeout: 5000, reverse: true });

        await expect($(checkbox)).not.toBeExisting();
    });
})
