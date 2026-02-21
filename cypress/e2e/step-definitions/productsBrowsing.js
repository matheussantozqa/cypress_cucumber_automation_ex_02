import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";

// ============================
// Background
// ============================

Given("The user is on product page", () => {

  cy.fixture("pomProductBrowsing").then((el) => {
    cy.visit(el.productsUrl);
  });

});

// ============================
// Verify All Products and product detail page
// ============================

When("Click on 'View Product' of first product", () => {

  cy.fixture("pomProductBrowsing").then((el) => {
    cy.get(el.viewProduct1).click();
  });

});

Then("User is landed to product detail page", () => {

  cy.fixture("pomProductBrowsing").then((el) => {
    cy.contains(el.writeReviewText).should("be.visible");
  });

});

Then(
  "Verify that all details is visible: product name, category, price, availability, condition, brand",
  () => {

    cy.fixture("pomProductBrowsing").then((el) => {

      cy.contains(el.blueTopText).should("be.visible");
      cy.contains(el.categoryWomenTopsText).should("be.visible");
      cy.contains(el.priceText).should("be.visible");
      cy.contains(el.availabilityText).should("be.visible");
      cy.contains(el.conditionText).should("be.visible");
      cy.contains(el.brandText).should("be.visible");

    });

  }
);

// ============================
// Search Product
// ============================

When("Enter product name in search input and click search button", () => {

  cy.fixture("pomProductBrowsing").then((el) => {

    cy.get(el.searchField).type("Tshirt");
    cy.get(el.genericButton).click();

  });

});

Then("Verify 'SEARCHED PRODUCTS' is visible", () => {

  cy.fixture("pomProductBrowsing").then((el) => {
    cy.contains(el.searchedProductText).should("be.visible");
  });

});

Then("Verify all the products related to search are visible", () => {
  cy.get("[src='/get_product_picture/2']").should("be.visible");
});

// ============================
// View Category Products
// ============================

Then("Verify that categories are visible on left side bar", () => {
  cy.contains("Category").should("be.visible");
});

When("Click on 'Women' category", () => {

  cy.fixture("pomProductBrowsing").then((el) => {
    cy.get(el.womenCategory).click();
  });

});

When("Click on category 'Dress' link under 'Women' category", () => {

  cy.fixture("pomProductBrowsing").then((el) => {
    cy.get(el.womenDressCategory).click();
  });

});

Then(
  "Verify that category page is displayed and confirm text 'WOMEN - DRESS PRODUCTS'",
  () => {

    cy.fixture("pomProductBrowsing").then((el) => {
      cy.contains(el.womenDressPageText).should("be.visible");
    });

  }
);

When("On left side bar, click on sub-category link of 'Men' category", () => {

  cy.fixture("pomProductBrowsing").then((el) => {

    cy.get(el.menCategory).click();
    cy.get(el.menJeansCategory).click();

  });

});

Then("Verify that user is navigated to that category page", () => {

  cy.fixture("pomProductBrowsing").then((el) => {
    cy.contains(el.menJeansPageText).should("be.visible");
  });

});

// ============================
// View & Cart Brand Products
// ============================

Then("Verify that Brands are visible on left side bar", () => {
  cy.contains("Brands").should("be.visible");
});

When("Click on any brand name", () => {

  cy.fixture("pomProductBrowsing").then((el) => {
    cy.get(el.brandAllen).click();
  });

});

Then(
  "Verify that user is navigated to brand page and brand products are displayed",
  () => {

    cy.fixture("pomProductBrowsing").then((el) => {

      cy.contains(el.brandAllenPageText).should("be.visible");
      cy.get("[src='/get_product_picture/13']").should("be.visible");

    });

  }
);

When("On left side bar, click on any other brand link", () => {

  cy.fixture("pomProductBrowsing").then((el) => {
    cy.get(el.brandPolo).click();
  });

});

Then(
  "Verify that user is navigated to that brand page and can see products",
  () => {

    cy.fixture("pomProductBrowsing").then((el) => {
      cy.contains(el.brandPoloPageText).should("be.visible");
    });

  }
);

// ============================
// Add review on product
// ============================

When("Click on 'View Product' button", () => {

  cy.fixture("pomProductBrowsing").then((el) => {
    cy.get(el.viewProduct1).click();
  });

});

Then("Verify 'Write Your Review' is visible", () => {

  cy.fixture("pomProductBrowsing").then((el) => {
    cy.contains(el.writeReviewText).should("be.visible");
  });

});

When("Enter name, email and review", () => {

  cy.fixture("pomProductBrowsing").then((el) => {

    cy.get(el.reviewName).type(el.reviewNameValue);
    cy.get(el.reviewEmail).type(el.reviewEmailValue);
    cy.get(el.reviewMessage).type(el.reviewMessageValue);

  });

});

When("Click Submit button", () => {

  cy.fixture("pomProductBrowsing").then((el) => {
    cy.get(el.submitReviewButton).eq(0).click();
  });

});

Then("Verify success message 'Thank you for your review.'", () => {

  cy.fixture("pomProductBrowsing").then((el) => {
    cy.contains(el.reviewSuccessText).should("be.visible");
  });

});