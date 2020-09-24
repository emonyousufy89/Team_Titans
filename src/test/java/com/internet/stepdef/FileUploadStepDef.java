package com.internet.stepdef;

import com.internet.actions.FileUploadAction;

import cucumber.api.java.en.*;

public class FileUploadStepDef {
	
	FileUploadAction action = new FileUploadAction();

	@Given("^User is in internet HomePage$")
	public void user_is_in_internet_HomePage() throws Throwable {
	    Hooks.driver.getTitle();
	}

	@Given("^User clicks on file upload link$")
	public void user_clicks_on_file_upload_link() throws Throwable {
	    action.ClickFileUpload();
	}

	@When("^User click on choose file$")
	public void user_click_on_choose_file() throws Throwable {
	   action.clickChooseFile();
	}

	@When("^User see a windows drop down$")
	public void user_see_a_windows_drop_down() throws Throwable {
	   System.out.println("There is a drop down");
	}

	@When("^User select the file$")
	public void user_select_the_file() throws Throwable {
		System.out.println("File selected");
	}

	@Then("^User clicks on upload button$")
	public void user_clicks_on_upload_button() throws Throwable {
	    action.ClickUploadButton();
	}

	@Then("^User can see \"([^\"]*)\"$")
	public void user_can_see(String arg1) throws Throwable {
	    action.SuccessfullTextVerify();
	}


	
	
}
