// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

//This line to excute accessibility, please make sure to add the link for the page you would like to test on accessibilitiesTestPages.json file.
Cypress.Commands.add("excuteAccessibilityTests", () => {
	const wcagStandards = ["wcag22aa"];
	const impactLevel = ["critical", "minor", "moderate", "serious"];
	const continueOnFail = false;
	cy.injectAxe();
	cy.checkA11y(
		null,
		{
			runOnly: {
				type: "tag",
				values: wcagStandards,
			},
			includedImpacts: impactLevel,
		},
		null,
		continueOnFail
	);
});
