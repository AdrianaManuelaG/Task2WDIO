const credentials = require('../../credentials.json');

describe("Trello page", () => {
    it("Open Trello page", async () => {
        await browser.url("https://trello.com/home");
    })
    it("Login on Trello", async () => { 
        const email = credentials.email;
        const password = credentials.password;
        await $("a[data-uuid='MJFtCCgVhXrVl7v9HA7EH_login']").click();
        await $("#username").setValue(email);
        await $("#login-submit").click();
        await browser.waitUntil(async () => $("#password").isDisplayed(), {
            timeout: 5000,
            timeoutMsg: "Password field not displayed"
        });
        await $("#password").setValue(password);
        await $("#login-submit").click();
        await expect($('[data-testid="header-member-menu-button"]')).toBeDisplayed();
    });
    it("Create a list", async () => {
        await $("a=Boards").click();
        await browser.waitUntil(async () => {
            return (await browser.getUrl()).includes('/boards');
        }, {
            timeout: 15000,
        });
        const listItems = $$("ul.boards-page-board-section-list li.boards-page-board-section-list-item");
        await browser.waitUntil(async () => (await listItems).length > 0, { timeout: 5000 });
        await listItems[0].click();
        await $('[data-testid="list-composer-button"]').click();
        const listName = "TO DO";
        await $('[data-testid="list-name-textarea"]').setValue(listName);
        await $('[data-testid="list-composer-add-list-button"]').click();
        const listTitle = await $$('[data-testid="list-name"]');
        await expect(listTitle[0]).toHaveText('TO DO');
    });
});