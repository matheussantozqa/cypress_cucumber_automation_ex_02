import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";

// ============================
// Scroll Behaviour
// ============================

Given("The user is at the home page", () => {

  cy.fixture("pomScroll").then((el) => {
    cy.visit(el.baseUrl);
  });

});

When("Scroll down page to bottom", () => {

  cy.fixture("pomScroll").then((el) => {
    cy.scrollTo(el.scrollPosition);
  });

});

Then("Verify 'SUBSCRIPTION' is visible", () => {

  cy.fixture("pomScroll").then((el) => {
    cy.contains(el.subscriptionText).should("be.visible");
  });

});

When("Click on arrow at bottom right side to move upward", () => {

  cy.fixture("pomScroll").then((el) => {
    cy.get(el.scrollTopArrow).click();
  });

});

Then(
  "Verify that page is scrolled up and 'Full-Fledged practice website for Automation Engineers' text is visible on screen",
  () => {

    cy.fixture("pomScroll").then((el) => {
      cy.contains(el.topBannerText).should("be.visible");
    });

  }
);