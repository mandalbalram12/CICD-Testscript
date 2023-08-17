const { test, expect } = require('@playwright/test');
const { pageClass} = require('./POM.js');

test('Test case: using Page Object Model', async ({ page }) => {
  const pageOne = new pageClass(page);
  await pageOne.visit();
  await pageOne.verifyhomepage();
  await pageOne.clickSignup();
  await pageOne.verifyloginBtn();
  await pageOne.credentials();
  await pageOne.clickLoginBtn();
  await pageOne.verifylogged();
  await pageOne.clickLogout();
  await pageOne.verifylogout();

});
