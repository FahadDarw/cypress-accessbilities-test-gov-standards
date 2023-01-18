/// <reference types ='Cypress'/>
import accessibilitiesTestPages from '../integration/Accessbilities Tests/accessibilitiesTestPages.json'


	describe('Check accessibility of the different pages', function () {
		
        accessibilitiesTestPages.forEach((link) => {
         it('Validate accessibility on different pages', function () {
            let url = Cypress.env('url')
            cy.visit('https://nimbleapproach.com')
            cy.visit('https://nimbleapproach.com'+link)
            cy.excuteAccessibilityTests()
            })
        })
    })
