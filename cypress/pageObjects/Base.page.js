class BasePage {

    static get Visit() {
        return cy.visit('https://demoqa.com/selectable');
    }

    static get GridTab() {
        return cy.get('#demo-tab-grid');
    }
}

export default BasePage;