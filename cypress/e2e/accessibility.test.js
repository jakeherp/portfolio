/// <reference types="Cypress" />

describe('Accessibility tests', () => {
  beforeEach(() => {
    cy.visit('/').get('main').injectAxe();
  });

  it('Has no detectable accessibility violations on load', () => {
    cy.checkA11y();
  });

  it('Focuses on the footer link and asserts its attributes', () => {
    cy.findAllByText('Gatsby').focus();

    cy.focused()
      .should('have.text', 'Gatsby')
      .should('have.attr', 'href', 'https://www.gatsbyjs.org')
      .should('not.have.css', 'outline-width', '0px');
  });
});
