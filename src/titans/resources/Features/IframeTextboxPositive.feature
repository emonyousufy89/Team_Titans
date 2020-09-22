
Feature: User write in the Iframe text box
  As a QA I want automate iframe functionalities

 
 Scenario: User should be able to write in the text box switching iframe
 Given the user is on the internet Homepage
 When user click on frames
 And user lands on an frames page & clicks iframe option
 And user clicks on Format on the top of the editor box and select italic font
 And user switch to iframe
 And the user able to write “Hello this is Team Titans”
 Then user Come back to the parent page



  
