import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";

// ============================
// Subscription
// ============================

Given("The user Navigate to home", () => {

  cy.fixture("pomSubscription").then((el) => {
    cy.visit(el.baseUrl);
  });

});

Then("Verify that home page is sucessfuly visible", () => {

  cy.fixture("pomSubscription").then((el) => {
    cy.get(el.homeIndicator).should("be.visible");
  });

});

When("Scroll down to footer", () => {

  cy.fixture("pomSubscription").then((el) => {
    cy.scrollTo(el.scrollPosition);
  });

});

Then("Verify text 'SUBSCRIPTION'", () => {

  cy.fixture("pomSubscription").then((el) => {
    cy.contains(el.subscriptionText).should("be.visible");
  });

});

When("Enter email address in input and click arrow button", () => {

  cy.fixture("pomSubscription").then((el) => {

    cy.get(el.emailField).type(el.emailValue);
    cy.get(el.submitButton).click();

  });

});

Then(
  "Verify success message 'You have been successfully subscribed!' is visible",
  () => {

    cy.fixture("pomSubscription").then((el) => {
      cy.contains(el.successMessage).should("be.visible");
    });

  }
);