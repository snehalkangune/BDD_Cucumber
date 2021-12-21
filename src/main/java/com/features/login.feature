@loginpage
Feature: JBK Offline application test
 
@login
 Scenario Outline: login test
 
 Given user should be on login page
 When user enters "<uname>" and "<pass>"
 And user clicks login button
 Then user should be on home page
 
 Examples: 
|uname|pass|
|kiran@gmail.com|123456|
|snehal@gmail.com|12345|
|namrata@gmail.com|123345|
 
 
 
 
 
 
 
 
 
  
