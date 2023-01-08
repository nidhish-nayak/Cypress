describe('Testing fixtures using Custom commands', () => {

    it('Passing this test post checking for screenshot with correct values', () => {
        cy.login('admin@yourstore.com', 'admin');
        cy.title().should('eq', 'Dashboard / nopCommerce administration')
    });

})