const link = 'https://the-internet.herokuapp.com/login';
const validUsername = 'tomsmith';
const validPassword = 'SuperSecretPassword!';
const emptyValue = '';
const invalidUsername = 'invalid_username';
const invalidPassword = 'invalid_password';
const invalidUsernameMsg = 'Your username is invalid!';
const invalidPasswordMsg = 'Your password is invalid!';
const testData = [
    {
        username: validUsername,
        pasword: emptyValue,
        expected: invalidPasswordMsg,
        header: 'valid login and empty password'
    },
    {
        username: validUsername,
        pasword: invalidPassword,
        expected: invalidPasswordMsg,
        header: 'valid login and incorrect password'
    },
    {
        username: emptyValue,
        pasword: validPassword,
        expected: invalidUsernameMsg,
        header: 'valid password and empty username'
    },
    {
        username: invalidUsername,
        pasword: validPassword,
        expected: invalidUsernameMsg,
        header: 'valid password and incorrect username'
    },
    {
        username: invalidUsername,
        pasword: invalidPassword,
        expected: invalidUsernameMsg,
        header: 'incorrect credentials'
    },
];

describe('Login', () => {
    it('Login with valid credentials', async () => {
        await browser.url(link);

        await $('#username').setValue(validUsername);
        await $('#password').setValue(validPassword);
        await $('button[type="submit"]').click();

        await expect($('h2')).toHaveText('Secure Area');
    });

    for (const data of testData) {
        it(`Sign in should fail with ${data.header}.`, async () => {
            await browser.url(link);
    
            await $('#username').setValue(data.username);
            await $('#password').setValue(data.pasword);
            await $('button[type="submit"]').click();
    
            await expect($('#flash')).toHaveTextContaining(data.expected);
        });
    };
})
