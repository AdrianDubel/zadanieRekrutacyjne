import { configuratorPage } from "../locators/configuratorPage";

Cypress.Commands.add("chooseSex", () => {
  cy.get(configuratorPage.maleBtn).click({ force: true });
});

Cypress.Commands.add("enterParameters", (age, weight, height) => {
  cy.get(configuratorPage.ageInput).last().type(age);
  cy.get(configuratorPage.weightInput).last().type(weight);
  cy.get(configuratorPage.heightInput).last().type(height);
});

Cypress.Commands.add("clickNextParameters", () => {
  cy.get(configuratorPage.nextBtnParameters).click({ force: true });
});

Cypress.Commands.add("chooseActivity", (activty) => {
    if (activty == 'lack') {
        cy.contains(configuratorPage.ActivityBtns.lackOfActivity)
          .click({force: true});
    }

    else if (activty == 'low') {
    cy.contains(configuratorPage.ActivityBtns.lowActivity)
      .click({force: true});
  }
    else if(activty == 'medium') {
    cy.contains(configuratorPage.ActivityBtns.mediumActivity)
      .click({force: true});
  }
    else if(activty == 'big') {
    cy.contains(configuratorPage.ActivityBtns.bigActivity)
      .click({force: true});
  }
});

Cypress.Commands.add("chooseGoal", (goal) => {
  
    if(goal == 'Lose weight'){
        cy.contains(configuratorPage.goalBtns.loseWeight)
          .click({force:true})
    }
    else if(goal == 'Keep weight'){
        cy.contains(configuratorPage.goalBtns.keepWeight)
          .click({force:true})
    }
    else if(goal == 'Gain weight'){
        cy.contains(configuratorPage.goalBtns.gainWeight)
          .click({force:true})
    }
});

Cypress.Commands.add("HowDoYouWantToEat", (value) => {
//   
    if(value == 'Eat all'){
        cy.contains(configuratorPage.mealsBtns.eatAll).click({ force: true });
    }
    else if(value == 'No fish'){
        cy.contains(configuratorPage.mealsBtns.noFish).click({ force: true });
    }
    else if(value == 'No meat only fish'){
        cy.contains(configuratorPage.mealsBtns.noMeatOnlyFish).click({ force: true });
    }
    else if(value == 'Vegan'){
        cy.contains(configuratorPage.mealsBtns.vegan).click({ force: true });
    }
    else if(value == 'Vegetarian'){
        cy.contains(configuratorPage.mealsBtns.vegetarian).click({ force: true });
    }
    else if(value == 'Lacto free'){
        cy.contains(configuratorPage.mealsBtns.lactoFree).click({ force: true });
    }
    else if(value == 'Gluten free'){
        cy.contains(configuratorPage.mealsBtns.glutenFree).click({ force: true });
    }
    else if(value == 'Gluten and lacto free'){
        cy.contains(configuratorPage.mealsBtns.glutenAndLactoFree).click({ force: true });
    }
});


Cypress.Commands.add("clickNextBtnMeals", () => {
    cy.get(configuratorPage.nextBtnMeals).click({force:true})
})

Cypress.Commands.add("clickShowSelectedDiets", () => {
    cy.get(configuratorPage.showSelectedDiets).click({force:true})
})






