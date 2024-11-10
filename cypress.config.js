/* eslint-disable global-require */
// eslint-disable-next-line import/no-extraneous-dependencies
const { defineConfig } = require('cypress')
const setupPlugins = require('./cypress/plugins/index.js')

module.exports = defineConfig({
    numTestsKeptInMemory: 15,
    defaultCommandTimeout: 15000,
    retries: {
        runMode: 1,
        openMode: 0
    },
    e2e: {
        setupNodeEvents: setupPlugins,
        baseUrl: 'https://www.unibet.co.uk/blog'
    }
})
