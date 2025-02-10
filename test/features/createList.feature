Feature: Create a list in Trello

  @smoke
  Scenario: User creates a new list in Trello board
    Given I am logged into Trello
    When I navigate to my boards
    And I open the first board
    And I create a list named "TO DO"
    Then I should see the list named "TO DO" created successfully
