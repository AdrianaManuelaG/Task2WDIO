import { expect, assert } from 'chai';
import credentials from '../../credentials.json' assert { type: 'json' };

describe("Trello page", () => {
    it("Open Trello page" , async () => {
        await browser.url("https://trello.com");
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

    
    it("Edit the workspace name", async () => {
        await $('[data-testid=workspace-switcher]').click();
        await $('[data-testid="workspace-switcher-popover-tile"]').click();
        await $('[data-testid="EditIcon"]').click();
        const newName = 'test';
        await $('#displayName').setValue(newName);
        await $('._wJD3QSFJjW4Pb ').click();
        const displayName = await $('#displayName').getValue();
        assert.equal(displayName, newName, "Workspace name is changed!");
    });

});