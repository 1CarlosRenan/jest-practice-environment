/// <reference types="cypress" />

describe('Devbook app', () => {
  it('Visits the DevBook', () => {
    cy.visit('http://localhost:3000/') 
    cy.get('h2[data-test="heading"]').contains('Olá dev!')
  })

  it('Shows a book list', () => {
    cy.visit('http://localhost:3000/') 
    cy.get('div[data-test="book-list"]').should('exist')
    cy.get('div.book-item').should((books) => {
      expect(books).to.have.length(2);
      const titles = [...books].map(book => book.querySelector('h5').innerHTML)
      expect(titles).to.deep.equal(['Refactoring', 'Domain-driven design'])
    })
  })
})

