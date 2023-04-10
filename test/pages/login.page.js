import Page from "./base.page.js";

export default class LoginPage extends Page {

    get inputUsername () { return $('#username'); }
    get inputPassword () { return $('#password'); }
    get buttonSubmit () { return $('#login .radius'); }
    get flash () { return $('#flash'); }
    get header () { return $('h2'); }

    async open () {
        await super.open('login');
    }
}