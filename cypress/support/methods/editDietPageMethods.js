import {editDietPage} from '../locators/editDietPage'

Cypress.Commands.add("changeCalories", () => {
    cy.get(editDietPage.caloriesList)
      .find(editDietPage.ChoiceCaloriesBtn)
      .first()
      .click()
})

Cypress.Commands.add("clickNextStep", () => {
    cy.get(editDietPage.nextStepBtn).click()
})

Cypress.Commands.add("clickGoAhead", () => {
    cy.get(editDietPage.goAheadBtn).click()
})

Cypress.Commands.add("clickSaveChanges", () => {
    cy.contains('Zapisz zmiany').should('be.visible').click()
})