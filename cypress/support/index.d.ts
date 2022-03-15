// carregar as definições do module do Cypress
/// <reference types="cypress" />

type ShowcaseAttributes = {
  name: string
  highlight?: boolean
}

declare namespace Cypress {
  interface Chainable {
    /**
     * COMANDO CUSTOMIZADO PARA VISITAR A PÁGINA DO GOOLE
     * @example cy.google()
     */
    google(): Chainable<Window>
    /**
     * COMANDO CUSTOMIZADO PARA PEGAR OS ELEMENTOS PELO data-cy
     * @example cy.getByDataCy('selector')
     */
     getByDataCy(selector: string): Chainable<Element>

    /**
     * COMANDO CUSTOMIZADO PARA VERIFICAR O BANNER NA PÁGINA
     * @example cy.shouldRenderBanner()
     */
     shouldRenderBanner(): Chainable<Element>

     /**
      * COMANDO CUSTOMIZADO PARA VERIFICAR O SHOWCASE NA PÁGINA
      * @example cy.shouldRenderShowcase()
      */
      shouldRenderShowcase(attr: ShowcaseAttributes): Chainable<Element>
  }
}
