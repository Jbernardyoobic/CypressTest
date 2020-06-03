import { Given, Then } from "cypress-cucumber-preprocessor/steps";
import 'cypress-shadow-dom';

Given(/^I logged in Boost web$/, () => {
    cy.login()
})

Given(/^I am in the boost web login page$/, () => {
    cy.visit('https://localhost:6006/#/login')
})

Then(/^I should be in the home page$/, () => {
    cy.get('menu-page').should('be.visible')
})

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