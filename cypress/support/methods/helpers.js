

Cypress.Commands.add("clearItems", () => {
    const deleteItems = () => {
        localStorage.clear()
        sessionStorage.clear();
        cy.clearCookies()
    }

    deleteItems()
})

Cypress.Commands.add("addDietToBasket", () => {
    cy.clickChooseDiet()
    .chooseSex()
    .enterParameters(34, 70, 168)
    .clickNextParameters()
    .chooseActivity('medium')
    .chooseGoal('Lose weight')
    .HowDoYouWantToEat('Eat all')
    .clickNextBtnMeals()
    .clickShowSelectedDiets()
    .chooseDietProposal()
    .clickCompareDiets()
    .choiceDays()
    .clickOrderDiet()
    .pickupDietDays()
    .addToBasket()
    .goToBasket()
})


  