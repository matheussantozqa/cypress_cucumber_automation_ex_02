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
  "Verify that page is scrolled up and 'Full-Fledged practice website for Automation Engineers' text is visible on screen",
  () => {
    cy.contains("Full-Fledged practice website for Automation Engineers").should("be.visible");
  }
);
