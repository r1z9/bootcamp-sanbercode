import LoginPage from '../../pages/LoginPage';

describe('OrangeHRM Login - POM Implementation', function () {

  beforeEach(function () {
    LoginPage.visit();
    cy.fixture('loginData').as('data');
  });

  it('TC01 - Login dengan data valid', function () {
    LoginPage.login(this.data.validUser.username, this.data.validUser.password);
    LoginPage.dashboardHeader().should('contain', 'Dashboard');
  });

  it('TC02 - Login dengan password salah', function () {
    LoginPage.login(this.data.invalidUser.username, this.data.invalidUser.password);
    LoginPage.errorMessage().should('contain', 'Invalid credentials');
  });

  it('TC03 - Login dengan username dan password kosong', function () {
    LoginPage.login(this.data.emptyUser.username, this.data.emptyUser.password);
    cy.contains('Required').should('have.length', 2);
  });

  it('TC04 - Login dengan username kosong', function () {
    LoginPage.login(this.data.emptyUsername.username, this.data.emptyUsername.password);
    cy.contains('Required').should('exist');
  });

  it('TC05 - Login dengan password kosong', function () {
    LoginPage.login(this.data.emptyPassword.username, this.data.emptyPassword.password);
    cy.contains('Required').should('exist');
  });

});
