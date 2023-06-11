import BasePage from './Base.page';

class GridPage extends BasePage {
    static get ButtonOne() {
        return cy.get('.list-group-item.list-group-item-action').contains('One');
    }
    static get ButtonTwo() {
        return cy.get('.list-group-item.list-group-item-action').contains('Two');
    }
    static get ButtonThree() {
        return cy.get('.list-group-item.list-group-item-action').contains('Three');
    }
    static get ButtonFour() {
        return cy.get('.list-group-item.list-group-item-action').contains('Four');
    }
    static get ButtonFive() {
        return cy.get('.list-group-item.list-group-item-action').contains('Five');
    }
    static get ButtonSix() {
        return cy.get('.list-group-item.list-group-item-action').contains('Six');
    }
    static get ButtonSeven() {
        return cy.get('.list-group-item.list-group-item-action').contains('Seven');
    }
    static get ButtonEight() {
        return cy.get('.list-group-item.list-group-item-action').contains('Eight');
    }
    static get ButtonNine() {
        return cy.get('.list-group-item.list-group-item-action').contains('Nine');
    }
}

export default GridPage;