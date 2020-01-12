describe('Element Test', () => {
  it('Cheking hompage is up?', () => {
    cy.visit('/');
  });

  it('Cheking the existance of city select box and its title(Weather Monster)', () => {
    cy.get('.weather-container').contains('Weather Monster');
  });

  it('Select city Gorgan and London from the list', () => {
    cy
      .get('input')
      .type('gorga', { force: true })
      .get('[class*="-menu"]')
      .find('[class*="-option"]')
      .contains('Gorgan')
      .click(0, 0, { force: true });
    cy
      .get('input')
      .type('Londo', { force: true })
      .get('[class*="-menu"]')
      .find('[class*="-option"]')
      .contains('London')
      .click(0, 0, { force: true });

    cy.get('.show-cities').children().should('have.length', 2);
  });

});
