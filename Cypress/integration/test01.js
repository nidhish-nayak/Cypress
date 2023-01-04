describe('My First Test', () => {
    it('verify title-positive', () => {
        cy.visit('https://demo.nopcommerce.com/');
        cy.title().should('eq', 'nopCommerce demo store');
        cy.get('.ico-login').click();
        cy.go('back');
    });
})