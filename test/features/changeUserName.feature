Feature: Update Trello Profile Name

  @smoke
  Scenario: User changes username in Trello
    Given I am logged into Trello
    When I navigate to the profile page
    And I change my username
    Then I should see a confirmation message