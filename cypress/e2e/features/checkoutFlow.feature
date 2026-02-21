Feature: Checkout Flow


Background:
Given User accesses homepage
Then User navigates to products listing page
Then Products listing screen should be displayed


@focus
Scenario: Place Order - Register During Checkout
When User adds items into shopping cart
When User opens cart page
Then Cart summary page should be visible
When User proceeds to checkout
When User selects register or login option
When User completes signup form and creates account
Then Account creation confirmation should appear
Then User should be logged in and visible at header
When User returns to cart page
Then Checkout page should display address details and order review
When User types comment and confirms place order
When User fills payment form with card details
When User confirms payment submission
Then Order success confirmation message should be displayed
When User removes account through delete option
Then Account deletion confirmation should be displayed

@focus
Scenario: Place Order - Login Before Checkout
Given User opens application in browser
Then Home screen should load correctly
When User opens authentication page
When User logs in with valid credentials
Then User login indicator should be visible
When User adds items to cart
When User goes to cart page
Then Cart summary should be visible
When User goes to checkout
Then Coment and place order
When User fills payment details then clicks confirm
Then Order success message should be displayed


