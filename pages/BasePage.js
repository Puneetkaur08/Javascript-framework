//We are creating base page to help other page classes 
//Every other page class will extend this class.The click,fill will be wrapped in wait for till the state is visible for element to be attached to the frontend/DOM before it is actually clickable.
//Also we will define explicit wait here once so that no other page class or test class has to ever think about.
//This BasePage class centralizes all the browser actions so that they are implemented once and used everywhere.
//ithout base class you will write:
//await this.usernameInput.waitFor({state:'visible'})
//await this.usernameInput.fill('abc')
//with base class 
//The main reason the base page exist in the POM is it makes it reusable,maintainable,consistent and reduced test flakiness

class BasePage{
constructor(page){
    this.page=page;
}
async goto(path='/'){
 await this.page.goto(path);
}
async click(locator){
    await locator.waitFor({state:'visible'});
    await locator.click();
}
async fill(locator,text){
    await locator.waitFor({state:'visible'});
    await locator.fill(text);
}
async getText(locator){
    await locator.waitFor({state:'visible'});
    return(await locator.textContent())?.trim()??'';
}
async isVisible(locator,timeout=5000){
    try{
        await locator.waitFor({state:'visible',timeout});
        return true;
    }
    catch{
        return false;
    }
}
}
module.exports=BasePage;
