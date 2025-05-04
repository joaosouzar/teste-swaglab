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
  


