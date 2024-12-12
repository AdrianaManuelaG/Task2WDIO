
const BasePage = require('./BasePage'); 

class ProfilePage extends BasePage {
    get usernameInput() { return $("#username"); }
    get saveButton() { return $(".JhBc38JIAKzHAt "); }
    get confirmationMessage() { return $('.QMKgZFIlTLiEJN'); }

    async changeUsername(newUsername) {
        await this.usernameInput.setValue(newUsername);
        await this.saveButton.click();
    }

    async getConfirmationMessage() {
        return await this.confirmationMessage.getText();
    }
}

module.exports = ProfilePage;