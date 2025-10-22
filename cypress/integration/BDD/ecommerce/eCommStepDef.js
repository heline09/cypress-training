import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor"
import HomePage from "../../../../support/pageObjects/Homepage"
const homepage = new HomePage()

Given('I am on Ecommerce Page', () => {
    homepage.goTo(Cypress.env('url') + "/loginpagePractise/")

})

When('I log in to the application', function() {
    this.productPage = homepage.login(this.data.username, this.data.password)
    this.productPage.pageValidation()
    this.productPage.getCardCount().should('have.length', 4)
})

When ('I log in to application portal', function(){
    
})
When('I add items to the cart', function() {
    this.productPage.selectProduct(this.data.productName)
    this.productPage.selectFirstProduct()
    this.cartPage = this.productPage.goToCart()
})
When('I validate the total price limit', function(){
      this.cartPage.sumOfProducts().then(function (sum) {
            expect(sum).to.be.lessThan(200000)
        })
})
Then('select country submit and verify Thankyou', function(){
    const confirmPage = cartPage.checkoutItems()
    confirmPage.submitFormDetails()
    confirmPage.getAlertMessage().should('contain', 'Success')
})