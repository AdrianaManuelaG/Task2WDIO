
const BasePage = require('./basePage'); 

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
    get listItems() {
        return $$("ul.boards-page-board-section-list li.boards-page-board-section-list-item");
    }

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
        await this.listComposerButton.click();  
        await this.listNameTextarea.setValue(listName); 
        await this.listAddButton.click();  
    }

    async getListTitle(index) {
        const listTitles = await this.listTitles;
        return await listTitles[index].getText(); 
    }

    async navigateToBoardsPage() {
        await boards.navigateToBoardsPage(); 
        await browser.waitUntil(async () => {
            return (await browser.getUrl()).includes('/boards');
        }, {
            timeout: 15000
        });
    }


    async clickFirstBoard() {
        await browser.waitUntil(async () => (await this.listItems).length > 0, {
            timeout: 5000,
            timeoutMsg: "Boards list did not load in time"
        });
        await this.listItems[0].click();
    }

}

module.exports = BoardsPage;