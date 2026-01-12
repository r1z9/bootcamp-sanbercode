describe('Intercept', () => {
  it('Test Web', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

    cy.get('[name="username"]').type('Admin');

    cy.get('[name="password"]').type('admin123');

    cy.intercept('GET', 'https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/dashboard/employees/action-summary').as('actionsumary');

    cy.get('[type="submit"]').click();

    cy.wait('@actionsumary');
  })
})