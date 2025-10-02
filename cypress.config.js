const { defineConfig } = require('cypress')
module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://thinking-tester-contact-list.herokuapp.com/', // o la URL que te den en la cátedra
    viewportWidth: 1280,
    viewportHeight: 800,
    video: true,
    screenshots: true,
    screenshotOnRunFailure: true,
  },
})
