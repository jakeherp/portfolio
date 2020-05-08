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
      .getTestElement('about', 'a')
      .click({ force: true })
      .url()
      .should('match', /about/);

    // go back to home page
    cy.getTestElement('logo')
      .click({ force: true })
      .url()
      .should('include', Cypress.config('baseUrl'));
  });
});
