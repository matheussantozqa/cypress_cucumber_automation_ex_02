import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";


// ============================
// Background
// ============================

Given("User accesses homepage", () => {
  cy.visit("");
});

Then("User navigates to products listing page", () => {
  cy.get("[href='/products']").click();
});

Then("Products listing screen should be displayed", () => {
  cy.contains("Category").should("be.visible");
});


// ============================
// Place Order - Register During Checkout
// ============================

When("User adds items into shopping cart", () => {
  cy.get("[data-product-id='4']").eq(0).click();
  cy.get("[data-dismiss='modal']").click();
  cy.get("[data-product-id='6']").eq(0).click();
});

When("User opens cart page", () => {
  cy.get("[href='/view_cart']").eq(0).click();
});

Then("Cart summary page should be visible", () => {
  cy.url().should("be.equal", Cypress.config().baseUrl + "/view_cart");
});

When("User proceeds to checkout", () => {
  cy.get(".check_out").click();
});

When("User selects register or login option", () => {
  cy.get("[href='/login']").eq(1).click();
});

When("User completes signup form and creates account", () => {

  cy.get("[placeholder='Name']").type("Joselito");  
  cy.get("[placeholder='Email Address']").eq(1).type("joselitocabron@gmail.com"); 
  cy.get("[data-qa='signup-button']").click();

  cy.get('body').then(($body) => {
    if ($body.text().includes('Email Address already exist!')) {
      cy.get("[data-qa='login-email']").type("joselitocabron@gmail.com"); 
      cy.get("[data-qa='login-password']").type("45678test"); 
      cy.get("[data-qa='login-button']").click();
      cy.get("[href='/delete_account']").click();
      cy.get("[placeholder='Name']").type("Joselito");  
      cy.get("[placeholder='Email Address']").eq(1).type("joselitocabron@gmail.com"); 
      cy.get("[data-qa='signup-button']").click();
    }
});
  cy.get("[value='Mr']").click();
  cy.get("[data-qa='password']").type("45678test"); 
  cy.get("[data-qa='days']").select("6"); 
  cy.get("[data-qa='months']").select("May"); 
  cy.get("[data-qa='years']").select("1980"); 
  cy.get("[name='newsletter']").check();
  cy.get("[name='optin']").check();

  cy.get("[data-qa='first_name']").type("Joselito");
  cy.get("[data-qa='last_name']").type("Cabron");
  cy.get("[data-qa='company']").type("Farmer");
  cy.get("[data-qa='address']").type("San Juan, 5234 - Xito");
  cy.get("[data-qa='country']").select("Israel");
  cy.get("[data-qa='state']").type("Cali");
  cy.get("[data-qa='city']").type("Navidad");
  cy.get("[data-qa='zipcode']").type("5352356");
  cy.get("[data-qa='mobile_number']").type("4356867954");
});

Then("Account creation confirmation should appear", () => {
  cy.get("[data-qa='create-account']").click();
  cy.get("[data-qa='continue-button']").click();
});

Then("User should be logged in and visible at header", () => {
  cy.contains("Logged in as").should("be.visible");
});

When("User returns to cart page", () => {
  cy.get("[href='/view_cart']").eq(0).click();
  cy.get(".check_out").click();
});

Then("Checkout page should display address details and order review", () => {
  cy.contains("Your delivery address").should("be.visible"); 
  cy.contains("Your billing address").should("be.visible");
});

When("User types comment and confirms place order", () => {
  cy.get("[name='message']").type("This is a test order comment"); 
  cy.get("[href='/payment']").click();  
});

When("User fills payment form with card details", () => {
  cy.get("[name='name_on_card']").type("Joselito C"); 
  cy.get("[data-qa='card-number']").type("14356242452"); 
  cy.get("[data-qa='cvc']").type("492"); 
  cy.get("[data-qa='expiry-month']").type("12/30"); 
  cy.get("[data-qa='expiry-year']").type("2034");
});

When("User confirms payment submission", () => {
  cy.get("[data-qa='pay-button']").click();
});

Then("Order success confirmation message should be displayed", () => {
  cy.get("[style='font-size: 20px; font-family: garamond;']").should("contain.text", "Congratulations! Your order has been confirmed!");
  cy.get("[data-qa='order-placed']").should("be.visible");
});

When("User removes account through delete option", () => {
  cy.get("[href='/delete_account']").click();
});

Then("Account deletion confirmation should be displayed", () => {
  cy.get("[data-qa='account-deleted']").should("be.visible");
  cy.contains("Your account has been permanently deleted!").should("contain.text", "Your account has been permanently deleted!");
});


// ============================
// Place Order - Login Before Checkout
// ============================

Given("User opens application in browser", () => {
  cy.visit("");
});

Then("Home screen should load correctly", () => {
  cy.get(".title").eq(0).should("be.visible");
});

When("User opens authentication page", () => {
  cy.get("[href='/login']").click();
});

When("User logs in with valid credentials", () => {
  cy.get("[data-qa='login-email']").type("Antoieine@test.com");
  cy.get("[data-qa='login-password']").type("12345"); 
  cy.get("[data-qa='login-button']").click();
});

Then("User login indicator should be visible", () => {
  cy.contains("Logged in as").should("be.visible");
});

When(`User adds items to cart`, () => {
  cy.get("[data-product-id='3']").eq(0).click();
  cy.get("[data-dismiss='modal']").click();
  cy.get("[data-product-id='13']").eq(0).click();
  cy.get("[data-dismiss='modal']").click();
  cy.get("[data-product-id='18']").eq(0).click();
  cy.get("[data-dismiss='modal']").click();
  cy.get("[data-product-id='21']").eq(0).click();
  cy.get("[data-dismiss='modal']").click();
  cy.get("[data-product-id='42']").eq(0).click();
});

When(`User goes to cart page`, () => {
  cy.get("[href='/view_cart']").eq(1).click();
});

Then(`Cart summary should be visible`, () => {
  cy.contains("Item").should("be.visible");
  cy.contains("Description").should("be.visible");
});

When(`User goes to checkout`, () => {
  cy.get(".check_out").click();
});

Then('Coment and place order', () => {
  cy.get("[name='message']").type("Thanks for everything, this is a test order comment"); 
  cy.get("[href='/payment']").click(); 
});

When(`User fills payment details then clicks confirm`, () => {
  cy.get("[name='name_on_card']").type("Antoine C"); 
  cy.get("[data-qa='card-number']").type("143568762"); 
  cy.get("[data-qa='cvc']").type("452"); 
  cy.get("[data-qa='expiry-month']").type("05/26"); 
  cy.get("[data-qa='expiry-year']").type("2028");   
  cy.get("[data-qa='pay-button']").click();
});

Then(`Order success message should be displayed`, () => {
  cy.get("[style='font-size: 20px; font-family: garamond;']").should("contain.text", "Congratulations! Your order has been confirmed!");
  cy.get("[data-qa='order-placed']").should("be.visible"); 
  cy.get("[href='/logout']").click(); 
});


