import { expect } from "@playwright/test";
import { Given, When, Then } from "@cucumber/cucumber";
import { page } from "../hooks/hooks";
import { LoginClass } from "../pages/LoginPage";


let lp;

Given("user navigates to OHRM login Page", async function () {
     this.lp = new LoginClass(page)
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
});

When("user enters username {string}", async function (username: string) {
  
   await this.lp.enterUsername(username)
});

When("user enters password {string}", async function (username: string) {
   
   await  this.lp.enterPassword(username)
});

When("Clicks the Login Button", async function () {
  
   await this.lp.clickLoginButton()
});

Then("User should be Successfully Logged In", async function () {
  
    
});