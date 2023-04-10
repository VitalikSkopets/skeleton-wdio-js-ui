export default class Page {

    async open (path) {
        await browser.url(`/${path}`);
    }

    async refresh() {
        await browser.refresh();
    }
}