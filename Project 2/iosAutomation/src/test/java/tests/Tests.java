package tests;



import java.util.List;

import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.testng.annotations.Test;

import io.appium.java_client.MobileBy;
import io.appium.java_client.MobileElement;


public class Tests extends BaseClass{
	
	@Test
	public void caseOne() {
		driver.launchApp();
		
		// Set Name
		driver.findElement(By.name("Name")).sendKeys("Burak Korkmaz2");
		
		// Set Date
		driver.findElement(By.name("Date")).click();
		List<MobileElement> date = driver.findElementsByClassName("XCUIElementTypePickerWheel");
		date.get(0).sendKeys("December");
		date.get(1).sendKeys("29");
		date.get(2).sendKeys("1996");
		
		// Set City
		driver.findElement(By.name("City")).click();
		WebElement picker = driver.findElementByClassName("XCUIElementTypePickerWheel");
		picker.sendKeys("Ankara");
		
		// Set Gender
		driver.findElement(By.name("Gender")).click();
		picker = driver.findElementByClassName("XCUIElementTypePickerWheel");
		picker.sendKeys("Male");
		
		// Set Occupation
		driver.findElement(By.name("Occupation")).sendKeys("Student");	
		WebElement keyboard = driver.findElement(MobileBy.className("UIAKeyboard"));
		keyboard.findElements(By.name("Return")).get(0).click();
		driver.findElement(By.name("Survey")).click();
		
		// Send
		driver.findElement(By.name("Send")).click();
		
		System.out.println("Completed test one");
		
	}
	
	@Test
	public void caseTwo() {
		driver.launchApp();
		
		// Set Name
		driver.findElement(By.name("Name")).sendKeys("Burak Korkmaz");
		
		// Set Date
		driver.findElement(By.name("Date")).click();
		List<MobileElement> date = driver.findElementsByClassName("XCUIElementTypePickerWheel");
		date.get(0).sendKeys("December");
		date.get(1).sendKeys("29");
		date.get(2).sendKeys("2040");
		
		// Set City
		driver.findElement(By.name("City")).click();
		WebElement picker = driver.findElementByClassName("XCUIElementTypePickerWheel");
		picker.sendKeys("Ankara");
		
		// Set Gender
		driver.findElement(By.name("Gender")).click();
		picker = driver.findElementByClassName("XCUIElementTypePickerWheel");
		picker.sendKeys("Male");
		
		// Set Occupation
		driver.findElement(By.name("Occupation")).sendKeys("Student");	
		WebElement keyboard = driver.findElement(MobileBy.className("UIAKeyboard"));
		keyboard.findElements(By.name("Return")).get(0).click();
		driver.findElement(By.name("Survey")).click();
		
		// Send
		driver.findElement(By.name("Send")).click();
		
		System.out.println("Completed test two");
	}
	
	@Test
	public void caseThree() {
		driver.launchApp();
		
		// Check Name Box
		driver.findElement(By.name("Name"));
		
		// Check Date Box
		driver.findElement(By.name("Date"));
		
		// Check City Box
		driver.findElement(By.name("City"));
		
		// Check Gender Box
		driver.findElement(By.name("Gender"));
		
		// Check Occupation Box
		driver.findElement(By.name("Occupation"));	
		
		System.out.println("Completed test three");
	}
	
	@Test
	public void caseFour() {
		driver.launchApp();
		
		// Set Name
		driver.findElement(By.name("Name")).sendKeys("Burak Korkmaz");
				
		// Set Date
		driver.findElement(By.name("Date")).click();
		List<MobileElement> date = driver.findElementsByClassName("XCUIElementTypePickerWheel");
		date.get(0).sendKeys("December");
		date.get(1).sendKeys("29");
		date.get(2).sendKeys("1996");
				
		// Set City
		driver.findElement(By.name("City")).click();
		WebElement picker = driver.findElementByClassName("XCUIElementTypePickerWheel");
		picker.sendKeys("Ankara");
				
		// Set Gender
		driver.findElement(By.name("Gender")).click();
		picker = driver.findElementByClassName("XCUIElementTypePickerWheel");
		picker.sendKeys("Male");
				
		// Set Occupation
		driver.findElement(By.name("Occupation")).sendKeys("The number of character in this box will be above 60 characters. It is some text that increase the number of characters.");	
		WebElement keyboard = driver.findElement(MobileBy.className("UIAKeyboard"));
		keyboard.findElements(By.name("Return")).get(0).click();
		driver.findElement(By.name("Survey")).click();
		
		// Send
		driver.findElement(By.name("Send")).click();
		
		System.out.println("Completed test four");
	}
	
	@Test
	public void caseFive() {
		driver.launchApp();
		
		// Set Name
		driver.findElement(By.name("Name")).sendKeys("Burak Korkmaz");
		
		// Set Date
		driver.findElement(By.name("Date")).click();
		List<MobileElement> date = driver.findElementsByClassName("XCUIElementTypePickerWheel");
		date.get(0).sendKeys("December");
		date.get(1).sendKeys("29");
		date.get(2).sendKeys("1996");
		
		// Set City
		driver.findElement(By.name("City")).click();
		WebElement picker = driver.findElementByClassName("XCUIElementTypePickerWheel");
		picker.sendKeys("Ankara");
		
		// Set Gender
		driver.findElement(By.name("Gender")).click();
		picker = driver.findElementByClassName("XCUIElementTypePickerWheel");
		picker.sendKeys("Male");
		
		// Set Occupation
		driver.findElement(By.name("Occupation")).sendKeys("Student");	
		WebElement keyboard = driver.findElement(MobileBy.className("UIAKeyboard"));
		keyboard.findElements(By.name("Return")).get(0).click();
		driver.findElement(By.name("Survey")).click();
		
		// Send
		driver.findElement(By.name("Send")).click();
		
		System.out.println("Completed test five");	
	}
	
}
