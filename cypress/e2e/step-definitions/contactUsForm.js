import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";

// ============================
// Contact Us Form
// ============================

Given("The User Navigate to automationexercise.com", () => {

  cy.fixture("pomContactUs").then((el) => {
    cy.visit(el.baseUrl);
  });

});

Then("Verify if home page is visible", () => {

  cy.fixture("pomContactUs").then((el) => {
    cy.get(el.homeIndicator).should("be.visible");
  });

});

When("Click on 'Contact Us' button", () => {

  cy.fixture("pomContactUs").then((el) => {
    cy.get(el.contactUsButton).click();
  });

});

Then("Verify GET IN TOUCH is visible", () => {

  cy.fixture("pomContactUs").then((el) => {
    cy.contains(el.getInTouchText).should("be.visible");
  });

});

When("Enter name, email, subject and message", () => {

  cy.fixture("pomContactUs").then((el) => {

    cy.get(el.nameField).type(el.nameValue);
    cy.get(el.emailField).type(el.emailValue);
    cy.get(el.subjectField).type(el.subjectValue);
    cy.get(el.messageField).type(el.messageValue);

  });

});

When("Upload file", () => {

  cy.fixture("pomContactUs").then((el) => {
    cy.get(el.uploadInput).selectFile(el.filePath);
  });

});

When("Click 'Submit' button", () => {

  cy.fixture("pomContactUs").then((el) => {

    cy.on("window:confirm", () => true);
    cy.get(el.submitButton).click();

  });

});

Then(
  "Verify success message 'Success! Your details have been submitted successfully.' is visible",
  () => {

    cy.fixture("pomContactUs").then((el) => {
      cy.contains(el.successMessage).should("be.visible");
    });

  }
);

When(
  "Click 'Home' button and verify that landed to home page successfully",
  () => {

    cy.fixture("pomContactUs").then((el) => {

      cy.get(el.homeButton).click();
      cy.get(el.homeIndicator).should("be.visible");

    });

  }
);