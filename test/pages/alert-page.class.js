import Page from "./page.class.js";

class AlertPage extends Page {
  get buttonAlert() {
    return $('button[onclick="jsAlert()"]');
  }

  async open() {
    await super.open("javascript_alerts");
  }

  async getAlertText() {
    const text = await browser.getAlertText();
    await browser.acceptAlert();
    return text;
  }
}

export default new AlertPage();
