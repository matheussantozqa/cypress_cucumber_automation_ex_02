# 💻 Automation Cypress + Cucumber + Allure Repport

This repository contains a suite of **E2E tests** using the **Cypress** framework and **Cucumber (Gherkin)** syntax, for the [Automation Exercise](https://www.automationexercise.com) application.

---

## 🧱 Project Structure
```
cypress/
├── e2e/
│   ├── features/              # Gherkin feature files
│   │   ├── cartAction.feature
│   │   ├── checkoutFlow.feature
│   │   ├── contactUsForm.feature
│   │   ├── productsBrowsing.feature
│   │   ├── registrationLogin.feature
│   │   ├── scrollBehavior.feature
│   │   └── subscription.feature
│   └── step-definitions/      
│       ├── cartAction.js
│       ├── checkoutFlow.js
│       ├── contactUsForm.js
│       ├── productsBrowsing.js
│       ├── registrationLogin.js
│       ├── scrollBehavior.js
│       └── subscription.js
├── fixtures/                  
│   └── testing.pdf
├── support/                   
cypress.config.js              
package.json                   
package-lock.json              
```

---

## 🎯 Key Practices and Patterns

### 📌 POM - Page Object Model
- Element selectors are defined directly within step definitions or in custom Cypress commands.
- **Goal:** Maintain organized and reusable UI interaction logic.

> Example: Selectors like `[data-product-id=\'1\']` are used directly in step definition files.

---

### 📌 DDT - Simple Data-Driven Testing
- Test data is dynamically used in step definitions through parameters in feature files.
- Prevents duplication and tight coupling between test logic and data.

> Example: A step like `Given User is on homepage` can be followed by scenarios that use specific data for different interactions.

---

### 💡 Best Practices Applied

| Practice  | Description |
|----------|-------------|
| **DRY** (Don\'t Repeat Yourself) | Selectors and commands are reused to avoid duplication. |
| **KISS** (Keep It Simple, Stupid) | Step definitions are short and focused. |
| **YAGNI** (You Aren’t Gonna Need It) | Only essential flows are implemented. |
| **Single Responsibility** | Each feature and step-definition file has a specific purpose. |

---

### 🚀 Running the Tests

```bash
# Install dependencies
npm install

# Open the Cypress Test Runner in interactive mode
npx cypress open

# Run all tests in headless mode
npx cypress run

# Run E2E tests and generate/open Allure report
npx cypress run --spec "cypress/e2e/features/**/*.feature" --env allure=true ;
npx allure generate allure-results --clean -o allure-report ;
npx allure open allure-report
```
---

### 🔧 Tools Used
- Cypress
- Cucumber (Gherkin Syntax) via `cypress-cucumber-preprocessor`
- JavaScript
- Allure for QA reports

---

### 📌 Notes
- Selectors are managed directly within step definitions or through custom Cypress commands.
- Gherkin syntax provides a clear and human-readable way to define test scenarios.
- The project is configured to test the [Automation Exercise](https://www.automationexercise.com) application.

---

### 📂 Selector Organization

Selectors are defined and used directly in the step definition files, or in custom Cypress commands for Cypress, ensuring modularity and reusability.
