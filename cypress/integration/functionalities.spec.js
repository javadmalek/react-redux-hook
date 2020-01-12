describe('Temperature Test', () => {
  it('Cheking hompage is up?', () => {
    cy.visit('/');
  });

  it('Available endpoint www.openweathermap.org API and fetching for London', () => {
    cy.request('http://api.openweathermap.org/data/2.5/weather?q=London&appid=b57063f9b1a65d47833f68e3c4a3d415')
      .should((response) => {
        expect(response.status).to.eq(200);
      });
  });

  it('Trying to add London again and checking that the alert message is open?', () => {
    cy
      .get('input')
      .type('Lond', { force: true })
      .get('[class*="-menu"]')
      .find('[class*="-option"]')
      .contains('London')
      .click(0, 0, { force: true });

    cy.get('.show-cities').children().should('have.length', 1);

    cy.on('window:alert', (str) => {
      expect(str).to.equal('London is already selected!...');
    });

    cy.get('.show-cities').children().should('have.length', 1);
  });

  it('Trying to add London and Gorgan and then find&click on remove London ?', () => {
    cy
      .get('input')
      .type('Lond', { force: true })
      .get('[class*="-menu"]')
      .find('[class*="-option"]')
      .contains('London')
      .click(0, 0, { force: true });

    cy
      .get('input')
      .type('Gorga', { force: true })
      .get('[class*="-menu"]')
      .find('[class*="-option"]')
      .contains('Gorgan')
      .click(0, 0, { force: true });
    cy.get('.show-cities').children().should('have.length', 2);

    cy.get('button').contains('Remove').click();

    cy.get('.show-cities').children().should('have.length', 1);
  });
});
