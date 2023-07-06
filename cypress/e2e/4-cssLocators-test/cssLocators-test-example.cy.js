
describe('cssLocators', () =>{

    it('cssLocators', () =>{

        cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/")

        cy.get("[placeholder='Search for Vegetables and Fruits']").type("MAMAKLO")  //attribute, tag 'input' is optional
        cy.get("[type='search']").type("MAMAKLO")                                   //attribute, tag 'input' is optional
        cy.get(".search-keyword").type("MAMAKLO")                                   //class, tag 'input' is optional
                                                                                    //id diawali dengan '#', tag us also optional
        // cy.get()
        // cy.get()
        // cy.get()
    })
})