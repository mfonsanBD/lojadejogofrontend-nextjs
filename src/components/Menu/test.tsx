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

    expect(screen.getByText(/sign up/i)).toBeInTheDocument()
    expect(screen.getAllByText(/sign in/i)).toHaveLength(2)
    expect(screen.queryByText(/Favoritos/i)).not.toBeInTheDocument()
    expect(screen.queryByText(/Minha Conta/i)).not.toBeInTheDocument()
  })

  it('should show favoritos e minha conta when logged in', () => {
    renderWithTheme(<Menu username="mike" />)

    expect(screen.getAllByText(/Minha Conta/i)).toHaveLength(1)
    expect(screen.getAllByText(/Favoritos/i)).toHaveLength(1)
    expect(screen.queryByText(/Sign Up/i)).not.toBeInTheDocument()
    expect(screen.queryByText(/Sign In/i)).not.toBeInTheDocument()
  })
})
