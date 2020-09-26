package com.internet.stepdef;

import com.internet.actions.MultipleWindowsActions;

import cucumber.api.java.en.*;

public class MultipleWindowsStepDef {
	
	MultipleWindowsActions actions= new MultipleWindowsActions();
	
	@Given("^User is on interenet homepage$")
	public void user_is_on_interenet_homepage() throws Throwable {
	   actions.homepagetitle();
	}

	@Given("^User clicks on Multiple Windows$")
	public void user_clicks_on_Multiple_Windows() throws Throwable {
	    actions.clickMultiplewindow();
	}

	@When("^User validate the parent window page$")
	public void user_validate_the_parent_window_page() throws Throwable {
	    actions.getTHEtitleParent();
	}

	@When("^User clicks on the click here button$")
	public void user_clicks_on_the_click_here_button() throws Throwable {
	    actions.clickCLICKherebutton();
	}

	@When("^User switch to new wondow$")
	public void user_switch_to_new_wondow() throws Throwable {
	   actions.switchWindow();
	}

	@Then("^User validate the child window page title$")
	public void user_validate_the_child_window_page_title() throws Throwable {
	    actions.getTHEtitleChild();
	}

	@Then("^User switch back to the parent window$")
	public void user_switch_back_to_the_parent_window() throws Throwable {
	    actions.switchbacktoparent();
	}

}
