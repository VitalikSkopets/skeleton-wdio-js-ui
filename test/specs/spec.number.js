const numValue = -255343534.35;
const numWithE = 156411165e+156;
const textValue = 'Lh,fjh!&?';
const mixedValue = '3.9746abc262eabc+28abc';
const mixedValueAfterFormat = 3.9746262e+28;

describe('Numeric value', () => {
    it('Numeric value is displayed', async () => {
        await browser.url('https://the-internet.herokuapp.com/inputs');

        await $('div#content input').setValue(numValue);
        await expect($('div#content input')).toHaveValue(numValue.toString());
    });

    it('Numeric value with "e" is displayed', async () => {
        await browser.url('https://the-internet.herokuapp.com/inputs');

        await $('div#content input').setValue(numWithE);
        await expect($('div#content input')).toHaveValue(numWithE.toString());
    });

    it('Text value is not displayed', async () => {
        await browser.url('https://the-internet.herokuapp.com/inputs');

        await $('div#content input').setValue(textValue);
        await expect($('div#content input')).toHaveValue('');
    });

    it('Mixed value is formatted and not displayed', async () => {
        await browser.url('https://the-internet.herokuapp.com/inputs');

        await $('div#content input').setValue(mixedValue);
        await expect($('div#content input')).toHaveValue(mixedValueAfterFormat.toString());
    });
})
