const { defineConfig } = require("cypress");
const cucumber = require("cypress-cucumber-preprocessor").default;
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://www.automationexercise.com",
    defaultCommandTimeout: 10000,
    viewportHeight: 900,
    viewportWidth: 1400,
    specPattern: "**/*.feature",
    blockHosts: ["*doubleclick.net*", "*googleads*"],

    setupNodeEvents(on, config) {
      on("file:preprocessor", createBundler());

      require("@shelex/cypress-allure-plugin/writer")(on, config);
      return config;
    },
  },
});