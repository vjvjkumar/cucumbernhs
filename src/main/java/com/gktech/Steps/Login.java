package com.gktech.Steps;

import com.gktech.base.TestBase;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class Login {
	
	TestBase nhsPage=TestBase.navigatetoWebApp();
	
	@Given("^I open firefox \"([^\"]*)\"$")
	public void I_Open(String browser){
		System.out.println("I Open "+browser+" Browser");
		nhsPage.OpenBrowser();
	}
	
	@When("^I navigate to \"([^\"]*)\"$")
	public void I_navigate_to(String appurl){
		System.out.println("I navigate to"+appurl);
		nhsPage.navigate(appurl);
	}
	@Then("^I click on \"([^\"]*)\"$")
	public void I_click(String logLink){
		System.out.println("I click on "+logLink);
		nhsPage.click(logLink);
	}
	
	@Then("^I enter \"([^\"]*)\" as \"([^\"]*)\"$")
	public void I_enter_uname(String prop, String text){
		System.out.println("I enter "+prop+" as "+text);
		nhsPage.type(prop, text);
	}
	
	@Then("^I enter \"([^\"]*)\" as \"([^\"]*)\"$")
	public void I_enter_pass(String prop, String text){
		System.out.println("I enter "+prop+" as "+text);
		nhsPage.type(prop, text);
	}
	@And("^I click on \"([^\"]*)\"$")
	public void I_click_button(String logLink){
		System.out.println("I click on "+logLink);
		nhsPage.click(logLink);
	}
	
	@Then("I got the \"([^\"]*)\"$ page")
	public void I_got_the(String Home){
		System.out.println("I got the "+Home+" page");
		
	}
}
