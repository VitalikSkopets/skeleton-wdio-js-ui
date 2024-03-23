import alertPage from "../pages/alert-page.class.js";

describe("Alert", () => {
  it("should check text alert", async () => {
    await alertPage.open();
    await alertPage.buttonAlert.click();
    const text = await alertPage.getAlertText();

    await expect(text).toEqual("I am a JS Alert");
  });
});
