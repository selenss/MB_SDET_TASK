// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
import { VALID_EMAIL, VALID_PASSWORD } from "../params/config"
import { TOP_250_MOVIES_CHART_URL } from "../params/constants"
import LoginPage from "../e2e/pages/LoginPage"
import NavigationPage from "../e2e/pages/NavigationPage"

Cypress.Commands.add('beforeHook', () => {
    cy.clearAllCookies();
    cy.clearAllLocalStorage();
    cy.clearAllSessionStorage();
    NavigationPage.goToBaseUrl();
        LoginPage.goToSignInPage();
        LoginPage.selectImdbLoginOption();
        LoginPage.loginWithEmail(VALID_EMAIL, VALID_PASSWORD);
        NavigationPage.goToGivenUrl(TOP_250_MOVIES_CHART_URL);
  });