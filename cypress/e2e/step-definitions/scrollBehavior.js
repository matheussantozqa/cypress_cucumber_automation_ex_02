import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";


// ============================
// Scroll Behaviour
// ============================

Given("The user is at the home page", () => {
  cy.visit("");
});

When("Scroll down page to bottom", () => {
  cy.scrollTo("bottom");
});

Then("Verify 'SUBSCRIPTION' is visible", () => {
  cy.contains("Subscription").should("be.visible");
});

When("Click on arrow at bottom right side to move upward", () => {
  cy.get("[href='#top']").click();
});

Then(
  "Verify that go back to top page",
  () => {
    cy.window().its("scrollY").should("equal", 0);
    cy.contains("Features Items").should("be.visible");
  }
);
