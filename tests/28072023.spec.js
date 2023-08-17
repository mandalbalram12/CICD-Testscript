const { chromium } = require('playwright');

(async () => {
  // Launch the browser (in this case, Chromium)
  const browser = await chromium.launch();

  // Create a new context (a new browser tab)
  const context1 = await browser.newContext();

  // Create another context (another browser tab)
  const context2 = await browser.newContext();

  // Create pages in the respective contexts
  const page1 = await context1.newPage();
  const page2 = await context2.newPage();

  // Interact with pages separately
  await page1.goto('https://clickup.com/');
  await page2.goto('https://www.google.com');

  // Perform actions on page1
  await page1.fill('input[name="username"]', 'exampleuser');
  await page1.fill('input[name="password"]', 'secretpassword');
  await page1.click('button[type="submit"]');

  // Perform actions on page2
  await page2.fill('input[type="text"]', 'Playwright documentation');
  await page2.click('input[type="submit"]');

  // Wait for both pages to load
  await page1.waitForLoadState('networkidle');
  await page2.waitForLoadState('networkidle');

  // Capture screenshots of both pages
  await page1.screenshot({ path: 'example.png' });
  await page2.screenshot({ path: 'google.png' });

  // Close the contexts (tabs)
  await context1.close();
  await context2.close();

  // Close the browser
  await browser.close();
})();
