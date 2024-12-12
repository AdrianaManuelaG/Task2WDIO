const BasePage = require('./BasePage'); 

class WorkspacePage extends BasePage {
    get workspaceSwitcherButton() { return $('[data-testid=workspace-switcher]'); }
    get workspaceTileButton() { return $('[data-testid="workspace-switcher-popover-tile"]'); }
    get editIconButton() { return $('[data-testid="EditIcon"]'); }
    get displayNameInput() { return $('#displayName'); }
    get saveButton() { return $('._wJD3QSFJjW4Pb '); }

    async openWorkspace() {
        await this.workspaceSwitcherButton.click();
        await this.workspaceTileButton.click();
    }

    async editWorkspaceName(newName) {
        await this.editIconButton.click();
        await this.displayNameInput.setValue(newName);
        await this.saveButton.click();
    }

    async getWorkspaceName() {
        return await this.displayNameInput.getValue();
    }
}

module.exports = WorkspacePage;