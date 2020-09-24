package com.internet.actions;

import org.openqa.selenium.support.PageFactory;

import com.internet.pages.FileUploadPages;
import com.internet.stepdef.Hooks;

public class FileUploadAction {

	FileUploadPages pages;
	
	public FileUploadAction() {
		pages = new FileUploadPages();
		PageFactory.initElements(Hooks.driver, pages);
	}
	
	public void ClickFileUpload() throws InterruptedException {
		pages.fileuploadlink.click();
		Thread.sleep(2000);
	}
	public void clickChooseFile() throws InterruptedException {
		pages.choosefilebutton.sendKeys("/Users/mdsalahuddin/Documents/Player.xlsx ");
		Thread.sleep(2000);
	}
	
	public void ClickUploadButton() throws InterruptedException {
		pages.uploadButton.click();
		Thread.sleep(2000);
	}
	public void SuccessfullTextVerify() throws InterruptedException {

		pages.SuccessfullMessage.getText();
		Thread.sleep(2000);
	}
}
