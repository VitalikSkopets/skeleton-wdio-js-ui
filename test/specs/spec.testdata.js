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

    for (const d of data) {
        it(`Check ${d.title} (${d.actual})`, async () => {
            await browser.url('https://the-internet.herokuapp.com/inputs');

            await $('div#content input').setValue(d.actual);
            await expect($('div#content input')).toHaveValue(d.expected.toString());
        });
    }
})
