class ConfirmPage {
    submitFormDetails() {
        Cypress.config("defaultCommandTimeout", 10000)
        cy.get("#country").type("India")
        cy.get(".suggestions ul li a").click()
        cy.get('.btn-success').click()

    }
    getAlertMessage() {
        return cy.get('.alert-success')
    }
}
export default ConfirmPage;