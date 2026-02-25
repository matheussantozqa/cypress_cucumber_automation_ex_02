Feature: Scroll Behaviour

@focus
Scenario: Verify Scroll Up using 'Arrow' button and Scroll Down functionality
Given The user is at the home page
When Scroll down page to bottom
Then Verify 'SUBSCRIPTION' is visible
When Click on arrow at bottom right side to move upward
Then Verify that go back to top page
