import Chance from 'chance';
import inputsPage from "../pages/inputs-page.class.js";

const chance = new Chance();

const randomString = chance.string({ alpha: true, numeric: false });
const randomSymbols = chance.string({ symbols: true, numeric: false });
const randomNumber = chance.integer();
const randomFloat = chance.floating();

const data = [
  {
    actual: randomFloat,
    expected: randomFloat,
    title: "Random floating point number",
  },
  {
    actual: randomNumber,
    expected: randomNumber,
    title: "Random integer number",
  },
  {
    actual: 156411165e156,
    expected: 156411165e156,
    title: "Value with E",
  },
  {
    actual: randomSymbols,
    expected: "",
    title: "Random symbols value",
  },
  {
    actual: randomString,
    expected: "",
    title: "Random string value",
  },
  {
    actual: "3.9746abc262eabc+28abc",
    expected: 3.9746262e28,
    title: "Not formatted value",
  },
];

describe("Numeric", () => {
  beforeEach(async () => {
    await inputsPage.open();
  });

  it(`Input field is displayed`, async () => {
    await expect(inputsPage.inputNumber).toBeDisplayed();
  });

  for (const d of data) {
    it(`${d.title} (${d.actual})`, async () => {
      await inputsPage.inputNumber.setValue(d.actual);

      await expect(inputsPage.inputNumber).toHaveValue(d.expected.toString());
    });
  }

  it(`should copy&paste (${randomNumber}) from input to input`, async () => {
    await inputsPage.inputNumber.setValue(randomNumber);
    await inputsPage.copyInputValue();
    await inputsPage.refresh();
    await inputsPage.inputNumber.click();
    await inputsPage.pasteValue();

    await expect(inputsPage.inputNumber).toHaveValue(randomNumber.toString());
  });
});
