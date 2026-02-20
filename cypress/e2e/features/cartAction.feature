Feature: Cart Actions

Background:
Given User opens login screen
Then User submits credentials and performs login
Then Homepage should be displayed after authentication


@focus
Scenario: Add Products in Cart
When User hovers first item and adds it to cart
When User selects continue shopping option
When User hovers second item and adds it to cart
When User opens cart overview
Then Cart should contain two selected items
Then Cart pricing, quantity and totals must be visible


@focus
Scenario: Verify Product quantity in Cart
When User opens details page of any item
Then Item details screen should appear
When User changes quantity field to four units
When User adds item into cart from details page
When User opens cart overview
Then Cart must display item with quantity four


@focus
Scenario: Remove Products From Cart
When User adds multiple items into cart list
When User navigates to cart section
Then Cart overview page should load
When User removes specific item using delete icon
Then Removed item should no longer appear in cart


@focus
Scenario: Search Products and Verify Cart After Login
When User performs product search and submits query
Then Search results header must be shown
When User adds 2 items of the filtered search items to cart
When User opens cart and confirms items exist
When User signs in through authentication page
When User returns to cart after login
Then Cart must still contain previously added items
