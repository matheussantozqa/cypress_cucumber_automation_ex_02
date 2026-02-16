Feature: Cart Actions

Background:
Given The user is on the home page
Then Click Products Button
Then Verify user is navigated to ALL PRODUCTS page successfully

@focus
Scenario: Add Products in Cart
When Hover over first product and click 'Add to cart'
When Click 'Continue Shopping' button
When Hover over second product and click 'Add to cart'
When Click 'View Cart' button
Then Verify both products are added to Cart
Then Verify their prices, quantity and total price

@focus
Scenario: Verify Product quantity in Cart
When Click 'View Product' for any product on home page
Then Verify product detail is opened
When Increase quantity to 4
When Click 'Add to cart' button
When Click 'View Cart' button
Then Verify that product is displayed in cart page with exact quantity

@focus
Scenario: Remove Products From Cart
When Add products to cart
When Click 'Cart' button
Then Verify that cart page is displayed
When Click 'X' button corresponding to particular product
Then Verify that product is removed from the cart


@focus
Scenario: Search Products and Verify Cart After Login
When Enter product name in search input and click search button
Then Verify 'SEARCHED PRODUCTS' is visible
Then Verify all the products related to search are visible
When Add those products to cart
When Click 'Cart' button and verify that products are visible in cart
When Click 'Signup / Login' button and submit login details
When Again, go to Cart page
Then Verify that those products are visible in cart after login as well