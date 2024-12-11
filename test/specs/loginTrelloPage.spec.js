const credentials = require('../../credentials.json');

describe("Trello page", () => {
    it("Open Trello page", async () => {
        await browser.url("https://trello.com");
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
});


