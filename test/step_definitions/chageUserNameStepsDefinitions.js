const { When, Then } = require('@wdio/cucumber-framework');
const ProfilePage = require('../../pageObjects/ProfilePage');
const { expect } = require('@wdio/globals');

const profilePage = new ProfilePage();
let newUsername;


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