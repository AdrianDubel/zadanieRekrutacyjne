/// <reference types="cypress" />

import { basketPage } from '../support/locators/basketPage'


describe('Sprawdz czy użytkownik może wykonać podstawowe funkcje koszyka', () => {

  beforeEach(() =>{
    cy.clearItems()
    cy.visit('/')
  })

  it('Dodanie diety do koszyka', () => {
    
      cy.addDietToBasket()
      // check if diet is properly added to the basket
      .get(basketPage.basketLabel).should('exist').and('be.visible')
      .get(basketPage.shoppingCart).should('exist').and('be.visible')
      .get(basketPage.dietName).should('exist').and('be.visible')
  });

  it('Usunięcie diety z koszyka', () => {
      cy.addDietToBasket()
  });

  it('Edycja diety z koszyka', () => {
    cy.addDietToBasket()
});

  it('Dodanie kilku diet do koszyka', () => {
  cy.addDietToBasket()
});
})