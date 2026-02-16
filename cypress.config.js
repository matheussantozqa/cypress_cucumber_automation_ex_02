const { defineConfig } = require("cypress");
const cucumber = require("cypress-cucumber-preprocessor").default;

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://www.automationexercise.com",
    defaultCommandTimeout: 10000,
    viewportHeight: 900,
    viewportWidth: 1400,
    specPattern: "**/*.feature",

    setupNodeEvents(on, config) {
      on("file:preprocessor", cucumber());
      return config;
    },
  },
});
