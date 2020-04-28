/// <reference types="Cypress" />

describe('Portfolio pages', () => {
  it('loads portfolio page', () => {
    cy.visit('/portfolio')
      .getTestElement('headline')
      .then((el) => {
        expect(el).to.have.text(`Portfolio`);
      });
  });

  it('navigates to a portfolio item', () => {
    cy.visit('/portfolio')
      .getTestElement('portfolioItemWeatherApp', 'a')
      .click({ force: true })
      .url()
      .should('match', /portfolio\/weather-app/);
  });

  it('navigates via previous and next buttons', () => {
    cy.visit('/portfolio/weather-app')
      .getTestElement('previous', 'a')
      .click()
      .url()
      .should('match', /portfolio\/raconteur-careers/);
    // .getTestElement('next', 'a')
    // .click()
    // .url()
    // .should('match', /portfolio\/weather-app/);
  });
});
