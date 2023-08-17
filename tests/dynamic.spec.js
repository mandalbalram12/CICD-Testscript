import { test, expect } from '@playwright/test';
test.only('Script 3', async({browser})=>
{
const context = await browser.newContext();
const page= await context.newPage();
await page.goto("https://www.reliancedigital.in/");
await page.pause();
console.log("Tittle of page is", await page.title());
await page.waitForLoadState('networkidle');
await page.locator("#wzrk-cancel").click();
await page.getByPlaceholder("Find your favorite products").type("Apple IPhone 14 128 GB");
await page.getByPlaceholder("Find your favorite products").press('Enter');
await page.waitForLoadState('networkidle');
//await page.locator(".sp__name").first().click();
// Get the price text
console.log("The price of product is:-",await page.locator('.gimCrs').first().textContent());
await context.close();

});