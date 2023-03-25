describe('Login', () => {
    it('Login with valid credentials', async () => {
        await browser.url('https://the-internet.herokuapp.com/login');

        await $('#username').setValue('tomsmith');
        await $('#password').setValue('SuperSecretPassword!');
        await $('button[type="submit"]').click();

        await expect($('h2')).toHaveText('Secure Area');
    });

    it('Login with invalid password', async () => {
        await browser.url('https://the-internet.herokuapp.com/login');

        await $('#username').setValue('tomsmith');
        await $('#password').setValue('wrongpassword');
        await $('button[type="submit"]').click();

        await expect($('#flash')).toHaveText('Your password is invalid!\n×');
    });
})


