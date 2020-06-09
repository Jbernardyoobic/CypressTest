import 'cypress-shadow-dom';

// ***********************************************
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
Cypress.Commands.add("login", () => {
    cy.request({
        url: 'https://yoobic-loopback-dev-v3.herokuapp.com/auth/login',
        method: 'POST',
        body: { 
            username: 'hqboost',
            password: 'y'
        }
    })
})

Cypress.Commands.add("getPage", () => {
    cy.shadowGet('.ion-page').shadowLast().then(el => console.log(el))
})

Cypress.Commands.add("goBack", () => {
    cy.getPage()
    .shadowFind('yoo-navbar')
    .shadowFind('yoo-icon.yo-left')
    .shadowClick()

    cy.wait(500)
})

Cypress.Commands.add("closePage", () => {
    cy.getPage()
    .shadowFind('yoo-icon.yo-close')
    .shadowClick()

    cy.wait(500)
})

Cypress.Commands.add("getInput", {
    prevSubject: 'optional'
  }, (subject) => {
    cy.wrap(subject)
    .shadowFind('yoo-form-input-container')
    .shadowFind('yoo-form-input')
    .shadowFind('input')
})
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })
