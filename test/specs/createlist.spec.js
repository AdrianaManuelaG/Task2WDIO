const credentials = require('../../credentials.json');
const LoginPage = require('../../pageObjects/LoginPage');
const BoardsPage = require('../../pageObjects/BoardsPage');
const loginPage = new LoginPage();
const boardsPage = new BoardsPage(); 

describe("Trello page", () => {
    before("Login on Trello", async () => { 
        await loginPage.open('./');
        await loginPage.login(credentials.email, credentials.password);
        browser.pause(5000);
    });
    it("Create a list", async () => {
        const listName = "TO DO"; 
        await boards.navigateToBoardsPage();
        await boardsPage.clickFirstBoard();   
        await boardsPage.createList(listName);  
        const createdListTitle = await boardsPage.getListTitle(0); 
        expect(createdListTitle).toBe(listName)
       
    });
    afterTest("Return to base page", async () => {
        await boardsPage.open('./');
    });
    
});