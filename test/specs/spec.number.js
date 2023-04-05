import InputsPage from "../pages/inputs-page.class.js";

const data = [
    {
        actual: -255343534.35,
        expected: -255343534.35,
        title: 'Negative value'
    },
    {
        actual: 156411165e+156,
        expected: 156411165e+156,
        title: 'Value with E'
    },
    {
        actual: 'Lh,fjh!&?',
        expected: '',
        title: 'Text value'
    },
    {
        actual: '3.9746abc262eabc+28abc',
        expected: 3.9746262e+28,
        title: 'Not formatted value'
    },
];

describe('Numeric value', () => {

    const inputsPage = new InputsPage();

    it(`Check input field is displayed`, async () => {
        await browser.url('https://the-internet.herokuapp.com/inputs');

        await expect(inputsPage.inputNumber).toBeDisplayed();
    });

    for (const d of data) {
        it(`Check ${d.title} (${d.actual})`, async () => {
            await inputsPage.refresh();

            await inputsPage.inputNumber.setValue(d.actual);
            await expect(inputsPage.inputNumber).toHaveValue(d.expected.toString());
        });
    }
})
