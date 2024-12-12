const credentials = require('../../credentials.json');
const LoginPage = require('../pageObjects/LoginPage');
const ProfilePage = require('../pageObjects/ProfilePage');

const loginPage = new LoginPage();
const profilePage = new ProfilePage();

describe("Trello page", () => {
    it("Login on Trello", async () => {
       await loginPage.open('./');
        await loginPage.login(credentials.email, credentials.password);
        const memberButton = await $('[data-testid="header-member-menu-button"]');
        expect(await memberButton.isDisplayed());
    });

    it("Change user name", async () => {
        await $(".DweEFaF5owOe02").click();
        await $('a[data-testid="account-menu-profile"]').click();

        const newUsername = `user_${Math.floor(Math.random() * 100000)}`; 
        await profilePage.changeUsername(newUsername); 

        const confirmationMessage = await profilePage.getConfirmationMessage(); 
        expect(confirmationMessage).toContain('Saved');
        console.log("Username successfully updated");
    });
});
