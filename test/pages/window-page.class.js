import Page from "./page.class.js";

class WindowPage extends Page {
  titleNewWindow = "New Window";

  get link() {
    return $("#content div.example a");
  }

  async open() {
    await super.open("windows");
  }

  async switchToNewWindow() {
    await browser.newWindow("https://the-internet.herokuapp.com/windows/new", {
      windowName: this.titleNewWindow,
    });
    await browser.switchToWindow(this.titleNewWindow);
  }

  async switchToParentWindow() {
    await browser.closeWindow();
    await browser.switchWindow("The Internet");
  }
}

export default new WindowPage();
