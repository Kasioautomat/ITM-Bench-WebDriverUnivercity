/// <reference types="cypress" />

const { timeout } = require("rxjs");

describe('Web Driver Univercity', () => {

  it('Automated test for Ajax Loader', () => {

    Cypress.on('uncaught:exception', (err, runnable) => {
      return false
    })

    cy.visit('https://webdriveruniversity.com/Ajax-Loader/index.html')
    cy.get('#loader', { timeout: 10000 })
    //timeout - powtórzy assertion w czasie 10000 ms
    .should('have.attr', 'style', 'display: none;')
    .should('not.be.visible')
    //visible na stronie, nie w viewport (ograniczony widok strony)

    cy.contains('CLICK ME!').click()
    cy.get('.modal-title').should('contain', 'Well Done For Waiting....!!!')
    cy.get('.modal-body').find('p').should('contain', 'The waiting game can be a tricky one; this exercise will hopefully improve your understandings of the various types of waits.')
    cy.get('.modal-footer').find('button').click()
    cy.get('#myDiv').find('#button1').should('contain', 'CLICK ME!')

  })

})

