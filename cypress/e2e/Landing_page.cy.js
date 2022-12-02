/// <reference types="cypress" />

import {
   PageElements
} from "../support/selectors"

const pe = new PageElements()



describe('Currently can not use', () => {
   beforeEach(() => {
      cy.visit('/')
      Cypress.on('uncaught:exception', (err, runnable) => {
         return false
      })
      cy.clearLocalStorage()
   })

   it('Landing Page Opened', () => {
      
      cy.landPageOpened();

   })
})

