describe('My First Test', ()=>{
it('Visits the Kitchen Sink', () => {
    //expect(true).to.equal(true)
    cy.visit('https://example.cypress.io')
    cy.contains('type').click()
    cy.url().should('include', '/commands/actions')
    cy.get('.action-email').type('fake@email.com')
    cy.get('.action-email').should('have.value', 'fake@email.com')
})
})