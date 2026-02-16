import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";


// ============================
// Background
// ============================

Given("The User Navigate to url automationexercise.com", () => {
  cy.visit("");
});

When("Verify that home page is visible successfully", () => {
  cy.get("").should("be.visible");
});

Then("Click on Signup_Login button", () => {
  cy.get("").click();
});

Then("Verify 'Login to your account' is visible", () => {
  cy.contains("").should("be.visible");
});


// ============================
// Register User
// ============================

When("Enter name and email address", () => {
  cy.get("").type("");
  cy.get("").type("");
});

When("Click 'Signup' button", () => {
  cy.get("").click();
});

Then("The User Should be Redirected to Create Account Page", () => {
  cy.url().should("include", "");
});

When("Fill details: Title, Name, Email, Password, Date of birth", () => {
  cy.get("").click(); 
  cy.get("").type(""); 
  cy.get("").type(""); 
  cy.get("").type(""); 
  cy.get("").select(""); 
  cy.get("").select(""); 
  cy.get("").select(""); 
});

When("Select checkbox 'Sign up for our newsletter!'", () => {
  cy.get("").check();
});

When("Select checkbox 'Receive special offers from our partners!'", () => {
  cy.get("").check();
});

When("Fill details: First name, Last name, Company, Address, Address2, Country, State, City, Zipcode, Mobile Number", () => {
  cy.get("").type("");
  cy.get("").type("");
  cy.get("").type("");
  cy.get("").type("");
  cy.get("").type("");
  cy.get("").select("");
  cy.get("").type("");
  cy.get("").type("");
  cy.get("").type("");
  cy.get("").type("");
});

When("Click 'Create Account button'", () => {
  cy.get("").click();
});

Then("Verify that 'ACCOUNT CREATED!' is visible", () => {
  cy.contains("").should("be.visible");
});

When("Click 'Continue' button", () => {
  cy.get("").click();
});

Then("Verify that 'Logged in as username' is visible", () => {
  cy.contains("").should("be.visible");
});


// ============================
// Register User with existing email
// ============================

When("Enter name and already registered email address", () => {
  cy.get("").type("");
  cy.get("").type("");
});

When("Click Signup button", () => {
  cy.get("").click();
});

Then("Verify error 'Email Address already exist!' is visible", () => {
  cy.contains("").should("be.visible");
});


// ============================
// Login User incorrect
// ============================

When("Enter incorrect email address and password", () => {
  cy.get("").type("");
  cy.get("").type("");
});

When("Click 'login' button", () => {
  cy.get("").click();
});

Then("Verify error 'Your email or password is incorrect!' is visible", () => {
  cy.contains("").should("be.visible");
});


// ============================
// Login User correct
// ============================

When("The user fill email address", () => {
  cy.get("").type("");
});

Then("The user fill password", () => {
  cy.get("").type("");
});


// ============================
// Logout User
// ============================

When("Enter correct email address and password", () => {
  cy.get("").type("");
  cy.get("").type("");
});

When("Click 'Logout' button", () => {
  cy.get("").click();
});

Then("Verify that user is navigated to login page", () => {
  cy.url().should("include", "");
});
