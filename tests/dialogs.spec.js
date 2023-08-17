import { test, expect } from '@playwright/test';

test('test', async({ browser }) => {

    const context = await browser.newContext({ 
        recordVideo: { 
            dir: 'videos/',
            size: { width: 1080, height: 780}
         } 
    });
    const page = await context.newPage();
  
    //Visiting Demoqa.com/alerts
    await page.goto('https://demoqa.com/alerts');
    page.on('dialog', dialog => dialog.accept('Its a Testing'));  

  await page.getByRole('button',{name:'Click me'}).locator('nth=0').click();


  //Clicking on prompt's Click me
  await page.getByRole('button',{name:'Click me'}).locator('nth=3').click();


  //Clicking on confirm's click me
  await page.getByRole('button',{name:'Click me'}).locator('nth=2').click();


  await page.close();


});