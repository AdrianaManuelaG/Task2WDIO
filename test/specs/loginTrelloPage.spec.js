import { expect } from 'chai';
import credentials from '../../credentials.json' assert { type: 'json' };

describe("Trello page", () => {
    before(async () => {
        await browser.url("https://trello.com"); 
    });
    it("Should open Trello page", async () => {
        const title = await browser.getTitle();
        expect(title).to.include("Trello");
    });

    it("Should login on Trello", async () => {
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
});


