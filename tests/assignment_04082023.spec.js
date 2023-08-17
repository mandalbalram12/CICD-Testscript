import { test, expect } from '@playwright/test';

test('Test case:01,Comparing the product price in different sites @Smoke', async ({ browser }) => {
  // Create three new incognito browser context
  const context1 = await browser.newContext();
  const context2 = await browser.newContext();
  const context3 = await browser.newContext();

  // Create three new page inside each context.
  const page1 = await context1.newPage();
  const page2 = await context2.newPage();
  const page3 = await context3.newPage();

  //Visiting Three different shopping Site
//-----------------------------------------------------------------------
  //Visiting Amazon shopping Site
  await page1.goto("https://www.amazon.com/");
  await page1.locator('[data-action-type="DISMISS"]').click();
  await page1.getByRole('textbox',{name:'Search Amazon'}).fill('Oneplus Nord CE 3 Lite 5G');
  await page1.getByRole('button',{name:'Go'}).click();
  await page1.waitForLoadState();

  // Getting the price of product from Amazon
  const priceValue1= await page1.locator('.a-price-whole').nth(1).textContent();
  console.log('The Price of Product in Amazon :',priceValue1);
  const numericValue1 = parseFloat(priceValue1.replace(/[^\d.-]/g, ''));
  console.log('The Amount in Amazon:',numericValue1);
  // const numericValue1 = parseFloat(priceValue1.substring(1));
  const OrigValue1= numericValue1*82;
  console.log('Indian Amount in Amazon : ',OrigValue1);
//----------------------------------------------------------------------------------------
  //Visiting flipkart shopping site
  await page2.goto("https://www.flipkart.com/");
  //Checking Popup
  if(await page2.isVisible('._2QfC02')==true){
    await page2.getByRole('button',{name:'✕'}).click();
    await page2.getByRole('textbox',{name:'Search for products, brands and more'}).fill('Oneplus Nord CE 3 Lite 5G');
    await page2.locator('.L0Z3Pu').click();
  }
  else{
    await page2.getByRole('textbox',{name:'Search for products, brands and more'}).fill('Oneplus Nord CE 3 Lite 5G');
    await page2.getByRole('button',{name:'Search for Products, Brands and More'}).click();
  }
  const priceValue2= await page2.locator('._1_WHN1').nth(2).textContent();
  console.log('The Product price in Flipkart',priceValue2);

  // Getting the price of product from flipkart
  const numericValue2 = parseFloat(priceValue2.replace(/[^\d.-]/g, ''));
  console.log('The Amount in Flipkart :',numericValue2);
//--------------------------------------------------------------------------------------------

  //Visiting reliance digital Store
  await page3.goto("https://www.reliancedigital.in/");
  await page3.waitForLoadState('networkidle');

  // Getting the price of product from Reliance Digital Store
  await page3.waitForLoadState('networkidle');
  if(await page3.isVisible('.wiz-show-animate')==true){
      console.log("Tittle of page is", await page3.title());
      await page3.locator("#wzrk-cancel").click();
  }
  else{
      console.log("Tittle of page is", await page3.title());
  }
  await page3.getByPlaceholder("Find your favorite products").type("Oneplus Nord CE 3 Lite 5G");
  await page3.locator('.searchPanel__search').click();
    // Getting the price of product from Reliance Digital Store
  const priceValue3= await page3.locator('.gimCrs').nth(1).textContent();
  console.log('The Price of Oneplus in Reliance Digital Store',priceValue3);
  const numericValue3 = parseFloat(priceValue3.replace(/[^\d.-]/g, ''));
  console.log('The Amount in Reliance Digital Stor',numericValue3);

//---------------------------------------------------------------------
// Comparing the Amount and get the Minimum ammount
  if((OrigValue1<numericValue3)&&(OrigValue1<numericValue2)){
    console.log('The Price of Product in Amazon is Minimum',priceValue);
  }
  else if((numericValue2<numericValue3)&&(numericValue2<OrigValue1)){
    console.log('The Price of Product in Flipkart is Minimum',priceValue2);
    
  }
else{
  console.log('The Price of Product in Reliance digital is Minimum',numericValue3);
}



  await page1.close();
  await context2.close();
  await page3.close();
});

test('Test case:02, Automating Heroku @Regression', async({ browser }) => {

  const context = await browser.newContext(
    {
      httpCredentials:
      {
        username: 'admin',
        password: 'admin'
      }  
    })
  
  const page  = await context.newPage();
  await page.goto('https://the-internet.herokuapp.com/');
  await page.getByRole('link', {name:'Basic Auth'}).click();
  const message= await page.locator('.example>p');
  await expect(message).toContainText('Congratulations! You must have the proper credentials.');

});
