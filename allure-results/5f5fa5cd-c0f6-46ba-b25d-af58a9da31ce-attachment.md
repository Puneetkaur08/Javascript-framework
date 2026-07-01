# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Login.spec.js >> Invalid Login
- Location: tests\Login.spec.js:12:1

# Error details

```
Error: expect(page).toHaveURL(expected) failed

Expected pattern: /login.html/
Received string:  "https://www.saucedemo.com/"
Timeout: 5000ms

Call log:
  - Expect "toHaveURL" with timeout 5000ms
    14 × unexpected value "https://www.saucedemo.com/"

```

```yaml
- text: Swag Labs
- textbox "Username": shaan
- textbox "Password": secret_sauce
- 'heading "Epic sadface: Username and password do not match any user in this service" [level=3]':
  - button
  - text: "Epic sadface: Username and password do not match any user in this service"
- button "Login"
- heading "Accepted usernames are:" [level=4]
- text: standard_user locked_out_user problem_user performance_glitch_user error_user visual_user
- heading "Password for all users:" [level=4]
- text: secret_sauce
```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test';
  2  | import LoginPage from '../pages/Login';
  3  | import LoginData from '../data/LoginData.json' assert { type: 'json' };
  4  | 
  5  | test('Valid Login', async ({ page }) => {
  6  |     const loginPage = new LoginPage(page);
  7  |     await loginPage.navigate();
  8  |     await loginPage.login(LoginData.validUser.username, LoginData.validUser.password);
  9  |     await expect(page).toHaveURL(/inventory.html/);
  10 | });
  11 | 
  12 | test('Invalid Login', async ({ page }) => {
  13 |     const loginPage = new LoginPage(page);
  14 |     await loginPage.navigate();
  15 |     await loginPage.enterUsername(LoginData.invalidUser.username);
  16 |     await loginPage.enterPassword(LoginData.invalidUser.password);
  17 |     await loginPage.clickLogin();
  18 |     await expect(page.locator(loginPage.errorMsg)).toBeVisible();
> 19 |     await expect(page).toHaveURL(/login.html/);
     |                        ^ Error: expect(page).toHaveURL(expected) failed
  20 | });
  21 | 
  22 | 
  23 |     
```