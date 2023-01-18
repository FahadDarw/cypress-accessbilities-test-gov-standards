# Accessibility Testing with Axe Core and Cypress
Accessibility testing is an important part of ensuring that websites are usable by everyone, regardless of their ability. The WCAG 2.2 AA standard is the standard for ensuring that websites are accessible to those with disabilities and what it is required by gov.ac.uk

This guide outlines how to use Axe Core with Cypress to test websites for accessibility violations according to WCAG 2.2 AA. 

## Installation 
Install Cypress, the following command should be run in the terminal: 

``` npm install cypress ``` 

Then install the Axe Core can be installed with Cypress by using npm. Npm is a package manager for JavaScript, and it can be used to install and manage packages. To install Axe Core with Cypress, the following command should be run in the terminal: 

``` npm install cypress-axe ``` 

Once the package has been installed, it can be imported into a Cypress test file. To do this, the following command should be used: 

``` import 'cypress-axe' ``` 

## Testing 
Once Axe Core and Cypress have been installed, the next step is to run a test to check for accessibility violations. The following code example shows how to use Axe Core with Cypress to test for accessibility violations using the WCAG 2.2 AA standard. 

``` 
it('should be accessible', () => {
  cy.visit('http://example.com')
  cy.injectAxe()
  cy.checkA11y(null, {
    rules: {
      'region': { enabled: false }
    },
    runOnly: {
      type: 'tag',
      values: ['wcag2aa']
    }
  })
})
```

The `injectAxe` command is used to inject the Axe Core library into the website. Finally, the `checkA11y` command is used to check for accessibility violations according to the WCAG 2.2 AA standard. 

## Refactoring 
The refactored framework has been added a11y and wrapped within a Cypress command called cy.excuteAccessibilityTests(), which will make it easier to test multiple websites for accessibility violations. The command code created is shown below and explained further.

``` 
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
```

•	wcagStandards - Here you can define which standards you want to test against. For example the Web Content Accessibility Guidelines (WCAG) 2.2 Level AA Conformance or wcag2.2aa for short. A list of these can be found [here](https://dequeuniversity.com/wcag/wcag-2-2-list).

•	impactLevel - This defines the minimum level that will be reported on and can include
  o	minor
  o	moderate
  o	serious
  o	critical
  
•	continueOnFail - By default, a test will fail if something doesn't meet the minimum stand set. You might not want this in some case so the 'continueOnFail' option has been added. Currently it's set to false (Tests will fail if a violation is found).

This framework will work by adding the links you would like to test into the Jason file named as “accessibilitiesTestPages.json”. Then by running the following test “accessbilities-framework.ts” you should see a list of violation against WCAG 2.2 AA if any are found, otherwise it will return 0 violation found.

Below is the “accessibilitiesTestPages.json” file in this example we are passing "what-we-do/" & "/blog/a-day-in-the-life-fahad-darwish/" for Nimble Approach website, Therefore it is https://nimbleapproach.com/what-we-do/ and https://nimbleapproach.com/blog/a-day-in-the-life-fahad-darwish/ that would be tested for accessbilities violation according to WCAG 2.2 AA

``` 
[	
	
	"/what-we-do/",
	"/blog/a-day-in-the-life-fahad-darwish/"

	]

```
Then by running the following test “accessbilities-framework.ts”
``` 
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

```

## Conclusion
In conclusion, this guide has outlined the framework created using Axe Core and Cypress to test websites for accessibility violations according to the WCAG 2.2 AA standard. This framework allows developers to quickly and easily detect violations of the WCAG 2.2 AA standard. 

As shown in the screenshot below, the first link (https://nimbleapproach.com/what-we-do/) passed with zero violations, while the second link (https://nimbleapproach.com/blog/a-day-in-the-life-fahad-darwish/) revealed a violation. 

![image](https://user-images.githubusercontent.com/101198418/213082951-1c2ab042-1048-483f-b058-765a2839f44d.png)
 

## References
1. “Core-Axe (Node Package Manager)"
2. “Bradley Reaney & Richika Dogra", Nimble Approach
3. “Accessibility Testing with Cypress, Axe-Core and Pa11y”, SitePoint
4. “Using Axe-Core to Run Accessibility Tests in Cypress”, Josh Comeau
5. “Cypress with Axe-Core: Automating Accessibility Testing”, Danube
6. “Automating Accessibility Tests with Cypress and Axe-Core”, Sitecore
7. “Testing Web Accessibility with Cypress & Axe-Core”, Testing Services
8. “Accessibility Testing with Cypress & Axe-Core”, Deque
9. “WCAG 2.2 AA Compliance with Cypress & Axe-Core”, Deque
10. “How to Automate Accessibility Testing with Cypress & Axe-Core”, Testing Services
11. “Using Axe-Core to Test Accessibility in Cypress”, Sitecore
