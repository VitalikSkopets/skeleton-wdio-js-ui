import Page from "./page.class.js";

class IframePage extends Page {
  get iframe() {
    return $("#mce_0_ifr");
  }

  async open() {
    await super.open("iframe");
  }

  async switchToInnerFrame() {
    const iframe = await this.iframe;
    await browser.switchToFrame(iframe);
  }

  async switchToOuterFrame() {
    await browser.switchToParentFrame();
  }
}

export default new IframePage();
