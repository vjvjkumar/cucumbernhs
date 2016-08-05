package com.gktech.Steps;

import com.gktech.base.TestBase;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class Login {
	TestBase cucumber=TestBase.getInstance();
	
	@Given("^I open firefox \"([^\"]*)\"$")
	public void I_Open(String browser){
		System.out.println("I Open "+browser+" Browser");
		cucumber.OpenBrowser();
	}
	
	@When("^I navigate \"([^\"]*)\"$")
	public void I_navigate(String appurl){
		System.out.println("I navigate "+appurl);
		cucumber.navigate(appurl);
	}
	@Then("^I click on \"([^\"]*)\"$")
	public void I_click(String logLink){
		System.out.println("I click on "+logLink);
		cucumber.click(logLink);
	}
	
	@Then("^I enter \"([^\"]*)\" as \"([^\"]*)\"$")
	public void I_enter_uname(String prop, String text){
		System.out.println("I enter "+prop+" as "+text);
		cucumber.type(prop, text);
	}
	
	/*@Then("^I enter \"([^\"]*)\" as \"([^\"]*)\"$")
	public void I_enter_pass(String prop, String text){
		System.out.println("I enter "+prop+" as "+text);
		cucumber.type(prop, text);
	}*/
	/*@Then("^I click on \"([^\"]*)\"$")
	public void I_click_button(String logLink){
		System.out.println("I click on "+logLink);
		cucumber.click(logLink);
	}*/
	
	@Then("I got the \"([^\"]*)\"$ page.")
	public void I_got_the(String home){
		System.out.println("I got the "+home+" page.");
		
	}
}
