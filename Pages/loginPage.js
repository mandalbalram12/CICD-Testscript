const { expect } = require('@playwright/test');
exports.loginPage= class loginPage{

    constructor(page){
        this.LoginHeading = page.getByRole('heading',{name:'Login to your account'});
        this.inputusername = page.locator('[data-qa="login-email"]');
        this.inputpassowrd = page.locator('[data-qa="login-password"]');
        this.loginBtn = page.locator('[data-qa="login-button"]');
        this.loggedasUser = page.getByText('Logged in as Mr Tester');

    }

    async verifyheading(){
        await page.expect(this.LoginHeading).toBeVisible();
    }
    async valueusername(){
        await page.inputusername.fill('pokemon100@yopmail.com');
    }
    async valuepassword(){
        await page.inputpassowrd.fill('IamTester1710');
    }

    async clickloginBtn(){
        await page.loginBtn.click();
    }
    
    async verifyLoggedIn(){
        await page.expect(this.loggedasUser).toBeVisible();
    }
}