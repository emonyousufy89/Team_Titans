
Feature: JavaScript Alert Handling
  I want to handle three different alert

  @tag1
  Scenario: User should be able to handle all alerts
    Given User is on internet homepage
    And User clicks on JavaScript Alerts
    When user lands on alerts page
    And User clicks on JS alert 
    And User validate the "I am a JS Alert" & clicks ok
    And User clicks on 2nd alert JS Cofirm
    And USer validate "I am a JS Confirm" & clicks cancel
    Then User clicks on 3rd alert JS prompt & write "Team Titan" & clicks ok
    

  