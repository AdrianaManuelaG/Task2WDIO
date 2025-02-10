const { Given, When, Then } = require('@wdio/cucumber-framework');
const credentials = require('../../credentials.json');
const LoginPage = require('../../pageObjects/LoginPage');
const ProfilePage = require('../../pageObjects/ProfilePage');
const { expect } = require('@wdio/globals');

const loginPage = new LoginPage();
const profilePage = new ProfilePage();
let newUsername;

Given('I am logged into Trello', async () => {
  await loginPage.open('./');
  await loginPage.login(credentials.email, credentials.password);
});

When('I navigate to the profile page', async () => {
  await profilePage.navigateToProfile();
});

When('I change my username', async () => {
  newUsername = `user_${Math.floor(Math.random() * 100000)}`;
  await profilePage.changeUsername(newUsername);
});

Then('I should see a confirmation message', async () => {
  const confirmationMessage = await profilePage.getConfirmationMessage();
  expect(confirmationMessage).toContain('Saved');
});