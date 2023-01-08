
describe('Testing fixtures', () => {
    let data;
    beforeEach(() => {
        cy.fixture('example').then((myData) => {
            // Store data from exmaple.js fixture to the test suite
            data = myData;
        })
    })

    it('Verifies the data fetching using fixtures', () => {
        cy.visit('https://admin-demo.nopcommerce.com/login');
        cy.get('#Email').clear().type(data.email) // email
        cy.get('#Password').clear().type(data.password) // password
        cy.get('button[type=submit]').click() // signIn
    });
})