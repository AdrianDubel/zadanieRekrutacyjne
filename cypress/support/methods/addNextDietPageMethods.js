import { nextDietPage } from "../locators/addNextDietPage";
import { editDietPage } from "../locators/editDietPage";

Cypress.Commands.add("chooseProgram", () => {
  cy.get(nextDietPage.typeOfprograms)
    .find(nextDietPage.programBtn)
    .eq(1)
    .contains("Wybierz program")
    .click();
});

Cypress.Commands.add("chooseDiet", () => {
  cy.get(nextDietPage.dietsList)
    .find(nextDietPage.dietContainer)
    .eq(1)
    .contains("Wybierz")
    .click();
});

Cypress.Commands.add("chooseVariant", () => {
  cy.get(nextDietPage.variantsList)
    .last()
    .find(nextDietPage.variant)
    .first()
    .click();
});

Cypress.Commands.add("chooseCalories", () => {
  cy.get(nextDietPage.variantsList)
    .last()
    .find(nextDietPage.caloriesVarianList)
    .find(nextDietPage.caloriesVariant)
    .first()
    .click();
});

Cypress.Commands.add("clickNextStep", () => {
  cy.get(nextDietPage.nextStepBtn).click();
});

Cypress.Commands.add("clickGoAhed", () => {
  cy.get(editDietPage.goAheadBtn).click();
});

Cypress.Commands.add("clickAddToBasket", () => {
  cy.contains("Dodaj do koszyka").should("be.visible").click();
});
