describe('Restricción sin sesión', () => {
  it('bloquea acceso a lista de contactos si no hay login', () => {
    cy.request({
      url: '/contacts',
      failOnStatusCode: false
    }).then((resp) => {
      expect(resp.status).to.eq(401)  // comprobamos que devuelve 401
    })
  })
})
