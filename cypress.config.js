const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: "https://example.com",
    chromeWebSecurity: false,
    experimentalSessionAndOrigin: true, // Use only this one
    sameSite: "no_restriction",
  },
});
