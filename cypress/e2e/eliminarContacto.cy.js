describe('Eliminar contacto', () => {
  it('elimina un contacto existente', () => {
    const email = `user_${Date.now()}@test.com`
    const pass = 'Passw0rd!'

    // 1) Crear usuario (loguea automáticamente)
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

    // 3) Crear contacto para eliminar
    cy.get('#add-contact').click()
    cy.get('#firstName').type('Ada')
    cy.get('#lastName').type('Lovelace')
    cy.get('#submit').click()
    cy.contains('Ada')

    // 4) Seleccionar contacto y eliminar
    cy.contains('Ada').click()
    cy.get('#delete').click()
    
    // 5) Verificar que ya no existe
    cy.contains('Ada').should('not.exist')
  })
})
