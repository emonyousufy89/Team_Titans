package com.internet.pages;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;

public class JavaScriptAlertPages {

	
	@FindBy (how=How.XPATH,using="//a[contains(text(),'JavaScript Alerts')]")
	public WebElement JSalert;
	
	@FindBy (how=How.XPATH,using="//button[contains(text(),'Click for JS Alert')]")
	public WebElement JSALERTPOP;
	
	@FindBy (how=How.XPATH,using= "//button[contains(text(),'Click for JS Confirm')]")
	public WebElement JSConfirm;
	
	@FindBy (how=How.XPATH,using="//button[contains(text(),'Click for JS Prompt')]")
	public WebElement JSPrompt;
	
	
}
