
/// <reference types= "cypress" />
/// <reference types= "cypress-iframe" />
import 'cypress-iframe';

describe('Week 2 - Advanced UI Interactions', () => {

  it('Interacts with an element inside an iframe safely', () => {
    cy.visit('https://rahulshettyacademy.com/AutomationPractice/')

    // Load the iframe first
    cy.frameLoaded('#courses-iframe')
    cy.iframe().find('a[href*="mentorship"]').eq(0).click()

    // After the click, wait a bit and re-query the new page content
    cy.wait(2000)
    cy.iframe().find("h1[class*='pricing-title']").should('have.length', 2)
  })




  it('Selects a specific date from a date picker', () => {
    cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/offers')

    // Open the date picker
    cy.get('.react-date-picker__calendar-button').click()

    // Select a specific date (example: 20th of current month)
    cy.get('.react-calendar__month-view__days button')
      .contains('20')
      .click()

    // Assert the date was selected
    cy.get('.react-date-picker__inputGroup__input').first().should('exist')
  })

})



