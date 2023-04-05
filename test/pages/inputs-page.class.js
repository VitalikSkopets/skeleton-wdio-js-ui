import Page from "./page.class.js";

export default class InputsPage extends Page {
    get inputNumber() {
        return $('div#content input');
    }
}