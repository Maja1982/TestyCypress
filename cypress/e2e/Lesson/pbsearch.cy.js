/// <reference types="cypress"/>


//describe('test on pb'), () => {
    beforeEach('setup', () => {
        cy.viewport(1440, 1080);
        cy.visit('https://www.google.com'); // lub piszemy  cy.visit('/'); gdy mamy zadeklarowaną stronę w cypress.config.js
        cy.url().should('contain', 'google');
        cy.get('#APjFqb').as('search');
        cy.get('.aajZCb > .lJ9FBc > center > .gNO89b').as('searchbutton');
      

    })

    it('search politechnika', function(){
       // cy.get('#APjFqb').as('search2');
        cy.get('#L2AGLb > .QS5gu').click().should('not.be.visible');
        cy.get('@search').clear().type('politechnika bialostocka');
        cy.get('@searchbutton').click();
        cy.get('.aajZCb > .lJ9FBc > center > .gNO89b').click();
        cy.url().should('contain', '?q=politechnika+bialostocka');
    })

    it('search politechnika2', function(){
        cy.get('#L2AGLb > .QS5gu').click().should('not.be.visible');
        cy.get('@search').clear().type('politechnika bialostocka');
        cy.get('@searchbutton').click();
        cy.get('.aajZCb > .lJ9FBc > center > .gNO89b').click();
        cy.url().should('contain', '?q=politechnika+bialostocka');
    })
