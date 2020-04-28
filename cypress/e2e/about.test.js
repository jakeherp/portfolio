/// <reference types="Cypress" />

describe('About page', () => {
  beforeEach(() => {
    cy.visit('/about');
  });

  it('loads about page', () => {
    cy.getTestElement('headline').then((el) => {
      expect(el).to.have.text(`Hey, I'm Jacob Herper`);
    });
  });

  it('displays filters', () => {
    cy.getTestElement('filters');
  });

  it('filters skills', () => {
    cy.get('.--frameworks')
      .should('exist')
      .getTestElement('filterTechnologies')
      .click()
      .get('.--frameworks')
      .should('not.exist');

    // Remove filter again
    cy.getTestElement('filterTechnologies')
      .click()
      .get('.--frameworks')
      .should('exist');
  });
});
