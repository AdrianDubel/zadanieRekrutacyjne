import { choiceDiets } from "../locators/choiceDietsPage";

Cypress.Commands.add("chooseDietProposal", () => {
    cy.get(choiceDiets.dietProposal).first().click({force:true})
})

Cypress.Commands.add("clickCompareDiets", () => {
    cy.get(choiceDiets.compareBtn).click({force:true})
})