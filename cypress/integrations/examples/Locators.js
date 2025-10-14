/// <reference types= "cypress" />

describe('Locators Practice test', () =>{

     it('should visit the example website', () => {
     cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')

     cy.get('.products', { timeout: 10000 }).should('exist')
    // cy.get('.products').should('exist')
    cy.get('.product').should('have.length.greaterThan', 0)

    // Search input field
    cy.get('.search-keyword').should('exist')

     cy.wait(2000)
    cy.get('button.search-button', { timeout: 10000 })
      .should('be.visible')
      .and('have.attr', 'type', 'submit')

cy.contains('ADD TO CART').should('exist')
     })
})