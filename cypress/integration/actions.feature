Feature: Cypress Actions

    @focus
    Scenario: Type
        When    I type "fake@email.com" in the ".action-email" element
    
    @focus
    Scenario: Focus
        When    I focus the ".action-focus" element

    @focus
    Scenario: Blur
        When    I blur the ".action-blur" element

    @focus
    Scenario: Clear
        When    I clear the ".action-clear" element

    @focus
    Scenario: Submit
        When    I submit the ".action-form" element

    @focus
    Scenario: Click
        When    I click the ".action-btn" element

    @focus
    Scenario: Scroll Into View
        When    I scroll into view the "#scroll-horizontal button" element
    