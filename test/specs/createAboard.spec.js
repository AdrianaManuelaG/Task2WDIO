import { expect, assert } from 'chai';
import credentials from '../../credentials.json' assert { type: 'json' };


describe("Trello page", () => {
    it("Open Trello page", async () => {
        await browser.url("https://trello.com"); 
        const title = await browser.getTitle();
        expect(title).to.include("Trello", "Title should contain 'Trello'");
    });

    it("Login on Trello", async () => {
        const email = credentials.email;
        const password = credentials.password;
        await $('a[data-uuid="MJFtCCgVhXrVl7v9HA7EH_login"]').click();
        await $("#username").setValue(email);
        await $("#login-submit").click();
        await browser.waitUntil(async () => $("#password").isDisplayed(), {
            timeout: 5000
        });
        await $("#password").setValue(password);
        await $("#login-submit").click();
        const userMenuButton = await $('[data-testid="header-member-menu-button"]');
        expect(await userMenuButton.isDisplayed()).to.be.true;
    });

    it("Create a board", async () => {
        
        await browser.waitUntil(async () => {
            return (await browser.getUrl()).includes('/boards');
        }, {
            timeout: 15000,
            timeoutMsg: 'Home page did not load after login'
    });
        await $('[data-testid="header-create-menu-button"]').click();
        await $('[data-testid="header-create-board-button"]').click();
        const boardName = "ProjectTest";
        await $('[data-testid="create-board-title-input"]').setValue(boardName);
        await $('[data-testid="create-board-submit-button"]').click();
        const boardTitle = await $('[data-testid="board-name-display"]').getText();
        expect(boardTitle).to.equal(boardName, `Board title should be '${boardName}'`);
});
});