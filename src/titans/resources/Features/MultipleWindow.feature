
Feature: Multiple Windows
  I want to handle multiple widndows

  @tag1
  Scenario: User should be able to handle multiple windows
    Given User is on interenet homepage
    And User clicks on Multiple Windows
    When User validate the parent window page
    And User clicks on the click here button
    And User switch to new wondow
    Then User validate the child window page title
    And User switch back to the parent window

 
