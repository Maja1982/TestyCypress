class googlePage {
    _SearchInputSelector = '#APjFqb';
    _AcceptCookies = '#L2AGLb > .QS5gu';
    _RejectCookies = '#W0wltc > .QS5gu';
    _CustomiseCookie = '.eOjPIe';

    getSearchInput() {
        return cy.get(this._SearchInputSelector);
    }
    
    getAcceptCookies() {
        return cy.get(this._AcceptCookies);
    }

    getRejectCookies() {
        return cy.get(this._RejectCookies);
    }

    getCustomiseCookies() {
        return cy.get(this._CustomiseCookies);
    }

} export default googlePage;

