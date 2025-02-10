const { When, Then } = require('@wdio/cucumber-framework');
const BoardsPage = require('../../pageObjects/BoardsPage');
const { expect } = require('@wdio/globals');

const boardsPage = new BoardsPage();

When('I navigate to my boards', async () => {
  await boardsPage.navigateToBoardsPage();
});

When('I open the first board', async () => {
  await boardsPage.clickFirstBoard();
});

When('I create a list named "TO DO"', async (name) => {
  await boardsPage.createList(name);
});

Then('I should see the list named "TO DO" created successfully', async (name) => {
  const createdListTitle = await boardsPage.getListTitle(0);
  expect(createdListTitle).toBe(name);
});
