import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import 'cypress-shadow-dom';
 
Given(/^I am in the boost web login page$/, () => {
    cy.visit('https://localhost:6006/#/login')
});

When(/^I click the log in with SSO button$/, () => {
  cy.shadowGet('yoo-login').shadowFind('.footer').shadowFind('yoo-button').shadowClick()

  cy.get('yoo-form-dynamic').should('be.visible')
})

When(/^I fill the input field with value "([^"]+)"$/, (value) => {
  cy.shadowGet('yoo-form-dynamic')
    .shadowFind('yoo-form-input-container.text')
    .shadowFind('yoo-form-input')
    .shadowFind('input')
    .shadowType(value)
    .shadowTrigger('input')
  
  cy.wait(1000)
})

When(/^I click the advanced log in button$/, () => {
  cy.shadowGet('yoo-form-dynamic')
    .shadowFind('span.advance-footer')
    .shadowFind('yoo-button')
    .shadowFind('button')
    .shadowClick()

  cy.wait(2000)
})

When(/^I fill the username field with value "([^"]+)"$/, (value) => {
  cy.shadowGet('yoo-login')
    .shadowFind('yoo-form-input-container')
    .shadowFind('yoo-form-input')
    .shadowFind('input')
    .shadowType(value)
    .shadowTrigger('input')
})

When(/^I fill the password field with value "([^"]+)"$/, (value) => {
  cy.shadowGet('yoo-login')
    .shadowFind('.password-container')
    .shadowFind('yoo-form-input-container')
    .shadowFind('yoo-form-input')
    .shadowFind('input')
    .shadowType(value)
    .shadowTrigger('input')
})

When(/^I click the log in button$/, () => {
  cy.wait(1000)

  cy.shadowGet('yoo-login')
    .shadowFind('.login-button')
    .shadowFind('yoo-button')
    .shadowFind('button')
    .shadowClick()

  cy.wait(2000)
})

Then(/^I should be in the home page$/, () => {
    cy.get('menu-page').should('be.visible')
})