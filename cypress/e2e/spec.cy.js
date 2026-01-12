describe('Login', () => {
  it('passes', () => {
    cy.visit('https://katalon-demo-cura.herokuapp.com')

    cy.get('h1').contains('CURA Healthcare Service').should('have.text', 'CURA Healthcare Service');

    cy.intercept('GET', 'https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/dashboard/employees/action-summary').as('Actionsumary');

    cy.get('#btn-make-appointment').click();

    cy.wait('Actionsumary');
  })
})