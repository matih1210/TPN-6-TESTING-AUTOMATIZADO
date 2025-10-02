describe('Editar contacto', () => {
  it('edita el teléfono de un contacto existente', () => {
    const email = `user_${Date.now()}@test.com`
    const pass = 'Passw0rd!'

    // 1) Crear usuario (loggea automáticamente)
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

    // 3) Crear un contacto para editar
    cy.get('#add-contact').click()
    cy.get('#firstName').type('Ada')
    cy.get('#lastName').type('Lovelace')
    cy.get('#submit').click()
    cy.contains('Ada')

    // 4) Seleccionar contacto y editar
    cy.contains('Ada').click()
    cy.get('#edit-contact').click()

    // 5) Editar el teléfono
    cy.get('#phone').clear().type('123456789')
    cy.get('#submit').click()

    // 6) Validar cambios
    cy.contains('123456789')
  })
})
