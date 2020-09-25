package com.internet.runner;

import java.io.File;

import org.testng.annotations.AfterClass;
import org.testng.annotations.Test;

import com.cucumber.listener.Reporter;
import cucumber.api.CucumberOptions;
import cucumber.api.testng.AbstractTestNGCucumberTests;

@CucumberOptions(
		
		features = "src/titans/resources/features",
		glue = "com.internet.stepdef",
		monochrome = true,
		tags = {"~@Ignore"},
		plugin = {
                "pretty", 
                "html:target/cucumber-reports/cucumber-pretty",
                "json:target/cucumber-reports/CucumberTestReport.json",
                "rerun:target/cucumber-reports/rerun.txt"
        })
@Test
public class TestRunner {
//extends AbstractTestNGCucumberTests{
	
	/*private TestNGCucumberRunner testNGCucumberRunner;
	 
    @BeforeClass(alwaysRun = true)
    public void setUpClass() throws Exception {
        testNGCucumberRunner = new TestNGCucumberRunner(this.getClass());
    }
    @Test(groups = "cucumber", description = "Runs Cucumber Feature", dataProvider = "features")
    public void feature(CucumberFeatureWrapper cucumberFeature) {
        testNGCucumberRunner.runCucumber(cucumberFeature.getCucumberFeature());
    }
    @DataProvider
    public Object[][] features() {
        return testNGCucumberRunner.provideFeatures();
    }
    @AfterClass(alwaysRun = true)
    public void tearDownClass() throws Exception {
        testNGCucumberRunner.finish();
}*/
//	@AfterClass
//	public static void writeExtentReport() {
//		
//		Reporter.loadXMLConfig(new File("config/config.xml"));
//	}

}
