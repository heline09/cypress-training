/// <reference types= "cypress" />

// describe('Locators Practice test', () =>{

//      it('should visit the example website', () => {
//      cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')

//      cy.get('.products', { timeout: 10000 }).should('exist')
//     // cy.get('.products').should('exist')
//     cy.get('.product').should('have.length.greaterThan', 0)

//     // Search input field
//     cy.get('.search-keyword').should('exist')

//      cy.wait(2000)
//     cy.get('button.search-button', { timeout: 10000 })
//       .should('be.visible')
//       .and('have.attr', 'type', 'submit')

// cy.contains('ADD TO CART').should('exist')
//      })
// })

/// <reference types="cypress" />

describe('Refactored Locators Practice with Command Queue', () => {

  beforeEach(() => {
    cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')
  })

  it('should locate and interact with visible elements using chaining', () => {
    // Cypress automatically waits for elements to appear
    cy.get('.search-keyword')
      .should('be.visible')
      .type('Brocolli') 
      .should('have.value', 'Brocolli')

    // Using chaining again
    cy.get('.product:visible')
    .should('have.length.greaterThan', 0)
    .first()
    .as('firstProduct')

    cy.get('@firstProduct')
    .contains('ADD TO CART')
    .click()

    // Now you can check the updated state if you want
    cy.get('@firstProduct')
    .contains('ADDED')
    .should('be.visible')

  })

  it('should handle delayed elements using command queue and should()', () => {
    // Example: Wait for products to load 
    cy.get('.product', { timeout: 10000 }) // Waits up to 10s for products
      .should('exist')
      .then($products => {
        cy.log(`Found ${$products.length} products.`)
      })
  })

  it('should demonstrate promise-like chaining with .then()', () => {
    // Cypress commands are queued; .then() runs when cy.get() resolves
    cy.get('.search-keyword').then(($input) => {
      // You can safely access DOM elements here
      cy.wrap($input).clear().type('Carrot')

      
      cy.get('.product:visible')
        .should('have.length.greaterThan', 0)
        .first()
        .contains('ADD TO CART')
        .click()
    })
  })

  it('should wait for an element that appears after a delay', () => {
    // Simulate a search that loads items dynamically
    cy.get('.search-keyword').type('Ca')
    cy.wait(2000) // waits for filtering animation
    cy.get('.product:visible').should('have.length.greaterThan', 0)
  })
})
