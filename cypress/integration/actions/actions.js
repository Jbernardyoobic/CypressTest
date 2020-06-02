const {
    Before,
    When,
  } = require("cypress-cucumber-preprocessor/steps");
   
  // this will get called before each scenario
  Before(() => {
    cy.visit('https://example.cypress.io/commands/actions')
  });

  // https://on.cypress.io/type
  When(/^I type "([^"]+)" in the "([^"]+)" element$/, (...args) => {
    cy.get(args[1])
      .type(args[0]).should('have.value', args[0])
  })

  // https://on.cypress.io/focus
  When(/^I focus the "([^"]+)" element$/, (...args) => {
    cy.get(args[0]).focus()
      .should('have.class', 'focus')
  })

  // https://on.cypress.io/blur
  When(/^I blur the "([^"]+)" element$/, (...args) => {
    cy.get(args[0]).type('About to blur').blur()
      .should('have.class', 'error')
  })

  // https://on.cypress.io/clear
  When(/^I clear the "([^"]+)" element$/, (...args) => {
    cy.get(args[0]).type('Clear this text')
      .should('have.value', 'Clear this text')
      .clear()
      .should('have.value', '')
  })

  // https://on.cypress.io/submit
  When(/^I submit the "([^"]+)" element$/, (...args) => {
    cy.get(args[0])
      .find('[type="text"]').type('HALFOFF')

      cy.get('.action-form').submit()
      .next().should('contain', 'Your form has been submitted!')
  })

  // https://on.cypress.io/click
  When(/^I click the "([^"]+)" element$/, (...args) => {
    cy.get(args[0]).click()
  })

  // https://on.cypress.io/scrollintoview
  When(/^I scroll into view the "([^"]+)" element$/, (...args) => {
    cy.get(args[0]).scrollIntoView()
      .should('be.visible')
  })
