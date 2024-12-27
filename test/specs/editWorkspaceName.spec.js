
const {CHANGE_WORKSPACE_NAME} = require("../../fixtures/workspaceConst");
const credentials = require('../../credentials.json');
const LoginPage = require('../../pageObjects/LoginPage');
const WorkspacePage = require('../../pageObjects/WorkspacePage');
const loginPage = new LoginPage();
const workspacePage = new WorkspacePage();

describe("Trello page", () => {
    before("Login on Trello", async () => {
        await loginPage.open('./');
        await loginPage.login(credentials.email, credentials.password);
    });

    
    it("Edit the workspace name", async () => {
        await workspacePage.openWorkspace();  
        await workspacePage.editWorkspaceName(CHANGE_WORKSPACE_NAME); 
        const workspaceName = await workspacePage.getWorkspaceName();
        expect(workspaceName).toBe(CHANGE_WORKSPACE_NAME); 
    });

});