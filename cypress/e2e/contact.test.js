import { buildUser } from '../support/generate';
/// <reference types="Cypress" />

describe('Contact page', () => {
  beforeEach(() => {
    cy.visit('/contact');
  });

  it('loads contact page', () => {
    cy.getTestElement('headline').then((el) => {
      expect(el).to.have.text(`Get in touch`);
    });
  });

  it('submits a contact form', () => {
    const user = buildUser();

    cy.get('#name')
      .debug()
      .type(user.name)
      .get('#email')
      .type(user.email)
      .get('#message')
      .type(user.message)
      .get('button[type="submit"]')
      .click()
      .url()
      .should('match', /contact\/thanks/);
  });
});
