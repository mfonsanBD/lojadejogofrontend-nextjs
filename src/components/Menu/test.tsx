import { fireEvent, screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import Menu from '.'

describe('<Menu />', () => {
  it('should render the menu', () => {
    renderWithTheme(<Menu />)
    expect(screen.getByLabelText(/open menu/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/search/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/open shopping cart/i)).toBeInTheDocument()
  })

  it('should handle the open/close mobile menu', () => {
    renderWithTheme(<Menu />)
    //selecionar o menufull
    const fullMenuElement = screen.getByRole('navigation', { hidden: true })
    //verificar se o menu está escondido
    expect(fullMenuElement.getAttribute('aria-hidden')).toBe('true')
    expect(fullMenuElement).toHaveStyle({ opacity: 0 })
    //clicar no botão de abrir o menu e verificar se ele abriu
    fireEvent.click(screen.getByLabelText(/open menu/i))
    expect(fullMenuElement.getAttribute('aria-hidden')).toBe('false')
    expect(fullMenuElement).toHaveStyle({ opacity: 1 })
    //clicar no botão de fechar o menu e verificar se ele fechou
    fireEvent.click(screen.getByLabelText(/close menu/i))
    expect(fullMenuElement.getAttribute('aria-hidden')).toBe('true')
    expect(fullMenuElement).toHaveStyle({ opacity: 0 })
  })

  it('should show register box when logged out', () => {
    renderWithTheme(<Menu />)

    expect(screen.getByText(/Cadastre-se/i)).toBeInTheDocument()
    expect(screen.getByText(/Acessar Agora/i)).toBeInTheDocument()
    expect(screen.queryByText(/Favoritos/i)).not.toBeInTheDocument()
    expect(screen.queryByText(/Minha Conta/i)).not.toBeInTheDocument()
  })

  it('should show favoritos e minha conta when logged in', () => {
    renderWithTheme(<Menu username="mike" />)
    expect(screen.getByText(/Favoritos/i)).toBeInTheDocument()
    expect(screen.getByText(/Minha Conta/i)).toBeInTheDocument()
    expect(screen.queryByText(/Cadastre-se/i)).not.toBeInTheDocument()
    expect(screen.queryByText(/Acessar Agora/i)).not.toBeInTheDocument()
  })
})
