Feature: Subscription

@focus
Scenario: Verify Subscription in home page
Given The user Navigate to home
Then Verify that home page is sucessfuly visible 
When Scroll down to footer
Then Verify text 'SUBSCRIPTION'
When Enter email address in input and click arrow button
Then Verify success message 'You have been successfully subscribed!' is visible
