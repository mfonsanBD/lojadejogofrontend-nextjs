/// <reference path="../support/index.d.ts" />

describe('Game Page', () => {
  before(() => {
    cy.visit('/game/elex-ii')
  })

  it('should render game page sections', () => {
    // testa a section de gamInfo
    cy.getByDataCy("gameInfo").within(() => {
      cy.findByRole('heading', {name: /elex ii/i}).should('exist')
      cy.findByText(/^ELEX II is the sequel to ELEX, the vintage/i).should('exist')
      cy.findByText('$116.99').should('exist')
      cy.findByRole('button', {name: /add to cart/i}).should('exist')
    })

    // testa a section de gallery
    cy.findAllByRole('button', { name: /thumb \-/i }).should('have.length.gt', 0)

    // testa a section de description
    cy.getByDataCy("content").within(() => {
      cy.findByRole('heading', {name: /description/i}).should('exist')
    })

    cy.getByDataCy("content").children().should('have.length.at.least', 2)

    // testa a section de game details
    cy.getByDataCy("gameDetails").within(() => {
      cy.findByRole('heading', {name: /developer/i}).should('exist')
      cy.findByRole('heading', {name: /release date/i}).should('exist')
      cy.findByRole('heading', {name: /platforms/i}).should('exist')
      cy.findByRole('heading', {name: /publishers/i}).should('exist')
      cy.findByRole('heading', {name: /rating/i}).should('exist')
      cy.findByRole('heading', {name: /genres/i}).should('exist')

      cy.findByText(/piranha bytes/i).should('exist')
      cy.findByText(/feb 27, 2022/i).should('exist')
      cy.findByRole('img', {name: /windows/i}).should('exist')
      cy.findByText(/thq nordic gmbh/i).should('exist')
      cy.findByText(/free/i).should('exist')
      cy.findByText('Sci-fi / Action / Role-playing').should('exist')
    })

    // testa as showcases
    cy.shouldRenderShowcase({name: "Upcoming Games", highlight: true})
    cy.shouldRenderShowcase({name: "You may like these games", highlight: false})
  })

  it('should add/remove game in cart', () => {
    // add to cart
    cy.getByDataCy("gameInfo").within(() => {
      cy.findByRole('button', {name: /add to cart/i}).click()
      cy.findByRole('button', {name: /remove from cart/i}).should('exist')
    })

    // verifica se tem item no carrinho
    cy.findAllByLabelText(/cart items/i).first().should('have.text', 1).click()

    // verifica os dados de dentro do carrinho
    cy.getByDataCy("cartList").within(() => {
      cy.findByRole('heading', {name: /elex ii/i}).should('exist')
    })

    // fecha o dropdown
    cy.findAllByLabelText(/cart items/i).first().click()

    // remove o item do carrinho
    cy.getByDataCy("gameInfo").within(() => {
      cy.findByRole('button', {name: /remove from cart/i}).click()
      cy.findByRole('button', {name: /add to cart/i}).should('exist')
    })

    // verifica se o carrinho está de fato vazio
    cy.findAllByLabelText(/cart items/i).should('not.exist')
  })
})
