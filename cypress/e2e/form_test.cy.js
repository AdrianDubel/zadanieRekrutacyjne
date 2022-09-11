/// <reference types="cypress" />

import { configuratorPage } from "../support/locators/configuratorPage";

describe("Sprawdz czy strony formularza są wyświetlane poprawnie", () => {

  it("Gdy użytkownik wraca do poprzedniej strony klikając przycisk 'wstecz' ", () => {
    cy.visit("/")
      .clickChooseDiet()
      .chooseSex()
      .clickBackBtn()
      // check if chosen card is active when go back
      .getMaleCard()
      .should("have.class", "suggestion__card-sex--active")
      .clickNext()
      .enterParameters(35, 76, 188)
      .clickNextParameters()
      .clickBackBtn();
    // check if entered values are in inputs when go back
    cy.get(configuratorPage.ageInput)
      .last()
      .should("have.value", "35");
    cy.get(configuratorPage.weightInput)
      .last()
      .should("have.value", "76 ");
    cy.get(configuratorPage.heightInput)
      .last()
      .should("have.value", "188")
      .clickNextParameters()
      .chooseActivity("big")
      .clickBackBtn()
      // check if chosen activity card is active when go back
      .getActivityCard()
      .should("have.class", "calculator-modal__card-checkbox--active")
      .clickNextPhysicalActivity()
      .chooseGoal("Lose weight")
      .clickBackBtn()
      // check if chosen goal card is active when go back
      .getGoalCards()
      .should("have.class", "calculator-modal__card-checkbox--active")
      .clickNextGoal()
      .HowDoYouWantToEat("Eat all")
      .clickBackBtn()
      .clickNextGoal()
      // check if chosen 'how to eat' card is active when go back
      .howToEatCard()
      .should("have.class", "calculator-modal__card-checkbox--active");
  });
});
