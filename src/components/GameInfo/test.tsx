import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import GameInfo from '.'

const props = {
  title: 'My Game',
  description: 'My Game Description',
  price: '120.00'
}

describe('<GameInfo />', () => {
  it('should render game information', () => {
    const { container } = renderWithTheme(<GameInfo {...props} />)

    expect(
      screen.getByRole('heading', { name: /my game/i })
    ).toBeInTheDocument()

    expect(screen.getByText(/my game description/i)).toBeInTheDocument()
    expect(screen.getByText(/\$120.00/)).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render buttons', () => {
    renderWithTheme(<GameInfo {...props} />)

    expect(
      screen.getByRole('button', { name: /add to cart/i })
    ).toBeInTheDocument()
    expect(
      screen.getByRole('button', { name: /wishlist/i })
    ).toBeInTheDocument()
  })
})
