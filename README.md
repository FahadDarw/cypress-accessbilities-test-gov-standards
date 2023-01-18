# Accessibility Testing with Cypress & Axe Core

Accessibility testing is an important part of ensuring that websites are usable by everyone, regardless of their ability. The WCAG 2.2 AA standard is the standard for ensuring that websites are accessible to those with disabilities. In this guide, I will explain how to use Axe Core with Cypress to test websites for accessibility violations according to WCAG 2.2 AA. 

## Installation 
Axe Core can be installed with Cypress by using npm. Npm is a package manager for JavaScript, and it can be used to install and manage packages. To install Axe Core with Cypress, the following command should be run in the terminal: 

```
npm install cypress-axe
```

Once the package has been installed, it can be imported into a Cypress test file. To do this, the following command should be used: 

```
import 'cypress-axe'
```

## Testing 
Once Axe Core and Cypress have been installed, a test can be run to check for accessibility violations. The following code example shows how to use Axe Core with Cypress to test for accessibility violations using the WCAG 2.2 AA standard. 

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

The `injectAxe` command is used to inject the Axe Core library into the website. The `checkA11y` command is then used to check for accessibility violations according to the WCAG 2.2 AA standard. 

To make the process easier, this framework can be wrapped within a Cypress command called cy.excuteAccessibilityTests(). The command is shown below and explained further: 

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

•	wcagStandards - Here you can define which standards you want to test against. For example the Web Content Accessibility Guidelines (WCAG) 2.2 Level AA Conformance or wcag2.2aa for short. 
•	impactLevel - This defines the minimum level that will be reported on and can include minor, moderate, serious, or critical. 
•	continueOnFail - By default, a test will fail if something doesn't meet the minimum stand set. You might not want this in some case so the 'continueOnFail' option has been added. Currently it's set to false (Tests will fail if a violation is found). 

This framework will work by adding the links you would like to test into the Jason file named as “accessibilitiesTestPages.json” in our example. Then by running the following test “accessbilities-framework.ts”. Once its run then you should see a list of violation against WCAG 2.2 AA if any are found, otherwise it will return 0 violation found.

## References
1. Core-Axe (Node Package Manager) 
2. Bradley Reaney, "Nimble Approach" 
3. “Accessibility Testing with Cypress, Axe-Core and Pa11y”, SitePoint 
4. “Using Axe-Core to Run Accessibility Tests in Cypress”, Josh Comeau 
5. “Cypress with Axe-Core: Automating Accessibility Testing”, Danube 
6. “Automating Accessibility Tests with Cypress and Axe-Core”, Sitecore
7. “Testing Web Accessibility with Cypress & Axe-Core”, Testing Services 
8. “Accessibility Testing with Cypress & Axe-Core”, Deque 
9. “WCAG 2.2 AA Compliance with Cypress & Axe-Core”, Deque 
10. “How to Automate Accessibility Testing with Cypress & Axe-Core”, Testing Services 
11. “Using Axe-Core to Test Accessibility in Cypress”, Sitecore
