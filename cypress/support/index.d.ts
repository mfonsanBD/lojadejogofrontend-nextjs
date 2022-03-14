// carregar as definições do module do Cypress
/// <reference types="cypress" />

declare namespace Cypress {
  interface Chainable {
    /**
     * COMANDO CUSTOMIZADO PARA VISITAR A PÁGINA DO GOOLE
     * @example cy.google()
     */
    google(): Chainable<Window>
  }
}
