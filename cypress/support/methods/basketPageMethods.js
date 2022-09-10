import {basketPage} from '../locators/basketPage'

Cypress.Commands.add("goToBasket", () => {
    cy.get(basketPage.basketBtn).click()
})