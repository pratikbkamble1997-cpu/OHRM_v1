import { Locator, Page } from "@playwright/test";
import { BaseClass } from "./BasePage";
import { text } from "node:stream/consumers";


export class LoginClass extends BaseClass
{

     username:Locator;
     password:Locator;
     loginButton:Locator;
     dashboard:Locator;
    


    constructor(page:Page)
    {
        super(page)

        this.username =  page.getByPlaceholder("Username").first()
        this.password =  page.getByPlaceholder("Password").first()
        this.loginButton = page.getByRole("button",{name:"Login"})
        this.dashboard = page.locator(".oxd-topbar-header-breadcrumb >h6")

    }


    async enterUsername(text:string)
    {
        await this.enterText(this.username,text)

    }

    async enterPassword(text:string)
    {
        await this.enterText(this.password,text)    
        
    }

    async clickLoginButton()
    {
        await this.click(this.loginButton)
    }











}