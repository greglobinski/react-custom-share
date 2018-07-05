/* globals cy */

describe('Docs examples', () => {
  it('can visit the app', () => {
    cy.visit('/')
      .getByLabelText(new RegExp('Twitter'))
      .click();
  });
});
