package com.internet.pages;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;

public class DragNDropPage {

	@FindBy (how=How.XPATH,using= "//a[@href='/drag_and_drop']")
	public WebElement DragandDrop;
	
	@FindBy (how=How.XPATH,using= "//div[@id='column-a']")
	public WebElement DragA;
	
	@FindBy (how=How.XPATH,using= "//div[@id='column-b']")
	public WebElement DropB;

}
