let i = describe

for (let i = 1; i <= 100; i++) {
    console.log(i)

describe('myBStationTestSuite', function() 
{
    it('testCase1-looping', function() {
        cy.visit("https://www.bilibili.tv/id/video/4787735360968192")

        cy.wait(5000); // Wait for 5 seconds

        cy.xpath("//span[@class='ip-quality-item--label'][normalize-space()='144P']").click({ force: true })

        cy.xpath("//li[normalize-space()='2.0X']").click({ force: true })

        cy.wait(30000); // Wait for 1 minute 10 seconds

        cy.reload()
        
    })
})}