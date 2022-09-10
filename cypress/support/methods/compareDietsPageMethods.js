import { compareDiets } from '../locators/compareDietsPage'


Cypress.Commands.add("choiceDays", () =>{
    cy.get(compareDiets.selectDays).click().then(() =>{
        cy.get(compareDiets.daysDropdown).contains('1 dzień').click()
      })
})

Cypress.Commands.add("clickOrderDiet", () => {
    cy.get(compareDiets.orderDiet).contains('Zamów dietę').click()
})