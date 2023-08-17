const { test, expect } = require('@playwright/test');
const { homePage} = require('./homePage.js');
const { loginPage} = require('./loginPage.js');
const { productPage} = require('./productPage.js');
const { cartPage} = require('./cartPage.js');

test.beforeEach(async ({ page }) => {

    const page1= new homePage(page);

    //Visiting to site 
    await page1.visitPage();
  });

test('Test case: using Page Object Model', async ({ page }) => {

    const page1= new homePage(page);
    const page2= new loginPage(page);
    const page3= new productPage(page);
    const page4= new cartPage(page);

    // //Visiting to site 
    // await page1.visitPage();

    //Verify the Page
    await page1.verifyPage();

    //Clicking on Signup/Login Page    
    await page1.clickLoginSignupbtn();

    //Verify the heading of the Page
    await page2.verifyheading();

    //Enter the Username
    await page2.valueusername();

    //Enter the password
    await page2.valuepassword();

    //Clicking on Login button
    await page2.clickloginBtn();

    //Verify the Logged as User
    await page2.verifyLoggedIn();

    //Click on Product button
    await page1.clickproductBtn();

    // Search Product
    await page3.searchProduct();

    //Verify Product
    await page3.verifyProduct();

    //Add searched Product to cart
    await page3.chooseProduct();

    //Verify Confirm Modal
    await page3.verifyConfirmationModal();

    //Click on Continue Shopping
    await page3.clickContinueShopping();

    //Click on Cart
    await page1.clickCartBtn();

    // Verify Cart elements
    await page4.verifycartelements();

    //Verify Added Products
    await page4.verifyaddedProduct();

    //Remove Added Product
    await page4.removeProduct();

    //Verify Empty Cart
    await page4.verifyemptyCart();

    // //User Logout
    // await page2.userLogout();

});
test.afterEach(async ({ page }) => {

    const page2= new loginPage(page);

    //User Logout
    await page2.userLogout();
  });