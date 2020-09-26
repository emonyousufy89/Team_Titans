package com.internet.stepdef;

import com.internet.actions.Status_Code_Actions;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class StatusCodeStepDef {
	
	Status_Code_Actions A = new Status_Code_Actions();
	
	@Given("^user is at home page$")
	public void user_is_at_home_page() throws InterruptedException {
	    // Write code here that turns the phrase above into concrete actions
	    A.user_is_at_home_page();
	}

	@When("^user clicks Status codes$")
	public void user_clicks_Status_codes() throws InterruptedException  {
	    // Write code here that turns the phrase above into concrete actions
	    A.user_clicks_Status_codes();
	}

	@When("^user clicks (\\d+) Status code$")
	public void user_clicks_Status_code(int arg1) throws InterruptedException {
	    // Write code here that turns the phrase above into concrete actions
	    A.user_clicks_Status_code(200);
	}

	@Then("^user should be able to get a message$")
	public void user_should_be_able_to_get_a_message()  {
	    // Write code here that turns the phrase above into concrete actions
	    A.user_should_be_able_to_get_a_message();
	}
	

}
