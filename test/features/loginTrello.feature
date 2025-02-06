Feature: Trello Login

@smoke
Scenario: Succesful login to Trello
    Given I am on Trello login page
    When I enter valid Trello credentials
    Then I should be successfully logged in