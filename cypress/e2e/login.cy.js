describe('Login', () => {
  it('rechaza credenciales inválidas', () => {
    cy.visit('/')
    cy.get('#email').type('noexiste@test.com')
    cy.get('#password').type('clave123')
    cy.contains('Submit').click()
    cy.contains(/invalid|error|incorrect/i)
  })

  it('acepta credenciales válidas', () => {
    cy.visit('/')
    cy.get('#email').type('usuario.valido@test.com')
    cy.get('#password').type('Passw0rd!')
    cy.contains('Submit').click()
    cy.contains(/contacts|contact list/i)
  })
})
