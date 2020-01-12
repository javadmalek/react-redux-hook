describe('Element Test', () => {
  it('Cheking hompage is up?', () => {
    cy.visit('/');
  });

  it('Cheking the existance of city select box and its title(Weather Monster)', () => {
    cy.get('.weather-container').contains('Weather Monster');
  });

  it('Select city Gorgan and London from the list', () => {
    cy
      .get('[class*="-control"]')
      .click(0, 0, { force: true })
      .get('[class*="-menu"]')
      .find('[class*="-option"]')
      .contains('Gorgan')
      .click(0, 0, { force: true });
    cy
      .get('[class*="-control"]')
      .click(0, 0, { force: true })
      .get('[class*="-menu"]')
      .find('[class*="-option"]')
      .contains('London')
      .click(0, 0, { force: true });

    cy.get('.show-cities').children().should('have.length', 2);
  });

  it('Trying to add London again and checking that the alert message is open?', () => {
    cy
      .get('[class*="-control"]')
      .click(0, 0, { force: true })
      .get('[class*="-menu"]')
      .find('[class*="-option"]')
      .contains('London')
      .click(0, 0, { force: true });

    cy.get('.show-cities').children().should('have.length', 2);

    cy.on('window:alert', (str) => {
      expect(str).to.equal('London is already selected!...');
    });

    cy.get('.show-cities').children().should('have.length', 2);
  });


  it('Trying to add London and Gorgan and then find&click on remove London ?', () => {
    cy
      .get('[class*="-control"]')
      .click(0, 0, { force: true })
      .get('[class*="-menu"]')
      .find('[class*="-option"]')
      .contains('London')
      .click(0, 0, { force: true });

    cy
      .get('[class*="-control"]')
      .click(0, 0, { force: true })
      .get('[class*="-menu"]')
      .find('[class*="-option"]')
      .contains('Gorgan')
      .click(0, 0, { force: true });
    cy.get('.show-cities').children().should('have.length', 2);

    cy.get('button').contains('Remove').click();

    cy.get('.show-cities').children().should('have.length', 1);
  });
});
