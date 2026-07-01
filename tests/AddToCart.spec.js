import { test, expect } from '../fixtures';

test('Add Product To Cart', async ({ page, addToCart }) => {

    await addToCart.addBackpackToCart();

    await expect(page.locator('.shopping_cart_badge')).toHaveText('1');

    await addToCart.openCart();

    await expect(page).toHaveURL(/cart.html/);

});