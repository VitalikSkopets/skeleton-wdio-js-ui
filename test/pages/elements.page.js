import Page from "./base.page.js";

export default class ElementsPage extends Page {

    get buttonAdd () { return $('.example button'); }
    get listButtonsDelete () { return $$('.example button.added-manually'); }

    async open () {
        await super.open('add_remove_elements/');
    }

    async addElements (count) {
        for (let i = 0; i < count; i++) {
            await this.buttonAdd.click();
        };
    }

    async deleteElements () {
        for await (let btn of this.listButtonsDelete) {
            await btn.click();
        }
    }
}