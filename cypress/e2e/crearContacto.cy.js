describe('Crear contacto', () => {
  it('crea un contacto con nombre y apellido', () => {
    const email = `user_${Date.now()}@test.com`
    const pass = 'Passw0rd!'

    // 1) Crear usuario (esto ya loguea automáticamente y redirige a /contactList)
    cy.visit('/addUser')
    cy.get('form#add-user').within(() => {
      cy.get('#firstName').type('Tester')
      cy.get('#lastName').type('Account')
      cy.get('#email').type(email)
      cy.get('#password').type(pass)
    })
    cy.get('#submit').click()

    // 2) Confirmar que ya estamos en contactList
    cy.location('pathname').should('match', /contactlist/i)

    // 3) Click en "Add Contact"
    cy.get('#add-contact').should('be.visible').click()

    // 4) Completar formulario de contacto
    cy.get('#firstName').type('Ada')
    cy.get('#lastName').type('Lovelace')
    cy.get('#submit').click()

    // 5) Verificar que aparece en la lista
    cy.contains('Ada')
    cy.contains('Lovelace')
  })
})
