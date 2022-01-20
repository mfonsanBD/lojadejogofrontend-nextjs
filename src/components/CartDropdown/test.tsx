import { render, screen } from 'utils/test-utils'

import cartListMock from 'components/CartList/mock'

import CartDropdown from '.'

describe('<CartDropdown />', () => {
  it('should render <CartIcon /> and its badge', () => {
    render(<CartDropdown items={cartListMock} total="R$ 440,00" />)

    expect(screen.getByLabelText(/shopping cart/i)).toBeInTheDocument()
    expect(screen.getByText(`${cartListMock.length}`)).toBeInTheDocument()
  })

  it('should render dropdown content with cart items and total', () => {
    render(<CartDropdown items={cartListMock} total="R$ 440,00" />)

    expect(screen.getByText('R$ 440,00')).toBeInTheDocument()
    expect(screen.getByText(`${cartListMock[0].title}`)).toBeInTheDocument()
  })
})
