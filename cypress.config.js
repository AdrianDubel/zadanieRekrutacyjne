const { defineConfig } = require("cypress");

module.exports = defineConfig({
  env: { "cypress-plugin-snapshots": {
    "imageConfig": {
      "treshold": 0.01
    }
  }

  },
  e2e: {
    baseUrl: "https://dietly.pl/",
    setupNodeEvents(on, config) {
      return require("./cypress/plugins/index.js")(on, config);
  },
},
  config: {
    excludeSpecPattern: [
    "**/__snapshots__/*",
    "**/__image_snapshots__/*"
  ]},
  defaultCommandTimeout: 20000,
  video: false,
});
