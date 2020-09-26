package com.internet.actions;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.PageFactory;

import com.internet.pages.DragNDropPage;
import com.internet.stepdef.Hooks;

public class DragNDropAction {

	DragNDropPage dragndropPage; 

	public DragNDropAction() {
		dragndropPage= new DragNDropPage();
		PageFactory.initElements(Hooks.driver, dragndropPage);

	}


	public void  ClickDragandDrop() throws InterruptedException{
		dragndropPage.DragandDrop.click();
		Thread.sleep(2000);

	}
	public void dragAdropB() {

		Actions a = new Actions(Hooks.driver);
		a.dragAndDrop(dragndropPage.DragA, dragndropPage.DropB).build().perform();

	}

}
