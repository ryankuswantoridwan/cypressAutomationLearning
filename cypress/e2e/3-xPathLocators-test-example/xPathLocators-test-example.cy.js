// const cypress = require("cypress")
// const { it, describe } = require("mocha")


describe('XPathLocators', () =>{

    it('find no products', () =>{

        cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/")
        cy.xpath("//body/div[@id='root']/div[@class='container']//img").should('jave.lenght', 7)
        // cy.
    })

})