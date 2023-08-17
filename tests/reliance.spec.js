import { test, expect } from '@playwright/test';
test.only('Script 3', async({browser})=>
{
const context = await browser.newContext();
const page= await context.newPage();
await page.goto("https://www.reliancedigital.in/");
await page.waitForLoadState('networkidle');
if(await page.isVisible('.wiz-show-animate')==true){
    console.log("Tittle of page is", await page.title());
    await page.locator("#wzrk-cancel").click();
}
else{
    console.log("Tittle of page is", await page.title());
}
await page.getByPlaceholder("Find your favorite products").type("Oneplus Nord CE 3 Lite 5G");
await page.locator('.searchPanel__search').click();
const priceOne= await page.locator('.gimCrs').nth(1).textContent();
console.log('The Price of Oneplus in Reliance Digital Store',priceOne);
const numericValue = parseFloat(priceOne.replace(/[^\d.-]/g, ''));
console.log('The amount in Reliance digital Store', numericValue);
});