
const { Given, When, Then } = require('@wdio/cucumber-framework');
const credentials = require('../../credentials.json');
const LoginPage = require('../../pageObjects/LoginPage');
const { validateSuccessfullLogin } = require('../../test-steps/testStepsTrelloLoginPage');

const loginPage = new LoginPage();

Given('I am on the Trello login page', async () => {
  await loginPage.open('./');
});

When('I enter valid Trello credentials', async () => {
  await loginPage.login(credentials.email, credentials.password);
});

Then('I should be successfully logged in', async () => {
  validateSuccessfullLogin();
});
