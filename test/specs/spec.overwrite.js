import dropdownPage from "../pages/dropdown/dropdown-page.class.js";
import dropdown2Page from "../pages/dropdown/dropdown2-page.class.js";
import dropdown3Page from "../pages/dropdown/dropdown3-page.class.js";

describe('Overwrite commands', () => {
    it('Drop down type 1', async () => {
        const text = 'Option 2';
        const value = 2;

        await dropdownPage.open();
        await dropdownPage.dropdown.selectByVisibleText(text);

        await expect(dropdownPage.dropdown).toHaveValue(value.toString());
    });

    it('Drop down type 2', async () => {
        const text = 'Male';

        await dropdown2Page.open();
        await dropdown2Page.dropdown.selectByVisibleText(text);

        await expect(dropdown2Page.dropdown).toHaveText(`Gender: ${text}`);
    });

    it('Drop down type 3', async () => {
        const text = 'California';
        const value = 'CA';


        await dropdown3Page.open();
        await dropdown3Page.dropdown.selectByVisibleText(text);

        await expect(dropdown3Page.dropdown).toHaveValue(value);
    });
});