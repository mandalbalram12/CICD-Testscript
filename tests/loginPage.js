const { expect } = require('@playwright/test');
exports.loginPage= class loginPage{

    constructor(page){
        this.LoginHeading = page.getByRole('heading',{name:'Login to your account'});
        this.inputusername = page.locator('[data-qa="login-email"]');
        this.inputpassowrd = page.locator('[data-qa="login-password"]');
        this.loginBtn = page.locator('[data-qa="login-button"]');
        this.loggedasUser = page.getByText('Logged in as Mr Tester');
        this.logOutUser = page.getByRole('link',{name:' Logout'});

    }

    async verifyheading(){
        await expect(this.LoginHeading).toBeVisible();
        console.log('Verified the LoginPage')
    }
    async valueusername(){
        await this.inputusername.fill('pokemon100@yopmail.com');
    }
    async valuepassword(){
        await this.inputpassowrd.fill('IamTester1710');
    }

    async clickloginBtn(){
        await this.loginBtn.click();
    }
    
    async verifyLoggedIn(){
        await expect(this.loggedasUser).toBeVisible();
        console.log('Verified Logged in as User')
    }

    async userLogout(){
        await this.logOutUser.click();
        console.log('User Logged Out');
    }
}