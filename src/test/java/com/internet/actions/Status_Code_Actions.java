package com.internet.actions;

import static org.testng.Assert.fail;
import org.openqa.selenium.support.PageFactory;
import com.internet.pages.StatusCodePages;
import com.internet.stepdef.Hooks;

public class Status_Code_Actions {

	StatusCodePages SCElements;

	public Status_Code_Actions() {
		SCElements = new StatusCodePages();
		PageFactory.initElements(Hooks.driver, SCElements);
	}

	public void user_is_at_home_page() throws InterruptedException {
		System.out.println("Hooks landed on Action Page");
	}

	public void user_clicks_Status_codes() throws InterruptedException {
		SCElements.StatusCodeButton.click();
		Thread.sleep(5000);

	}

	public void user_clicks_Status_code(int arg1) throws InterruptedException {
		SCElements.code.click();
		Thread.sleep(5000);
	}

	public void user_should_be_able_to_get_a_message() {
		String msg = SCElements.StatusMsg.getText();
		if (msg.contains("200")) {
			System.out.println("Test Passed");
		} else {
			System.out.println("Test Failed");
			fail();
		}
	}

}
