import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";

// ======================================================
// Background - Navigation to Products
// ======================================================

Given("The user accesses the home page", () => {
  cy.visit("https://www.automationexercise.com");
  cy.contains("Features Items").should("be.visible"); 
});

When("The user opens the Products page", () => {
  cy.get("[href='/products']").click(); 
});

Then("The ALL PRODUCTS screen should be visible", () => {
  cy.contains("All Products").should("be.visible"); 
});

// ======================================================
// Scenario: Place Order Register while Checkout
// ======================================================

When("The user adds items into the cart", () => {
  cy.get('[data-product-id]').eq(0).click({ force: true });
  cy.contains('Continue Shopping').should('be.visible').click();
  cy.get('[data-product-id]').eq(1).click({ force: true });
  cy.contains('Continue Shopping').should('be.visible').click();
  cy.get('[data-product-id]').eq(2).click({ force: true });
  cy.contains('Continue Shopping').should('be.visible').click();
  cy.get('[data-product-id]').eq(3).click({ force: true });
});

When("The user opens the Cart page", () => {
  cy.contains('View Cart').should('be.visible').click(); 
  
});

Then("The cart screen should be displayed", () => {
  cy.contains("Item").should("be.visible");
  cy.contains("Description").should("be.visible");
  cy.contains("Price").should("be.visible");
});

When("The user proceeds to checkout from cart", () => {
  cy.get('.check_out').click({ force: true });
});

When("The user chooses Register during checkout", () => {
  cy.get("[href='/login']").eq(1).click({ force: true });
});

When("The user completes signup and creates a new account", () => {
  cy.get("[data-qa='signup-name']").type("Tester Silva");
  cy.get("[data-qa='signup-email']").type("testersilva@gmail.com"); 
  cy.get("[data-qa='signup-button']").click();
  cy.get(".title").should("contain.text", "Enter Account Information");
  cy.get("[value='Mr']").click();
  cy.get("[data-qa='password']").type("test12345"); 
  cy.get("[data-qa='days']").select("22"); 
  cy.get("[data-qa='months']").select("May"); 
  cy.get("[data-qa='years']").select("1998");
  cy.get("[name='newsletter']").check();
  cy.get("[name='optin']").check();
  cy.get("[data-qa='first_name']").type("Tester");
  cy.get("[data-qa='last_name']").type("Silva");
  cy.get("[data-qa='company']").type("Owner TI");
  cy.get("[data-qa='address']").type("Valdormiro Advaldo, 5234 - South");
  cy.get("[data-qa='country']")
  .scrollIntoView()
  .select("New Zealand", { force: true });
  cy.get("[data-qa='state']").type("Auckland");
  cy.get("[data-qa='city']").type("Brooklyn");
  cy.get("[data-qa='zipcode']").type("54632");
  cy.get("[data-qa='mobile_number']").type("43999230040");
  cy.get("[data-qa='create-account']").click();
  
});

Then("The system shows ACCOUNT CREATED and continues", () => {
  cy.get("[data-qa='account-created']").should("be.visible");
  cy.get("[data-qa='continue-button']").click();
});

Then("The header displays Logged in as username", () => {
  cy.contains('Logged in as').should('be.visible'); 
});

When("The user returns to Cart again", () => {
  cy.get("[href='/view_cart']").eq(0).click({ force: true });
});

When("The user proceeds again to checkout", () => {
  cy.contains('Proceed To Checkout').should('be.visible').click(); 
});

Then("The checkout address and order review must be visible", () => {
  cy.contains("Address Details").should("be.visible");
  cy.contains("Review Your Order").should("be.visible");
  cy.contains("Your delivery address").should("be.visible");
  cy.contains("Your billing address").should("be.visible");
}); 

When("The user writes a checkout comment and places the order", () => {
  cy.get("[name='message']").type("Please, deliver between 9am and 5pm."); 
  cy.get("[href='/payment']").click(); 
});

When("The user fills card data and submits payment", () => {
  cy.get("[data-qa='name-on-card']").type("Tester Silva"); 
  cy.get("[data-qa='card-number']").type("411814327"); 
  cy.get("[data-qa='cvc']").type('713'); 
  cy.get("[data-qa='expiry-month']").type("11"); 
  cy.get("[data-qa='expiry-year']").type("2028");
  cy.get("[data-qa='pay-button']").click();
});

Then("The order success message must appear", () => {
  cy.contains("Order Placed!").should("be.visible"); 
  cy.contains("Congratulations! Your order has been confirmed!").should("be.visible");
});

When("The user deletes the account after purchase", () => {
  cy.get("[href='/delete_account']").click(); 
});

Then("The account deleted confirmation must be visible", () => {
  cy.contains('Logged in as').should('not.exist');
});

// ======================================================
// Scenario: Place Order Login before Checkout
// ======================================================

When("The user opens the Login screen", () => {
  cy.visit("https://www.automationexercise.com/login");
});

Then("The user logs in with valid credentials", () => {
  cy.get("[data-qa='login-email']").type("Antoieine@test.com"); 
  cy.get("[data-qa='login-password']").type("12345"); 
  cy.get("[data-qa='login-button']").click();
});

When("The user adds items into the cart before checkout", () => {
  cy.get('[data-product-id]').eq(0).click({ force: true });
  cy.contains('Continue Shopping').should('be.visible').click();
  cy.get('[data-product-id]').eq(1).click({ force: true });
  cy.contains('Continue Shopping').should('be.visible').click();
  cy.get('[data-product-id]').eq(2).click({ force: true }); 
});

Then("The user opens the Cart page again", () => {
  cy.contains('View Cart').should('be.visible').click(); 
});

When("The user proceeds to checkout with logged account", () => {
  cy.contains('Proceed To Checkout').should('be.visible').click();
});

When("The user fills card data and confirms payment", () => {
  cy.get("[name='message']").type("I love this product!");
  cy.get("[href='/payment']").click(); 
  cy.get("[data-qa='name-on-card']").type("Antoiêine Silva"); 
  cy.get("[data-qa='card-number']").type("411789543"); 
  cy.get("[data-qa='cvc']").type('713');
  cy.get("[data-qa='expiry-month']").type("11"); 
  cy.get("[data-qa='expiry-year']").type("2028");
  cy.get("[data-qa='pay-button']").click(); 
});

Then("Successful order confirmation message is displayed", () => {
  cy.contains("Order Placed!").should("be.visible"); 
  cy.contains("Congratulations! Your order has been confirmed!").should("be.visible");
  cy.get("[href='/logout']").click();
});

// ======================================================
// Scenario: Add Multiple Products, Login and Place Order
// ======================================================

When("The user adds multiple products into cart", () => {
  cy.get('[data-product-id]').eq(0).click({ force: true });
  cy.contains('Continue Shopping').should('be.visible').click();
  cy.get('[data-product-id]').eq(1).click({ force: true });
  cy.contains('Continue Shopping').should('be.visible').click();
  cy.get('[data-product-id]').eq(2).click({ force: true }); 
});

When("The user opens the Cart overview", () => {
  cy.contains('View Cart').should('be.visible').click(); 
});

When("The user starts checkout flow", () => {
  cy.contains('Proceed To Checkout').should('be.visible').click();
});

When("The user selects login during checkout", () => {
  cy.get("[href='/login']").eq(0).click({ force: true }); 
});

When("The user completes login form successfully", () => {
  cy.get("[data-qa='login-email']").type("Antoieine@test.com"); 
  cy.get("[data-qa='login-password']").type("12345"); 
  cy.get("[data-qa='login-button']").click();
});

Then("The system confirms the user is authenticated", () => {
  cy.contains('Logged in as Antoêine').should('be.visible');
});

Then("The user navigates to final Checkout page", () => {
  cy.get("[href='/view_cart']").eq(0).click({ force: true }); 
  cy.contains('Proceed To Checkout').should('be.visible').click();
});

Then("The checkout address and order count must be validated", () => {
  cy.get("[name='message']").type("WOW, I am loving this shopping experience!"); 
  cy.get("[href='/payment']").click(); 
});

When("The user confirms payment to finalize order", () => {
  cy.get("[data-qa='name-on-card']").type("Antoiêine Silva"); 
  cy.get("[data-qa='card-number']").type("411789543"); 
  cy.get("[data-qa='cvc']").type('713');
  cy.get("[data-qa='expiry-month']").type("11"); 
  cy.get("[data-qa='expiry-year']").type("2028");
  cy.get("[data-qa='pay-button']").click();  
});

Then("The order success message must be visible", () => {
  cy.contains("Order Placed!").should("be.visible"); 
  cy.contains("Congratulations! Your order has been confirmed!").should("be.visible");
});