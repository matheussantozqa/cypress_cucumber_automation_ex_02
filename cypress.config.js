const { defineConfig } = require("cypress");
const cucumber = require("cypress-cucumber-preprocessor").default;
const allureWriter = require("@shelex/cypress-allure-plugin/writer");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://www.automationexercise.com",
    defaultCommandTimeout: 15000,
    viewportHeight: 900,
    viewportWidth: 1400,
    experimentalRunAllSpecs: true,
    specPattern: "**/*.feature",

    setupNodeEvents(on, config) {
      allureWriter(on, config); // ← ativa o Allure
      on("file:preprocessor", cucumber());
      return config;
    },
  },
});
