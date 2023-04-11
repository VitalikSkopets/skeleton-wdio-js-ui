import Page from "../page.class.js";

class DropdownPage extends Page {
    get dropdown() {
        return $('#dropdown');
    }

    async open() {
        await super.open('dropdown')
    }
}

export default new DropdownPage();