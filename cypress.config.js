const { defineConfig } = require('cypress')

module.exports = defineConfig({
  projectId: '2pw1r7',
  viewportWidth: 1920,
  viewportHeight: 1080,
  pageLoadTimeout: 6000000,
  requestTimeout: 3000000,
  responseTimeout: 6000000,
  defaultCommandTimeout: 1000000,
  chromeWebSecurity: false,
  retries: {
    runMode: 2,
    openMode: 0,
  },
  env: {
    DB: {
      user: 'myuser',
      host: '127.0.0.1',
      database: 'pokemon',
      password: 'pass',
      port: 32763,
    },
  },
  e2e: {
    // We've imported your old cypress plugins here.
    // You may want to clean this up later by importing these.
    specPattern: 'cypress/e2e/**',
    excludeSpecPattern: '**/pages/*,**/common/*',
    experimentalSessionAndOrigin: false,
  },
})
