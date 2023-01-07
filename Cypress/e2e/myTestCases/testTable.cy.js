describe('My Test Suite', () => {
    it('Testing table rows and columns: ', () => {
        // Visit the link / webpage from the given link
        cy.visit('https://testautomationpractice.blogspot.com/');

        // Check value present in the table from anywhere
        cy.get('table[name=BookTable]').contains('td', 'Amit').should('be.visible');

        // Checking specific table row and column
        cy.get('table[name=BookTable] > tbody > tr:nth-child(2) > td:nth-child(3)')
            .contains('Selenium').should('be.visible');

        // Check value presence based on conditional statements
        cy.get('table[name=BookTable] > tbody > tr td:nth-child(2)').each(($e, index, $list) => {
            // $e stores text of value
            // index stores the index
            // $list stores all the values of the table column
            const text = $e.text();
            if (text.includes("Amod")) {
                cy.get('table[name=BookTable] > tbody > tr td:nth-child(1)').eq(index)
                    .then((bname) => {
                        const bookName = bname.text();
                        expect(bookName).to.equal('Master In Java');
                    })
            }
        })
    });
})