/// <reference types="Cypress" />

describe('Portfolio app', () => {
  it('renders the application', () => {
    cy.visit('/');
    // .get(/.Layout__Wrapper-*/gi)
    // .children()
    // .should('have.length', '3');
  });
});
