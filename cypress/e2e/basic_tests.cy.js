/// <reference types="cypress" />

import { basketPage } from "../support/locators/basketPage";

describe("Sprawdz czy użytkownik może wykonać podstawowe funkcje koszyka", () => {
  beforeEach(() => {
    cy.clearItems();
    cy.visit("/");
  });

  it("Dodanie diety do koszyka", () => {
    cy.addDietToBasket()
      // check if diet is properly added to the basket
      .get(basketPage.basketLabel)
      .should("exist")
      .and("be.visible")
      .get(basketPage.shoppingCart)
      .should("exist")
      .and("be.visible")
      .get(basketPage.dietName)
      .should("exist")
      .and("be.visible");
  });

  it("Usunięcie diety z koszyka", () => {

    const emptyBasketText = "Wygląda na to, że nie masz żadnej diety w koszyku"

    cy.addDietToBasket()
      .clickDeleteDiet()
      .clickConfirmDeleteDiet();
    // check if the diet has been correctly removed from the basket
    cy.get(basketPage.emptyBasketFrame).should("exist").and("be.visible");
    cy.get(basketPage.emptyBasketText)
      .should("exist")
      .and("be.visible")
      .and("contain.text", emptyBasketText);
  });

  it("Edycja diety z koszyka", () => {
    cy.addDietToBasket();
    cy.get(basketPage.caloriesAmount).then(($calories) => {
      const caloriesText = $calories.text();

      cy.clickEditDiet()
        .changeCalories()
        .clickNextStep()
        .clickGoAhead()
        .clickSaveChanges()

        // check if the diet has been edited correctly
        .get(basketPage.basketLabel)
        .should("exist")
        .and("be.visible")
        .get(basketPage.shoppingCart)
        .should("exist")
        .and("be.visible")
        .get(basketPage.dietName)
        .should("exist")
        .and("be.visible");
      cy.get(basketPage.caloriesAmount).then(($caloriesAfter) => {
        const caloriesAfterText = $caloriesAfter.text();

        expect(caloriesAfterText).be.not.eq(caloriesText);
      });
    });
  });

  it("Dodanie kilku diet do koszyka", () => {
    cy.addDietToBasket()
      .clickAddNextDietBtn()
      .chooseProgram()
      .chooseDiet()
      .chooseVariant()
      .chooseCalories()
      .clickNextStep()
      .pickupDietDays()
      .clickGoAhed()
      .clickAddToBasket()

      //check if two diets are added in the basket
      .get(basketPage.shoppingCart)
      .should("have.length", "2");
  });
});
