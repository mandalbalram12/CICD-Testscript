const { expect } = require('@playwright/test');

exports.pageClass = class pageClass {

  constructor(page) {
    this.page = page;
    this.homepage = page.getByRole('link', { name: ' Home' });
    this.signupBtn = page.getByRole('link',{name:' Signup / Login'});
    this.loginHeading = page.getByRole('heading',{name:'Login to your account'});
    this.username = page.locator('[data-qa="login-email"]');
    this.password = page.getByPlaceholder('Password');
    this.loginBtn = page.getByRole('button',{name:'Login'});
    this.user = page.getByText('Logged in as Mr Tester');
    this.logout = page.getByRole('link',{name:'Logout'});


  }

  async visit() {
    await this.page.goto('http://automationexercise.com');
  }

  async verifyhomepage() {
    await this.homepage;
    await expect(this.homepage).toBeVisible();
  }

  async clickSignup() {
    await this.signupBtn.click();
  }
  async verifyloginBtn(){
    await this.loginHeading;
    await expect(this.loginHeading).toBeVisible();
  }
  async credentials() {
    await this.username.fill('pokemon100@yopmail.com');
    await this.password.fill('IamTester1710');
  }
  async clickLoginBtn(){
    await this.loginBtn.click();
  }
  async verifylogged(){
    await this.user;
    await expect(this.user).toBeVisible();
  }
  async clickLogout(){
    await this.logout.click();
  }
  async verifylogout(){
    await this.signupBtn;
    await expect(this.signupBtn).toBeVisible();
  }
};