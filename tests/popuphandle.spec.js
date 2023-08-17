import { test, expect } from '@playwright/test';

test('Testing on New Tab', async({page}) => {

    // const page = await context.newPage();
  
    //Visiting Demoqa.com/alerts
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

    //Clicking on element navigates to new tab
    await page.locator('[role="presentation"]').locator('nth=0').click({force:true});

    //Clicking on Dismiss Button
    await page.getByRole('button',{name:'Dismiss'}).click();


//   await page.close();


});