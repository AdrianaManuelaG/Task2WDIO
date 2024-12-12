const credentials = require('../../credentials.json');
const LoginPage = require('../pageObjects/LoginPage');
const SearchPage = require('../pageObjects/SearchPage');
const loginPage = new LoginPage();
const searchPage = new SearchPage();


describe("Trello page", () => {
    it("Login on Trello", async () => {
        await loginPage.open('./');
        await loginPage.login(credentials.email, credentials.password);
        const memberButton = await $('[data-testid="header-member-menu-button"]');
        expect(await memberButton.isDisplayed());
    });
    it("Testing 'Search' dialog", async () => {
        const searchQuery = "ProjectTest"; 
        await searchPage.search(searchQuery); 
        const isSearchDialogDisplayed = await searchPage.isSearchDialogDisplayed();
        expect(isSearchDialogDisplayed).toBe(true);
        
    });
});