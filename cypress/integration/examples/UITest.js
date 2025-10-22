/// <reference types= "cypress" />

describe('Practice tests on UI', () => {

    // ensures the actual site is opened first

    beforeEach(() => {
        cy.visit(Cypress.env('url') + "/AutomationPractice/#/")
    })

    it('Should ensure checkboxes are checked and unchecked', () => {
        // check and uncheck one box
        cy.get('#checkBoxOption1').check().should('be.checked')
        cy.get('#checkBoxOption1').uncheck().should('not.be.checked')

        // for multiple boxes at once
        cy.get('input[type="checkbox"]').check(['option2', 'option3'])
    })

    // static dropdowns
    it('Should interact with static dropdowns', () => {
        cy.get('select').select('option2').should('have.value', 'option2')
    })

    // visible or invisible elements

    it('Should verify textbox visibility', () => {
        cy.get('#displayed-text').should('be.visible')
        cy.get('#hide-textbox').click()
        cy.get('#displayed-text').should('not.be.visible')
        cy.get('#show-textbox').click()
        cy.get('#displayed-text').should('be.visible')
    })

})