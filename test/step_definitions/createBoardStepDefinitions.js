const { When, Then } = require('@wdio/cucumber-framework');
const BoardsPage = require('../../pageObjects/BoardsPage');
const { BOARD_NAME } = require('../../fixtures/boardNameConst');
const boardsPage = new BoardsPage();


When('I create a new board', async () => {
  await boardsPage.createBoard(BOARD_NAME);
});

Then('I should see the board with the correct name', async () => {
  const boardTitle = await boardsPage.getBoardTitle();
  expect(boardTitle).toBe(BOARD_NAME);
});