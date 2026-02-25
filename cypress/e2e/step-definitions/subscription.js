import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";

Given(`The user Navigate to home`, () => {
    cy.visit("https://www.automationexercise.com");
  
});

Then(`Verify that home page is sucessfuly visible`, () => {
    cy.contains("Features Items").should("be.visible");
});

When(`Scroll down to footer`, () => {
    cy.scrollTo("bottom");
});

Then(`Verify text SUBSCRIPTION`, () => {
    cy.contains("Subscription").should("be.visible");
});

When(`Enter email address in input and click send button`, () => {
    cy.get("[type='email']").type("Antoieine@test.com");  
    cy.get("[type='submit']").click(); 
});

Then(`Verify success message {string} is visible`, () => {
    cy.contains("You have been successfully subscribed!").should("be.visible");
});