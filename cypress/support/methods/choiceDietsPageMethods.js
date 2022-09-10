import { choiceDiets } from "../locators/choiceDietsPage";

Cypress.Commands.add("chooseDietProposal", () => {
    cy.get(choiceDiets.dietProposal).first().click({force:true})
})


Cypress.Commands.add("saveDietName", () => {
    cy.get(choiceDiets.dietName).first().then(($dietNameText) =>{
        const dietNameText = $dietNameText.text()
        cy.log(dietNameText)
        cy.writeFile('cypress/fixtures/dietName.json', {dietname: dietNameText})
    })
})



Cypress.Commands.add("clickCompareDiets", () => {
    cy.get(choiceDiets.compareBtn).click({force:true})
})