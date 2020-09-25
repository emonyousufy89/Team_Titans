package com.internet.stepdef;


import org.testng.annotations.AfterMethod;
import org.testng.annotations.BeforeMethod;
import java.util.concurrent.TimeUnit;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.java.After;
import cucumber.api.java.Before;

public class Hooks {
	
	
	public static WebDriver driver;
	
	@BeforeMethod
	public void setup() throws InterruptedException {
		System.setProperty("webdriver.chrome.driver", "Driver/chromedriver");
		driver = new ChromeDriver();
		driver.get("https://the-internet.herokuapp.com/");
		driver.manage().timeouts().implicitlyWait(20,TimeUnit.SECONDS);
		driver.manage().window().maximize();	
		Thread.sleep(2000);	
	}
	@AfterMethod
	public void tearDown() {
	driver.quit();	
	}

}
