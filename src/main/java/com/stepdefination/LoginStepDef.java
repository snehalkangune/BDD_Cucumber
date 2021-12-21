package com.stepdefination;

import java.util.ArrayList;
import java.util.List;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;


public class LoginStepDef {
	WebDriver driver;
	 ArrayList<String>actulCourseName=null;
	
	@Before
	public void setUp(){
	  System.setProperty("webdriver.chrome.driver","chromedriver.exe");
	    driver=new ChromeDriver();
	}
	
	 @After
	 public void tearDown(){
		 driver.close();
	 }
	 
	
	
	@Given("^user should be on login page$")
	public void user_should_be_on_login_page() throws Throwable {
	  
	    driver.get("file:///D:/snehal/selenium%20software/Offline%20Website/Offline%20Website/index.html");
	    
	}

	@When("^user enters \"([^\"]*)\" and \"([^\"]*)\"$")
	public void user_enters_and(String uname, String pass) throws Throwable {
		 
	    driver.findElement(By.id("email")).sendKeys(uname);
	    driver.findElement(By.id("password")).sendKeys(pass);
	    
	}

	@When("^user clicks login button$")
	public void user_clicks_login_button() throws Throwable {
		driver.findElement(By.xpath("//button")).click();
	    
	}

	@Then("^user should be on home page$")
	public void user_should_be_on_home_page() throws Throwable {
	    Assert.assertEquals(driver.getTitle(),"JavaByKiran | Dashboard");
	    
	}
	

	@Then("^user should see JBK logo$")
	public void user_should_see_JBK_logo() throws Throwable {
		WebElement logo=driver.findElement(By.tagName("img"));
	    Assert.assertTrue(logo.isDisplayed());
	    
	}
	@Given("^user should be on dashboard page$")
	public void user_should_be_on_dashboard_page() throws Throwable {
		 driver.get("file:///D:/snehal/selenium%20software/Offline%20Website/Offline%20Website/index.html");
		 driver.findElement(By.id("email")).sendKeys("kiran@gmail.com");
		    driver.findElement(By.id("password")).sendKeys("123456");
		    driver.findElement(By.xpath("//button")).click();
	    
	}


	@When("^user will create a list of courses$")
	public void user_will_create_a_list_of_courses() throws Throwable {
	   List<WebElement> courses=driver.findElements(By.tagName("h3"));
	   ArrayList<String>actulCourseName=new ArrayList<String>();
	   for (WebElement e : courses) {
		   actulCourseName.add(e.getText());
	}
	   
	}

	@Then("^user will verify with expected courses$")
	public void user_will_verify_with_expected_courses() throws Throwable {
		 ArrayList<String>expectedCourseName=new ArrayList<String>();
		 expectedCourseName.add("Selenium");
		 expectedCourseName.add("Java / J2EE");
		 expectedCourseName.add("Python");
		 expectedCourseName.add("Php");
		 
		 Assert.assertEquals(expectedCourseName, actulCourseName);
	}

}
