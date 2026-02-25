import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";


// ============================
// Contact Us Form
// ============================

Given("The User Navigate to automationexercise.com", () => {
  cy.visit("https://www.automationexercise.com");
});

Then("Verify if home page is visible", () => {
  cy.contains("Features Items").should("be.visible");
});

When("Click on 'Contact Us' button", () => {
  cy.get("[href='/contact_us']").click();
});

Then("Verify GET IN TOUCH is visible", () => {
  cy.contains("Get In Touch").should("be.visible");
});

When("Enter name, email, subject and message", () => {
  cy.get("[data-qa='name']").type("Antoieine");
  cy.get("[data-qa='email']").type("Antoieine@test.com");
  cy.get("[data-qa='subject']").type("Thanks for this site!"); 
  cy.get("[data-qa='message']").type("Thanks for deliver this site for us to test for free. Really appreciate!"); 
});

When("Upload file", () => {
  cy.get("[name='upload_file']").selectFile('cypress/fixtures/testing.pdf');
});

When("Click 'Submit' button", () => {
  cy.on('window:confirm', () => true);
  cy.get("[data-qa='submit-button']").click();
});

Then("Verify success message 'Success! Your details have been submitted successfully.' is visible", () => {
    cy.contains("Success! Your details have been submitted successfully.").should("be.visible");
  }
);

When(
  "Click 'Home' button and verify that landed to home page successfully",
  () => {
    cy.get(".btn-success").click();
    cy.contains("Features Items").should("be.visible");
  }
);
