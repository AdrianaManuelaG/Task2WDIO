const { Given, When, Then } = require('@wdio/cucumber-framework');
const { CHANGE_WORKSPACE_NAME } = require('../../fixtures/workspaceConst');
const credentials = require('../../credentials.json');
const LoginPage = require('../../pageObjects/LoginPage');
const WorkspacePage = require('../../pageObjects/WorkspacePage');
const { expect } = require('@wdio/globals');

const loginPage = new LoginPage();
const workspacePage = new WorkspacePage();

Given('I am logged into Trello', async () => {
  await loginPage.open('./');
  await loginPage.login(credentials.email, credentials.password);
});

When('I navigate to the workspace settings', async () => {
  await workspacePage.openWorkspace();
});

When('I change the workspace name', async () => {
  await workspacePage.editWorkspaceName(CHANGE_WORKSPACE_NAME);
});

Then('I should see the updated workspace name', async () => {
  const workspaceName = await workspacePage.getWorkspaceName();
  expect(workspaceName).toBe(CHANGE_WORKSPACE_NAME);
});
