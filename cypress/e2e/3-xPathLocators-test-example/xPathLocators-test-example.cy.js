const cypress = require("cypress")
const { it, describe } = require("mocha")


describe('XPathLocators', () =>{

    it('find no products', () =>{

        cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/")
        cy.get("//div[@class='products']/div").should('have.lenght', 30)

    })

})