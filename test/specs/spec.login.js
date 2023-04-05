const url = 'https://the-internet.herokuapp.com/login';
const loginButton = '#login .radius';
const error = '#flash';
const usernameInput = '#username';
const passwordInput = '#password';

const data = [
    {
        username: "",
        password: "",
        error: "Your username is invalid!\n×",
        title: "Empty username and password"
    },
    {
        username: "",
        password: "SuperSecretPassword!",
        error: "Your username is invalid!\n×",
        title: "Empty username"
    },
    {
        username: "tomsmith",
        password: "",
        error: "Your password is invalid!\n×",
        title: "Empty password"
    },
    {
        username: "JohnDoe",
        password: "SuperSecretPassword!",
        error: "Your username is invalid!\n×",
        title: "Wrong username"
    },
    {
        username: "tomsmith",
        password: "1",
        error: "Your password is invalid!\n×",
        title: "Wrong password"
    },
    {
        username: "JohnDoe",
        password: "1",
        error: "Your username is invalid!\n×",
        title: "Wrong username and password"
    }
];

describe('Login cases', () => {

    it('Login with valid credentials', async () => {
        await browser.url(url);

        await $(usernameInput).setValue('tomsmith');
        await $(passwordInput).setValue('SuperSecretPassword!');
        await $(loginButton).click();

        await expect($('h2')).toHaveText('Secure Area');
    });

    for (const d of data) {
        it(d.title, async () => {
            await browser.url(url);

            await $(usernameInput).setValue(d.username);
            await $(passwordInput).setValue(d.password);
            await $(loginButton).click();

            await expect($(error)).toHaveText(d.error);
        });
    }
})