import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";

// ============================
// Background
// ============================

Given("The User Navigate to url automationexercise.com", () => {

  cy.fixture("pomRegistration").then((el) => {
    cy.visit(el.baseUrl);
  });

});

When("Verify that home page is visible successfully", () => {

  cy.fixture("pomRegistration").then((el) => {
    cy.get(el.homeIndicator).should("be.visible");
  });

});

Then("Click on Signup_Login button", () => {

  cy.fixture("pomRegistration").then((el) => {
    cy.get(el.loginLink).click();
  });

});

Then("Verify 'Login to your account' is visible", () => {

  cy.fixture("pomRegistration").then((el) => {
    cy.contains(el.loginPageText).should("be.visible");
  });

});

// ============================
// Register User
// ============================

When("Enter name and email address", () => {

  cy.fixture("pomRegistration").then((el) => {
    cy.get(el.signupName).type(el.signupNameValue);
    cy.get(el.signupEmail).type(el.signupEmailValue);
  });

});

When("Click 'Signup' button", () => {

  cy.fixture("pomRegistration").then((el) => {
    cy.get(el.signupButton).click();
  });

});

Then("The User Should be Redirected to Create Account Page", () => {

  cy.fixture("pomRegistration").then((el) => {
    cy.get(".title").should("contain.text", el.enterAccountInfoText);
  });

});

When("Fill details: Title, Name, Email, Password, Date of birth", () => {

  cy.fixture("pomRegistration").then((el) => {

    cy.get(el.titleMr).click();
    cy.get(el.passwordField).type(el.passwordValue);
    cy.get(el.daysSelect).select("22");
    cy.get(el.monthsSelect).select("May");
    cy.get(el.yearsSelect).select("1998");

  });

});

When("Select checkbox 'Sign up for our newsletter!'", () => {

  cy.fixture("pomRegistration").then((el) => {
    cy.get(el.newsletterCheckbox).check();
  });

});

When("Select checkbox 'Receive special offers from our partners!'", () => {

  cy.fixture("pomRegistration").then((el) => {
    cy.get(el.optinCheckbox).check();
  });

});

When("Fill details: First name, Last name, Company, Address, Address2, Country, State, City, Zipcode, Mobile Number", () => {

  cy.fixture("pomRegistration").then((el) => {

    cy.get(el.firstName).type(el.firstNameValue);
    cy.get(el.lastName).type(el.lastNameValue);
    cy.get(el.company).type(el.companyValue);
    cy.get(el.address).type(el.addressValue);
    cy.get(el.country).select(el.countryValue);
    cy.get(el.state).type(el.stateValue);
    cy.get(el.city).type(el.cityValue);
    cy.get(el.zipcode).type(el.zipcodeValue);
    cy.get(el.mobile).type(el.mobileValue);

  });

});

When("Click 'Create Account button'", () => {

  cy.fixture("pomRegistration").then((el) => {
    cy.get(el.createAccountButton).click();
  });

});

Then("Verify that 'ACCOUNT CREATED!' is visible", () => {

  cy.fixture("pomRegistration").then((el) => {
    cy.get(el.accountCreatedIndicator).should("be.visible");
  });

});

When("Click 'Continue' button", () => {

  cy.fixture("pomRegistration").then((el) => {
    cy.get(el.continueButton).click();
  });

});

Then("Verify that 'Logged in as username' is visible", () => {

  cy.fixture("pomRegistration").then((el) => {

    cy.contains(el.loggedInText).should("be.visible");
    cy.get(el.logoutLink).click();

  });

});

// ============================
// Existing Email
// ============================

When("Enter name and already registered email address", () => {

  cy.fixture("pomRegistration").then((el) => {
    cy.get(el.signupName).type(el.signupNameValue);
    cy.get(el.signupEmail).type(el.signupEmailValue);
  });

});

When("Click Signup button", () => {

  cy.fixture("pomRegistration").then((el) => {
    cy.get(el.signupButton).click();
  });

});

Then("Verify error 'Email Address already exist!' is visible", () => {

  cy.fixture("pomRegistration").then((el) => {
    cy.contains(el.emailExistsError).should("be.visible");
  });

});

// ============================
// Incorrect Login
// ============================

When("Enter incorrect email address and password", () => {

  cy.fixture("pomRegistration").then((el) => {
    cy.get(el.loginEmail).type(el.incorrectEmailValue);
    cy.get(el.loginPassword).type(el.incorrectPasswordValue);
  });

});

When("Click 'login' button", () => {

  cy.fixture("pomRegistration").then((el) => {
    cy.get(el.loginButton).click();
  });

});

Then("Verify error 'Your email or password is incorrect!' is visible", () => {

  cy.fixture("pomRegistration").then((el) => {
    cy.contains(el.incorrectLoginError).should("be.visible");
  });

});

// ============================
// Correct Login
// ============================

When("The user fill email address", () => {

  cy.fixture("pomRegistration").then((el) => {
    cy.get(el.loginEmail).type(el.signupEmailValue);
  });

});

Then("The user fill password", () => {

  cy.fixture("pomRegistration").then((el) => {
    cy.get(el.loginPassword).type(el.passwordValue);
  });

});

// ============================
// Logout
// ============================

Then("Verify if is Logged as username", () => {

  cy.fixture("pomRegistration").then((el) => {
    cy.contains(el.loggedInText).should("be.visible");
  });

});

When("Click 'Logout' button", () => {

  cy.fixture("pomRegistration").then((el) => {
    cy.get(el.logoutLink).click();
  });

});

Then("Verify that user is navigated to login page", () => {

  cy.fixture("pomRegistration").then((el) => {
    cy.contains(el.loginPageText).should("be.visible");
  });

});

// ============================
// Delete Account
// ============================

When("Fill Correct Email and Password", () => {

  cy.fixture("pomRegistration").then((el) => {

    cy.get(el.loginEmail).type(el.signupEmailValue);
    cy.get(el.loginPassword).type(el.passwordValue);

  });

});

When("Click 'Delete Account' button", () => {

  cy.fixture("pomRegistration").then((el) => {
    cy.get(el.deleteAccountLink).click();
  });

});

Then("logged username should be not visible anymore", () => {

  cy.fixture("pomRegistration").then((el) => {
    cy.contains(el.loggedInText).should("not.exist");
  });

});