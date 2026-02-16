import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";

Given('the user visit "Sauce Demo" main page', () => {
cy.visit(url);
});

When('the user types valid credentials in "Login" page', () => {
cy.fixture('pomLoginPage').then((el) => {
cy.get(el.usernameField).should('be.visible').type(el.standard);
cy.get(el.passwordField).should('be.visible').type(el.password);
});