
describe('Login', () => {
    it('Login with valid credentials', async () => {
        await browser.url('https://the-internet.herokuapp.com/login');

        await $('#username').setValue('tomsmith');
        await $('#password').setValue('SuperSecretPassword!');
        await $('button[type="submit"]').click();

        await expect(await $('.subheader').getText()).toEqual('Welcome to the Secure Area. When you are done click logout below.');
    })
})


