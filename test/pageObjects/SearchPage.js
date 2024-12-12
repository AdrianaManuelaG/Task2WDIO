
const BasePage = require('./BasePage'); 

class SearchPage extends BasePage {
    get searchInput() { return $('//input'); }
    get searchDialog() { return $('[data-test-id="search-dialog-dialog-wrapper"]'); }

    async search(query) {
        await this.searchInput.setValue(query);
    }

    async isSearchDialogDisplayed() {
        return this.searchDialog.isDisplayed();
    }
}

module.exports = SearchPage;