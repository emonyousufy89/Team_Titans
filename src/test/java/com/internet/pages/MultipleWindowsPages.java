package com.internet.pages;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;

public class MultipleWindowsPages {
	//a[contains(text(),'Multiple Windows')]
	@FindBy (how=How.XPATH,using="//a[contains(text(),'Multiple Windows')]")
	public WebElement MultipleWindowsLink;
	
	@FindBy (how=How.XPATH,using="//a[contains(text(),'Click Here')]")
	public WebElement ClickHereButton;
	
	
}
