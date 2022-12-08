/// <reference types="cypress" />

const { timeout } = require("rxjs");


describe('Web Driver Univercity', () => {


    it ('Automated test for Datepicker', () => {

        cy.visit('https://webdriveruniversity.com/Datepicker/index.html')

        cy.get('.input-group-addon')
        .click()

        cy.get('.datepicker-days')
        .find('.next')
        .click()

        cy.get('.datepicker-days')
        .contains('13')
        .click()
        
    })
        

    })