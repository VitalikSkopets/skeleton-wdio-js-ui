import inputsPage from "../pages/inputs-page.class.js";

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

describe('Numeric', () => {

    it(`Input field is displayed`, async () => {
        await inputsPage.open();

        await expect(inputsPage.inputNumber).toBeDisplayed();
    });

    for (const d of data) {
        it(`${d.title} (${d.actual})`, async () => {
            await inputsPage.open();

            await inputsPage.inputNumber.setValue(d.actual);
            await expect(inputsPage.inputNumber).toHaveValue(d.expected.toString());
        });
    }
});
