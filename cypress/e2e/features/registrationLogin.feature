Feature: Authentication - Login and Logout

Background:
Given The User Navigate to login page
When Verify 'Login to your account' is visible


@focus
Scenario: Register User
When Enter name and email address
When Click 'Signup' button
Then The User Should be Redirected to Create Account Page
When Fill details: Title, Name, Email, Password, Date of birth
When Select checkbox 'Sign up for our newsletter!'
When Select checkbox 'Receive special offers from our partners!'
When Fill details: First name, Last name, Company, Address, Address2, Country, State, City, Zipcode, Mobile Number
When Click 'Create Account button'
Then Verify that 'ACCOUNT CREATED!' is visible
When Click 'Continue' button
Then Verify that 'Logged in as username' is visible


@focus
Scenario: Register User with existing email
When Enter name and already registered email address
When Click Signup button
Then Verify error 'Email Address already exist!' is visible


@focus
Scenario: Login User with incorrect email and password
When Enter incorrect email address and password
When Click 'login' button
Then Verify error 'Your email or password is incorrect!' is visible


@focus
Scenario: Login User with correct email and password
When The user fill email address
Then The user fill password
When Click 'login' button
Then Verify that 'Logged in as username' is visible


@focus
Scenario: Logout User
When Fill Correct Email and Password
When Click 'login' button
Then Verify if is Logged as username
When Click 'Logout' button
Then Verify that user is navigated to login page

@focus
Scenario: Delete Account
When Fill Correct Email and Password
When Click 'login' button
Then Verify if is Logged as username
When Click 'Delete Account' button
Then logged username should be not visible anymore



