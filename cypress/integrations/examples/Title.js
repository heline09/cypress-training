describe('Basic Website Visit Test', () => {
  it('Visits the example website and checks the title', () => {
    cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')
    cy.title().should('include', 'GreenKart')
  })
})
