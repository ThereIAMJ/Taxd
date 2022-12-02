/// <reference types="cypress" />

import {
   PageElements
} from "../support/selectors"

const pe = new PageElements()

describe('Logging in', () => {
   beforeEach(() => {
      cy.visit('/')
      Cypress.on('uncaught:exception', (err, runnable) => {
         return false
      })
      cy.clearLocalStorage()
   })

   it('Login Page Verifying', () => {
      /* cy.landPageOpened() */
      cy.get('.UserMenu_buttons-wrapper__yM8qy').click();
      cy.loginPageVerify()
      cy.loggingIn(Cypress.env('users').admin["username"], Cypress.env('users').admin["password"])   

   })

   it('Self Assessment usability', () => {
   cy.get('.UserMenu_buttons-wrapper__yM8qy').click();
   cy.loggingIn(Cypress.env('users').admin["username"], Cypress.env('users').admin["password"])
   cy.get('.Sidebar_active__835Rt').click();
   })
})


