describe("Log in on Trello", () => {
    it("User successfully Login on Trello", async() => {
        await browser.url("https://trello.com/");
        await $(".Buttonsstyles__Button-sc-1jwidxo-0").click();
        await $("#username").setValue("adrianagula25@gmail.com");
        await $(".css-t8mx7z").click();
        await $("#password").setValue("Adrianagula2024!");
        await $("#login-submit").click();

        //condition for Firefox
        // const productHeadingSelector = "#ProductHeading";
        // const isProductHeadingVisible = await $(productHeadingSelector).isDisplayed();
        // if (isProductHeadingVisible) {
        //     console.log("New window is displayed,successfull test");
        //     return; 
        // }
        await browser.waitUntil(() => browser.getUrl().then(url => url.includes("/boards")), {
            timeout: 10000,
        });
    });

});