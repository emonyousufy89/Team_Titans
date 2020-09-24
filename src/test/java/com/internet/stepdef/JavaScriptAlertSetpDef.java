package com.internet.stepdef;

import com.internet.actions.JavaScriptAlertActions;

import cucumber.api.java.en.*;

public class JavaScriptAlertSetpDef {

	JavaScriptAlertActions action = new JavaScriptAlertActions();
	
	@Given("^User is on internet homepage$")
	public void user_is_on_internet_homepage() throws Throwable {
	   System.out.println("This is homepage");
	}

	@Given("^User clicks on JavaScript Alerts$")
	public void user_clicks_on_JavaScript_Alerts() throws Throwable {
	    action.clickonJavaScriptAlert1();
	}

	@When("^user lands on alerts page$")
	public void user_lands_on_alerts_page() throws Throwable {
	    System.out.println("This os ALERT Page");
	}

	@When("^User clicks on JS alert$")
	public void user_clicks_on_JS_alert() throws Throwable {
	    action.clickOnFirstAlert2();
	}

	@When("^User validate the \"([^\"]*)\" & clicks ok$")
	public void user_validate_the_clicks_ok(String arg1) throws Throwable {
	   action.clickfirstok3();
	}

	@When("^User clicks on (\\d+)nd alert JS Cofirm$")
	public void user_clicks_on_nd_alert_JS_Cofirm(int arg1) throws Throwable {
	   action.clickOnSecondConfirm4();
	}

	@When("^USer validate \"([^\"]*)\" & clicks cancel$")
	public void user_validate_clicks_cancel(String arg1) throws Throwable {
	    action.clicksecondalertcancell5();
	}

	@Then("^User clicks on (\\d+)rd alert JS prompt & write \"([^\"]*)\" & clicks ok$")
	public void user_clicks_on_rd_alert_JS_prompt_write_clicks_ok(int arg1, String arg2) throws Throwable {
		 action.clickOnthirdPrompt6();
	}


}
