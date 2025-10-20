import ConfirmPage from "../../support/pageObjects/ConfirmPage"

class CartPage{
  checkoutItems(){

  cy.contains('button', 'Checkout').click()
  return new ConfirmPage()
  }

  sumOfProducts(){
       let sum = 0
        return cy.get('tr td:nth-child(4) strong')
        .each($el=>{
            const amount = Number($el.text().split(" ")[1].trim())
            sum = sum + amount //65000 after 1st iteration
        })
        // comparison should be done after sum(forloop)
        .then(function() {
           return sum
        })
        
  }
}
export default CartPage;