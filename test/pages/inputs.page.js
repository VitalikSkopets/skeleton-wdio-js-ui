import Page from "./base.page.js";

export default class InputsPage extends Page {
    get inputNumber() {
        return $('div#content input');
    }
}