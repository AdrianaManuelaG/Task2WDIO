const { When, Then } = require('@wdio/cucumber-framework');
const { CHANGE_WORKSPACE_NAME } = require('../../fixtures/workspaceConst');
const WorkspacePage = require('../../pageObjects/WorkspacePage');
const { expect } = require('@wdio/globals');


const workspacePage = new WorkspacePage();

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
