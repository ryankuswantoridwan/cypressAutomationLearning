describe('mySecondTestSuite', function() 
{
    it('testCase1-verifyTitlePositive', function() {
        cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/")
        cy.get("input[placeholder='Search for Vegetables and Fruits']").type("MAMAKLO") //cssLocators using tag input
        cy.get("[type='submit']").click
        cy.get("div[class='no-results'] h2").contains("Sorry, no products matched your search!")
    })
})