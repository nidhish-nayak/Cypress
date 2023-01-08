import LoginPage from "../pageObjects/loginPage";

describe('Testing POM for cypress', () => {

    it('Verifies Login Page using POM', () => {
        const obj = new LoginPage();
        obj.visit('https://admin-demo.nopcommerce.com/login');
        obj.fillMail('admin@yourstore.com');
        obj.fillPassword('admin');
        obj.submit();
    });

})