/// <reference types="cypress" />

const { timeout } = require("rxjs");


describe('Web Driver Univercity', () => {


    it ('Automated test for File Upload', () => {

        cy.visit('https://webdriveruniversity.com/File-Upload/index.html')

        cy.get('input[type=file]')
        .selectFile('Agile_Tester_sylabus_v1.0_2014PL_w.1.0.3_2022 (1).pdf')
        
        const stub = cy.stub()
        cy.on('window:alert', stub)
        cy.get('input[type=submit]')
        .click()
        .then( () => {
            expect(stub.getCall(0)).to.be.calledWith('Your file has now been uploaded!')
        })
        
    })
        

    })