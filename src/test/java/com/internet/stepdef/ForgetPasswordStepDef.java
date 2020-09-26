package com.internet.stepdef;

import com.internet.actions.ForgetPasswordActions;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class ForgetPasswordStepDef {

	ForgetPasswordActions action = new ForgetPasswordActions();

@Given("^the user navigates to HerokApp page$")
public void the_user_navigates_to_HerokApp_page()  {
   
}

@When("^the user clicks on Forget Password button$")
public void the_user_clicks_on_Forget_Password_button() throws InterruptedException {
   action.clickOnforgetPassword();
}


@When("^user enters correct email$")
public void user_enters_correct_email() throws Throwable {
    
   action.clickemail();

}

@When("^user clicks on Retrieve Password$")
public void user_clicks_on_Retrieve_Password() throws InterruptedException {
   action.clickOnretrievepassword();
}

@Then("^user should get message Your email been sent$")
public void user_should_get_message_Your_email_been_sent() {

}

}	
