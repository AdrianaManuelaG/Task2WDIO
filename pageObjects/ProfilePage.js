
const BasePage = require('./basePage'); 

class ProfilePage extends BasePage {
    get usernameInput() { return $("#username"); }
    get saveButton() { return $(".JhBc38JIAKzHAt "); }
    get confirmationMessage() { return $('.QMKgZFIlTLiEJN'); }
    get accountMenuButton() { return $(".DweEFaF5owOe02"); }
    get profileMenuOption() { return $('a[data-testid="account-menu-profile"]'); }


    async navigateToProfile() {
        await this.accountMenuButton.click();
        await this.profileMenuOption.click();
    }

    async changeUsername(newUsername) {
        await this.usernameInput.setValue(newUsername);
        await this.saveButton.click();
    }

    async getConfirmationMessage() {
        return await this.confirmationMessage.getText();
    }
}

module.exports = ProfilePage;