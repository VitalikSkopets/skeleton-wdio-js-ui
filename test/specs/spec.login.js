import LoginPage from "../pages/login.page.js";

const testData = [
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

describe('Login form', () => {

    const loginPage = new LoginPage();

    beforeEach(async () => {
        await loginPage.open();
    });

    it('should allow access with correct creds', async () => {
        await loginPage.inputUsername.setValue('tomsmith');
        await loginPage.inputPassword.setValue('SuperSecretPassword!');
        await loginPage.buttonSubmit.click();

        await expect(loginPage.header).toHaveText('Secure Area');
    });

    for (const data of testData) {
        it(`should deny access with ${data.title}`, async () => {
            await loginPage.inputUsername.setValue(data.username);
            await loginPage.inputPassword.setValue(data.password);
            await loginPage.buttonSubmit.click();

            await expect(loginPage.header).toHaveText('Login Page');
            await expect(loginPage.flash).toHaveText(data.error);
        });
    }
})