class BasePage {

    static get Visit() {
        return cy.visit('/selectable');
    }

    static get GridTab() {
        return cy.get('#demo-tab-grid');
    }
}

export default BasePage;