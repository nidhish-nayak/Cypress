describe('Testing fixtures using Custom commands', () => {

    it('Verifies Login using Custom Commands', () => {
        cy.login('admin@yourstore.com', 'admin');
        cy.title().should('eq', 'Dashboard / nopCommerce administration')
    });

})