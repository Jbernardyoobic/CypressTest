import 'cypress-shadow-dom';

context('Login Boost Web', () => {
    beforeEach(() => {
        cy.viewport(375, 812)
      })

    it('should visit the boost web login page', () => {
        cy.visit('https://localhost:6005/#/login')
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

        cy.get('yoo-ion-footer')
        .find('yoo-button')
        .click()

        cy.wait(2000)
    })

    it('should get a new password', () => {
        cy.shadowGet('yoo-login')
        .shadowFind('yoo-button#forgot-password')
        .shadowClick()

        cy.shadowGet('yoo-action-sheet')
        .shadowFind('span').shadowContains('Reset Password')
        .shadowClick()

        cy.get('yoo-reset-password').should('be.visible')

        cy.shadowGet('yoo-navbar').shadowFind('yoo-icon.yo-close').shadowClick()

        cy.wait(1000)
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

        cy.wait(1000)

        cy.shadowGet('app-walkthrough')
        .shadowFind('yoo-walkthrough')
        .shadowFind('yoo-button').shadowContains('SKIP')
        .shadowClick()

        cy.wait(2000)

        cy.get('menu-page').should('be.visible')

    })

    it('should navigate through the tabbar', () => {
        cy.shadowGet('yoo-mobile-tabbar')
        .shadowFind('yoo-icon.yo-leaderboard').shadowClick()

        cy.shadowGet('yoo-mobile-tabbar')
        .shadowFind('yoo-icon.yo-hr').shadowClick()

        cy.shadowGet('yoo-mobile-tabbar')
        .shadowFind('yoo-icon.yo-menu').shadowClick()

        cy.wait(1000)

        cy.shadowGet('yoo-action-sheet')
        .shadowFind('span').shadowContains('News Feed')
        .shadowClick()
    })

    it('should go to the search page', () => {
        cy.shadowGet('yoo-navbar')
        .shadowFind('yoo-icon.yo-search')
        .shadowClick()

        cy.wait(500)

        cy.shadowGet('app-search-page')
        .shadowFind('yoo-entity-search')
        .shadowFind('yoo-form-input.search')
        .shadowFind('input')
        .shadowType('keywords').shadowTrigger('input')

        cy.wait(500)

        cy.shadowGet('app-search-page')
        .shadowFind('yoo-entity-search')
        .shadowFind('yoo-entity-search-recent')
        .shadowFind('li.menu-item').shadowContains('keywords').shadowClick()

        cy.wait(500)

        cy.shadowGet('app-search-page')
        .shadowFind('yoo-entity-search')
        .shadowFind('yoo-entity-search-tags')
        .shadowFind('yoo-icon.yo-filter').shadowClick()

        cy.wait(500)

        cy.shadowGet('yoo-entity-search-dialog')
        .shadowFind('yoo-icon.yo-close')
        .shadowClick()

        cy.wait(500)

        cy.shadowGet('app-search-page')
        .shadowFind('yoo-entity-search')
        .shadowFind('yoo-button').shadowContains('Cancel')
        .shadowClick()

        cy.wait(500)
    })

    it('should go to news feed', () => {
        cy.shadowGet('menu-page')
        .shadowFind('app-feeds-page')
        .shadowFind('span').shadowContains('See all')
        .shadowClick()

        cy.wait(500)

        cy.shadowGet('app-grid-dialog-page')
        .shadowFind('yoo-grid')
        .shadowFind('yoo-entity').shadowFirst()
        .shadowFind('yoo-card-sticky').shadowClick()

        cy.wait(500)

        cy.shadowGet('app-feed-dialog-page')
        .shadowFind('yoo-card-feed')
        .shadowFind('yoo-form-carousel')
        .shadowFind('yoo-icon.yo-heart')
        .shadowClick()

        cy.shadowGet('app-feed-dialog-page')
        .shadowFind('yoo-card-feed')
        .shadowFind('yoo-form-carousel')
        .shadowFind('yoo-icon.yo-heart')
        .shadowClick()

        cy.shadowGet('app-feed-dialog-page')
        .shadowFind('yoo-card-feed')
        .shadowFind('yoo-form-carousel')
        .shadowFind('yoo-icon.yo-eye')
        .shadowClick()

        cy.wait(500)

        cy.shadowGet('app-entity-action-page')
        .shadowFind('yoo-navbar')
        .shadowFind('yoo-icon.yo-left')
        .shadowClick()

    })

    // it('sould log out', () => {
    //     cy.wait(1000)

    //     cy.shadowGet('yoo-side-menu').shadowFind('.bottom-container').shadowFind('.profile-footer').shadowClick()

    //     cy.wait(1000)

    //     cy.shadowGet('yoo-context-menu-dialog').shadowFind('.content').shadowLast().shadowClick()

    //     cy.wait(2000)

    //     cy.shadowGet('yoo-alert').shadowFind('.buttons-container').shadowFind('.last').shadowClick()
       
    //     cy.wait(2000)

    //     cy.get('app-login').should('be.visible')
    // })
})