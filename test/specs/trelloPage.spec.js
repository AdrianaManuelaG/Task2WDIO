import creds from '../../credentials.json';

describe("Trello page", () => {
    beforeEach(async () => {
        await browser.url("https://trello.com/home");
    });

    it("Login on Trello", async () => {
        // await browser.url("https://trello.com/home");

        const userCollection = creds;

        const email = userCollection.email;
        const password = userCollection.password;
        await $("a[data-uuid='MJFtCCgVhXrVl7v9HA7EH_login']").click();
      
        await $("#username").setValue(email);
        await $("#login-submit").click();
        await $("#password").setValue(password);
        await $("#login-submit").click();

        await browser.pause(6000);
        await $("#login-submi").click();
    });

    // it("Change user name", async () =>{
    //     await $(".DweEFaF5owOe02").click();
    //     await $('a[data-testid="account-menu-profile"]').click();
    //     await browser.pause(5000);
    //     const newUsername = `user_${Math.floor(Math.random() * 100000)}`;
    //     await $("#username").setValue(newUsername);
    //     await $(".JhBc38JIAKzHAt ").click();
    //     await expect($(".QMKgZFIlTLiEJN")).toBeDisplayed();
    // });

    
    // it("Create a board",async() => {
    //     await $('[data-testid="header-create-menu-button"]').click();
    //     await $('[data-testid="header-create-board-button"]').click();
    //     await $('[data-testid="create-board-title-input"]').setValue("ProjectTest");
    //     await $('[data-testid="create-board-submit-button"]').click();
    //     await expect($('[data-testid="board-name-display"]')).toBePresent();
    // });

    // it("Testing 'Search' dialog", async() => {
    //     await $('//input').setValue("ProjectJest");
    //     await browser.keys("Enter");
    // });

    // it("Create a list and a card", async() => {
    //     const listItems = $$("ul.boards-page-board-section-list li.boards-page-board-section-list-item");
    //     await browser.waitUntil(async () => (await listItems).length > 0, {
    //         timeout: 5000
    //     });
    //     await listItems[0].click();
    //     await browser.waitUntil(() => browser.getUrl().then(url => url.includes("/projecttest")), {
    //         timeout: 10000,
    //     });
    //     await $('[data-testid="list-composer-button"]').click();
    //     await $('[data-testid="list-name-textarea"]').setValue("TO DO");
    //     await $('[data-testid="list-composer-add-list-button"]').click();
    //     await $('[data-testid="list-add-card-button"]').click();
    //     await $('[data-testid="list-card-composer-textarea"]').setValue("Shopping");
    //     await $('[data-testid="list-card-composer-add-card-button"]').click();
    //     await expect($('[data-testid="trello-card"]')).toBePresent();
    // });
    // it("Edit the workspace name", async() => {
    //     await $('[data-testid=workspace-switcher]').click();
    //     await $('[data-testid="workspace-switcher-popover-tile"]').click();
    //     await $('[data-testid="EditIcon"]').click();
    //     await $('#displayName').setValue('test');
    //     await $('._wJD3QSFJjW4Pb ').click();
    // });

});
