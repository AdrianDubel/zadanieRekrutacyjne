import {basketPage} from '../locators/basketPage'

Cypress.Commands.add("goToBasket", () => {
    cy.get(basketPage.basketBtn).click()
})

Cypress.Commands.add("clickDeleteDiet", () => {
    cy.get(basketPage.deleteDietBtn).click()
})

Cypress.Commands.add("clickConfirmDeleteDiet", () => {
    cy.get(basketPage.confirmDeleteDiet).contains('Usuń dietę').click()
})

Cypress.Commands.add("clickEditDiet", () => {
    cy.get(basketPage.editDietBtn).contains('Zmień dietę').click()
})

Cypress.Commands.add("clickAddNextDietBtn", () => {
    cy.get(basketPage.addNextDietBtn).click()
})