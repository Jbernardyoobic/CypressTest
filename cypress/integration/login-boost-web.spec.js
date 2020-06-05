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
        .shadowType('hqboost')
        .shadowTrigger('input')

        cy.shadowGet('yoo-login')
        .shadowFind('.password-container')
        .shadowFind('yoo-form-input-container')
        .shadowFind('yoo-form-input')
        .shadowFind('input')
        .shadowType('y')
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

    it('sould log out', () => {
        cy.wait(1000)

        cy.shadowGet('yoo-side-menu').shadowFind('.bottom-container').shadowFind('.profile-footer').shadowClick()

        cy.wait(1000)

        cy.shadowGet('yoo-context-menu-dialog').shadowFind('.content').shadowLast().shadowClick()

        cy.wait(2000)

        cy.shadowGet('yoo-alert').shadowFind('.buttons-container').shadowFind('.last').shadowClick()
       
        cy.wait(2000)

        cy.get('app-login').should('be.visible')
    })
})