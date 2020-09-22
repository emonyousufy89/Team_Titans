package com.internet.stepdef;


import java.util.concurrent.TimeUnit;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.java.After;
import cucumber.api.java.Before;

public class Hooks {
	
	
	public static WebDriver driver;
	
	@Before
	public void setup() throws InterruptedException {
		System.setProperty("webdriver.chrome.driver", "Driver/chromedriver");
		driver = new ChromeDriver();
		driver.get("https://the-internet.herokuapp.com/");
		driver.manage().timeouts().implicitlyWait(20,TimeUnit.SECONDS);
		driver.manage().window().maximize();	
		Thread.sleep(2000);	
	}
	@After
	public void tearDown() {
	driver.quit();	
	}

}
