const credentials = require("../../credentials.json");
const LoginPage = require("../../pageObjects/LoginPage");
const BoardsPage = require("../../pageObjects/BoardsPage");
const { BOARD_NAME } = require("../../fixtures/boardNameConst");

const loginPage = new LoginPage();
const boardsPage = new BoardsPage();

describe("Trello page", () => {
  before("Login on Trello", async () => {
    await loginPage.open("./");
    await loginPage.login(credentials.email, credentials.password);
  });

  it("Create a board", async () => {
    await boardsPage.createBoard(BOARD_NAME);
    const boardTitle = await boardsPage.getBoardTitle();
    expect(boardTitle).toBe(BOARD_NAME);
  });
});
