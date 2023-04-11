import Page from "./page.class.js";

class InputsPage extends Page {
    get inputNumber() {
        return $('#content input');
    }

    async open() {
        await super.open('inputs')
    }
}

export default new InputsPage();