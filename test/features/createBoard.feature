@smoke

Feature: Create a Trello board

  Scenario: Successfully creating a new board
    Given I am logged into Trello
    When I create a new board
    Then I should see the board with the correct name