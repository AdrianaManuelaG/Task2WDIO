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
    it("Testing SEARCH dialog", async() => {
        await $('//input').setValue("ProjectTest");
        await browser.keys("Enter");
    })

});