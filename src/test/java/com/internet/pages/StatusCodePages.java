package com.internet.pages;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

public class StatusCodePages {

	@FindBy(xpath="//*[@id=\"content\"]/ul/li[42]/a")
	public WebElement StatusCodeButton;	
	
	@FindBy(xpath="//*[@id=\"content\"]/div/ul/li[1]/a")
	public WebElement code;
	
	@FindBy(xpath="//*[@id=\"content\"]/div/p")
	public WebElement StatusMsg;

}
	