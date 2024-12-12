const credentials = require('../../credentials.json');
const LoginPage = require("../pageObjects/LoginPage")
const loginPage = new LoginPage();


describe("Trello page", () => {
     it("Login on Trello", async () => {
        await loginPage.open('./');
        await loginPage.login(credentials.email, credentials.password);
        const memberButton = await $('[data-testid="header-member-menu-button"]');
        expect(await memberButton.isDisplayed());
    });
});


