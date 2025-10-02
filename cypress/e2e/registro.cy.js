describe('Registro de usuario', () => {
  it('registra un usuario válido (first, last, email, password)', () => {
    // 1) Ir al login (o a la home si redirige al login)
    cy.visit('/login', { failOnStatusCode: false })

    // 2) Ir al Add User
   cy.visit('/addUser', { failOnStatusCode: false })
   cy.get('form#add-user', { timeout: 10000 }).should('be.visible')

    // 3) Confirmar que estamos en /addUser
    cy.location('pathname', { timeout: 10000 })
      .should('match', /addUser/i)

    // 4) Completar dentro del <form id="add-user">
    cy.get('form#add-user', { timeout: 10000 }).should('be.visible').within(() => {
      cy.get('#firstName').should('be.visible').type('Grace')
      cy.get('#lastName').type('Hopper')
      cy.get('#email').type(`user_${Date.now()}@test.com`)
      cy.get('#password').type('Passw0rd!')
    })

    // 5) Enviar (el botón está fuera del form pero con form="add-user")
    cy.get('#submit').click()

    // 6) Debería ir a la lista de contactos
    cy.location('pathname', { timeout: 10000 }).should('match', /contactList/i)
    cy.contains(/contacts|contact list|contactos/i)
  })
})
