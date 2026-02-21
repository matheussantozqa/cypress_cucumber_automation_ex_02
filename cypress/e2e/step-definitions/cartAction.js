import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";

// ============================
// Background
// ============================

Given("User opens login screen", () => {

  cy.fixture("pomCartAction").then((el) => {
    cy.visit(el.loginUrl);
  });

});

Then("User submits credentials and performs login", () => {

  cy.fixture("pomCartAction").then((el) => {

    cy.get(el.loginEmail).type(el.loginEmailValue);
    cy.get(el.loginPassword).type(el.loginPasswordValue);
    cy.get(el.loginButton).click();

    cy.visit(el.cartUrl);

    cy.get("body").then(body => {
      if (body.find(el.deleteIcon).length > 0) {
        cy.get(el.deleteIcon).click({ multiple: true, force: true });
      }
    });

  });

});

Then("Homepage should be displayed after authentication", () => {

  cy.fixture("pomCartAction").then((el) => {
    cy.visit(el.homeUrl);
    cy.get(el.homepageIndicator).should("be.visible");
  });

});

// ============================
// Add Products in Cart
// ============================

When("User hovers first item and adds it to cart", () => {

  cy.fixture("pomCartAction").then((el) => {
    cy.get(el.product1).eq(0).click();
  });

});

When("User selects continue shopping option", () => {

  cy.fixture("pomCartAction").then((el) => {
    cy.get(el.modalDismiss).click();
  });

});

When("User hovers second item and adds it to cart", () => {

  cy.fixture("pomCartAction").then((el) => {
    cy.get(el.product5).eq(0).click();
  });

});

When("User opens cart overview", () => {

  cy.fixture("pomCartAction").then((el) => {
    cy.get(el.cartLink).eq(0).click();
  });

});

Then("Cart should contain two selected items", () => {

  cy.fixture("pomCartAction").then((el) => {
    cy.get(el.cartDescription).should("have.length", 2);
  });

});

Then("Cart pricing, quantity and totals must be visible", () => {

  cy.fixture("pomCartAction").then((el) => {

    cy.get(el.cartTotalPrice).should("be.visible");
    cy.get(el.cartQuantity).should("be.visible");
    cy.get(el.cartTotal).should("be.visible");
    cy.get(el.deleteIcon).click({ multiple: true, force: true });

  });

});

// ============================
// Verify Product quantity
// ============================

When("User opens details page of any item", () => {

  cy.fixture("pomCartAction").then((el) => {
    cy.get(el.productDetails19).click();
  });

});

Then("Item details screen should appear", () => {

  cy.fixture("pomCartAction").then((el) => {
    cy.contains(el.expectedCategoryText).should("be.visible");
  });

});

When("User changes quantity field to four units", () => {

  cy.fixture("pomCartAction").then((el) => {
    cy.get(el.quantityField).clear().type("4");
  });

});

When("User adds item into cart from details page", () => {

  cy.fixture("pomCartAction").then((el) => {

    cy.get(el.genericButton).click();
    cy.get(el.cartLink).eq(1).click();

  });

});

Then("Cart must display item with quantity four", () => {

  cy.fixture("pomCartAction").then((el) => {

    cy.get(el.cartQuantity).should("contain.text", "4");
    cy.get("[data-product-id='19']").click();
    cy.get(el.deleteIcon).click({ multiple: true, force: true });

  });

});

// ============================
// Remove Products
// ============================

When("User adds multiple items into cart list", () => {

  cy.fixture("pomCartAction").then((el) => {

    cy.get(el.product3).eq(0).click();
    cy.get(el.modalDismiss).click();
    cy.get(el.product13).eq(0).click();
    cy.get(el.modalDismiss).click();
    cy.get(el.product18).eq(0).click();
    cy.get(el.modalDismiss).click();
    cy.get(el.product21).eq(0).click();
    cy.get(el.modalDismiss).click();
    cy.get(el.product42).eq(0).click();

  });

});

When("User navigates to cart section", () => {

  cy.fixture("pomCartAction").then((el) => {
    cy.get(el.cartLink).eq(1).click();
  });

});

Then("Cart overview page should load", () => {
  cy.contains("Item").should("be.visible");
  cy.contains("Description").should("be.visible");
});

When("User removes specific item using delete icon", () => {

  cy.fixture("pomCartAction").then((el) => {
    cy.get('#product-3 > .cart_delete > .cart_quantity_delete').click();
  });

});

Then("Removed item should no longer appear in cart", () => {

  cy.fixture("pomCartAction").then((el) => {

    cy.contains(el.removedItemText).should("not.exist");
    cy.get(el.deleteIcon).click({ multiple: true, force: true });

  });

});

// ============================
// Search + Cart persistence
// ============================

When("User performs product search and submits query", () => {

  cy.fixture("pomCartAction").then((el) => {

    cy.get(el.logoutLink).click();
    cy.visit(el.productsUrl);
    cy.get(el.searchField).type(el.searchKeyword);
    cy.get(el.genericButton).click();

  });

});

Then("Search results header must be shown", () => {

  cy.fixture("pomCartAction").then((el) => {

    cy.contains(el.searchKeyword).should("be.visible");
    cy.get(el.singleProducts)
      .should("contain.text", el.searchKeyword);

  });

});

When("User adds 2 items of the filtered search items to cart", () => {

  cy.fixture("pomCartAction").then((el) => {

    cy.get(el.product28).eq(0).click();
    cy.get(el.modalDismiss).click();
    cy.get(el.product21).eq(0).click();
    cy.get(el.modalDismiss).click();

  });

});

When("User opens cart and confirms items exist", () => {

  cy.fixture("pomCartAction").then((el) => {

    cy.get(el.cartLink).eq(0).click();
    cy.get(el.cartDescription)
      .filter(":contains('Cotton')")
      .should("have.length", 2);

  });

});

When("User signs in through authentication page", () => {

  cy.fixture("pomCartAction").then((el) => {

    cy.visit(el.loginUrl);
    cy.get(el.loginEmail).type(el.loginEmailValue);
    cy.get(el.loginPassword).type(el.loginPasswordValue);
    cy.get(el.loginButton).click();

  });

});

When("User returns to cart after login", () => {

  cy.fixture("pomCartAction").then((el) => {
    cy.get(el.cartLink).eq(0).click();
  });

});

Then("Cart must still contain previously added items", () => {

  cy.fixture("pomCartAction").then((el) => {

    cy.get(el.cartDescription)
      .filter(":contains('Cotton')")
      .should("have.length", 2);

    cy.get(el.deleteIcon).click({ multiple: true, force: true });

  });

});