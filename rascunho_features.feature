Feature: Authentication - Login and Logout

@focus
Scenario: Login User with correct email and password
Given Launch browser
When Navigate to url 'http://automationexercise.com'
Then Verify that home page is visible successfully
When Click on 'Signup / Login' button
Then Verify 'Login to your account' is visible
When Enter correct email address and password
When Click 'login' button
Then Verify that 'Logged in as username' is visible
When Click 'Delete Account' button
Then Verify that 'ACCOUNT DELETED!' is visible

@focus
Scenario: Login User with incorrect email and password
Given Launch browser
When Navigate to url 'http://automationexercise.com'
Then Verify that home page is visible successfully
When Click on 'Signup / Login' button
Then Verify 'Login to your account' is visible
When Enter incorrect email address and password
When Click 'login' button
Then Verify error 'Your email or password is incorrect!' is visible

@focus
Scenario: Logout User
Given Launch browser
When Navigate to url 'http://automationexercise.com'
Then Verify that home page is visible successfully
When Click on 'Signup / Login' button
Then Verify 'Login to your account' is visible
When Enter correct email address and password
When Click 'login' button
Then Verify that 'Logged in as username' is visible
When Click 'Logout' button
Then Verify that user is navigated to login page

Feature: User Registration

@focus
Scenario: Register User
Given Launch browser
When Navigate to url 'http://automationexercise.com'
Then Verify that home page is visible successfully
When Click on 'Signup / Login' button
Then Verify 'New User Signup!' is visible
When Enter name and email address
When Click 'Signup' button
Then Verify that 'ENTER ACCOUNT INFORMATION' is visible
When Fill details: Title, Name, Email, Password, Date of birth
When Select checkbox 'Sign up for our newsletter!'
When Select checkbox 'Receive special offers from our partners!'
When Fill details: First name, Last name, Company, Address, Address2, Country, State, City, Zipcode, Mobile Number
When Click 'Create Account button'
Then Verify that 'ACCOUNT CREATED!' is visible
When Click 'Continue' button
Then Verify that 'Logged in as username' is visible
When Click 'Delete Account' button
Then Verify that 'ACCOUNT DELETED!' is visible and click 'Continue' button

@focus
Scenario: Register User with existing email
Given Launch browser
When Navigate to url 'http://automationexercise.com'
Then Verify that home page is visible successfully
When Click on 'Signup / Login' button
Then Verify 'New User Signup!' is visible
When Enter name and already registered email address
When Click 'Signup' button
Then Verify error 'Email Address already exist!' is visible

Feature: Contact Us Form

@focus
Scenario: Contact Us Form
Given Launch browser
When Navigate to url 'http://automationexercise.com'
Then Verify that home page is visible successfully
When Click on 'Contact Us' button
Then Verify GET IN TOUCH is visible
When Enter name, email, subject and message
When Upload file
When Click 'Submit' button
When Click OK button
Then Verify success message 'Success! Your details have been submitted successfully.' is visible
When Click 'Home' button and verify that landed to home page successfully

Feature: Products Browsing

@focus
Scenario: Verify All Products and product detail page
Given Launch browser
When Navigate to url 'http://automationexercise.com'
Then Verify that home page is visible successfully
When Click on 'Products' button
Then Verify user is navigated to ALL PRODUCTS page successfully
Then The products list is visible
When Click on 'View Product' of first product
Then User is landed to product detail page
Then Verify that detail detail is visible: product name, category, price, availability, condition, brand

@focus
Scenario: Search Product
Given Launch browser
When Navigate to url 'http://automationexercise.com'
Then Verify that home page is visible successfully
When Click on 'Products' button
Then Verify user is navigated to ALL PRODUCTS page successfully
When Enter product name in search input and click search button
Then Verify 'SEARCHED PRODUCTS' is visible
Then Verify all the products related to search are visible

@focus
Scenario: View Category Products
Given Launch browser
When Navigate to url 'http://automationexercise.com'
Then Verify that categories are visible on left side bar
When Click on 'Women' category
When Click on any category link under 'Women' category, for example: Dress
Then Verify that category page is displayed and confirm text 'WOMEN - TOPS PRODUCTS'
When On left side bar, click on any sub-category link of 'Men' category
Then Verify that user is navigated to that category page

@focus
Scenario: View & Cart Brand Products
Given Launch browser
When Navigate to url 'http://automationexercise.com'
When Click on 'Products' button
Then Verify that Brands are visible on left side bar
When Click on any brand name
Then Verify that user is navigated to brand page and brand products are displayed
When On left side bar, click on any other brand link
Then Verify that user is navigated to that brand page and can see products

@focus
Scenario: Add review on product
Given Launch browser
When Navigate to url 'http://automationexercise.com'
When Click on 'Products' button
Then Verify user is navigated to ALL PRODUCTS page successfully
When Click on 'View Product' button
Then Verify 'Write Your Review' is visible
When Enter name, email and review
When Click 'Submit' button
Then Verify success message 'Thank you for your review.'

Feature: Cart Actions

@focus
Scenario: Add Products in Cart
Given Launch browser
When Navigate to url 'http://automationexercise.com'
Then Verify that home page is visible successfully
When Click 'Products' button
When Hover over first product and click 'Add to cart'
When Click 'Continue Shopping' button
When Hover over second product and click 'Add to cart'
When Click 'View Cart' button
Then Verify both products are added to Cart
Then Verify their prices, quantity and total price

@focus
Scenario: Verify Product quantity in Cart
Given Launch browser
When Navigate to url 'http://automationexercise.com'
Then Verify that home page is visible successfully
When Click 'View Product' for any product on home page
Then Verify product detail is opened
When Increase quantity to 4
When Click 'Add to cart' button
When Click 'View Cart' button
Then Verify that product is displayed in cart page with exact quantity

@focus
Scenario: Remove Products From Cart
Given Launch browser
When Navigate to url 'http://automationexercise.com'
Then Verify that home page is visible successfully
When Add products to cart
When Click 'Cart' button
Then Verify that cart page is displayed
When Click 'X' button corresponding to particular product
Then Verify that product is removed from the cart

@focus
Scenario: Add to cart from Recommended items
Given Launch browser
When Navigate to url 'http://automationexercise.com'
When Scroll to bottom of page
Then Verify 'RECOMMENDED ITEMS' are visible
When Click on 'Add To Cart' on Recommended product
When Click on 'View Cart' button
Then Verify that product is displayed in cart page

@focus
Scenario: Search Products and Verify Cart After Login
Given Launch browser
When Navigate to url 'http://automationexercise.com'
When Click on 'Products' button
Then Verify user is navigated to ALL PRODUCTS page successfully
When Enter product name in search input and click search button
Then Verify 'SEARCHED PRODUCTS' is visible
Then Verify all the products related to search are visible
When Add those products to cart
When Click 'Cart' button and verify that products are visible in cart
When Click 'Signup / Login' button and submit login details
When Again, go to Cart page
Then Verify that those products are visible in cart after login as well

Feature: Checkout Flow

@focus
Scenario: Place Order Register while Checkout
Given Launch browser
When Navigate to url 'http://automationexercise.com'
Then Verify that home page is visible successfully
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
Scenario: Place Order Register before Checkout
Given Launch browser
When Navigate to url 'http://automationexercise.com'
Then Verify that home page is visible successfully
When Click 'Signup / Login' button
When Fill all details in Signup and create account
Then Verify 'ACCOUNT CREATED!' and click 'Continue' button
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
When Click 'Delete Account' button
Then Verify 'ACCOUNT DELETED!' and click 'Continue' button

@focus
Scenario: Verify address details in checkout page
Given Launch browser
When Navigate to url 'http://automationexercise.com'
Then Verify that home page is visible successfully
When Click 'Signup / Login' button
When Fill all details in Signup and create account
Then Verify 'ACCOUNT CREATED!' and click 'Continue' button
Then Verify 'Logged in as username' at top
When Add products to cart
When Click 'Cart' button
Then Verify that cart page is displayed
When Click Proceed To Checkout
Then Verify that the delivery address is same address filled at the time registration of account
Then Verify that the billing address is same address filled at the time registration of account
When Click 'Delete Account' button
Then Verify 'ACCOUNT DELETED!' and click 'Continue' button

@focus
Scenario: Download Invoice after purchase order
Given Launch browser
When Navigate to url 'http://automationexercise.com'
Then Verify that home page is visible successfully
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
When Click 'Download Invoice' button and verify invoice is downloaded successfully.
When Click 'Continue' button
When Click 'Delete Account' button
Then Verify 'ACCOUNT DELETED!' and click 'Continue' button

Feature: Subscription

@focus
Scenario: Verify Subscription in home page
Given Launch browser
When Navigate to url 'http://automationexercise.com'
Then Verify that home page is visible successfully
When Scroll down to footer
Then Verify text 'SUBSCRIPTION'
When Enter email address in input and click arrow button
Then Verify success message 'You have been successfully subscribed!' is visible

@focus
Scenario: Verify Subscription in Cart page
Given Launch browser
When Navigate to url 'http://automationexercise.com'
Then Verify that home page is visible successfully
When Click 'Cart' button
When Scroll down to footer
Then Verify text 'SUBSCRIPTION'
When Enter email address in input and click arrow button
Then Verify success message 'You have been successfully subscribed!' is visible

Feature: Scroll Behaviour

@focus
Scenario: Verify Scroll Up using 'Arrow' button and Scroll Down functionality
Given Launch browser
When Navigate to url 'http://automationexercise.com'
Then Verify that home page is visible successfully
When Scroll down page to bottom
Then Verify 'SUBSCRIPTION' is visible
When Click on arrow at bottom right side to move upward
Then Verify that page is scrolled up and 'Full-Fledged practice website for Automation Engineers' text is visible on screen

@focus
Scenario: Verify Scroll Up without 'Arrow' button and Scroll Down functionality
Given Launch browser
When Navigate to url 'http://automationexercise.com'
Then Verify that home page is visible successfully
When Scroll down page to bottom
Then Verify 'SUBSCRIPTION' is visible
When Scroll up page to top
Then Verify that page is scrolled up and 'Full-Fledged practice website for Automation Engineers' text is visible on screen
