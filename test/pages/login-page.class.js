import Page from "./page.class.js";

class LoginPage extends Page {
    get inputUsername() {
        return $('#username');
    }

    get inputPassword() {
        return $('#password');
    }

    get buttonLogin() {
        return $('button.radius[type="submit"]');
    }

    async open() {
        await super.open('login')
    }

    async login(username, password) {
        await this.inputUsername.setValue(username);
        await this.inputPassword.setValue(password);
        await this.buttonLogin.click();
    }
}

export default new LoginPage();