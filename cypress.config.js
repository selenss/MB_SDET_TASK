const { defineConfig } = require("cypress");
const {
  addMatchImageSnapshotPlugin,
} = require("@simonsmith/cypress-image-snapshot/plugin");

module.exports = defineConfig({
  pageLoadTimeout: 80000,
  defaultCommandTimeout: 80000,
  reporter: "cypress-mochawesome-reporter",
  screenshotOnRunFailure: false,
  reporterOptions: {
    charts: true,
    reportPageTitle: "QA Task Report",
    embeddedScreenshots: false,
    inlineAssets: true,
    saveAllAttempts: false,
  },
  e2e: {
    setupNodeEvents(on) {
      on("task", {
        log(message) {
          console.log(message);
          return null;
        },
      });
      addMatchImageSnapshotPlugin(on);
      require("cypress-mochawesome-reporter/plugin")(on);
    },
    baseUrl: "https://www.imdb.com",
    specPattern: ["cypress/e2e/tests/**/**_spec.cy.js"],
  },
});
