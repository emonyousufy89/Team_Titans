package com.internet.actions;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.PageFactory;

import com.internet.pages.DragNDropPage;
import com.internet.stepdef.Hooks;

public class DragNDropAction {

	DragNDropPage TheInternetHomePage; 

	public DragNDropAction() {
		TheInternetHomePage= new DragNDropPage();
		PageFactory.initElements(Hooks.driver, TheInternetHomePage);

	}


	public void  ClickDragandDrop() throws InterruptedException{
	TheInternetHomePage.DragandDrop.click();
	Thread.sleep(2000);

	}
	public void dragAdropB() {
	//WebElement source = Hooks.driver.findElement(By.id("column-a"));
	//WebElement destination = Hooks.driver.findElement(By.id("column-b"));
	Actions a = new Actions(Hooks.driver);
	a.dragAndDrop(TheInternetHomePage.DragA, TheInternetHomePage.DropB).build().perform();

	}
	
}
