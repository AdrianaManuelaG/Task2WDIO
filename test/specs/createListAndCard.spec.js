describe("Log in on Trello", () => {
    it("User successfully Login on Trello", async() => {
        await browser.url("https://trello.com/");
        await $(".Buttonsstyles__Button-sc-1jwidxo-0").click();
        await $("#username").setValue("adrianagula25@gmail.com");
        await $(".css-t8mx7z").click();
        await $("#password").setValue("Adrianagula2024!");
        await $("#login-submit").click();
        await browser.waitUntil(() => browser.getUrl().then(url => url.includes("/boards")), {
            timeout: 10000,
        });

    });
    it("Create a list and a card", async() => {
        const listItems = $$("ul.boards-page-board-section-list li.boards-page-board-section-list-item");
        await browser.waitUntil(async () => (await listItems).length > 0, {
            timeout: 5000
        });
        await listItems[0].click();
        await browser.waitUntil(() => browser.getUrl().then(url => url.includes("/projecttest")), {
            timeout: 10000,
        });
        await $('[data-testid="list-composer-button"]').click();
        await $('[data-testid="list-name-textarea"]').setValue("TO DO");
        await $('[data-testid="list-composer-add-list-button"]').click();
        await $('[data-testid="list-add-card-button"]').click();
        await $('[data-testid="list-card-composer-textarea"]').setValue("Shopping");
        await $('[data-testid="list-card-composer-add-card-button"]').click();
        await expect($('[data-testid="trello-card"]')).toBePresent();
    })

});