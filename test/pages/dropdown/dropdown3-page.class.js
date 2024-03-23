import Page from "../page.class.js";

class Dropdown3Page extends Page {
    get dropdown() {
        return $('select.js-example-templating.js-states');
    }

    async open() {
        await browser.url('https://select2.org/dropdown');
    }
}

export default new Dropdown3Page();