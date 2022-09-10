import {orderDietals} from '../locators/orderDetailsPage'

Cypress.Commands.add("pickupDietDays", () => {
    const currentDay = new Date().getDate()

   if(currentDay == 30){
    cy.get(orderDietals.nextMonthBtn).last().click({force: true})
    cy.get(orderDietals.calendarWeek).find(orderDietals.calendarDay).contains(currentDay + 3).click()
   }
   else{
    cy.get(orderDietals.calendarWeek).find(orderDietals.calendarDay).contains(currentDay + 3).click()
   } 
})

Cypress.Commands.add("addToBasket", () => {
    cy.get(orderDietals.addToBasketBtn).contains('Dodaj do koszyka').click({force: true})
})
