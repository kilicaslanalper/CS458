from selenium import webdriver
import os
import time

browser = webdriver.Chrome(os.curdir + "/chromedriver")
print(os.curdir)


def starsLogin(bilkentID, password):

    # Address of the stars srs system
    browser.get(
        "file:///Users/burakkorkmaz/Desktop/4-2/cs%20458/CS458/Project%201/Login_v3/index.html")

    # Typing school number
    browser.find_element_by_xpath(
        "//*[@id=\"username\"]").send_keys(bilkentID)

    # Typing password
    password = browser.find_element_by_xpath(
        "/html/body/div[1]/div/div/form/div[2]/input").send_keys(password)

    # Click button
    browser.find_element_by_xpath(
        "/html/body/div[1]/div/div/form/div[3]/button").click()

    # Wait 10 seconds to see the result of the test case
    time.sleep(5)
    try:
        browser.switch_to.alert.accept()
    except:
        pass


# Test Case 1
starsLogin("200000", "Burak")

# Test Case 2
starsLogin("200000a", "Burak")

# Test Case 3
starsLogin("21601296", "123456")

browser.quit()
