package com.internet.stepdef;

import com.extent.reporterutils.ExtentReportListner;
import com.internet.actions.IframeTextAction;


import cucumber.api.java.en.*;

public class IframeTextPositiveStepDef {
	
	IframeTextAction action = new IframeTextAction();

	@Given("^the user is on the internet Homepage$")
	public void the_user_is_on_the_internet_Homepage() throws Throwable {
	   
	}

	@When("^user click on frames$")
	public void user_click_on_frames() throws Throwable {
	    action.clickOnFrames();
	}

	@When("^user lands on an frames page & clicks iframe option$")
	public void user_lands_on_an_frames_page_clicks_iframe_option() throws Throwable {
		action.clickOnIframeOption();
	}

	@When("^user clicks on Format on the top of the editor box and select italic font$")
	public void user_clicks_on_Format_on_the_top_of_the_editor_box_and_select_italic_font() throws Throwable {
		action.clickOnFormat();
	}

	@When("^user switch to iframe$")
	public void user_switch_to_iframe() throws Throwable {
		action.switchtoiframe();
	}

	@When("^the user able to write “Hello this is Team Titans”$")
	public void the_user_able_to_write_Hello_this_is_Team_Titans() throws Throwable {
		action.entertext();
	}

	@Then("^user Come back to the parent page$")
	public void user_Come_back_to_the_parent_page() throws Throwable {
		action.switchingToParentframe();
	}


}