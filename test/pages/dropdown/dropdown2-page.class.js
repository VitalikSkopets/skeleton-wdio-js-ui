import Page from "../page.class.js";

class Dropdown2Page extends Page {
    get dropdown() {
        return $('#dd');
    }

    async open() {
        await browser.url('https://tympanus.net/Tutorials/CustomDropDownListStyling/index.html');
    }
}

export default new Dropdown2Page();