Feature: Products Browsing

Background:
Given The user is on product page



@focus
Scenario: Verify All Products and product detail page
When Click on 'View Product' of first product
Then User is landed to product detail page
Then Verify that all details is visible: product name, category, price, availability, condition, brand


@focus
Scenario: Search Product
When Enter product name in search input and click search button
Then Verify 'SEARCHED PRODUCTS' is visible
Then Verify all the products related to search are visible


@focus
Scenario: View Category Products
Then Verify that categories are visible on left side bar
When Click on 'Women' category
When Click on category 'Dress' link under 'Women' category
Then Verify that category page is displayed and confirm text 'WOMEN - DRESS PRODUCTS'
When On left side bar, click on sub-category link of 'Men' category
Then Verify that user is navigated to that category page


@focus
Scenario: View & Cart Brand Products
Then Verify that Brands are visible on left side bar
When Click on any brand name
Then Verify that user is navigated to brand page and brand products are displayed
When On left side bar, click on any other brand link
Then Verify that user is navigated to that brand page and can see products


@focus
Scenario: Add review on product
When Click on 'View Product' button
Then Verify 'Write Your Review' is visible
When Enter name, email and review
When Confirm 'Submit' button
Then Verify success message 'Thank you for your review.'
