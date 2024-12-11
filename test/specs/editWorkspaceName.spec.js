const credentials = require('../../credentials.json');

describe("Trello page", () => {
    it("Open Trello page" , async () => {
        await browser.url("https://trello.com");
    });
    it("Login on Trello", async () => {
        const email = credentials.email;
        const password = credentials.password;
        await $("//*[text()='Log in']").click();
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

    
    it("Edit the workspace name", async () => {
        await $('[data-testid=workspace-switcher]').click();
        await $('[data-testid="workspace-switcher-popover-tile"]').click();
        await $('[data-testid="EditIcon"]').click();
        const newName = 'test';
        await $('#displayName').setValue(newName);
        await $('._wJD3QSFJjW4Pb ').click();
        await expect($('#displayName')).toHaveValue(newName);
    });

});