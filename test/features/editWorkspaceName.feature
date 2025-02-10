Feature: Edit Trello workspace name

  @smoke
  Scenario: User edits the workspace name in Trello
    Given I am on the Trello login page
    When I navigate to the workspace settings
    And I change the workspace name 
    Then I should see the updated workspace name
