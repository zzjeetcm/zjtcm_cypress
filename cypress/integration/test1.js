
// describe('Save Order', () => {
//   it('Save 1 Order', () => {
  
    
//   })
// })

describe('Save Order Test', () => {
    it('Save 2 Orders', () => {
      cy.visit(Cypress.env('ZJCMS_URL'))

      // Forget password 
      // Access the website
      // Find the link text of the Forgot password link and click the link
      // cy.contains('Forgot password?').click()
      // cy.url().should('include', '/ResetRq')
      // cy.get('.MuiOutlinedInput-input')
      // .type('hello world')
      Cypress.env('user_150301')

      cy.get('[name="username"]')
      .type(Cypress.env('user_150301'))
      .should('have.value', Cypress.env('user_150301'));

      cy.get('[name="password"]')
        .type('password')
        .should('have.value', Cypress.env('password_150301'));

      cy.get('[type="submit"]').click()
      cy.url().should('include', '/home');

      cy.get('a[id="ADD ORDER"]')
        .should('have.attr','href','/store/AddOrderSummary');
      

      // Add Order Summary
      cy.visit(Cypress.env('ZJCMS_URL') + '/store/AddOrderSummary');

      cy.get('[name="order description"')
        .type('order desc')
        .should('have.value', 'order desc');
      
      // Create Group
      cy.get('[id="Group"]')
        .type('Group 1')
        .should('have.value', 'Group 1');
      cy.get('[data-option-index="0"]')
        .click()
      // Select Branch
      cy.get('[id="branch"]')
        .click();
      cy.get('[data-option-index="0"]')
        .click()
      // Select Medicine Type
      cy.get('[id="medicineType"]')
        .click();
      cy.get('[data-option-index="0"]')
        .click()
      cy.wait(5000)
      // Select Branch Medicine
      cy.get('[id="branchMedicines"]')
        .click(); 
      cy.get('[data-option-index="0"]')
        .click();
      // Number of Days
      cy.get('[id="Day"]').type('1');
      // Number of Times
      cy.get('[id="Times"]').type('1');
      // When Consume
      cy.get('[name="when_consume"]')
        .click();
      cy.get('[data-option-index="0"]')
        .click();

      // Create group 2
      cy.get('[id="Group"]')
        .type('Group 2')
        .should('have.value', 'Group 2');
      cy.get('[data-option-index="0"]')
        .click()
      // Select Branch
      cy.get('[id="branch"]')
        .click();
      cy.get('[data-option-index="0"]')
        .click()
      // Select Medicine Type
      cy.get('[id="medicineType"]')
        .click();
      cy.get('[data-option-index="0"]')
        .click()
      cy.wait(5000)
      // Select Branch Medicine
      cy.get('[id="branchMedicines"]')
        .click(); 
      cy.get('[data-option-index="0"]')      
        .click();
      cy.get('[id="branchMedicines"]')
        .click(); 
      cy.get('[data-option-index="1"]')      
        .click();        
      // Number of Days
      cy.get('[id="Day"]').type('2');
      // Number of Times
      cy.get('[id="Times"]').type('2');
      // When Consume
      cy.get('[name="when_consume"]')
        .click();
      cy.get('[data-option-index="1"]')
        .click();

      // To save
      cy.get('[id="addStoreOrderSave"]').click();
    })
  })