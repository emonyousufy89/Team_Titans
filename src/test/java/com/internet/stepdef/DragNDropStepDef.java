package com.internet.stepdef;

import com.internet.actions.DragNDropAction;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class DragNDropStepDef {

	DragNDropAction DragandDropActionsObj;
	
	@Given("^user is on internet homepage$")
	public void user_is_on_internet_homepage() throws Throwable {
	    System.out.println("HomePage");
	}
	@When("^user clicks on drag & drop$")
	public void user_clicks_on_drag_drop() throws Throwable {
		DragandDropActionsObj.ClickDragandDrop();
	}
	
	@When("^user land on drag n droppage$")
	public void user_land_on_drag_n_droppage() throws Throwable {
		System.out.println("drag");
	}

	

	@Then("^user drag a & drop to b$")
	public void user_drag_a_drop_to_b() throws Throwable {
		DragandDropActionsObj.dragAdropB();
	}


}
