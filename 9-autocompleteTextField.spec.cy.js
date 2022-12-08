/// <reference types="cypress" />

const { timeout } = require("rxjs");


describe('Web Driver Univercity', () => {


    it ('Automated test for Autocomplete TextField', () => {

        cy.visit('https://webdriveruniversity.com/Autocomplete-TextField/autocomplete-textfield.html?food-item=')
        
        cy.get('#myInput')
        .type('I am writing buhahaha')

        cy.get('#submit-button')
        .click()
        
    })
        

    })