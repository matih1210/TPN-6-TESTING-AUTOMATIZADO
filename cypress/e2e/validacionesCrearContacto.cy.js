describe('Validaciones en creación de contacto', () => {
  beforeEach(() => {
    const email = `user_${Date.now()}@test.com`
    const pass = 'Passw0rd!'

    // Creamos usuario y logueamos automáticamente
    cy.visit('/addUser')
    cy.get('form#add-user').within(() => {
      cy.get('#firstName').type('Tester')
      cy.get('#lastName').type('Account')
      cy.get('#email').type(email)
      cy.get('#password').type(pass)
    })
    cy.get('#submit').click()

    // Ya estamos en contactList
    cy.location('pathname').should('match', /contactlist/i)

    // Ir a crear contacto
    cy.get('#add-contact').click()
    cy.location('pathname').should('match', /addcontact/i)
  })

  it('no permite guardar sin Apellido (LastName requerido)', () => {
    cy.get('#firstName').type('Grace')
    cy.get('#submit').click()

    // Sigue en el formulario de addContact (no redirige a la lista)
    cy.location('pathname').should('match', /addcontact/i)
    // Verificar que el campo lastName sigue presente
    cy.get('#lastName').should('be.visible')
  })

  it('no permite guardar sin Nombre (FirstName requerido)', () => {
    cy.get('#lastName').type('Hopper')
    cy.get('#submit').click()

    // Sigue en el formulario
    cy.location('pathname').should('match', /addcontact/i)
    // Verificar que el campo firstName sigue presente
    cy.get('#firstName').should('be.visible')
  })
})
