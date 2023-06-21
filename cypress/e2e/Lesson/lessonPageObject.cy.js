/// <reference types="cypress" />
import googlePage  from '../../PageObject/google'; // dodano na zajęciach 18.06
const google = new googlePage();


beforeEach('setup',()=>{
    cy.viewport(1440,1080);
    cy.visit('https://www.google.com');
    cy.url().should('contain','google');
})
describe('Tests of cookie pop-up on google',()=>{   
    it('Accept Cookies', ()=>{
        google.getAcceptCookies().should('be.visible');
        google.getAcceptCookies().click();
        google.getAcceptCookies().should('not.be.visible');
    })
    it('Reject Cookies', ()=>{
        google.getAcceptCookies().should('be.visible');
        google.getAcceptCookies().click();
        google.getAcceptCookies().should('not.be.visible');
    })
    it('Customise Cookies', ()=>{
        google.getCustomiseCookies().should('be.visible');
        google.getCustomiseCookies().click();
        cy.url().should('contain','consent');
    })
})
describe('Tests of search on google',()=>{
    it('Get input',()=>{
        cy.get('#L2AGLb > .QS5gu').click().should('not.be.visible');
    })
})