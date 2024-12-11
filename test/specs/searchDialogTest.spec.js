const credentials = require('../../credentials.json');

describe("Trello page", () => {
    it("Open Trello page", async () => {
        await browser.url("https://trello.com");
    })
    it("Login on Trello", async () => {
        
        const email = credentials.email;
        const password = credentials.password;
        await $('a[data-uuid*="login"]').click();
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
    it("Testing 'Search' dialog", async () => {
        await $('//input').setValue("ProjectTest");
        const searchResults = await $('[data-test-id="search-dialog-dialog-wrapper"]');
        await expect(searchResults).toBeDisplayed();
        
    });
});