import 'cypress-shadow-dom';

describe('SYSLEY', () => {
    it('should visit the boost web login page', () => {
        cy.visit('https://localhost:6005/')
    })

    it('should go to sso login', () => {
        cy.getPage()
        .shadowFind('yoo-login')
        .shadowFind('.footer')
        .shadowFind('yoo-button').shadowClick()
    
        cy.get('yoo-form-dynamic').should('be.visible')
    })

    it('should switch to dev env', () => {
        cy.getPage()
        .shadowFind('yoo-form-dynamic')
        .getInput()
        .shadowType('dev')
        .shadowTrigger('input')
    
        cy.wait(1000)

        cy.get('yoo-ion-footer')
        .find('yoo-button')
        .click()

        cy.wait(2000)
    })

    it('should get a new password', () => {
        cy.getPage()
        .shadowFind('yoo-login')
        .shadowFind('yoo-button#forgot-password')
        .shadowClick()

        cy.shadowGet('yoo-action-sheet')
        .shadowFind('li.action-click').shadowFirst()
        .shadowClick()

        cy.get('yoo-reset-password').should('be.visible')

        cy.closePage()

        cy.wait(1000)
    })

    it('should log in', () => {
        cy.getPage().shadowFind('yoo-login').as('login')

        cy.get('@login').getInput()
        .shadowType('hqboost')
        .shadowTrigger('input')

        cy.get('@login')
        .shadowFind('.password-container')
        .getInput()
        .shadowType('y')
        .shadowTrigger('input')

        cy.wait(1000)

        cy.get('@login')
        .shadowFind('.login-button')
        .shadowFind('yoo-button')
        .shadowFind('button')
        .shadowClick()

        cy.wait(1000)

        cy.getPage()
        .shadowFind('yoo-walkthrough')
        .shadowFind('yoo-button').shadowFirst()
        .shadowClick()

        cy.wait(2000)

        cy.get('menu-page').should('be.visible')

    })

    it('should go to the search page', () => {
        cy.shadowGet('yoo-navbar')
        .shadowFind('yoo-icon.yo-search')
        .shadowClick()

        cy.wait(1500)

        cy.getPage().shadowFind('yoo-entity-search').as('search')

        cy.get('@search')
        .shadowFind('yoo-form-input.search')
        .shadowFind('input')
        .shadowType('keywords').shadowTrigger('input')

        cy.wait(2000)

        cy.get('@search')
        .shadowFind('yoo-entity-search-recent')
        .shadowFind('li.menu-item').shadowContains('keywords').shadowClick()

        cy.wait(500)

        cy.get('@search')
        .shadowFind('yoo-tabs')
        .shadowFind('div.tab-container').shadowLast().shadowClick()

        cy.wait(500)

        cy.get('@search')
        .shadowFind('yoo-entity-search-tags')
        .shadowFind('yoo-icon.yo-filter').shadowClick()

        cy.wait(1500)

        cy.closePage()

        cy.wait(1000)

        cy.get('@search')
        .shadowFind('yoo-navbar')
        .shadowFind('yoo-button')
        .shadowClick()

        cy.wait(500)
    })

    it('should go to news feed', () => {
        cy.shadowGet('yoo-mobile-tabbar')
        .shadowFind('yoo-icon.yo-feed')
        .shadowClick()

        cy.wait(500)

        cy.getPage()
        .shadowFind('.feed-subheading')
        .shadowFind('span')
        .shadowClick()

        cy.wait(500)

        cy.getPage()
        .shadowFind('yoo-grid')
        .shadowFind('yoo-entity').shadowFirst()
        .shadowFind('yoo-card-sticky').shadowClick()

        cy.wait(500)

        cy.getPage()
        .shadowFind('yoo-card-feed').as('feed')

        cy.get('@feed')
        .shadowFind('yoo-form-carousel').as('carousel')

        cy.get('@carousel')
        .shadowFind('yoo-icon.yo-heart')
        .shadowClick()

        cy.get('@carousel')
        .shadowFind('yoo-icon.yo-heart')
        .shadowClick()

        cy.get('@carousel')
        .shadowFind('yoo-icon.yo-eye')
        .shadowClick()

        cy.wait(500)

        cy.goBack()

        cy.goBack()

        cy.goBack()

    })

    it('should log out', () => {
        cy.shadowGet('yoo-header')
        .shadowFind('yoo-navbar')
        .shadowFind('yoo-avatar')
        .shadowClick()

        cy.wait(1000)

        cy.getPage()
        .shadowFind('yoo-profile')
        .shadowFind('.profile-logout')
        .shadowClick()

        cy.shadowGet('yoo-alert').shadowFind('.buttons-container').shadowFind('.last').shadowClick()
    })
})