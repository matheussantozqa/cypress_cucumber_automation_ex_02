import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";


// ============================
// Background
// ============================

Given("The User Navigate to login page", () => {
  cy.visit("https://www.automationexercise.com/login");
});

When("Verify 'Login to your account' is visible", () => {
  cy.contains("Login to your account").should("be.visible");
});


// ============================
// Register User
// ============================

When("Enter name and email address", () => {
  cy.get("[data-qa='signup-name']").type("Tester Silva");
  cy.get("[data-qa='signup-email']").type("testersilva@gmail.com");
});

When("Click 'Signup' button", () => {
  cy.get("[data-qa='signup-button']").click();
});

Then("The User Should be Redirected to Create Account Page", () => {
  cy.get(".title").should("contain.text", "Enter Account Information");
});

When("Fill details: Title, Name, Email, Password, Date of birth", () => {
  cy.get("[value='Mr']").click();
  cy.get("[data-qa='password']").type("test12345"); 
  cy.get("[data-qa='days']").select("22"); 
  cy.get("[data-qa='months']").select("May"); 
  cy.get("[data-qa='years']").select("1998"); 
});

When("Select checkbox 'Sign up for our newsletter!'", () => {
  cy.get("[name='newsletter']").check();
});

When("Select checkbox 'Receive special offers from our partners!'", () => {
  cy.get("[name='optin']").check();
});

When("Fill details: First name, Last name, Company, Address, Address2, Country, State, City, Zipcode, Mobile Number", () => {
  cy.get("[data-qa='first_name']").type("Tester");
  cy.get("[data-qa='last_name']").type("Silva");
  cy.get("[data-qa='company']").type("Owner TI");
  cy.get("[data-qa='address']").type("Valdormiro Advaldo, 5234 - South");
  cy.get("[data-qa='country']").select("New Zealand");
  cy.get("[data-qa='state']").type("Auckland");
  cy.get("[data-qa='city']").type("Brooklyn");
  cy.get("[data-qa='zipcode']").type("54632");
  cy.get("[data-qa='mobile_number']").type("43999230040");
});

When("Click 'Create Account button'", () => {
  cy.get("[data-qa='create-account']").click();
});

Then("Verify that 'ACCOUNT CREATED!' is visible", () => {
  cy.get("[data-qa='account-created']").should("be.visible");
})

When("Click 'Continue' button", () => {
  cy.get("[data-qa='continue-button']").click();
});

Then("Verify that 'Logged in as username' is visible", () => {
  cy.contains('Logged in as').should('be.visible');
  cy.get("[href='/logout']").click();
});


// ============================
// Register User with existing email
// ============================

When("Enter name and already registered email address", () => {
  cy.get("[data-qa='signup-name']").type("Tester Silva");
  cy.get("[data-qa='signup-email']").type("testersilva@gmail.com");
});

When("Click Signup button", () => {
  cy.get("[data-qa='signup-button']").click();
});

Then("Verify error 'Email Address already exist!' is visible", () => {
  cy.contains("Email Address already exist!").should("be.visible");
});


// ============================
// Login User incorrect
// ============================

When("Enter incorrect email address and password", () => {
  cy.get("[data-qa='login-email']").type("austinho@trimlim");
  cy.get("[data-qa='login-password']").type("12341838");
});

When("Click 'login' button", () => {
  cy.get("[data-qa='login-button']").click();
});

Then("Verify error 'Your email or password is incorrect!' is visible", () => {
  cy.contains("Your email or password is incorrect!").should("be.visible");
});


// ============================
// Login User correct
// ============================

When("The user fill email address", () => {
  cy.get("[data-qa='login-email']").type("testersilva@gmail.com");
});

Then("The user fill password", () => {
  cy.get("[data-qa='login-password']").type("test12345");
});


// ============================
// Logout User
// ============================

Then("Verify if is Logged as username", () => {
  cy.contains('Logged in as').should('be.visible');
});

When("Click 'Logout' button", () => {
  cy.get("[href='/logout']").click();
});

Then("Verify that user is navigated to login page", () => {
  cy.contains("Login to your account").should("be.visible");
});


// ============================
// Delete Account
// ============================

When("Fill Correct Email and Password", () => {
  cy.get("[data-qa='login-email']").type("testersilva@gmail.com");
  cy.get("[data-qa='login-password']").type("test12345");
});

When("Click 'login' button", () => {
  cy.get("[data-qa='login-button']").click();
});

When("Click 'Delete Account' button", () => {
  cy.get("[href='/delete_account']").click();
});

Then("logged username should be not visible anymore", () => {
  cy.contains('Logged in as').should('not.exist');
});