describe('template spec', () => {
  it('passes', () => {
    //visit the demoqa website
    cy.visit('https://demoqa.com/selectable')
    //click on grid tab
    cy.get('a[id="demo-tab-grid"]').click()

    //click two, four, six, eight, validate highight
    cy.get('li[class="list-group-item list-group-item-action"]').contains('Two').click().should('have.class', 'active')
    cy.get('li[class="list-group-item list-group-item-action"]').contains('Four').click().should('have.class', 'active')
    cy.get('li[class="list-group-item list-group-item-action"]').contains('Six').click().should('have.class', 'active')
    cy.get('li[class="list-group-item list-group-item-action"]').contains('Eight').click().should('have.class', 'active')

    //validate that one, three, five, seven are not highlighted
    cy.get('li[class="list-group-item list-group-item-action"]').contains('One').should('not.have.class', 'active')
    cy.get('li[class="list-group-item list-group-item-action"]').contains('Three').should('not.have.class', 'active')
    cy.get('li[class="list-group-item list-group-item-action"]').contains('Five').should('not.have.class', 'active')
    cy.get('li[class="list-group-item list-group-item-action"]').contains('Seven').should('not.have.class', 'active')
  })
})