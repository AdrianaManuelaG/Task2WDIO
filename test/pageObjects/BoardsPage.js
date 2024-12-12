
const BasePage = require('./BasePage'); 

class BoardsPage extends BasePage {
    get createMenuButton() { return $('[data-testid="header-create-menu-button"]'); }
    get createBoardButton() { return $('[data-testid="header-create-board-button"]'); }
    get boardNameInput() { return $('[data-testid="create-board-title-input"]'); }
    get createBoardSubmitButton() { return $('[data-testid="create-board-submit-button"]'); }
    get boardTitleDisplay() { return $('[data-testid="board-name-display"]'); }

    get listComposerButton() { return $('[data-testid="list-composer-button"]'); }
    get listNameTextarea() { return $('[data-testid="list-name-textarea"]'); }
    get listAddButton() { return $('[data-testid="list-composer-add-list-button"]'); }
    get listTitles() { return $$('[data-testid="list-name"]'); }

    async createBoard(boardName) {
        await this.createMenuButton.click();
        await this.createBoardButton.click();
        await this.boardNameInput.setValue(boardName);
        await this.createBoardSubmitButton.click();
    }

    async getBoardTitle() {
        return await this.boardTitleDisplay.getText();
    }

    async createList(listName) {
        await this.listComposerButton.click();  // Apasă pe butonul pentru a crea o listă
        await this.listNameTextarea.setValue(listName);  // Setează numele listei
        await this.listAddButton.click();  // Apasă pe butonul pentru a adăuga lista
    }

    // Metodă pentru a verifica dacă lista a fost adăugată corect
    async getListTitle(index) {
        const listTitles = await this.listTitles;
        return await listTitles[index].getText(); 
    }
}

module.exports = BoardsPage;