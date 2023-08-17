const { expect } = require('@playwright/test');
exports.homePage= class homePage{
    constructor(page){
        this.page = page;
        this.homebtn = page.getByRole('link',{name:' Home'});
        this.productbtn = page.getByRole('link',{name:' Products'});
        this.cartbtn = page.getByRole('link',{name:' Cart'});
        this.signUpbtn = page.getByRole('link',{name:' Signup / Login'});
        this.testcasebtn = page.getByRole('link',{name:' Test Cases'}).first();
        this.contactUsbtn = page.getByRole('link',{name:' Contact us'});
    
        
    }

    async visitPage(){
        await this.page.goto('https://automationexercise.com/');
    }

    async verifyPage(){
        await this.page.expect(this.homebtn).toBeVisible();
        console.log("The title of Page:", await this.page.Title());
    }
    async clickCart(){
        await this.cartbtn.click();

    }
    
    async clickLoginSignupbtn(){
        await this.page.signUpbtn.click();
    }

    async clickContactus(){
        await this.page.contactUsbtn.click();
    }
}