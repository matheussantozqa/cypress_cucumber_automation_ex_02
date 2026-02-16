Feature: Checkout Flow

Background:

Background:
Given The user is on the home page
Then Click Products Button
Then Verify user is navigated to ALL PRODUCTS page successfully

@focus
Scenario: Place Order Register while Checkout
When Add products to cart
When Click 'Cart' button
Then Verify that cart page is displayed
When Click Proceed To Checkout
When Click 'Register / Login' button
When Fill all details in Signup and create account
Then Verify 'ACCOUNT CREATED!' and click 'Continue' button
Then Verify 'Logged in as username' at top
When Click 'Cart' button
When Click 'Proceed To Checkout' button
Then Verify Address Details and Review Your Order
When Enter description in comment text area and click 'Place Order'
When Enter payment details: Name on Card, Card Number, CVC, Expiration date
When Click 'Pay and Confirm Order' button
Then Verify success message 'Your order has been placed successfully!'
When Click 'Delete Account' button
Then Verify 'ACCOUNT DELETED!' and click 'Continue' button


@focus
Scenario: Place Order Login before Checkout
Given Launch browser
When Navigate to url 'http://automationexercise.com'
Then Verify that home page is visible successfully
When Click 'Signup / Login' button
When Fill email, password and click 'Login' button
Then Verify 'Logged in as username' at top
When Add products to cart
When Click 'Cart' button
Then Verify that cart page is displayed
When Click Proceed To Checkout
Then Verify Address Details and Review Your Order
When Enter description in comment text area and click 'Place Order'
When Enter payment details: Name on Card, Card Number, CVC, Expiration date
When Click 'Pay and Confirm Order' button
Then Verify success message 'Your order has been placed successfully!'


@focus
Scenario: Add Multiple Products, Login and Place Order
When Add products to cart
When Click 'Cart' button
Then Verify that cart page is displayed
When Click Proceed To Checkout
When Click 'Register / Login' button
When Fill all details in login 
Then The User should be logged in successfully
Then navigate to Checkout page
Then Verify Address Details and Count is Filled there and Review Your Order
When Enter description in comment text area and click 'Place Order'
Then Click 'Pay and Confirm Order' button
Then Verify success message 'Your order has been placed successfully!'