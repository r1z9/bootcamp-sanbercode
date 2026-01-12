describe('Tugas 16 - Intercept OrangeHRM (STABLE & SIMPLE)', () => {

  beforeEach(() => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

    cy.get('[name="username"]', { timeout: 10000 }).should('be.visible').type('Admin');
    cy.get('[name="password"]').should('be.visible').type('admin123');
  });

  // ===============================
  // TC01 - Intercept Action Summary
  // ===============================
  it('TC01 - Intercept Action Summary', () => {
    cy.intercept('GET', '**/dashboard/employees/action-summary').as('actionSummary');

    cy.get('[type="submit"]').click();

    cy.wait('@actionSummary').its('response.statusCode').should('eq', 200);
  });

  // ===============================
  // TC02 - Intercept Time at Work
  // ===============================
  it('TC02 - Intercept Time At Work', () => {
    cy.intercept('GET', '**/dashboard/employees/time-at-work**').as('timeAtWork');

    cy.get('[type="submit"]').click();

    cy.wait('@timeAtWork').its('response.statusCode').should('eq', 200);
  });

  // ===============================
  // TC03 - Intercept Shortcuts
  // ===============================
  it('TC03 - Intercept Shortcuts', () => {
    cy.intercept('GET', '**/dashboard/shortcuts').as('shortcuts');

    cy.get('[type="submit"]').click();

    cy.wait('@shortcuts').its('response.statusCode').should('eq', 200);
  });

  // ===============================
  // TC04 - Intercept Buzz Feed
  // ===============================
  it('TC04 - Intercept Buzz Feed', () => {
    cy.intercept('GET', '**/buzz/feed**').as('buzzFeed');

    cy.get('[type="submit"]').click();

    cy.wait('@buzzFeed').its('response.statusCode').should('eq', 200);
  });

  // ===============================
  // TC05 - Intercept Leave Data
  // ===============================
  it('TC05 - Intercept Leave Data', () => {
    cy.intercept('GET', '**/dashboard/employees/leaves**').as('leaves');

    cy.get('[type="submit"]').click();

    cy.wait('@leaves').its('response.statusCode').should('eq', 200);
  });

  // ===============================
  // TC06 - Intercept Sub Unit
  // ===============================
  it('TC06 - Intercept Sub Unit', () => {
    cy.intercept('GET', '**/dashboard/employees/subunit').as('subunit');

    cy.get('[type="submit"]').click();

    cy.wait('@subunit').its('response.statusCode').should('eq', 200);
  });

  // ===============================
  // TC07 - Intercept Locations
  // ===============================
  it('TC07 - Intercept Locations', () => {
    cy.intercept('GET', '**/dashboard/employees/locations').as('locations');

    cy.get('[type="submit"]').click();

    cy.wait('@locations').its('response.statusCode').should('eq', 200);
  });

  // ===============================
  // TC08 - Intercept Push Event
  // ===============================
  it('TC08 - Intercept Push Event', () => {
    cy.intercept('POST', '**/events/push').as('pushEvent');

    cy.get('[type="submit"]').click();

    cy.wait('@pushEvent').its('response.statusCode').should('eq', 200);
  });

});
