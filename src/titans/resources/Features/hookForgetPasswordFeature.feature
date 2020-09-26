Feature: Herokapp Forget Password Feature
This forget password is for forget password funcitionality 

Scenario: enter correct email to retrieve password

					Given the user navigates to HerokApp page
					When the user clicks on Forget Password button
					And user enters correct email 
					And user clicks on Retrieve Password
				   Then user should get message Your email been sent
