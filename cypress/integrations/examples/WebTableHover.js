/// <reference types= "cypress" />

describe('Web Table and Mouse Hover', () =>{

    beforeEach(() => {
    cy.visit('https://rahulshettyacademy.com/AutomationPractice/')

  })


    it('Iterates through a web table and asserts a value', () =>
    {
        
        // Loop through each item in the second column
        cy.get('tr td:nth-child(2)').each(($el, index, $list) =>{
           const text =$el.text()
           if(text.includes('Jenkins')){
            //Go to the next cell(price) in the same row
        cy.get('tr td:nth-child(2)').eq(index).next().then(function(priceCell){
            const priceText = priceCell.text()
            expect(priceText).to.equal('20') // Assert that Jenkin's price is 20

            })
           }
        })

    })

    it('Performs mouse hover and clicks on "Top"', () =>{

    // Force show the hover menu (it's hidden by CSS)
    cy.get('div.mouse-hover-content').invoke('show')

    // Click the "Top" option
    cy.contains('Top').click({ force: true })

    // Verify URL changed to include 'top'
    cy.url().should('include', 'top')

    })
})