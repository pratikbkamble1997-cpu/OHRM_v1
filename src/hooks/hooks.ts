import { Browser, BrowserContext, chromium, Page } from "@playwright/test";
import { Before, After, setDefaultTimeout } from "@cucumber/cucumber";


let page: Page;
let browser: Browser;
let context: BrowserContext;

setDefaultTimeout(60000);

Before(async function () {
    browser = await chromium.launch({ headless: false });
    context = await browser.newContext();
    page = await context.newPage();
});

After(async function () {
   
    await page.close()
await browser.close();
});

export { page };