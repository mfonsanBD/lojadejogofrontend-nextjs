import { render, screen } from 'utils/test-utils'
import gameItemMock from './mock'

import GameItem from '.'
import { CartContextDefaultValues } from 'hooks/use-cart'
import userEvent from '@testing-library/user-event'

describe('<GameItem />', () => {
  it('should render the item', () => {
    render(<GameItem {...gameItemMock} />)

    expect(
      screen.getByRole('heading', { name: gameItemMock.title })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('img', { name: gameItemMock.title })
    ).toHaveAttribute('src', gameItemMock.img)

    expect(screen.getByText('R$ 215,00')).toBeInTheDocument()
  })

  it('should render remove if the items is inside the cart and call remove', () => {
    const cartProviderProps = {
      ...CartContextDefaultValues,
      isInCart: () => true,
      removeFromCart: jest.fn()
    }

    render(<GameItem {...gameItemMock} />, { cartProviderProps })

    const removeLink = screen.getByText(/remove/i)
    expect(removeLink).toBeInTheDocument()

    userEvent.click(removeLink)
    expect(cartProviderProps.removeFromCart).toHaveBeenCalledWith('1')
  })

  it('should render the item with download link', () => {
    const downloadLink = 'https://google.com'

    render(<GameItem {...gameItemMock} downloadLink={downloadLink} />)

    expect(
      screen.getByRole('link', { name: `Get ${gameItemMock.title} here` })
    ).toHaveAttribute('href', downloadLink)
  })

  it('should render the payment info', () => {
    const paymentInfo = {
      cardNumber: '**** **** **** 4326',
      flag: 'mastercard',
      image: '/img/cards/mastercard.png',
      purchaseDate: 'Purchase made on 07/20/2020 at 20:32'
    }

    render(<GameItem {...gameItemMock} paymentInfo={paymentInfo} />)

    expect(screen.getByRole('img', { name: paymentInfo.flag })).toHaveAttribute(
      'src',
      paymentInfo.image
    )
    expect(screen.getByText(paymentInfo.cardNumber)).toBeInTheDocument()
    expect(screen.getByText(paymentInfo.purchaseDate)).toBeInTheDocument()
  })
})
