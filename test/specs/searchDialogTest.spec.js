import { expect } from 'chai';
import credentials from '../../credentials.json' assert { type: 'json' };

describe("Trello page", () => {
    it("Open Trello page", async () => {
        await browser.url("https://trello.com");
        const title = await browser.getTitle();
        expect(title).to.include("Trello");
    })
    it("Login on Trello", async () => {
        const email = credentials.email;
        const password = credentials.password;
        await $('[data-uuid="MJFtCCgVhXrVl7v9HA7EH_login"]').click();
        await $("#username").setValue(email);
        await $("#login-submit").click();
        const isPasswordDisplayed = await browser.waitUntil(async () => $("#password").isDisplayed(), {
            timeout: 5000
        });
        expect(isPasswordDisplayed).to.be.true;
        await $("#password").setValue(password);
        await $("#login-submit").click();
        const currentUrl = await browser.getUrl();
        expect(currentUrl).to.include("/boards");
    });
    it("Testing 'Search' dialog", async () => {
        await browser.waitUntil(
            async () => await $('[data-test-id="search-dialog-input"]').isDisplayed());
        await $('[data-test-id="search-dialog-input"]').click();
        await $('[data-test-id="search-dialog-input"]').setValue("ProjectTest");
        
        const firstResult = await $('[data-test-id="search-dialog-dialog-wrapper"]');
        expect(await firstResult.isDisplayed()).to.be.true;
        
    });
});