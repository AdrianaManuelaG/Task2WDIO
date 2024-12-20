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
        await $("a=Boards").click();
        await browser.waitUntil(async () => {
            return (await browser.getUrl()).includes('/boards');
        }, {
            timeout: 15000,
        });
        const listItems = $$("ul.boards-page-board-section-list li.boards-page-board-section-list-item");
        await browser.waitUntil(async () => (await listItems).length > 0, { timeout: 5000 });
        await listItems[0].click();  
        await boardsPage.createList(listName);  
        const createdListTitle = await boardsPage.getListTitle(0); 
        expect(createdListTitle).toBe(listName)
       
    });
    afterTest("Return to base page", async () => {
        await boardsPage.open('./');
    });
    
});