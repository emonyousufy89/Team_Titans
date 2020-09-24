
Feature: Fil upload
  I want to upload a from localsystem file


  Scenario: User should be able to upload file
    Given User is in internet HomePage
    And User clicks on file upload link
    When User click on choose file
    And User see a windows drop down 
    And User select the file
    Then User clicks on upload button
    And User can see "File uploaded"

 