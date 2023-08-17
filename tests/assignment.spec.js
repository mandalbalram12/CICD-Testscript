import { test, expect } from '@playwright/test';

test.only('Logout User', async({ page }) => {

        // 1. Launch browser
        // 2. Navigate to url 'http://automationexercise.com'
        await page.goto('http://automationexercise.com');
        await page.pause();

        // 3. Verify that home page is visible successfully
        const homepage = await page.getByRole('link', { name: ' Home' });
        await expect(homepage).toBeVisible();

        // 4. Click on 'Signup / Login' button
        await page.getByRole('link',{name:' Signup / Login'}).screenshot({path:'screenshot_element.png'});
        await page.getByRole('link',{name:' Signup / Login'}).click();

        // 5. Verify 'Login to your account' is visible
        const login = await page.getByRole('heading',{name:'Login to your account'});
        await expect(login).toBeVisible();

        // 6. Enter correct email address and password
        await page.locator('[data-qa="login-email"]').fill('pokemon100@yopmail.com');
        await page.screenshot({path:'screenshot_login_email.png'});
        await page.getByPlaceholder('Password').fill('IamTester1710');

        // 7. Click 'login' button
        await page.getByRole('button',{name:'Login'}).click();


        // 8. Verify that 'Logged in as username' is visible
        const user= await page.getByText('Logged in as Mr Tester');
        await expect(user).toBeVisible();

        // 9. Click 'Logout' button
        await page.getByRole('link',{name:'Logout'}).click();

        // 10. Verify that user is navigated to login page
        const logout= await page.getByRole('link',{name:'Signup / Login'});
        await expect(logout).toBeVisible();
    
    });

    test('Test Case 5: Register User with existing email', async({ page }) => {

        // 1. Launch browser
        // 2. Navigate to url 'http://automationexercise.com'
        await page.goto('http://automationexercise.com');

        // 3. Verify that home page is visible successfully
        const homepage = await page.getByRole('link', { name: ' Home' });
        await expect(homepage).toBeVisible();

        // 4. Click on 'Signup / Login' button
        await page.getByRole('link',{name:' Signup / Login'}).click();

        // 5. Verify 'New User Signup!' is visible
        const New_User = await page.getByRole('heading',{name:'New User Signup!'});
        await expect(New_User).toBeVisible();

        // 6. Enter name and already registered email address
        await page.locator('[data-qa="signup-name"]').fill('Mr Tester');
        await page.locator('[data-qa="signup-email"]').fill('pokemon100@yopmail.com');

        // 7. Click 'Signup' button
        await page.getByRole('button',{name:'Signup'}).click();

        // 8. Verify error 'Email Address already exist!' is visible
        const already_exist= await page.getByText('Email Address already exist!');
        await expect(already_exist).toBeVisible();

});

test.describe(() => {
    // All tests in this describe group will get 2 retry attempts.
    test.describe.configure({ retries: 2 });
  
    test('Retries this test script two times', async ({ page }) => {
              // 1. Launch browser
        // 2. Navigate to url 'http://automationexercise.com'
        await page.goto('http://automationexercise.com');

        // 3. Verify that home page is visible successfully
        const homepage = await page.getByRole('link', { name: ' Home' });
        await expect(homepage).toBeVisible();
        await page.pause();

        // 4. Click on 'Signup / Login' button
        await page.getByRole('link',{name:' Signup / Login'}).click();

        // 5. Verify 'New User Signup!' is visible
        const New_User = await page.getByRole('heading',{name:'New User Signup!'});
        await expect(New_User).toBeVisible();

        // 6. Enter name and already registered email address
        await page.locator('[data-qa="signup-name"]').fill('Mr Tester');
        await page.locator('[data-qa="signup-email"]').fill('pokemon100@yopmail.com');

        // 7. Click 'Signup' button
        await page.getByRole('button',{name:'Signup'}).click();

        // 8. Verify error 'Email Address already exist!' is visible
        const already_exist= await page.getByText('Email Address already exit!');
        await expect(already_exist).toBeVisible();
    });
});