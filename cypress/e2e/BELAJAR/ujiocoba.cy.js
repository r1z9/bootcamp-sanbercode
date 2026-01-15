describe('cobacoba', () =>{
    it('test 1', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
        cy.intercept('POST', '/web/index.php/auth/validate').as('login');

        cy.get('[name="username"]').type('Admin');
        cy.get('[name="password"]').type('admin123');
        cy.get('[type="submit"]').click();

        cy.wait('@login');
    });
    
    it('TC03 - Intercept Time At Work', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

         cy.intercept('GET', '**/api/v2/dashboard/employees/time-at-work*').as('timeAtWork');

        cy.get('[name="username"]').type('Admin');
        cy.get('[name="password"]').type('admin123');
        cy.get('[type="submit"]').click();

        cy.wait('@timeAtWork').its('response.statusCode').should('eq', 200);
    });


   
});