import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";


// ============================
// Background
// ============================

Given("The user is on product page", () => {
  cy.visit("https://www.automationexercise.com/products");
});


// ============================
// Verify All Products and product detail page
// ============================

When("Click on 'View Product' of first product", () => {
  cy.get("[href='/product_details/1']").click();
});

Then("User is landed to product detail page", () => {
  cy.contains("Write Your Review").should("be.visible");
});

Then(
  "Verify that all details is visible: product name, category, price, availability, condition, brand",
  () => {
    cy.contains("Blue Top").should("be.visible");
    cy.contains("Category: Women > Tops").should("be.visible"); 
    cy.contains("Rs. 500").should("be.visible"); 
    cy.contains("Availability:").should("be.visible"); 
    cy.contains("Condition:").should("be.visible"); 
    cy.contains("Brand:").should("be.visible"); 
  }
);


// ============================
// Search Product
// ============================

When("Enter product name in search input and click search button", () => {
  cy.get("[name='search']").type("Tshirt");
  cy.get("[type='button']").click();
});

Then("Verify 'SEARCHED PRODUCTS' is visible", () => {
  cy.contains("T-Shirt").should("be.visible");
});

Then("Verify all the products related to search are visible", () => {
  cy.get(".productinfo.text-center p")
    .should("contain.text", "T-Shirt");
});


// ============================
// View Category Products
// ============================

Then("Verify that categories are visible on left side bar", () => {
  cy.contains("Category").should("be.visible");
});

When("Click on 'Women' category", () => {
  cy.get("[href='#Women']").click();
});

When("Click on category 'Dress' link under 'Women' category", () => {
  cy.get("[href='/category_products/1']").click();
});

Then(
  "Verify that category page is displayed and confirm text 'WOMEN - DRESS PRODUCTS'",
  () => {
    cy.contains("Women - Dress Products").should("be.visible");
  }
);

When("On left side bar, click on sub-category link of 'Men' category", () => {
  cy.get("[href='#Men']").click();
  cy.get("[href='/category_products/6']").click();
});

Then("Verify that user is navigated to that category page", () => {
  cy.contains("Men - Jeans Products").should("be.visible");
});


// ============================
// View & Cart Brand Products
// ============================

Then("Verify that Brands are visible on left side bar", () => {
  cy.contains("Brands").should("be.visible");
});

When("Click on any brand name", () => {
  cy.get("[href='/brand_products/Allen Solly Junior']").click();
});

Then(
  "Verify that user is navigated to brand page and brand products are displayed",
  () => {
    cy.contains("Brand - Allen Solly Junior Products").should("be.visible");
    cy.get("[src='/get_product_picture/13']").should("be.visible");
  }
);

When("On left side bar, click on any other brand link", () => {
  cy.get("[href='/brand_products/Polo']").click();
});

Then(
  "Verify that user is navigated to that brand page and can see products",
  () => {
    cy.contains("Brand - Polo Products").should("be.visible");
  }
);


// ============================
// Add review on product
// ============================

When("Click on 'View Product' button", () => {
  cy.get("[href='/product_details/1']").click();
});

Then("Verify 'Write Your Review' is visible", () => {
  cy.contains("Write Your Review").should("be.visible");
});

When("Enter name, email and review", () => {
  cy.get("[placeholder='Your Name']").type("Antoêine"); 
  cy.get("[placeholder='Email Address']").type("Antoieine@test.com"); 
  cy.get("[placeholder='Add Review Here!']").type("I love this product!"); 
});

When("Confirm 'Submit' button", () => {
  cy.get("#button-review").click();
});

Then("Verify success message 'Thank you for your review.'", () => {
  cy.contains("Thank you for your review.").should("be.visible");
});
