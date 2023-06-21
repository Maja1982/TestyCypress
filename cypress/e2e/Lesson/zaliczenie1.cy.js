/// <reference types="cypress"/>
import searchquery from './../../fixtures/search.json'
import googlePage from '../../PageObject/google';
const google = new googlePage();



describe('Tests of search Youtube on google', () => {
    beforeEach('setup', () => {
        cy.viewport(1440, 1080);
        cy.visit('https://www.google.com');
        cy.url().should('contain', 'google');
    })

    //Test 1
    it('Search Youtube with {enter}', () => {
        google.getAcceptCookies().click().should('not.be.visible');
        google.getSearchInput().clear().type('Youtube').type('{enter}').wait(500);
        cy.url().should('contain', '?q=Youtube');
    })

    //Test 2
    it('Search Youtube with click on icon', () => {
        google.getAcceptCookies().click().should('not.be.visible');
        google.getSearchInput().clear().type('Youtube');
        cy.get('.aajZCb > .lJ9FBc > center > .gNO89b').click();
        cy.url().should('contain', '?q=Youtube');
    })

    //Test 3
    it('Search Youtube with list', () => {
        google.getAcceptCookies().click().should('not.be.visible');
        google.getSearchInput().clear().type('Youtube');
        cy.get('#jZ2SBf > .wM6W7d > span').click();
        cy.url().should('contain', '?q=youtube');
    })

    //Test 4
    it('Search Youtube with click on element from list functions', () => {
        google.getAcceptCookies().click().should('not.be.visible');
        google.getSearchInput().clear().type('Youtube');
        cy.get('.erkvQe').children().children().children().eq(0).click();
        cy.url().should('contain', '?q=youtube');
    })
})

describe('Test of Uniwersytecki Szpital Kliniczny from list', () => {
    beforeEach('setup', () => {
        cy.viewport(1440, 1080);
        cy.visit('https://uskwb.pl/');  
    })

    //Test 5
    it('Click Aktualności', () => {
        cy.get('#wt-cli-accept-all-btn').click();
        cy.get('#wt-cli-accept-all-btn').should('not.be.visible');
        cy.get('#menu-item-2710 > :nth-child(1) > .expander').click();
        cy.get('#menu-item-2738 > a').click();
        cy.url().should('contain','aktualnosci');
    })

    //Test 6
    it('Click Strefa Pacjenta', () => {
        cy.get('#wt-cli-accept-all-btn').click();
        cy.get('#wt-cli-accept-all-btn').should('not.be.visible');
        cy.get('#menu-item-2712 > :nth-child(1)').click();      
        cy.get('#menu-item-3651 > [href="#"]').click();
        cy.get('#menu-item-3055 > a').click();
        cy.url().should('contain','profilaktyka');
    })

    //Test 7
    it('Click Kariera', () => {
        cy.get('#wt-cli-accept-all-btn').click();
        cy.get('#wt-cli-accept-all-btn').should('not.be.visible');
        cy.get('#menu-item-2713 > [href="#"]').click();
        cy.get('#menu-item-2889 > a').click();
        cy.get('#post-5511 > .entry-content > .link-more > .more-link').click();
        cy.url().should('contain','informatyk');
        })
})

describe('Test of Uniwersytecki Szpital Kliniczny by search', () => {
    beforeEach('setup', () => {
        cy.viewport(1440, 1080);
        cy.visit('https://uskwb.pl/');
        cy.url().should('contain', 'uskwb');
        cy.get('#search-2 > .search-form > label > .search-field').as('search');
        cy.get('#search-2 > .search-form > .search-submit').as('searchbutton');
        cy.get('#wt-cli-accept-all-btn').click().should('not.be.visible');
        cy.fixture('search').as('frazy')
    })

    //Test 8
    it('Search Poradnie', () => {
        cy.get('@frazy').then((frazy) => {
            cy.get('@search').clear().type(frazy[3].fraza);
        })
        cy.get('@searchbutton').click();
        cy.get('@frazy').then((frazy) => {
            cy.url().should('contain', frazy[3].query);
        })
    })

    //Test 9
    it('Search Dyrekcja Szpitala', function () {
        cy.get('@search').clear().type(searchquery[4].fraza);
        cy.get('@searchbutton').click();
        cy.url().should('contain', searchquery[4].query);
    })

    //Test 10
    it('Search Badania', function () {
        cy.get('@search').clear().type(this.frazy[5].fraza);
        cy.get('@searchbutton').click();
        cy.url().should('contain', this.frazy[5].query);
    })
})
