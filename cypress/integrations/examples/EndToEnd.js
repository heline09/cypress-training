import HomePage  from "../../support/pageObjects/Homepage"
describe('End to End Ecommerce test', function () {

    before(function () {
        // runs once before all tests in the block

        cy.fixture('example').then(function (data) {
            this.data = data // global variable
            this.homepage = new HomePage()
        })
    })
    it('submit order', function () {
        const productName = this.data.productName

        cy.visit(Cypress.env('url') +"/loginpagePractise/")

        const productPage = this.homepage.login(this.data.username, this.data.password)
        // cy.pause() // for debugging
        productPage.pageValidation()
        productPage.getCardCount().should('have.length', 4)
        productPage.selectProduct(productName)
        productPage.selectFirstProduct()
        const cartPage = productPage.goToCart()
        cartPage.sumOfProducts().then(function (sum) 
        {
            expect(sum).to.be.lessThan(200000)
        })

        const confirmPage = cartPage.checkoutItems()
        confirmPage.submitFormDetails()
        confirmPage.getAlertMessage().should('contain', 'Success')




    })

})