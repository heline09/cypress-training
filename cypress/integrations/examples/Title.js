/// <reference types= "cypress" />


describe('Basic Website Visit Test', () => {
  it('Visits the example website and checks the title', () => {
    cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')
    cy.title().should('include', 'GreenKart')
    cy.get('.search-keyword').type('ca')
    cy.wait(2000)
    cy.get('.product:visible').should('have.length', 4)
    
  })
})
