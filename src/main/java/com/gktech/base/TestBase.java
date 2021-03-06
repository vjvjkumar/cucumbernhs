package com.gktech.base;

import java.io.FileInputStream;
import java.util.Properties;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.firefox.FirefoxDriver;

public class TestBase {
	
	public Properties OR=null;
	public FileInputStream fis=null;
	static TestBase baseClass;
	
	WebDriver driver;
	
	//creating constructor for to use the objects and load the files
	public TestBase(){
		if(OR==null){
	
		try{
		OR	=new Properties();
		fis	=new FileInputStream(System.getProperty("user.dir")+"/src/main/java/com/gktech/config/OR.properties");
		OR.load(fis);
		}catch(Throwable t){
		System.out.println("Properties files not loaded correctly");
		}
		}else{
		System.out.println("Properties files not loaded correctly");
		}
		}
	public static TestBase navigatetoWebApp(){
		if(baseClass==null){
			baseClass=new TestBase();			
		}else{		
		return baseClass;
		}
		return baseClass;
		}
	public void OpenBrowser(){
		driver=new FirefoxDriver();
		driver.manage().window().maximize();
	}
	public void CloseBrowser(){
		driver.close();
	}
	public void navigate(String appurl){
		driver.get(OR.getProperty(appurl));
	}
	public void click(String prop){
		driver.findElement(By.xpath(OR.getProperty(prop))).click();
	}
	public void type(String prop, String text){
		driver.findElement(By.xpath(OR.getProperty(prop))).sendKeys(text);
	}
	public void select(String prop, String text){
		driver.findElement(By.xpath(OR.getProperty(prop))).sendKeys(text);
	}
	}
