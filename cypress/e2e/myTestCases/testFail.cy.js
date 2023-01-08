describe('Testing fixtures using Custom commands', () => {

    it('This test must fail and screenshot needs to be captured ', () => {
        cy.login('admin@yourstore.com', 'adminfail');
        cy.title().should('eq', 'Dashboard / nopCommerce administration')
    });

})