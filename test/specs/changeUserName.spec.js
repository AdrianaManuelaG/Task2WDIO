const credentials = require('../../credentials.json');
const LoginPage = require('../../pageObjects/LoginPage');
const ProfilePage = require('../../pageObjects/ProfilePage');

const loginPage = new LoginPage();
const profilePage = new ProfilePage();

describe("Trello page", () => {
    before("Login on Trello", async () => {
        await loginPage.open('./');
        await loginPage.login(credentials.email, credentials.password);
    });

    it("Change user name", async () => {
        await profilePage.navigateToProfile(); 
        const newUsername = `user_${Math.floor(Math.random() * 100000)}`; 
        await profilePage.changeUsername(newUsername); 
        const confirmationMessage = await profilePage.getConfirmationMessage(); 
        expect(confirmationMessage).toContain('Saved');
    });
});
