
const credentials = require('../../credentials.json');
const LoginPage = require('../../pageObjects/LoginPage');
const loginPage = new LoginPage();
const {validateSearchPanel} = require("../../test-steps/validateSearchPanel");
const {SEARCH_FIELD_QUERY} = require("../../fixtures/searchFieldConst");

describe("Trello page", () => {
    before("Login on Trello", async () => {
        await loginPage.open('./');
        await loginPage.login(credentials.email, credentials.password);
    });
    it("Testing 'Search' dialog", async () => {
        await validateSearchPanel(SEARCH_FIELD_QUERY);
        
    });
});