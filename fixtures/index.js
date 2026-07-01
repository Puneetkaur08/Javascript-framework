import { test as base, expect } from '@playwright/test';
import LoginPage from '../pages/Login';
import AddToCart from '../pages/AddToCart';
import LoginData from '../data/LoginData.json' assert { type: 'json' };

export const test = base.extend({
    loginPage: async ({ page }, use) => {

        const loginPage = new LoginPage(page);

        await use(loginPage);
    },

    addToCart: async ({ page }, use) => {

        const loginPage = new LoginPage(page);

        await loginPage.navigate();
        await loginPage.login(
            LoginData.validUser.username,
            LoginData.validUser.password
        );

        const addToCart = new AddToCart(page);

        await use(addToCart);
    }

});

export { expect };





// import { test as base, expect } from '@playwright/test';
// import LoginPage from '../pages/Login';

// export const test = base.extend({

//   loginPage: async ({ page }, use) => {

//     const loginPage = new LoginPage(page);

//     await use(async (user) => {

//       await loginPage.navigate();
//       await loginPage.enterUsername(user.username);
//       await loginPage.enterPassword(user.password);
//       await loginPage.clickLogin();

//     });

//   }

// });

// export { expect };

