package tests;

import java.net.MalformedURLException;
import java.net.URL;

import org.openqa.selenium.remote.DesiredCapabilities;
import org.testng.annotations.AfterTest;
import org.testng.annotations.BeforeTest;

import io.appium.java_client.MobileElement;
import io.appium.java_client.ios.IOSDriver;

public class BaseClass {
	
	IOSDriver<MobileElement> driver; 
	
	@BeforeTest
	public void setup() throws MalformedURLException {
		
		DesiredCapabilities capability = new DesiredCapabilities();
		
		capability.setCapability("platformName","iOS");
		capability.setCapability("deviceName","iPhone 11 Pro");
		capability.setCapability("platformVersion","13.4");
		capability.setCapability("app","/Users/burakkorkmaz/eclipse-workspace/iosAutomation/src/test/resources/apps/Project 2.app");
		
		URL url = new URL("http://localhost:4723/wd/hub");
		
		driver = new IOSDriver<MobileElement>(url, capability);
		//driver.closeApp();
	}
	
	
	
	@AfterTest
	public void teardown() {
	}
}
