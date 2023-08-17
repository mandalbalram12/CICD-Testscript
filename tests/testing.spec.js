import { test, expect } from '@playwright/test';

test('Login',async({page})=> {
    await page.goto('https://www.airtable.com');
    await page.getByRole('link',{name:'Sign in'}).first().click();
    if(await page.isVisible('.formContainer rounded-big col-12 huge xs-px0 z2 sm-max-width-2 white')==true){
        await page.getByRole('textbox',{name:'Email'}).fill('pihoitraureipoi-7422@yopmail.com');
        await page.getByRole('button',{name:'Continue'}).click();
        await page.locator('#passwordLogin').fill('Sept@1234');
        await page.getByRole('button',{name:'Sign in'}).nth(2).click({force:true});

    }
    else{
        await page.getByRole('textbox',{name:'Email'}).fill('pihoitraureipoi-7422@yopmail.com');
        await page.locator('#passwordLogin').fill('Sept@1234');
        await page.getByRole('button',{name:'Sign in'}).nth(2).click({force:true});
        

    }
    console.log('The title of the Page:',await page.title());
});
