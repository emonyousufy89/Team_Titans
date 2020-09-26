package com.internet.pages;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;

public class ForgetPasswordElements {

	
		//Forget Password
	    @FindBy (how=How.CSS,using="a[href='/forgot_password']")
	    public WebElement Forgetpassword;
	    
	    //Email
	    @FindBy(xpath = "//input[@name= 'email']")
	    public WebElement email;
	
	    //Retrieve Password
	    @FindBy(id="form_submit")
	    public WebElement retrievepassword;
	    
}

