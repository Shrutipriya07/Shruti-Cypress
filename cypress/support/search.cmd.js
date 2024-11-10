import { SearchPage } from '../selectors/searchPage';
Cypress.Commands.add('openSearch', () => {
    cy.get(SearchPage.elements.search.icon).first().click({
        force: true
    });
    cy.get(SearchPage.elements.search.wrapper).should('be.visible');
    cy.get(SearchPage.elements.search.screenReader).should('have.text', 'Search');
});

Cypress.Commands.add('performSearch', (searchTerm) => {
    cy.openSearch();
    cy.get('.search-field').type(`${searchTerm}{enter}`);
});
