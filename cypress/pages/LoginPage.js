class LoginPage {

  usernameInput() {
    return cy.get('input[name="username"]');
  }

  passwordInput() {
    return cy.get('input[name="password"]');
  }

  loginButton() {
    return cy.get('button[type="submit"]');
  }

  errorMessage() {
    return cy.get('.oxd-alert-content-text');
  }

  dashboardHeader() {
    return cy.get('h6');
  }

  visit() {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  }

  inputUsername(username) {
    this.usernameInput().clear().type(username);
  }

  inputPassword(password) {
    this.passwordInput().clear().type(password);
  }

  clickLogin() {
    this.loginButton().click();
  }

  login(username, password) {
    this.inputUsername(username);
    this.inputPassword(password);
    this.clickLogin();
  }
}

export default new LoginPage();
