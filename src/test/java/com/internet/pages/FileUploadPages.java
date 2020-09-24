package com.internet.pages;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;

public class FileUploadPages {

	@FindBy (how=How.CSS,using="a[href='/upload']")
	public WebElement fileuploadlink;
	
	@FindBy (how=How.CSS,using="input[id='file-upload']")
	public WebElement choosefilebutton;
	
	@FindBy (how=How.CSS,using= "input[id='file-submit']")
	public WebElement uploadButton;
	
	@FindBy (how=How.XPATH,using="//h3[contains(text(),'File Uploaded!')]")
	public WebElement SuccessfullMessage;
	
	
	
}
