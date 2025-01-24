const credentials = require("../../credentials.json");
const LoginPage = require("../../pageObjects/LoginPage");
const {
  validateSuccessfullLogin,
} = require("../../test-steps/testStepsTrelloLoginPage");
const loginPage = new LoginPage();

describe("Trello page", () => {
  it("Login on Trello", async () => {
    await loginPage.open("./");
    await loginPage.login(credentials.email, credentials.password);
    validateSuccessfullLogin();
  });
});
