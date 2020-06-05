Feature: Login Boost Web

    @focus
    Scenario: Visit Boost Web
        Given I am in the boost web login page

    @focus
    Scenario: Switch to dev env
        When    I click the log in with SSO button
        And     I fill the input field with value "dev"
        And     I click the advanced log in button
    
    @focus
    Scenario: Log in
        When    I fill the username field with value "hqboost"
        And     I fill the password field with value "y"
        And     I click the log in button
        Then    I should be in the home page