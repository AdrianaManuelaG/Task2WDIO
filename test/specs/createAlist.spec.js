import credentials from '../../credentials.json' assert { type: 'json' };
should();
describe("Trello page", () => {
    it("Open Trello page", async () => {
        await browser.url("https://trello.com/home");
        const title = await browser.getTitle();
        assert.include(title, "Trello");
    });
    it("Login on Trello", async () => { 
        const email = credentials.email;
        const password = credentials.password;
        await $('a[data-uuid*="login"]').click();
        await $("#username").setValue(email);
        await $("#login-submit").click();
        await browser.waitUntil(async () => $("#password").isDisplayed(), {
            timeout: 5000
        });
        await $("#password").setValue(password);
        await $("#login-submit").click();
        const currentUrl = await browser.getUrl();
        expect(currentUrl).to.include("/boards");
    });
    it("Create a list", async () => {
        await $("a=Boards").click();
        await browser.waitUntil(async () => {
            return (await browser.getUrl()).includes('/boards');
        }, {
            timeout: 15000,
        });
        const listItems = $$("ul.boards-page-board-section-list li.boards-page-board-section-list-item");
        const hasItems = await browser.waitUntil(async () => (await listItems).length > 0, { timeout: 5000 });
        assert.isTrue(hasItems, "There should be at least one board available");
        await listItems[0].click();
        await $('[data-testid="list-composer-button"]').click();
        const listName = "TO DO";
        await $('[data-testid="list-name-textarea"]').setValue(listName);
        await $('[data-testid="list-composer-add-list-button"]').click();
        const listTitles = await $$('[data-testid="list-name"]');
        const firstListTitle = await listTitles[0].getText();
        firstListTitle.should.equal('TO DO', "First list title should be 'TO DO'");
    });
});