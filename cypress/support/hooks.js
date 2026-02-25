import { Before } from "cypress-cucumber-preprocessor/steps";

Before(() => {

  cy.visit("/view_cart");

  function clearCart() {
    cy.get("body").then(($body) => {

      if ($body.find(".cart_quantity_delete").length > 0) {

        cy.get(".cart_quantity_delete")
          .first()
          .click({ force: true });

        cy.wait(500);
        clearCart();
      }

    });
  }

  clearCart();

});