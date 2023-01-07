describe('Testing fixtures', () => {

    before(() => {
        cy.fixture('example').then((data) => {
            // Store data from exmaple.js fixture to the test suite
            this.data = data;
        })
    })

    it('Verifies the data fetching using fixtures', () => {
        cy.visit('https://admin-demo.nopcommerce.com/login');
        cy.get('#Email').clear().type(this.data.email) // email
        cy.get('#Password').clear().type(this.data.password) // password
        cy.get('button[type=submit]').click() // signIn
    });
})