  @smoke
Feature: Update Trello Profile Name

 Scenario: User changes username in Trello
    Given I am on the Trello login page
    When I navigate to the profile page
    And I change my username
    Then I should see a confirmation message