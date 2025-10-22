Feature: End to end ecommerce validation

Scenario: Ecommerce products delivery
Given I am on Ecommerce Page
When I login in to the application
And I add items to the Cart
And Validate the total price limit
Then Select the country submit and verify Thankyou
