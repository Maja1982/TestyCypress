/// <reference types="cypress" />
beforeEach('setup',()=>{
    cy.viewport(1440,1080);
    cy.visit('https://www.google.com');
    cy.url().should('contain','google');
})
describe('Tests of cookie pop-up on google',()=>{   
    it('Accept Cookies', ()=>{
        cy.get('#L2AGLb > .QS5gu').should('be.visible');
        cy.get('#L2AGLb > .QS5gu').click();
        cy.get('#L2AGLb > .QS5gu').should('not.be.visible');
    })
    it('Reject Cookies', ()=>{
         cy.get('#W0wltc > .QS5gu').should('be.visible');
         cy.get('#W0wltc > .QS5gu').click();
         cy.get('#W0wltc > .QS5gu').should('not.be.visible');
    })
    it('Customise Cookie', ()=>{
        cy.get('.eOjPIe').should('be.visible');
        cy.get('.eOjPIe').click();
        cy.url().should('contain','consent');
    })
})
describe('Tests of search on google',()=>{
    it('Get input',()=>{
        cy.get('#L2AGLb > .QS5gu').click().should('not.be.visible');
    })
})