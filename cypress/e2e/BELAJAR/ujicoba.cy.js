// describe('test web univ', () => {
//     it('intro', () => {
//         cy.visit('https://webdriveruniversity.com/');
//         cy.get('#contact-us').invoke('removeAttr', 'target').click();

//         cy.get('[name="first_name"]').type('John');
//         cy.get('[name="last_name"]').type('Doe');
//         cy.get('[name="email"]').type('ripkizdermawan@gmail.com');
//         cy.get('[name="message"]').type('WKWKWKKWKWKWWK');

//         cy.get('[type= "submit"]').click();
//     });

//     it('intercept test', () => {
//         cy.visit('https://webdriveruniversity.com/Contact-Us/contactus.html');
//         cy.get('[name="first_name"]').type('John');
//         cy.get('[name="last_name"]').type('1234');
//         cy.get('[name="email"]').type('abhdbasfahsg.com');
//         cy.get('[name="message"]').type('0987haghags');

//         cy.get('[type= "submit"]').click();
//     });
// });
// describe('test web univ', () => {

//     beforeEach(() => {
//         cy.visit('https://webdriveruniversity.com/');
//         cy.get('#contact-us').invoke('removeAttr', 'target').click();
//     });

//     it('intro', () => {
//         cy.get('[name="first_name"]').type('John');
//         cy.get('[name="last_name"]').type('Doe');
//         cy.get('[name="email"]').type('ripkizdermawan@gmail.com');
//         cy.get('[name="message"]').type('WKWKWKKWKWKWWK');
//         cy.get('[type="submit"]').click();

//         cy.contains('Thank You for your Message!').should('be.visible');                    
//     });

//     it('intercept test', () => {
//         cy.get('[name="first_name"]').type('John');
//         cy.get('[name="last_name"]').type('1234');
//         cy.get('[name="email"]').type('abhdbasfahsg.com');
//         cy.get('[name="message"]').type('0987haghags');
//         cy.get('[type="submit"]').click();

//         cy.contains('Error: Invalid email address').should('be.visible');                  
//     });

// });
describe('test web univ', () => {

    beforeEach(() => {
        cy.visit('https://webdriveruniversity.com/');
        cy.get('#contact-us').invoke('removeAttr', 'target').click();
    });

    it('Field kosong - semua field kosong', () => {
        cy.get('[type="submit"]').click();

        cy.contains('Error: all fields are required').should('be.visible');
    });

    it('Field kosong - first name kosong', () => {
        cy.get('[name="last_name"]').type('Doe');
        cy.get('[name="email"]').type('john.doe@gmail.com');
        cy.get('[name="message"]').type('Testing message');

        cy.get('[type="submit"]').click();

        cy.contains('Error: all fields are required').should('be.visible');
    });

    it('Field kosong - message kosong', () => {
        cy.get('[name="first_name"]').type('John');
        cy.get('[name="last_name"]').type('Doe');
        cy.get('[name="email"]').type('john.doe@gmail.com');

        cy.get('[type="submit"]').click();

        cy.contains('Error: all fields are required').should('be.visible');
    });

});
