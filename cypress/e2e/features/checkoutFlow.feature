Feature: Checkout Flow

Background:
Given The user accesses the home page
And The user opens the Products page
Then The ALL PRODUCTS screen should be visible

@focus
Scenario: Place Order Register while Checkout
When The user adds items into the cart
And The user opens the Cart page
Then The cart screen should be displayed
When The user proceeds to checkout from cart
When The user chooses Register during checkout
When The user completes signup and creates a new account
Then The system shows ACCOUNT CREATED and continues
Then The header displays Logged in as username
When The user returns to Cart again
When The user proceeds again to checkout
Then The checkout address and order review must be visible
When The user writes a checkout comment and places the order
When The user fills card data and submits payment
Then The order success message must appear
When The user deletes the account after purchase
Then The account deleted confirmation must be visible

@focus
Scenario: Place Order Login before Checkout
When The user opens the Login screen
Then The user logs in with valid credentials
When The user adds items into the cart before checkout
Then The user opens the Cart page again
When The user proceeds to checkout with logged account
When The user fills card data and confirms payment
Then Successful order confirmation message is displayed

@focus
Scenario: Add Multiple Products, Login and Place Order
When The user adds multiple products into cart
When The user opens the Cart overview
When The user starts checkout flow
When The user selects login during checkout
When The user completes login form successfully
Then The system confirms the user is authenticated
Then The user navigates to final Checkout page
Then The checkout address and order count must be validated
When The user confirms payment to finalize order
Then The order success message must be visible