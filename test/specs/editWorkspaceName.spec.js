const credentials = require('../../credentials.json');
const LoginPage = require('../pageObjects/LoginPage');
const WorkspacePage = require('../pageObjects/WorkspacePage');
const loginPage = new LoginPage();
const workspacePage = new WorkspacePage();

describe("Trello page", () => {
    it("Login on Trello", async () => {
        await loginPage.open('./');
        await loginPage.login(credentials.email, credentials.password);
        const memberButton = await $('[data-testid="header-member-menu-button"]');
        expect(await memberButton.isDisplayed());
    });

    
    it("Edit the workspace name", async () => {
        await workspacePage.openWorkspace(); // Deschide workspace-ul
        const newName = 'test';
        await workspacePage.editWorkspaceName(newName); // Modifică numele workspace-ului
        const workspaceName = await workspacePage.getWorkspaceName(); // Obține numele workspace-ului
        expect(workspaceName).toBe(newName); 
    });

});