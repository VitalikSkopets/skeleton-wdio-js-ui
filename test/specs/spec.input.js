describe('Inputs', () => {
    const path = 'https://the-internet.herokuapp.com/inputs'
    const input = '.example input[type="number"]'

    it('should be displayed numbers', async () => {
        const numbers = 1234567890
        await browser.url(path);

        await $(input).setValue(numbers);
        const inputValue = await $(input).getValue();

        await expect($(input)).toBeDisplayed();
        await expect(inputValue).toEqual(String(numbers));
        await expect($(input)).toHaveValue(inputValue);
    });

    it('should not be displayed letters', async () => {
        const letters = 'abc'
        await browser.url(path);

        await $(input).setValue(letters);
        const inputValue = await $(input).getValue();

        await expect($(input)).toBeDisplayed();
        await expect(inputValue).not.toEqual(letters)
        await expect(inputValue).toBe('')
    });

    it('should be displayed exponent', async () => {
        const exponent = '1e-10'
        await browser.url(path);

        await $(input).setValue(exponent);
        const inputValue = await $(input).getValue();

        await expect($(input)).toBeDisplayed();
        await expect(inputValue).toEqual(exponent);
        await expect($(input)).toHaveValue(inputValue);
    });
})
