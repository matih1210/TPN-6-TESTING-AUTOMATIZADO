// cypress/e2e/logout.cy.js
describe('Logout', () => {
  it('cierra sesión y redirige al login', () => {
    const email = `user_${Date.now()}@test.com`
    const pass = 'Passw0rd!'

    // 1) Ir directo a la pantalla de alta de usuario
    cy.visit('/addUser')  // <<--- clave

    // 2) Completar y crear usuario
    cy.get('form#add-user').should('be.visible').within(() => {
      cy.get('#firstName').type('Test')
      cy.get('#lastName').type('User')
      cy.get('#email').type(email)
      cy.get('#password').type(pass)
    })
    cy.get('#submit').click()

    // 3) Debería volver al login
    cy.location('pathname', { timeout: 10000 }).should('match', /contactList/i)

    // 6) Logout
    cy.get('#logout', { timeout: 10000 }).should('be.visible').click()

    // 7) Vuelve al login
    cy.location('pathname', { timeout: 10000 }).should('eq', '/')
  })
})
