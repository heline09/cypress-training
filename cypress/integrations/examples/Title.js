describe('Basic Website Visit Test', () => {
  it('Visits the example website and checks the title', () => {
    cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
    cy.title().should('include', 'Practice Page')
  })
})
