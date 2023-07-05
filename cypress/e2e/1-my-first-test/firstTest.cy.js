describe('myFirstTestSuite', () => 
{
    it('testCase1-verifyTitlePositive', () => {
        cy.visit("https://opensource-demo.orangehrmlive.com")
        cy.title().should('eq', 'OrangeHRM')  
    })

    it('testCase2-simpleLoginFlow', () => {
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        cy.get("input[placeholder='Username']").type("Admin")
        cy.get("input[placeholder='Password']").type("admin123")
        cy.get("button[type='submit']").click()
        cy.get(".oxd-text.oxd-text--h6.oxd-topbar-header-breadcrumb-module").contains("Dashboard")
    })

    // it('testCase3-verifyTitleNegative', () => {
    //     cy.visit("https://opensource-demo.orangehrmlive.com")
    //     cy.title().should('eq', 'OrangeHRM123')  
    // })
})