/// <reference types="Cypress" />

describe('Portfolio app', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('loads home page', () => {
    cy.get('main h1');
  });

  it('navigates to about page and back', () => {
    cy.getTestElement('MenuToggle')
      .click()
      .get('header ul > li:nth-of-type(2) > a')
      .click()
      .url()
      .should('match', /about/);

    // go back to home page
    cy.get('header h1')
      .click()
      .url()
      .should('include', Cypress.config('baseUrl'));
  });
});
