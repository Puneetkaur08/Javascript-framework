export default class AddToCart {

    constructor(page) {

        this.page = page;

        this.backpack = '#add-to-cart-sauce-labs-backpack';
        this.cartIcon = '.shopping_cart_link';
        this.cartBadge = '.shopping_cart_badge';
    }

    async addBackpackToCart() {
        await this.page.locator(this.backpack).click();
    }

    async openCart() {
        await this.page.locator(this.cartIcon).click();
    }
}