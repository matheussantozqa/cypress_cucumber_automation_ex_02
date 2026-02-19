import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";


// ============================
// Subscription
// ============================

Given("The user Navigate to home", () => {
  cy.visit("");
});

Then("Verify that home page is sucessfuly visible", () => {
  cy.get("[style='color: orange;']").should("be.visible");
});

When("Scroll down to footer", () => {
  cy.scrollTo("bottom");
});

Then("Verify text 'SUBSCRIPTION'", () => {
  cy.contains("Subscription").should("be.visible");
});

When("Enter email address in input and click arrow button", () => {
  cy.get("[type='email']").type("Antoieine@test.com");
  cy.get("[type='submit']").click();
});

Then(
  "Verify success message 'You have been successfully subscribed!' is visible",
  () => {
    cy.contains("You have been successfully subscribed!").should("be.visible");
  }
);
