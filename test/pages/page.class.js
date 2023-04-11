export default class Page {
    get textNotification() {
        return $('#flash');
    }

    async open(url) {
        await browser.url(`/${url}`);
    }

    async refresh() {
        await browser.refresh();
    }
}