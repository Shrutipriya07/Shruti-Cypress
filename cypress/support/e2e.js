// ***********************************************************
// This example support/index.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import "./search.cmd";

// ignore all console errors in app
// eslint-disable-next-line no-unused-vars
Cypress.on("uncaught:exception", (err, runnable) => {
  if (
    err.message.includes("loadMoreSettings") ||
    err.message.includes("window.pageViewContext") ||
    err.message.includes("Cannot read properties of undefined (reading 'push')")
  ) {
    return false; // Ignore specific errors
  }
  return true; // Allow other errors to fail the test
});
