import Page from "./page.class.js";

class DynamicControlsPage extends Page {
    get checkbox() {
        return $('#checkbox input[type="checkbox"]');
    }

    get buttonRemove() {
        return $('button[onclick="swapCheckbox()"]');
    }

    async open() {
        await super.open('dynamic_controls')
    }

    async login(username, password) {
        await this.inputUsername.setValue(username);
        await this.inputPassword.setValue(password);
        await this.buttonLogin.click();
    }
}

export default new DynamicControlsPage();