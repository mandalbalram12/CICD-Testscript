const { expect } = require('@playwright/test');
exports.productPage= class productPage{
    constructor(page){
        this.page= page;
        this.searchbox= page.getByRole('textbox',{name:'Search Product'});
        this.searchclick= page.locator('#submit_search');
        this.product= page.getByText('Green Side Placket Detail T-Shirt').nth(1);
        this.productimage = page.getByAltText('ecommerce website products');
        this.addtocart= page.getByText('Add to cart').first();
        this.modal1= page.getByText('Your product has been added to cart.');
        this.continueShopping = page.getByRole('button',{name:'Continue Shopping'});
        this.viewCart= page.getByText('View Cart');

    }

    async searchProduct(){
        await this.searchbox.fill('Green Side Placket Detail T-Shirt');
        await this.searchclick.click();
        await this.page.waitForLoadState('networkidle');
    }
    
    async verifyProduct(){
        await expect(this.product).toBeVisible();
        console.log('Verified the Search Product')
    }

    async chooseProduct(){
        await this.productimage.hover({TimeRanges:20000});
        // await this.page.pause();
        await this.addtocart.click();
    }
    async verifyConfirmationModal(){
        await expect(this.modal1).toBeVisible();
        console.log('Verified the Confirmation Modal after adding to Cart')
    }

    async clickContinueShopping(){
        await this.continueShopping.click();
    }


}