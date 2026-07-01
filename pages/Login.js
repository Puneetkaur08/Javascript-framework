export default class LoginPage {
    constructor(page) {
        this.page = page;

        this.username = '#user-name';
        this.password = '#password';
        this.loginBtn = '#login-button';
        this.errorMsg = '[data-test="error"]';
    
    }

  async navigate() {
    // console.log("Navigating...");
    await this.page.goto('https://www.saucedemo.com/');
}
    async enterUsername(username) {
        await this.page.fill(this.username, username);
    }

    async enterPassword(password) {
        await this.page.fill(this.password, password);
    }

    async clickLogin() {
        await this.page.click(this.loginBtn);
    }

    async login(username, password) {
        await this.enterUsername(username);
        await this.enterPassword(password);
        await this.clickLogin();
    }
}