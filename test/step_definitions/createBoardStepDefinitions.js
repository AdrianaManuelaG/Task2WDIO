const { Given, When, Then } = require('@wdio/cucumber-framework');
const LoginPage = require('../../pageObjects/LoginPage');
const BoardsPage = require('../../pageObjects/BoardsPage');
const credentials = require('../../credentials.json');
const { BOARD_NAME } = require('../../fixtures/boardNameConst');

const loginPage = new LoginPage();
const boardsPage = new BoardsPage();

Given('I am logged into Trello', async () => {
  await loginPage.open('./');
  await loginPage.login(credentials.email, credentials.password);
});

When('I create a new board', async () => {
  await boardsPage.createBoard(BOARD_NAME);
});

Then('I should see the board with the correct name', async () => {
  const boardTitle = await boardsPage.getBoardTitle();
  expect(boardTitle).toBe(BOARD_NAME);
});