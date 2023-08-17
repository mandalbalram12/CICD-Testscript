import { test, expect } from '@playwright/test';

test('test', async({ page }) => {
  await page.goto('https://clickup.com/');
  await page.getByRole('link', { name: 'Log in' }).click();
  await page.locator('[data-test="login-email-input"]').click();
  await page.locator('[data-test="login-email-input"]').type('purposefortesting10@gmail.com');
  await page.locator('[data-test="login-password-input"]').click();
  await page.locator('[data-test="login-password-input"]').type('#Sept@12345');
  await page.locator('[data-test="login-submit" ]').click({force:true});
  await page.locator('[data-test="form__error"]').isVisible();

});