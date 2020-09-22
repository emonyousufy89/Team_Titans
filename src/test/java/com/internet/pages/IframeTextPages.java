package com.internet.pages;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;

public class IframeTextPages {

	

	@FindBy (how=How.CSS,using="a[href='/frames']")
	public WebElement frames;
	
	@FindBy (how=How.CSS,using="a[href='/iframe']")
	public WebElement iframeOption;
	
	@FindBy (how=How.ID,using= "mceu_18-open")
	public WebElement format;
	//span[contains(text(),'Italic')]
	@FindBy (how=How.CSS,using="span[id='mceu_34-text']")
	public WebElement ItalicFont;
	
	@FindBy (how=How.CSS,using="iframe[id='mce_0_ifr']")
	public WebElement IFRAME;
			
	@FindBy (how=How.CSS,using="body[class='mce-content-body ']")
	public WebElement textbox;
			
}
