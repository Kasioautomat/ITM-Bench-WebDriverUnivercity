/// <reference types="cypress" />

const { timeout } = require("rxjs");

describe('Web Driver Univercity', () => {


    it ('Automated test for Actions', () => {


        cy.visit('https://webdriveruniversity.com/Actions/index.html')
        
        /*1st element*/
        cy.get('#droppable')
        .should('have.class', 'ui-widget-header ui-droppable')

        cy.get('#droppable')
        .find('p')
        .find('b')
        .should('contain', 'DROP HERE!')

        cy.get('#draggable')
        .trigger('mouseover')
        .trigger('mousedown', { which: 1})
        .trigger('mousemove', { which: 1, pageX: 250, pageY: 250 })
        .trigger('mouseup', {force: true})

        cy.get('#droppable')
        .should('have.class', 'ui-widget-header ui-droppable ui-state-highlight')

        cy.get('#droppable')
        .find('p')
        .should('have.attr','style', 'background-color: rgb(244, 89, 80); height: 100%;')

        cy.get('#droppable')
        .find('p')
        .find('b')
        .should('contain', 'Dropped!')

        /*2nd element*/
        cy.get('#double-click')
        .dblclick()
        .should('have.class', 'double')
        cy.get('#double-click')
        .find('h2')
        .should('contain', 'Double Click Me!')

        /*3rd element*/
        cy.get('#div-hover')
        .find('.dropbtn')
        .first()
        .trigger('mouseover')
        
        const stub = cy.stub()
        cy.on('window:alert', stub)
        cy.get('#div-hover')
        .find('.dropdown-content')
        .first()
        .invoke('show')
        .find('a')
        .click()
        .then( () => {
            expect(stub.getCall(0)).to.be.calledWith('Well done you clicked on the link!')
        })
    
        /*4th element*/
        cy.get('#div-hover')
        .find('.dropbtn')
        .eq(1)
        .trigger('mouseover')

        cy.get('#div-hover')
        .find('.dropdown-content')
        .eq(1)
        .invoke('show')
        .find('a')
        .click()
        .then( () => {
            expect(stub.getCall(0)).to.be.calledWith('Well done you clicked on the link!')
        })

        /*5th element*/
        cy.get('#div-hover')
        .find('.dropbtn')
        .eq(2)
        .trigger('mouseover')

        cy.get('#div-hover')
        .find('.dropdown-content')
        .eq(2)
        .invoke('show')
        .find('a')
        .then( (aElement) => {
            cy.wrap(aElement)
            .eq(0)
            .click()
            .then( () => {
                expect(stub.getCall(0)).to.be.calledWith('Well done you clicked on the link!')
        })
            cy.wrap(aElement)
            .eq(1)
            .click()
            .then( () => {
                expect(stub.getCall(0)).to.be.calledWith('Well done you clicked on the link!')
        })
        })
        
        /*6th Element*/
        cy.get('#click-box')
        .find('p')
        .should('contain', 'Click and Hold!')

        cy.get('#click-box')
        .trigger('mousedown')
        .should('contain', 'Well done! keep holding that click now.....')
        .should('have.attr', 'style', 'background: rgb(0, 255, 0); font-size: 30px;')
        .trigger('mouseup')
        .should('contain', 'Dont release me!!!')
        .should('have.attr', 'style', 'background: tomato; font-size: 30px;')


        })


        })
        
    