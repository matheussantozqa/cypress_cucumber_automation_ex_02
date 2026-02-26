import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";

// ======================================================
// Background
// ======================================================

Given("The user accesses the home page", () => {

  cy.fixture("pomAdvancedCheckout").then((el) => {
    cy.visit(el.baseUrl);
    cy.contains(el.featuresText).should("be.visible");
  });

});

When("The user opens the Products page", () => {

  cy.fixture("pomAdvancedCheckout").then((el) => {
    cy.get(el.productsLink).click();
  });

});

Then("The ALL PRODUCTS screen should be visible", () => {

  cy.fixture("pomAdvancedCheckout").then((el) => {
    cy.contains(el.allProductsText).should("be.visible");
  });

});

// ======================================================
// Add to cart
// ======================================================

When("The user adds items into the cart", () => {

  cy.fixture("pomAdvancedCheckout").then((el) => {

    cy.get(el.productSelector).eq(0).click({ force: true });
    cy.contains(el.continueShoppingText).click();

    cy.get(el.productSelector).eq(1).click({ force: true });
    cy.contains(el.continueShoppingText).click();

    cy.get(el.productSelector).eq(2).click({ force: true });
    cy.contains(el.continueShoppingText).click();

    cy.get(el.productSelector).eq(3).click({ force: true });

  });

});

When("The user opens the Cart page", () => {

  cy.fixture("pomAdvancedCheckout").then((el) => {
    cy.contains(el.viewCartText).click();
  });

});

Then("The cart screen should be displayed", () => {

  cy.fixture("pomAdvancedCheckout").then((el) => {

    cy.contains(el.itemText).should("be.visible");
    cy.contains(el.descriptionText).should("be.visible");
    cy.contains(el.priceText).should("be.visible");

  });

});

// ======================================================
// Checkout Flow (Register)
// ======================================================

When("The user proceeds to checkout from cart", () => {

  cy.fixture("pomAdvancedCheckout").then((el) => {
    cy.get(el.checkoutButton).click({ force: true });
  });

});

When("The user chooses Register during checkout", () => {

  cy.fixture("pomAdvancedCheckout").then((el) => {
    cy.get(el.loginLink).eq(1).click({ force: true });
  });

});

When("The user completes signup and creates a new account", () => {

  cy.fixture("pomAdvancedCheckout").then((el) => {

    cy.get(el.signupName).type(el.signupNameValue);
    cy.get(el.signupEmail).type(el.signupEmailValue);
    cy.get(el.signupButton).click();

    cy.get(el.titleMr).click();
    cy.get(el.passwordField).type(el.signupPasswordValue);
    cy.get(el.daysSelect).select("22");
    cy.get(el.monthsSelect).select("May");
    cy.get(el.yearsSelect).select("1998");

    cy.get(el.newsletterCheckbox).check();
    cy.get(el.optinCheckbox).check();

    cy.get(el.firstName).type("Tester");
    cy.get(el.lastName).type("Silva");
    cy.get(el.company).type("Owner TI");
    cy.get(el.address).type("Valdormiro Advaldo, 5234 - South");

    cy.get(el.country).scrollIntoView().select("New Zealand", { force: true });

    cy.get(el.state).type("Auckland");
    cy.get(el.city).type("Brooklyn");
    cy.get(el.zipcode).type("54632");
    cy.get(el.mobile).type("43999230040");

    cy.get(el.createAccountButton).click();

  });

});

Then("The order success message must appear", () => {

  cy.fixture("pomAdvancedCheckout").then((el) => {

    cy.contains(el.orderPlacedText).should("be.visible");
    cy.contains(el.orderSuccessText).should("be.visible");

  });

});