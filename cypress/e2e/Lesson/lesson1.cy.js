/// <reference types="cypress"/>

//Testy zamykania ciasteczek (3)

beforeEach('setup', () => {  // funkcja którą wykonujemy przed każdym z naszych testów
    cy.viewport(1440, 1080);
    cy.visit('https://www.google.com');
    cy.url().should('contain', 'google');

})
describe('Tests of cookie pop-up on google', () => {
    it('Pierwszy Test', () => {
        cy.get('#L2AGLb > .QS5gu').should('be.visible'); // sprwdzamy czy jest widoczny przycisk
        cy.get('#L2AGLb > .QS5gu').click(); // pobranie selektora
        cy.get('#L2AGLb > .QS5gu').should('not.be.visible');

    })

    it('Drugi Test', () => {
        cy.get('#W0wltc > .QS5gu').should('be.visible'); // sprwdzamy czy jest widoczny przycisk
        cy.get('#W0wltc > .QS5gu').click(); // pobranie selektora
        cy.get('#W0wltc > .QS5gu').should('not.be.visible');


    })

    it('Trzeci Test', () => {
        cy.get('.eOjPIe').should('be.visible');
        cy.get('.eOjPIe').click();
        cy.url().should('contain', 'consent');
    })
})


    beforeEach("setup", () => { //umieszczamy tu wszystkie sprawdzenia ktore są w kazdym innym tescie, wezmie wszystkie nasze IT
        //wszystkie funkcje bedą obslużone, a samo before obsluza tylko pierwszy IT, sluzy do zainicjiowania tylko raz
        cy.viewport(1440, 1080);  // wyświetla nam rozdzielczości, można wybrac model urządzenia mobilnego
        cy.visit("https://www.google.com"); // cy.visit przyjmuje jakiś adres
        cy.url().should("contain", "google"); // assercja - cos sprawdzamy, czy url zawiera słowo google
        //interakcje type i
    })

    describe("Testy of cookie pop-up on google", () => {

        it("Accept Cookies", () => {
            cy.get("#L2AGLb > .QS5gu").should("be.visible"); //pobiera element i (assercja)sprawdza czy ten element jest widoczny
            //sprawdzamy widocznosc popupa po to zeby sprawdzić czy jest widoczny bo jak uzytkownik jest zalogowany
            //to okienko nie wyskoczy
            cy.get("#L2AGLb > .QS5gu").click(); //selektory #L2AGLb > .QS5gu
            //(zebrane z punktowego zbierania elementu w chromczasem mogą nie zadziałać
            //jak coś zmienią
            cy.get("#L2AGLb > .QS5gu").should("not.be.visible"); //sprawdzamy czy jednak zniknal popup
            //zamkąć / zaakceptować popUp
        });
        it("Reject Cookies", () => {
            cy.get("#W0wltc > .QS5gu").should("be.visible");
            cy.get("#W0wltc > .QS5gu").click(); //# identyfikator obiektu
            cy.get("#W0wltc > .QS5gu").should("not.be.visible");
        });
        it("Customise Cookies", () => { // sprawdzamy co bedzie jak klikniemy w wiecej opcji
            cy.get(".eOjPIe").should("be.visible");
            cy.get(".eOjPIe").click();
            cy.url().should("contain", "consent");
        })
    })

    //14.05.2023 Ćwiczenia II
    //test 1
    describe.only('Tests of search on google', () => { //tylko blok describe z oznaczeniem .only zostanie uruchomiony, a wszystkie inne bloki describe i it w pliku zostaną pominięte. 
        it.only('Search Wikipedia with {enter}', () => { //skip oznacza, że dany test będzie pomijany podczas uruchamiania testów. Aby aktywować pominięty test, wystarczy usunąć .skip z kodu testu.
            cy.get('#L2AGLb > .QS5gu').click().should('not.be.visible');
            cy.get('#APjFqb').clear().type('Wikipedia').type('{enter}');
            cy.url().should('contain', '?q=Wikipedia');
        })
        //test 2
        it.only('Search Wikipedia with click on icon', () => {
            cy.get('#L2AGLb > .QS5gu').click().should('not.be.visible');
            cy.get('#APjFqb').clear().type('Wikipedia');
            cy.get('.aajZCb > .lJ9FBc > center > .gNO89b').click();
            cy.url().should('contain', '?q=Wikipedia');
        })
        //test 3
        it.only('Search Wikipedia with list', () => {
            cy.get('#L2AGLb > .QS5gu').click().should('not.be.visible');
            cy.get('#APjFqb').clear().type('Wikipedia');
            cy.get('#ERWdKc > .wM6W7d > span').click();
            cy.url().should('contain', '?q=wikipedia'); //tutaj wikipedia piszemy małą literą ponieważ w rozwijanej liście wyszukiwane hasła w wikipedii są małą literą.
            // w przeciwnym razie test nie przechodzi
        })
        //test 4 // Jeżeli jest it.only to będzie  tylko wyświetlał  testy z only, dlatego nie wykonuje testów 1-3
        it.only('Search Wikipedia with click on element from list functions', () => {
            cy.get('#L2AGLb > .QS5gu').click().should('not.be.visible');
            cy.get('#APjFqb').clear().type('Wikipedia').wait(1000);
            //cy.get('.wM6W7d').first();
            //cy.get('.wM6W7d').eq(-3); 
            //cy.get('.G43f7e').children();
            cy.get('.erkvQe').children().children().children().eq(0).click();
            cy.url().should('contain', '?q=wikipedia');
        })

        //test 5
        it.only('Go to site Wikipedia', () => {
            cy.get('#L2AGLb > .QS5gu').click().should('not.be.visible');
            cy.get('#APjFqb').clear().type('Wikipedia');
            cy.get('.aajZCb > .lJ9FBc > center > .gNO89b').click();
            cy.url().should('contain', '?q=Wikipedia');
            cy.get('[href="https://www.wikipedia.org/"] > .LC20lb').click().wait(1000);
            cy.origin('https://www.wikipedia.org', () => {
                cy.url().should('contain', 'wikipedia'); //nie ma ?q ponieważ jest to inna strona wikipedii
            })

        })
    })