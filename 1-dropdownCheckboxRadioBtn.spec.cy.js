/// <reference types="cypress" />

describe('Web Driver Univercity', () => {

it ('Automated test for Dropdown Menu(s), Checkboxe(s) & Radio Button(s)', () => {

    cy.visit('https://webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html')

    cy.get('#dropdowm-menu-1')
    .select('C#')
    .should('have.value','c#')

    cy.get('#dropdowm-menu-2')
    .select('Maven')
    .should('have.value','maven')

    cy.get('#dropdowm-menu-3')
    .select('JavaScript')
    .should('have.value','javascript')

    cy.get('#dropdowm-menu-3')
    .select('JavaScript')
    .should('have.value','javascript')

    cy.get('#checkboxes')
    .find('input[value="option-1"]')
    .check()
    .should('be.checked')
    .parents('#checkboxes')
    .find('input[value="option-3"]')
    .uncheck()
    .should('not.be.checked')

    cy.get('#radio-buttons')
    .find('input[value="green"]')
    .check()
    .should('be.checked')

    cy.get('#radio-buttons-selected-disabled')
    .find('input[value="lettuce"]')
    .check()
    .should('be.checked')
    
    cy.get('#fruit-selects')
    .select('Pear')
    .should('have.value','pear')

})

})

