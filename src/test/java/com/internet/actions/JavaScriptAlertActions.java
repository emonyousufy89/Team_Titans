package com.internet.actions;

import org.openqa.selenium.support.PageFactory;
import org.testng.Assert;

import com.internet.pages.JavaScriptAlertPages;
import com.internet.stepdef.Hooks;

public class JavaScriptAlertActions {

	JavaScriptAlertPages pages;
	public JavaScriptAlertActions() {
		pages = new JavaScriptAlertPages();
		PageFactory.initElements(Hooks.driver, pages);
	}
	
	public void clickonJavaScriptAlert1() throws InterruptedException {
		pages.JSalert.click();
		Thread.sleep(2000);
	}
	public void clickOnFirstAlert2() throws InterruptedException {
		pages.JSALERTPOP.click();
		Thread.sleep(2000);
		String text1 = Hooks.driver.switchTo().alert().getText();
		Assert.assertEquals(text1, "I am a JS Alert");
	}
	public void clickfirstok3() throws InterruptedException {
		Thread.sleep(2000);
		Hooks.driver.switchTo().alert().accept();
		Thread.sleep(2000);
	}
	public void clickOnSecondConfirm4() throws InterruptedException {
		pages.JSConfirm.click();
		Thread.sleep(2000);
		String text2 = Hooks.driver.switchTo().alert().getText();
		Assert.assertEquals(text2, "I am a JS Confirm");
	}
	public void clicksecondalertcancell5() throws InterruptedException {
		Thread.sleep(2000);
		Hooks.driver.switchTo().alert().dismiss();
		Thread.sleep(2000);
	}
	public void clickOnthirdPrompt6() throws InterruptedException {
		pages.JSPrompt.click();
		Thread.sleep(2000);
		Hooks.driver.switchTo().alert().sendKeys("Team Titan");
		Hooks.driver.switchTo().alert().accept();
		Thread.sleep(2000);
		
	}
}
