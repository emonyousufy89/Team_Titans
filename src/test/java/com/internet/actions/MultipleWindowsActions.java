package com.internet.actions;

import java.util.Iterator;
import java.util.Set;

import org.openqa.selenium.support.PageFactory;

import com.internet.pages.MultipleWindowsPages;
import com.internet.stepdef.Hooks;

public class MultipleWindowsActions {

	MultipleWindowsPages pages;

	public MultipleWindowsActions() {
		pages = new MultipleWindowsPages();
		PageFactory.initElements(Hooks.driver, pages);

	}

	public void homepagetitle() throws InterruptedException {
		Hooks.driver.getTitle();
		Thread.sleep(2000);
	}
	public void clickMultiplewindow() throws InterruptedException {
		pages.MultipleWindowsLink.click();
		Thread.sleep(2000);

	}
	public void getTHEtitleParent() throws InterruptedException {

		Hooks.driver.getTitle();
		Thread.sleep(2000);
	}

	public void clickCLICKherebutton() throws InterruptedException {
		pages.ClickHereButton.click();
		Thread.sleep(2000);

	}

	public void switchWindow() throws InterruptedException {
		Set <String> windowhandle= Hooks.driver.getWindowHandles();
		Iterator<String> WIN = windowhandle.iterator();
		String parent = WIN.next();
		String child = WIN.next();
		Hooks.driver.switchTo().window(child);
		Thread.sleep(2000);
		
	}
	public void getTHEtitleChild() {

		Hooks.driver.getTitle();
		try {
			Thread.sleep(2000);
		} catch (InterruptedException e) {
			
			e.printStackTrace();
		}
		
	}
	public void switchbacktoparent() throws InterruptedException {
		Thread.sleep(2000);
		Set <String> windowhandle= Hooks.driver.getWindowHandles();
		Iterator<String> WIN = windowhandle.iterator();
		String parent = WIN.next();
		String child = WIN.next();
		Hooks.driver.switchTo().window(parent);
		//Hooks.driver.close();
		Thread.sleep(2000);
	}


}
