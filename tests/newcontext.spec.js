import { test, expect } from '@playwright/test';

test('Testing for understanding concept of Context', async ({ browser }) => {
  // Create a new incognito browser context
  const context1 = await browser.newContext();
  const context2 = await browser.newContext();

  // Create a new page inside each context.
  const page1 = await context1.newPage(); // Use context1.newPage()
  await page1.goto('https://automationexercise.com/');

  //To take a Screenshot
  await page1.screenshot({ path: 'D:\\Playwright\\test-results\\screenshot.png' });

//   const page2 = await context2.newPage(); // Use context2.newPage()
//   await page2.goto('https://clickup.com/');

  // Dispose context once they're no longer needed.
  await context1.close();
//   await context2.close();
});
