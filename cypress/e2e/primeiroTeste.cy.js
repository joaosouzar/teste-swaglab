//cenário de teste
describe('login', () => {
  //Caso de teste
  it('Login com credenciais válidas', () => {
    cy.visit('https://www.saucedemo.com/v1/index.html')
    cy.get('[data-test="username"]').type('standard_user')
    cy.get('[data-test="password"]').type('secret_sauce')
    cy.get('#login-button').click()
  })

  it('Login username inválido', () => {
    cy.visit('https://www.saucedemo.com/v1/index.html')
    cy.get('[data-test="username"]').type('user_qualquer')
    cy.get('[data-test="password"]').type('secret_sauce')
    cy.get('#login-button').click()    
  })

  it('Login com senha inválida', () => {
    cy.visit('https://www.saucedemo.com/v1/index.html')
    cy.get('[data-test="username"]').type('standard_user')
    cy.get('[data-test="password"]').type('pass_qualquer')
    cy.get('#login-button').click()    
  })

  it('Login com username vazio', () => {
    cy.visit('https://www.saucedemo.com/v1/index.html')
    cy.get('[data-test="username"]').type('{enter}')
    cy.get('[data-test="password"]').type('secret_sauce')
    cy.get('#login-button').click()    
  })

  it('Login com senha vazia', () => {
    cy.visit('https://www.saucedemo.com/v1/index.html')
    cy.get('[data-test="username"]').type('standard_user')
    cy.get('[data-test="password"]').type(' ')
    cy.get('#login-button').click()    
  })
})
  
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

describe('Checkout', () => {

  it('Login com credenciais válidas', () => {
    cy.visit('https://www.saucedemo.com/v1/index.html')
    cy.get('[data-test="username"]').type('standard_user')
    cy.get('[data-test="password"]').type('secret_sauce')
    cy.get('#login-button').click()
    cy.wait(1000) 
    cy.get(':nth-child(1) > .pricebar > .btn_primary').click()
    cy.get('.fa-layers-counter').click()
    cy.get('.btn_action').click()
    cy.get('[data-test="firstName"]').type('joao')
    cy.get('[data-test="lastName"]').type('manoel')
    cy.get('[data-test="postalCode"]').type('0000-000')
    cy.wait(1000)
    cy.get('.btn_primary').click()
    cy.get('.btn_action').click()
   })
})


