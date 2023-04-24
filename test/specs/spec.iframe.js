import iframePage from "../pages/iframe-page.class.js";

describe("Iframe", () => {
  it("should check iframe value", async () => {
    await iframePage.open();
    await iframePage.switchToInnerFrame();

    const elem = await $("#tinymce p");
    await expect(elem).toHaveText("Your content goes here.");

    await iframePage.switchToOuterFrame();
  });
});
