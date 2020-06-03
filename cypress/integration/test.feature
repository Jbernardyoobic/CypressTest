Feature: Test for request login

    @focus
    Scenario: Visit Boost Web
        Given   I am in the boost web login page

    @focus
    Scenario: Switch to dev env
        When    I click the log in with SSO button
        And     I fill the input field with value "dev"
        And     I click the advanced log in button

    @focus
    Scenario: Login test via post request
        Given   I logged in Boost web
        Then    I should be in the home page