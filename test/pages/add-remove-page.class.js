import Page from "./page.class.js";

class AddRemovePage extends Page {
    get buttonAddElement() {
        return $('button[onclick="addElement()"]');
    }

    get buttonsDeleteElements() {
        return $$('button.added-manually');
    }

    async open() {
        await super.open('add_remove_elements/')
    }

    async addElements(count) {
        for (let i = 0; i < count; i++) {
            await this.buttonAddElement.click();
        }
    }

    async removeAllElements() {
        for await (const el of this.buttonsDeleteElements) {
            await el.click();
        }

    }
}

export default new AddRemovePage();