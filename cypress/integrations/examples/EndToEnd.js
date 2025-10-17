/// <reference types= "cypress" />
describe('End to End Ecommerce test', function () {
    it('submit order', function (){
        const productName = "Nokia Edge"
        cy.visit("https://rahulshettyacademy.com/loginpagePractise/")
        cy.get('#username').type("rahulshettyacademy")
        cy.get('#password').type("learning")
        cy.contains("Sign In").click()
        cy.contains("Shop Name").should('be.visible')
        cy.get('app-card').should('have.length', 4)
        // goes through all cards to find Nokia Edge
        cy.get('app-card').filter(`:contains("${productName}")`)
        .then($element=>
        {
            cy.wrap($element).should('have.length', 1)
            cy.wrap($element).contains('button','Add').click()
        }
        )
        cy.get('app-card').eq(0).contains('button', 'Add').click() // 2 items added to the cart
        cy.contains('a','Checkout').click()
        let sum = 0
        cy.get('tr td:nth-child(4) strong')
        .each($el=>{
            const amount = Number($el.text().split(" ")[1].trim())
            sum = sum + amount //65000 after 1st iteration
        })
        // comparison should be done after sum(forloop)
        .then(function() {
            expect(sum).to.be.lessThan(200000)
        })
        cy.contains('button', 'Checkout').click()
        
        cy.get(".suggestions ul li a", { timeout: 10000 }).click()
        cy.get('btn-success').click()
        cy.get('alert-success').should('contain', 'Success')
        
        })
        
})