import { test, expect } from '@playwright/test';

test('Testcase 01: To test the iframe',async({page})=>{

    //Visiting iframe site
    await page.goto('https://the-internet.herokuapp.com/frames');

    //Selecting iframe button
    await page.getByRole('link',{name:'iFrame'}).click();

    //Performing action on iFrame element
    const myframe= await page.frameLocator('#mce_0_ifr').getByLabel('Rich Text Area. Press ALT-0 for help.');
    await myframe.fill('Hello, I am Balram');
   

});
test('Testcase 02: To test the shadow DOm/root',async({page})=>{

    //Visiting iframe site
    await page.goto('https://selectorshub.com/xpath-practice-page/');
    await page.pause();

    //Selecting iframe button
    // await page.getByRole('link',{name:'iFrame'}).click();

    //Performing action on shadow element
    const myshadow= await page.frameLocator('#userName').locator('#kils');
    await myshadow.fill('Hello, I am Balram');

});

test.only('Testcase 03: To test the iframe',async({page})=>{

    //Visiting iframe site
    await page.goto('https://the-internet.herokuapp.com/frames');

    //Selecting iframe button
    await page.getByRole('link',{name:'iFrame'}).click();

    // //Performing action on iFrame element
    // const myframe= await page.frameLocator('#mce_0_ifr').getByLabel('Rich Text Area. Press ALT-0 for help.');
    // await myframe.fill('Hello, I am Balram');

    // Get frame using the frame's name attribute
    await page.waitForSelector('iframe[name="mce_0_ifr"]');
    const miframe = await page.frame('mce_0_ifr');
  
    // Interact with the frame
    await miframe.waitForSelector('[data-id="mce_0"]');
    await miframe.fill('[data-id="mce_0"]', 'Hi, I am Balram');
});