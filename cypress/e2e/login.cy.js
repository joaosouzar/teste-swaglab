//cenário de teste
describe('login', () => {
  //Caso de teste
  it('Login com sucesso', () => {
    cy.visit('https://www.saucedemo.com/v1/index.html')
    cy.get('[data-test="username"]').type('standard_user')
    cy.get('[data-test="password"]').type('secret_sauce')
    cy.get('#login-button').click()
  })

  it('Login com username em letras maiúsculas', () => {
    cy.visit('https://www.saucedemo.com/v1/index.html')
    cy.get('[data-test="username"]').type('STANDARD_USER')
    cy.get('[data-test="password"]').type('secret_sauce')
    cy.get('#login-button').click()    
  })

  it('Login com username em branco', () => {
    cy.visit('https://www.saucedemo.com/v1/index.html')
    cy.get('[data-test="username"]').type('{enter}')
    cy.get('[data-test="password"]').type('secret_sauce')
    cy.get('#login-button').click()    
  })

    it('Login com password em branco', () => {
    cy.visit('https://www.saucedemo.com/v1/index.html')
    cy.get('[data-test="username"]').type('standard_user')
    cy.get('[data-test="password"]').type(' ')
    cy.get('#login-button').click()    
  })

  it('Login com password inválida', () => {
    cy.visit('https://www.saucedemo.com/v1/index.html')
    cy.get('[data-test="username"]').type('standard_user')
    cy.get('[data-test="password"]').type('pass_qualquer')
    cy.get('#login-button').click()    
  })

})
  


