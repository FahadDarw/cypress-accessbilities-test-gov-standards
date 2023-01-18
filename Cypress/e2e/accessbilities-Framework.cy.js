/// <reference types ='Cypress'/>
import accessibilitiesTestPages from '../integration/Accessbilities Tests/accessibilitiesTestPages.json'
const wcagStandards = [ "wcag22aa"];
const impactLevel = ["critical", "minor", "moderate", "serious"];
const continueOnFail = false;

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
