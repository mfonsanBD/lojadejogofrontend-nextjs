import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import itemsMock from './mock'

import CartList from '.'

describe('<CartList />', () => {
  it('should render the cart list', () => {
    const { container } = renderWithTheme(
      <CartList items={itemsMock} total="R$ 430,00" />
    )

    expect(screen.getAllByRole('heading')).toHaveLength(2)
    expect(screen.getByText('R$ 430,00')).toHaveStyle({ color: '#F231A5' })

    expect(container.firstChild).toMatchSnapshot()
  })
})
