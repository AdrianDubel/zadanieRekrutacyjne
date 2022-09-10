import { homePage } from "../locators/homePage"

Cypress.Commands.add('clickChooseDiet', () => {
    cy.get(homePage.chooseDietBtn)
    .should('be.visible')
    .click()
})