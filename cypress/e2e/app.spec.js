// <reference types="cypress" />

describe('Portfolio app', () => {
  it('renders the application', () => {
    cy.visit('/')
      .get('.Layout__Wrapper-bNbQqD')
      .children()
      .should('have.length', '3');
  });
});
