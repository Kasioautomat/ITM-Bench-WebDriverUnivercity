/// <reference types="cypress" />

const { timeout } = require("rxjs");


describe('Web Driver Univercity', () => {


    it ('Automated test for Scrolling', () => {

        cy.visit('https://webdriveruniversity.com/Scrolling/index.html')

        cy.get('#zone1')
        .then( (divZone1) => {

            cy.wrap(divZone1)
            .find('h1')
            .should('contain', 'Scroll to me first!')
            .trigger('mouseover')
            
            cy.wrap(divZone1)
            .should('contain', 'Well done for scrolling to me!')
            .should('have.attr', 'style', 'background: rgb(26, 255, 26); font-size: 24px; text-align: center;')
    })

        cy.get('#zone2')
        .then( (divZone2) => {
            cy.wrap(divZone2)
            /*.scrollTo('center', { ensureScrollable: false })*/
            .should('contain', '0 Entries')
            .trigger('mouseover')

            cy.wrap(divZone2)
            .should('contain', '1 Entries')
        })

        cy.get('#zone3')
        .then( (divZone2) => {
            cy.wrap(divZone2)
            .should('contain', '0 Entries')
            .trigger('mouseover')

            cy.wrap(divZone2)
            .should('contain', '1 Entries')
        })

        cy.get('#zone4')
        .then( (divZone3) => {
            cy.wrap(divZone3)
            .scrollTo(548, 868, {ensureScrollable: false})

            cy.wrap(divZone3)
            .find('h1')
            .should('contain', 'Dont forget to scroll to me!')
            .trigger('mouseover', 548, 868, {force: true})

            cy.wrap(divZone3)
            .should('contain', 'X: 577Y: 1762')
            .should('have.attr', 'style', 'text-align: center; font-size: 32px; color: rgb(255, 255, 255); background: black;')
        })

    })


    })
