import 'cypress-shadow-dom';

/// <reference types="cypress" />

context('Login Boost Web', () => {
    it('should visit the boost web login page', () => {
        cy.visit('https://localhost:6006/#/login')
    })

    it('should switch to dev env', () => {
        cy.shadowGet('yoo-login').shadowFind('.footer').shadowFind('yoo-button').shadowClick()
        cy.get('yoo-form-dynamic').should('be.visible')

        cy.shadowGet('yoo-form-dynamic')
        .shadowFind('yoo-form-input-container.text')
        .shadowFind('yoo-form-input')
        .shadowFind('input')
        .shadowType('dev')
        .shadowTrigger('input')
    
        cy.wait(1000)

        cy.shadowGet('yoo-form-dynamic')
        .shadowFind('span.advance-footer')
        .shadowFind('yoo-button')
        .shadowFind('button')
        .shadowClick()

        cy.wait(2000)
    })

    it('should log in', () => {
        cy.shadowGet('yoo-login')
        .shadowFind('yoo-form-input-container')
        .shadowFind('yoo-form-input')
        .shadowFind('input')
        .shadowType('jbernard@yoobic.com')
        .shadowTrigger('input')

        cy.shadowGet('yoo-login')
        .shadowFind('.password-container')
        .shadowFind('yoo-form-input-container')
        .shadowFind('yoo-form-input')
        .shadowFind('input')
        .shadowType('Jacobus92i')
        .shadowTrigger('input')

        cy.wait(1000)

        cy.shadowGet('yoo-login')
            .shadowFind('.login-button')
            .shadowFind('yoo-button')
            .shadowFind('button')
            .shadowClick()

        cy.wait(2000)

        cy.get('menu-page').should('be.visible')
    })
})