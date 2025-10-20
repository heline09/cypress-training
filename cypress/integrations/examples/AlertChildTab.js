/// <reference types= "cypress" />

describe('Handling Alerts and Popups', () => {
  beforeEach(() => {
    cy.visit(Cypress.env('url') + "/AutomationPractice/#/")
  })

  it('Handles JS alert', () => {

    // Click the alert button
    cy.get('#alertbtn').click()

    // Listen for the alert event and verify the message
    cy.on('window:alert', (text) => {
      expect(text).to.equal('Hello , share this practice page and share your knowledge')
    })
  })

  it('Handles Confirm alert', () => {
    // Click the confirm button
    cy.get('[value="Confirm"]').click()

    // Listen for the confirm event
    cy.on('window:confirm', (text) => {
      expect(text).to.equal('Hello , Are you sure you want to confirm?')
    })
  })

  it('Handles child tabs or windows', () => {

    // Remove 'target' attribute so it opens in same tab
    cy.get('#opentab').invoke('removeAttr', 'target').click()

    // Switch context to the new domain
    cy.origin('https://www.qaclickacademy.com', () => {
      cy.get('#navbarSupportedContent a[href*="about"]').click()
      cy.get('.mt-50 h2').should('contain', 'QAClick Academy')
    })
  })


})
