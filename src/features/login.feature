
Feature: Login Functionality of OHRM App

Scenario Outline: User Should Login Sucessfully

Given user navigates to OHRM login Page
When  user enters username "<uname>"
And user enters password "<pass>"
And Clicks the Login Button
Then User should be Successfully Logged In

Examples:
  | uname | pass     |
  | Admin | admin123 |