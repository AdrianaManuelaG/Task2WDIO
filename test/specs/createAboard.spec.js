const credentials = require('../../credentials.json');
const LoginPage = require('../pageObjects/LoginPage');
const BoardsPage = require('../pageObjects/BoardsPage');

const loginPage = new LoginPage();
const boardsPage = new BoardsPage();


describe("Trello page", () => {
    it("Login on Trello", async () => {
        await loginPage.open('./');
        await loginPage.login(credentials.email, credentials.password);
        const memberButton = await $('[data-testid="header-member-menu-button"]');
        expect(await memberButton.isDisplayed());
    });

    it("Create a board", async () => {
        const boardName = "ProjectTest";
        await boardsPage.createBoard(boardName); // Creează board-ul
        const boardTitle = await boardsPage.getBoardTitle(); // Obține titlul board-ului
        expect(boardTitle).toBe(boardName);
});
});