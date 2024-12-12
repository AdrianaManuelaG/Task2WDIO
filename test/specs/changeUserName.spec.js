import { expect, assert } from 'chai';
import credentials from '../../credentials.json' assert { type: 'json' };

describe("Trello page", () => {
    it("Open Trello page", async () => {
        await browser.url("https://trello.com");
        const title = await browser.getTitle();
        expect(title).to.include("Trello", "Title should contain 'Trello'");
    })
    it("Login on Trello", async () => {
        const email = credentials.email;
        const password = credentials.password;
        await $("//a[text()='Log in']").click();
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

    it("Change user name", async () => {
        await $(".DweEFaF5owOe02").click();
        await $('a[data-testid="account-menu-profile"]').click();
        const newUsername = `user_${Math.floor(Math.random() * 100000)}`;
        await $("#username").setValue(newUsername);
        await $(".JhBc38JIAKzHAt ").click();
        const successMessage = await $('.QMKgZFIlTLiEJN');
        expect(await successMessage.getText()).to.include('Saved', "The username change should be saved");
        assert.isNotEmpty(newUsername, "New username should not be empty");
    });
});
