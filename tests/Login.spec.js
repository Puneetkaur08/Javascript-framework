import { test, expect } from '@playwright/test';
import LoginPage from '../pages/Login';
import LoginData from '../data/LoginData.json' assert { type: 'json' };

test('Valid Login', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.navigate();
    await loginPage.login(LoginData.validUser.username, LoginData.validUser.password);
    await expect(page).toHaveURL(/inventory.html/);
});

test('Invalid Login', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.navigate();
    await loginPage.enterUsername(LoginData.invalidUser.username);
    await loginPage.enterPassword(LoginData.invalidUser.password);
    await loginPage.clickLogin();
    await expect(page.locator(loginPage.errorMsg)).toBeVisible();
    await expect(page).toHaveURL(/login.html/);
});


    