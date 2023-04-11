import loginPage from "../pages/login-page.class.js";

const data = [
    {
        username: "",
        password: "",
        error: "Your username is invalid!\n×",
        title: "empty username and password"
    },
    {
        username: "",
        password: "SuperSecretPassword!",
        error: "Your username is invalid!\n×",
        title: "empty username"
    },
    {
        username: "tomsmith",
        password: "",
        error: "Your password is invalid!\n×",
        title: "empty password"
    },
    {
        username: "JohnDoe",
        password: "SuperSecretPassword!",
        error: "Your username is invalid!\n×",
        title: "wrong username"
    },
    {
        username: "tomsmith",
        password: "1",
        error: "Your password is invalid!\n×",
        title: "wrong password"
    },
    {
        username: "JohnDoe",
        password: "1",
        error: "Your username is invalid!\n×",
        title: "wrong username and password"
    }
];

describe('Login', () => {

    it('Login with valid credentials', async () => {
        await loginPage.open();
        await loginPage.login('tomsmith', 'SuperSecretPassword!');

        await expect(loginPage.textNotification).toHaveText('You logged into a secure area!\n×');
    });

    for (const d of data) {
        it(`Login with ${d.title}`, async () => {
            await loginPage.open();
            await loginPage.login(d.username, d.password);

            await expect(loginPage.textNotification).toHaveText(d.error);
        });
    }
});