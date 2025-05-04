describe('add to card', () => {

    it('adicionar item ao carrinho', () => {
      cy.visit('https://www.saucedemo.com/v1/index.html')
      cy.get('[data-test="username"]').type('standard_user')
      cy.get('[data-test="password"]').type('secret_sauce')
      cy.get('#login-button').click() 
      cy.wait(1000) 
      cy.get(':nth-child(1) > .pricebar > .btn_primary').click()   
    })
  
    it('remover item ao carrinho', () => {
      cy.visit('https://www.saucedemo.com/v1/index.html')
      cy.get('[data-test="username"]').type('standard_user')
      cy.get('[data-test="password"]').type('secret_sauce')
      cy.get('#login-button').click() 
      cy.wait(1000) 
      cy.get(':nth-child(1) > .pricebar > .btn_primary').click() 
      cy.get('.btn_secondary').click()  
    })
  })