/// <reference types="cypress" />

const { timeout } = require("rxjs");


describe('Web Driver Univercity', () => {


    it ('Automated test for Popups and Allerts', () => {

        cy.visit('https://webdriveruniversity.com/Popup-Alerts/index.html')

        const stub = cy.stub()
        cy.on('window:alert', stub)

        cy.contains('JavaScript Alert')
        .parents('.thumbnail')
        .find('#button1')
        .click()
        .then( () => {
            expect(stub.getCall(0)).to.be.calledWith('I am an alert box!')
        })
        
        cy.contains('Modal Popup')
        .parents('.thumbnail')
        .find('#button2')
        .click()
        
        cy.get('#myModal')
        .invoke('show')
        .should('have.attr', 'style', 'display: block;')
        .should('have.class', 'modal fade in')

        cy.get('#myModal')
        .contains('Close')
        .invoke('show')
        .click()

        const stub1 = cy.stub()
        cy.on('window:confirm', stub1)

        cy.contains('JavaScript Confirm Box')
        .parents('.thumbnail')
        .find('#button4')
        .click()
        .then( () => {
            expect(stub1.getCall(0)).to.be.calledWith('Press a button!')
        })

    })


})