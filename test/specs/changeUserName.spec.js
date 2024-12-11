const credentials = require('../../credentials.json');

describe("Trello page", () => {
    it("Open Trello page", async () => {
        await browser.url("https://trello.com");
    })
    it("Login on Trello", async () => {
        const email = credentials.email;
        const password = credentials.password;
        await $("//a[text()='Log in']").click();
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

    it("Change user name", async () => {
        await $(".DweEFaF5owOe02").click();
        await $('a[data-testid="account-menu-profile"]').click();
        const newUsername = `user_${Math.floor(Math.random() * 100000)}`;
        await $("#username").setValue(newUsername);
        await $(".JhBc38JIAKzHAt ").click();
        await expect($('.QMKgZFIlTLiEJN')).toHaveTextContaining('Saved');
        console.log("Username successfully updated");
    });
});
