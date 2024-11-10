import { SearchPage } from '../../selectors/searchPage';

describe(`Search Feature Tests - ${Cypress.env('viewportType') === 'desktop' ? 'Desktop' : 'Mobile'}`, () => {
    let testData;
  
    before(() => {
      cy.fixture('searchData').then((data) => {
        testData = data;
      });
    });
  
    beforeEach(() => {
      cy.visit('/');
    });
  
    it('should return and verify relevant results for valid search term', () => {
      cy.performSearch(testData.validSearch);
  
      cy.url().should('include', `/search/${testData.validSearch}`);
  
      cy.get(SearchPage.elements.results.cardTitle)
        .should('exist')
        .first()
        .should('contain.text', testData.validSearch);
  
      cy.get(SearchPage.elements.results.cardTitle)
        .its('length')
        .then(count => {
          if (count > 1) {
            cy.log(`Found ${count} results for ${testData.validSearch}`);
          }
        });
    });
  
    it('should close search without entering input', () => {
      cy.openSearch();
      
      cy.get(SearchPage.elements.search.closeButton)
        .should('be.visible')
        .click();
  
      cy.get(SearchPage.elements.search.wrapper)
        .should('not.be.visible');
    });
  
    it('should handle invalid search term correctly', () => {
      cy.performSearch(testData.invalidSearch);
  
      cy.url().should('include', `/search/${testData.invalidSearch}`);
  
      cy.get(SearchPage.elements.results.noResults).should('be.visible');
      cy.get(SearchPage.elements.results.cardTitle).should('not.exist');
      cy.get(SearchPage.elements.results.entryTitle)
        .should('be.visible')
        .and('contain', testData.messages.nothingFound);
      cy.get(SearchPage.elements.results.blogPost).should('not.exist');
    });
});