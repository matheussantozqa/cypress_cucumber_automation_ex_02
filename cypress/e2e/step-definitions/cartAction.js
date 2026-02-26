import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";


// ============================
// Background
// ============================

Given("User is on homepage", () => {
  cy.visit("https://www.automationexercise.com");
  cy.contains("Features Items").should("be.visible");
});


// ============================
// Add Products in Cart
// ============================

When("User hovers first item and adds it to cart", () => {
  cy.get("[data-product-id='1']").eq(0).click();
});

When("User selects continue shopping option", () => {
  cy.contains('Added!').should('be.visible'); 
  cy.contains('Continue Shopping').click();   
});

When("User hovers second item and adds it to cart", () => {
  cy.get("[data-product-id='5']").eq(0).click();
});

When("User opens cart overview", () => {
  cy.contains('View Cart').click(); 
});

Then("Cart should contain two selected items", () => {
  cy.get('#cart_info_table tbody tr[id^="product-"]').should('have.length', 2);
});

Then("Cart pricing, quantity and totals must be visible", () => {
  cy.contains("Item").should("be.visible");
  cy.contains("Description").should("be.visible");
  cy.contains("Price").should("be.visible");
  cy.get(".cart_quantity_delete").click({ multiple: true, force: true });
  cy.get('#cart_info_table tbody tr[id^="product-"]').should('have.length', 0);
  
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
  cy.contains('View Cart').click();
});

Then("Cart must display item with quantity four", () => {
  cy.get(".cart_quantity").should("contain.text", "4");
  cy.get(".cart_quantity_delete").click({ multiple: true, force: true });
});


// ============================
// Remove Products From Cart
// ============================

When("User adds multiple items into cart list", () => {
  cy.get("[data-product-id='3']").eq(0).click();
  cy.contains('Continue Shopping').click();
  cy.get("[data-product-id='13']").eq(0).click();
  cy.contains('Continue Shopping').click();
  cy.get("[data-product-id='18']").eq(0).click();
  cy.contains('Continue Shopping').click();
  cy.get("[data-product-id='21']").eq(0).click();
  cy.contains('Continue Shopping').click();
  cy.get("[data-product-id='42']").eq(0).click();
  
});

When("User navigates to cart section", () => {
  cy.contains('View Cart').click();
});

Then("Cart overview page should load", () => {
  cy.url().should("include", "/view_cart");
  cy.contains("Item").should("be.visible");
  cy.contains("Description").should("be.visible");
});

When("User removes specific item using delete icon", () => {
  cy.get("[data-product-id='3']").click();
});

Then("Removed item should no longer appear in cart", () => {
  cy.get(".cart_quantity_delete")
    .each(($el) => {
      cy.wrap($el).click({ force: true });
    });

  cy.contains("Sleeveless Dress").should("not.exist");
});


// ============================
// Search Products and Verify Cart After Login
// ============================

When("User performs product search and submits query", () => {
  cy.visit("/products");
  cy.get("[placeholder='Search Product']").type("Cotton");
  cy.get("[type='button']").click();
});

Then("Search results header must be shown", () => {
  cy.contains("Cotton").should("be.visible");
  cy.get(".single-products")
    .should("contain.text", "Cotton");  
});

When("User adds 2 items of the filtered search items to cart", () => {
  cy.get("[data-product-id='28']").eq(0).click();
  cy.contains('Continue Shopping').click();
  cy.get("[data-product-id='21']").eq(0).click();
});

When("User opens cart and confirms items exist", () => {
  cy.contains('View Cart').click();
  cy.get(".cart_description")
  .filter(":contains('Cotton')")
  .should("have.length", 2);
  
});

When("User signs in through authentication page", () => {
  cy.visit("/login");
  cy.get("[data-qa='login-email']").type("Antoieine@test.com"); 
  cy.get("[data-qa='login-password']").type("12345"); 
  cy.get("[data-qa='login-button']").click(); 
});

When("User returns to cart after login", () => {
  cy.get("[href='/view_cart']").eq(0).click();
});

Then("Cart must still contain previously added items", () => {
  cy.get(".cart_description")
  .filter(":contains('Cotton')")
  .should("have.length", 2);
  cy.get(".cart_quantity_delete").click({ multiple: true, force: true });
  cy.get("[href='/logout']").click()
});
