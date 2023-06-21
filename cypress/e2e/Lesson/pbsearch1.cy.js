/// <reference types="cypress"/>


describe('test on pb', () => {
    beforeEach('setup', () => {
        cy.viewport(1440, 1080);
        cy.visit('https://www.google.com');
        cy.url().should('contain', 'google');
        cy.get('#APjFqb').as('search');
        cy.get('.aajZCb > .lJ9FBc > center > .gNO89b').as('searchbutton');
        cy.fixture('search').as('frazy')
    })

    it('search politechnika', function () {
        // cy.get('#APjFqb').as('search2');
        cy.get('#L2AGLb > .QS5gu').click().should('not.be.visible');
        cy.get('@search').clear().type(this.frazy[2].fraza);
        cy.get('@searchbutton').click();
        cy.url().should('contain', '?q=politechnika+bialostocka');
    })

    it('search politechnika2', function () {
        cy.get('#L2AGLb > .QS5gu').click().should('not.be.visible');
        cy.get('@search').clear().type('politechnika bialostocka');
        cy.get('@searchbutton').click();
        cy.url().should('contain', '?q=politechnika+bialostocka');
    })

    it('search politechnika3', () => {
        cy.get('#L2AGLb > .QS5gu').click().should('not.be.visible');
        cy.get('@frazy').then((frazy) => {
            cy.get('@search').clear().type(frazy[2].fraza);
            cy.get('@searchbutton').click();
            cy.url().should('contain', '?q=politechnika+bialostocka')
        })
    })
})