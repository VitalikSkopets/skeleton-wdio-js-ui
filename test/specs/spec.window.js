import windowPage from "../pages/window-page.class.js";

describe("Windows", () => {
  it("should switch to another window", async () => {
    await windowPage.open();
    await windowPage.link.click();
    await windowPage.switchToNewWindow();

    await expect($("h3")).toHaveText(windowPage.titleNewWindow);
    await windowPage.switchToParentWindow();
  });
});
