const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: '98gh6e',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: 'https://conexaoqa.herokuapp.com'
  },
});
