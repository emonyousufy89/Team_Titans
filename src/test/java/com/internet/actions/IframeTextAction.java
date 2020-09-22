package com.internet.actions;

import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.ui.Select;

import com.internet.pages.IframeTextPages;
import com.internet.stepdef.Hooks;

public class IframeTextAction {
	
	IframeTextPages pages;

	public IframeTextAction() {
		 pages = new IframeTextPages();
		PageFactory.initElements(Hooks.driver, pages );
	}
	
	public void clickOnFrames() throws InterruptedException {
		pages.frames.click();
		Thread.sleep(2000);
	}
	public void clickOnIframeOption() throws InterruptedException {
		pages.iframeOption.click();
		Thread.sleep(2000);
	}
	public void clickOnFormat() throws InterruptedException {
		pages.format.click();
		Thread.sleep(2000);
		//Select select = new Select(pages.format);
		//select.selectByVisibleText("Italic");
		pages.ItalicFont.click();
		Thread.sleep(2000);
	}
	public void switchtoiframe() throws InterruptedException {
		Hooks.driver.switchTo().frame(pages.IFRAME);
		Thread.sleep(2000);
	
	}
	public void entertext() throws InterruptedException {
		pages.textbox.click();
		Thread.sleep(2000);
		pages.textbox.clear();
		Thread.sleep(2000);
		pages.textbox.sendKeys("This is team titan");
		Thread.sleep(2000);
		pages.textbox.getText();
		Thread.sleep(2000);
	}
	public void switchingToParentframe() {
		Hooks.driver.switchTo().defaultContent();
	}
	
}
