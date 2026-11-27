import {expect, Locator, Page} from "@playwright/test"
import { text } from "node:stream/iter";

export class BaseClass {


  page:Page

    constructor(page:Page)
    {

        this.page =page;

    }


    async enterText(locator:Locator, text:string)
    {

      await locator.fill(text)

    }

    async click(locator:Locator)
    {

      await locator.click()
    }


    async eleToHaveText(locator:Locator,eletxt:string)
    {

      await expect(locator).toHaveText(eletxt)
    }

















}