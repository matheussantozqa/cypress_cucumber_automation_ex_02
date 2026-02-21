import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";


// ============================
// Background
// ============================

Given("User accesses homepage", () => {
  cy.visit("");
});

Then("User navigates to products listing page", () => {
  cy.get("").click();
});

Then("Products listing screen should be displayed", () => {
  cy.url().should("include", "");
});


// ============================
// Place Order - Register During Checkout
// ============================

When("User adds items into shopping cart", () => {
  cy.get("").each(($el, index) => {
    if (index < 2) {
      cy.wrap($el).trigger("mouseover");
      cy.wrap($el).click();
    }
  });
});

When("User opens cart page", () => {
  cy.get("").click();
});

Then("Cart summary page should be visible", () => {
  cy.url().should("include", "");
});

When("User proceeds to checkout", () => {
  cy.get("").click();
});

When("User selects register or login option", () => {
  cy.get("").click();
});

When("User completes signup form and creates account", () => {
  cy.get("").type(""); // name
  cy.get("").type(""); // email
  cy.get("").type(""); // password
  cy.get("").click();  // submit signup
});

Then("Account creation confirmation should appear", () => {
  cy.contains("").should("be.visible");
});

Then("User should be logged in and visible at header", () => {
  cy.get("").should("be.visible");
});

When("User returns to cart page", () => {
  cy.get("").click();
});

Then("Checkout page should display address details and order review", () => {
  cy.get("").should("be.visible"); 
  cy.get("").should("be.visible"); 
});

When("User types comment and confirms place order", () => {
  cy.get("").type(""); // comment textarea
  cy.get("").click();  // place order button
});

When("User fills payment form with card details", () => {
  cy.get("").type(""); // name on card
  cy.get("").type(""); // card number
  cy.get("").type(""); // CVC
  cy.get("").type(""); // expiration
});

When("User confirms payment submission", () => {
  cy.get("").click();
});

Then("Order success confirmation message should be displayed", () => {
  cy.contains("").should("be.visible");
});

When("User removes account through delete option", () => {
  cy.get("").click();
});

Then("Account deletion confirmation should be displayed", () => {
  cy.contains("").should("be.visible");
});


// ============================
// Place Order - Login Before Checkout
// ============================

Given("User opens application in browser", () => {
  cy.visit("");
});

When("User navigates to application URL", () => {
  cy.visit("");
});

Then("Home screen should load correctly", () => {
  cy.get("").should("be.visible");
});

When("User opens authentication page", () => {
  cy.get("").click();
});

When("User logs in with valid credentials", () => {
  cy.get("").type(""); // email
  cy.get("").type(""); // password
  cy.get("").click();  // login
});

Then("User login indicator should be visible", () => {
  cy.get("").should("be.visible");
});


// ============================
// Add Multiple Products, Login and Place Order
// ============================

When("User adds multiple products into cart", () => {
  cy.get("").each(($el) => {
    cy.wrap($el).trigger("mouseover");
    cy.wrap($el).click();
  });
});

When("User completes login form", () => {
  cy.get("").type(""); // email
  cy.get("").type(""); // password
  cy.get("").click();
});

Then("User authentication should be successful", () => {
  cy.get("").should("be.visible");
});

Then("User navigates back to checkout page", () => {
  cy.get("").click();
});

Then("Checkout page should show populated address and order details", () => {
  cy.get("").should("be.visible");
});