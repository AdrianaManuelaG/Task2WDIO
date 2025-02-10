const { Given, When, Then } = require('@wdio/cucumber-framework');
const credentials = require('../../credentials.json');
const LoginPage = require('../../pageObjects/LoginPage');
const BoardsPage = require('../../pageObjects/BoardsPage');
const { expect } = require('@wdio/globals');

const loginPage = new LoginPage();
const boardsPage = new BoardsPage();

Given('I am logged into Trello', async () => {
  await loginPage.open('./');
  await loginPage.login(credentials.email, credentials.password);

});

When('I navigate to my boards', async () => {
  await boardsPage.navigateToBoardsPage();
});

When('I open the first board', async () => {
  await boardsPage.clickFirstBoard();
});

When('I create a list named {string}', async (name) => {
  await boardsPage.createList(name);
});

Then('I should see the list named {string} created successfully', async (name) => {
  const createdListTitle = await boardsPage.getListTitle(0);
  expect(createdListTitle).toBe(name);
});
