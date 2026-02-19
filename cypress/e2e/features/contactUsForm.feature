Feature: Contact Us Form

@focus
Scenario: Register User with existing email
Given The User Navigate to automationexercise.com
Then Verify if home page is visible
When Click on 'Contact Us' button
Then Verify GET IN TOUCH is visible
When Enter name, email, subject and message
When Upload file
When Click 'Submit' button
Then Verify success message 'Success! Your details have been submitted successfully.' is visible
When Click 'Home' button and verify that landed to home page successfully