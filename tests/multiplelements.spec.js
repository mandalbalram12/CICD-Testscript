import { test, expect } from '@playwright/test';

test('Test:01 @Smoke',async({page})=> {
    await page.goto('https://www.automationexercise.com/');
    await page.waitForSelector('.productinfo.text-center>>p')
    const dresses= await page.$$('.productinfo.text-center>>p');

    for(const dress of dresses){
        const dressName = await dress.textContent();
        console.log(dressName);
    }
});