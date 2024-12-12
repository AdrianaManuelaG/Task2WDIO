const BasePage = require('./BasePage');

class LoginPage extends BasePage {
    get loginButton() { return $('a[data-uuid="MJFtCCgVhXrVl7v9HA7EH_login"]'); }
    get usernameInput() { return $('#username'); }
    get passwordInput() { return $('#password'); }
    get submitButton() { return $('#login-submit'); }


    async login(email, password) {
        await this.loginButton.click();
        await this.usernameInput.click();
        await this.usernameInput.setValue(email);
        await this.submitButton.click();
        await browser.waitUntil(async () => this.passwordInput.isDisplayed(), { timeout: 5000 });
        await this.passwordInput.setValue(password);
        await this.submitButton.click();
    }
}

module.exports = LoginPage;