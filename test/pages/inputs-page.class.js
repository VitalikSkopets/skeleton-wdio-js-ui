import { Key } from "webdriverio";
import Page from "./page.class.js";

class InputsPage extends Page {
  get inputNumber() {
    return $("#content input");
  }

  async open() {
    await super.open("inputs");
  }

  async copyInputValue() {
    await browser.keys([Key.Ctrl, "a"]);
    await browser.keys([Key.Ctrl, "c"]);
  }

  async pasteValue() {
    await browser.keys([Key.Ctrl, "v"]);
  }
}

export default new InputsPage();
