/// <reference types="cypress" />

describe('Testy wizualnej regresji', () => {

    it('Test całej strony', () => {
        cy.visit('/').then(() => {
            cy.document()
              .toMatchImageSnapshot();
          });
    });

    it('Test nawigacji', () => {
        cy.visit('/').then(() => {
            cy.get('nav')
              .toMatchImageSnapshot();
          });
    });
    
});