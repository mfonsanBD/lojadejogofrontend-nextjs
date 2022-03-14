/// <reference path="../support/index.d.ts" />

describe('Cypress TS', () => {
  it('should go to Google', () => {
    cy.google()
  })

  it('should change light/dark theme on WJS', () => {
    cy.visit('https://willianjusten.com.br')

    cy.findByTitle(/Mudar o tema/i).click()
    cy.get('.light').should('exist')

    cy.findByTitle(/Mudar o tema/i).click()
    cy.get('.dark').should('exist')
  })

  it('should visit won games site', () => {
    cy.visit('https://won-games-self.vercel.app')
    cy.findByText(/Defy Death 1/i).should('exist')
  });
})
