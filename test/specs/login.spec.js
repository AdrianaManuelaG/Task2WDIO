

describe("Log in on Trello", () => {
    it("User should successfully Login on Trello", async() => {
        await browser.url("https://trello.com/");
        await $("[data-uuid='MJFtCCgVhXrVl7v9HA7EH_login']").click();
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
    });

});