package com.extent.reporterutils;

import java.io.File;
import java.io.IOException;
import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.Date;

import org.apache.commons.io.FileUtils;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.WebDriver;

import com.aventstack.extentreports.ExtentReports;
import com.aventstack.extentreports.ExtentTest;
import com.aventstack.extentreports.markuputils.ExtentColor;
import com.aventstack.extentreports.markuputils.MarkupHelper;
import com.aventstack.extentreports.reporter.ExtentHtmlReporter;
import com.aventstack.extentreports.reporter.configuration.Theme;
import org.openqa.selenium.OutputType;


public class ExtentReportListner {
	
	public static ExtentHtmlReporter reportConfig = null;
	public static ExtentReports extent = null;
	public static ExtentTest test = null;
	static String location = "ExtentReport/extent-report.html";

	public static ExtentReports setup() {
		try {

			reportConfig = new ExtentHtmlReporter(location);
			reportConfig.config().setDocumentTitle("Automation Execution Report");  //title of the report
			reportConfig.config().setReportName("Automation Execution Results"); // Name of the report
			reportConfig.config().setTheme(Theme.DARK); //
			System.out.println("Extent Report Location Initialized..");

			reportConfig.start();

			extent = new ExtentReports();
			extent.attachReporter(reportConfig);
			extent.setSystemInfo("Application", "Amazon.com");
			extent.setSystemInfo("Operating System", System.getProperty("os.name"));
			//extent.setSystemInfo("User1", System.getProperty("user.name"));
			extent.setSystemInfo("User", "Team Pi");
			extent.setSystemInfo("Tester1: SignIn,SignUp,Books Shopping,Electronics Shopping", "Emon");
			extent.setSystemInfo("Tester2: Fruit Shopping", "Morshed");
			extent.setSystemInfo("Tester3: Gift Card Shopping", "Rizwana");
			System.out.println("System Info.Set in Extent Report");

		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return extent;
	}
	
}
