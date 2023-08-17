const { expect } = require('@playwright/test');
exports.cartPage= class cartPage{
    constructor(page){
        this.page= page;
        this.homebtn2 = page.getByRole('link',{name:'Home'}).last();
        this.shoppingCart = page.getByText('Shopping Cart');
        this.checkoutBtn = page.locator('.btn btn-default.check_out');
        this.cartInfo = page.locator('#cart_info');
        this.productInfo = page.getByRole('link',{name:'Green Side Placket Detail T-Shirt'});
        this.productremove = page.locator('.cart_delete');
        this.emptyCart = page.getByText('Cart is empty!');
    }

    async verifycartelements(){
        await expect(this.homebtn2).toBeVisible();
        await expect(this.shoppingCart).toBeVisible();
        console.log("Verified the Elements in Cart Page");

    }

    async verifyaddedProduct(){
        await expect(this.productInfo).toBeVisible();
        console.log('Verified the Added product in Cart Page');
    }

    async removeProduct(){
        await this.productremove.click();
    }
    
    async verifyemptyCart(){
        await expect(this.emptyCart).toBeVisible();
        console.log('Verified the Cart is EMpty after Removing an item');
    }

}