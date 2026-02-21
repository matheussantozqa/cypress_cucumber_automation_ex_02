import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";

// ============================
// Background
// ============================

Given("User accesses homepage", () => {

  cy.fixture("pomCheckoutFlow").then((el) => {
    cy.visit(el.url);
  });

});

Then("User navigates to products listing page", () => {

  cy.fixture("pomCheckoutFlow").then((el) => {
    cy.get(el.productsPage).click();
  });

});

Then("Products listing screen should be displayed", () => {
  cy.contains("Category").should("be.visible");
});

// ============================
// Place Order - Register During Checkout
// ============================

When("User adds items into shopping cart", () => {

  cy.fixture("pomCheckoutFlow").then((el) => {

    cy.get(el.product4).eq(0).click();
    cy.get(el.dismissModal).click();
    cy.get(el.product6).eq(0).click();

  });

});

When("User opens cart page", () => {

  cy.fixture("pomCheckoutFlow").then((el) => {
    cy.get(el.cartLink).eq(0).click();
  });

});

Then("Cart summary page should be visible", () => {
  cy.url().should("be.equal", Cypress.config().baseUrl + "/view_cart");
});

When("User proceeds to checkout", () => {

  cy.fixture("pomCheckoutFlow").then((el) => {
    cy.get(el.checkoutButton).click();
  });

});

When("User selects register or login option", () => {

  cy.fixture("pomCheckoutFlow").then((el) => {
    cy.get(el.loginLink).eq(1).click();
  });

});

When("User completes signup form and creates account", () => {

  cy.fixture("pomCheckoutFlow").then((el) => {

    cy.get(el.nameField).type("Joselito");
    cy.get(el.emailField).eq(1).type("joselitocabron@gmail.com");
    cy.get(el.signupButton).click();

    cy.get("body").then(($body) => {
      if ($body.text().includes("Email Address already exist!")) {

        cy.get(el.loginEmail).type("joselitocabron@gmail.com");
        cy.get(el.loginPassword).type("45678test");
        cy.get(el.loginButton).click();
        cy.get(el.deleteAccountLink).click();

        cy.get(el.nameField).type("Joselito");
        cy.get(el.emailField).eq(1).type("joselitocabron@gmail.com");
        cy.get(el.signupButton).click();
      }
    });

    cy.get(el.titleMr).click();
    cy.get(el.passwordField).type("45678test");
    cy.get(el.daysSelect).select("6");
    cy.get(el.monthsSelect).select("May");
    cy.get(el.yearsSelect).select("1980");

    cy.get(el.firstName).type("Joselito");
    cy.get(el.lastName).type("Cabron");
    cy.get(el.company).type("Farmer");
    cy.get(el.address).type("San Juan, 5234 - Xito");
    cy.get(el.country).select("Israel");
    cy.get(el.state).type("Cali");
    cy.get(el.city).type("Navidad");
    cy.get(el.zipcode).type("5352356");
    cy.get(el.mobile).type("4356867954");

  });

});

Then("Account creation confirmation should appear", () => {

  cy.fixture("pomCheckoutFlow").then((el) => {
    cy.get(el.createAccount).click();
    cy.get(el.continueButton).click();
  });

});

Then("User should be logged in and visible at header", () => {

  cy.fixture("pomCheckoutFlow").then((el) => {
    cy.contains(el.loggedInText).should("be.visible");
  });

});

When("User returns to cart page", () => {

  cy.fixture("pomCheckoutFlow").then((el) => {
    cy.get(el.cartLink).eq(0).click();
    cy.get(el.checkoutButton).click();
  });

});

Then("Checkout page should display address details and order review", () => {

  cy.fixture("pomCheckoutFlow").then((el) => {
    cy.contains("Your delivery address").should("be.visible");
    cy.contains("Your billing address").should("be.visible");
  });

});

When("User types comment and confirms place order", () => {

  cy.fixture("pomCheckoutFlow").then((el) => {
    cy.get(el.messageField).type("This is a test order comment");
    cy.get(el.paymentLink).click();
  });

});

When("User fills payment form with card details", () => {

  cy.fixture("pomCheckoutFlow").then((el) => {

    cy.get(el.cardName).type("Joselito C");
    cy.get(el.cardNumber).type("14356242452");
    cy.get(el.cvc).type("492");
    cy.get(el.expiryMonth).type("12/30");
    cy.get(el.expiryYear).type("2034");

  });

});

When("User confirms payment submission", () => {

  cy.fixture("pomCheckoutFlow").then((el) => {
    cy.get(el.payButton).click();
  });

});

Then("Order success confirmation message should be displayed", () => {

  cy.fixture("pomCheckoutFlow").then((el) => {

    cy.contains(el.successMessage).should("be.visible");
    cy.get(el.orderPlaced).should("be.visible");

  });

});

When("User removes account through delete option", () => {

  cy.fixture("pomCheckoutFlow").then((el) => {
    cy.get(el.deleteAccountLink).click();
  });

});

Then("Account deletion confirmation should be displayed", () => {

  cy.fixture("pomCheckoutFlow").then((el) => {
    cy.get(el.accountDeleted).should("be.visible");
    cy.contains(el.deletedMessage).should("be.visible");
  });

});

// ============================
// Place Order - Login Before Checkout
// ============================

Given("User opens application in browser", () => {

  cy.fixture("pomCheckoutFlow").then((el) => {
    cy.visit(el.url);
  });

});

Then("Home screen should load correctly", () => {
  cy.get(".title").eq(0).should("be.visible");
});

When("User opens authentication page", () => {

  cy.fixture("pomCheckoutFlow").then((el) => {
    cy.get(el.loginLink).click();
  });

});

When("User logs in with valid credentials", () => {

  cy.fixture("pomCheckoutFlow").then((el) => {

    cy.get(el.loginEmail).type("Antoieine@test.com");
    cy.get(el.loginPassword).type("12345");
    cy.get(el.loginButton).click();

  });

});

Then("User login indicator should be visible", () => {

  cy.fixture("pomCheckoutFlow").then((el) => {
    cy.contains(el.loggedInText).should("be.visible");
  });

});

When("User adds items to cart", () => {

  cy.fixture("pomCheckoutFlow").then((el) => {

    cy.get(el.product3).eq(0).click();
    cy.get(el.dismissModal).click();
    cy.get(el.product13).eq(0).click();
    cy.get(el.dismissModal).click();
    cy.get(el.product18).eq(0).click();
    cy.get(el.dismissModal).click();
    cy.get(el.product21).eq(0).click();
    cy.get(el.dismissModal).click();
    cy.get(el.product42).eq(0).click();

  });

});

When("User goes to cart page", () => {

  cy.fixture("pomCheckoutFlow").then((el) => {
    cy.get(el.cartLink).eq(1).click();
  });

});

Then("Cart summary should be visible", () => {
  cy.contains("Item").should("be.visible");
  cy.contains("Description").should("be.visible");
});

When("User goes to checkout", () => {

  cy.fixture("pomCheckoutFlow").then((el) => {
    cy.get(el.checkoutButton).click();
  });

});

Then("Coment and place order", () => {

  cy.fixture("pomCheckoutFlow").then((el) => {
    cy.get(el.messageField).type("Thanks for everything, this is a test order comment");
    cy.get(el.paymentLink).click();
  });

});

When("User fills payment details then clicks confirm", () => {

  cy.fixture("pomCheckoutFlow").then((el) => {

    cy.get(el.cardName).type("Antoine C");
    cy.get(el.cardNumber).type("143568762");
    cy.get(el.cvc).type("452");
    cy.get(el.expiryMonth).type("05/26");
    cy.get(el.expiryYear).type("2028");
    cy.get(el.payButton).click();

  });

});

Then("Order success message should be displayed", () => {

  cy.fixture("pomCheckoutFlow").then((el) => {

    cy.contains(el.successMessage).should("be.visible");
    cy.get(el.orderPlaced).should("be.visible");
    cy.get(el.logoutLink).click();

  });

});