import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";


// ============================
// Background
// ============================

Given("User opens login screen", () => {
  cy.visit("/login");
});

Then("User submits credentials and performs login", () => {
  cy.get("[data-qa='login-email']").type("Antoieine@test.com"); 
  cy.get("[data-qa='login-password']").type("12345"); 
  cy.get("[data-qa='login-button']").click();  
});

Then("Homepage should be displayed after authentication", () => {
  cy.get("[style='color: orange;']").should("be.visible");
});


// ============================
// Add Products in Cart
// ============================

When("User hovers first item and adds it to cart", () => {
  cy.get("[data-product-id='5']").eq(0).click();
});

When("User selects continue shopping option", () => {
  cy.get("[data-dismiss='modal']").click();
});

When("User hovers second item and adds it to cart", () => {
  cy.get("[data-dismiss='modal']").eq(0).click();
});

When("User opens cart overview", () => {
  cy.get("[href='/view_cart']").eq(1).click();
});

Then("Cart should contain two selected items", () => {
  cy.get("#product-5").should('be.visible');
  cy.get("#product-6").should('be.visible');
});

Then("Cart pricing, quantity and totals must be visible", () => {
  cy.get(".cart_total_price").should("be.visible");
  cy.get(".cart_quantity").should("be.visible");
  cy.get(".total").should("be.visible");
});


// ============================
// Verify Product quantity in Cart
// ============================

When("User opens details page of any item", () => {
  cy.get("[href='/product_details/19']").click();
});

Then("Item details screen should appear", () => {
  cy.contains("Category: Kids > Dress").should("be.visible");
});

When("User changes quantity field to four units", () => {
  cy.get("[name='quantity']").clear().type("4");
});

When("User adds item into cart from details page", () => {
  cy.get("[type='button']").click();
  cy.get("[href='/view_cart']").eq(1).click();
});

Then("Cart must display item with quantity four", () => {
  cy.get(".cart_quantity").should("contain.text", "4");
  cy.get("[data-product-id='19']").click();
});


// ============================
// Remove Products From Cart
// ============================

When("User adds multiple items into cart list", () => {
  cy.get("").each(($el) => {
    cy.wrap($el).trigger("mouseover");
    cy.wrap($el).click();
  });
});

When("User navigates to cart section", () => {
  cy.get("").click();
});

Then("Cart overview page should load", () => {
  cy.url().should("include", "");
});

When("User removes specific item using delete icon", () => {
  cy.get("").first().click();
});

Then("Removed item should no longer appear in cart", () => {
  cy.get("").should("not.exist");
});


// ============================
// Search Products and Verify Cart After Login
// ============================

When("User performs product search and submits query", () => {
  cy.get("").type("");
  cy.get("").click();
});

Then("Search results header must be shown", () => {
  cy.contains("").should("be.visible");
});

Then("Matching items from search should be listed", () => {
  cy.get("").should("be.visible");
});

When("User adds all filtered search items to cart", () => {
  cy.get("").each(($el) => {
    cy.wrap($el).trigger("mouseover");
    cy.wrap($el).click();
  });
});

When("User opens cart and confirms items exist", () => {
  cy.get("").click();
  cy.get("").should("be.visible");
});

When("User signs in through authentication page", () => {
  cy.get("").click();
  cy.get("").type("");
  cy.get("").type("");
  cy.get("").click();
});

When("User returns to cart after login", () => {
  cy.get("").click();
});

Then("Cart must still contain previously added items", () => {
  cy.get("").should("be.visible");
});
