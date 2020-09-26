package com.internet.actions;

import org.openqa.selenium.support.PageFactory;

import com.internet.pages.ForgetPasswordElements;

import com.internet.stepdef.Hooks;

public class ForgetPasswordActions {

	ForgetPasswordElements password;
	
	public ForgetPasswordActions() {
		 password = new ForgetPasswordElements();
		PageFactory.initElements(Hooks.driver, password);
	}
	
	public void clickOnforgetPassword() throws InterruptedException  {
		password.Forgetpassword.click();
		Thread.sleep(2000);
	}
	public void clickemail() throws InterruptedException {
		password.email.sendKeys("rockysingh5182@gmail.com");
		Thread.sleep(2000);
	}
	public void clickOnretrievepassword() throws InterruptedException {
		password.retrievepassword.click();
		Thread.sleep(2000);
		
	}
	
	}
