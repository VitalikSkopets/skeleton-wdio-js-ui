import Page from "./base.page.js";

export default class DynamicControlsPage extends Page {

    get checkbox () { return $('input[type="checkbox"]'); }
    get buttonRemove () { return $('button[type="button"]'); }

    async open () {
        await super.open('dynamic_controls');
    }
}