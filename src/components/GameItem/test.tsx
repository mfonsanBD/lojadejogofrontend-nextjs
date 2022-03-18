import userEvent from '@testing-library/user-event'
import { CartContextDefaultValues } from 'hooks/use-cart'
import { render, screen } from 'utils/test-utils'
import GameItem from '.'
import gameItemMock from './mock'

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

    const removeLink = screen.getByText(/remover/i)
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
      number: '**** **** **** 4326',
      flag: 'mastercard',
      img: '/img/cards/mastercard.png',
      purchaseDate: 'Compra feita em 07/20/2020 at 20:32'
    }

    render(<GameItem {...gameItemMock} paymentInfo={paymentInfo} />)

    expect(screen.getByRole('img', { name: paymentInfo.flag })).toHaveAttribute(
      'src',
      paymentInfo.img
    )
    expect(screen.getByText(paymentInfo.number)).toBeInTheDocument()
    expect(screen.getByText(paymentInfo.purchaseDate)).toBeInTheDocument()
  })

  it('should render free game when theres no paymentInfo', () => {
    const paymentInfo = {
      number: 'Jogo Gratuito',
      flag: null,
      img: null,
      purchaseDate: 'Compra feita em 07/20/2020 at 20:32'
    }

    render(<GameItem {...gameItemMock} paymentInfo={paymentInfo} />)

    expect(screen.getByText(/jogo gratuito/i)).toBeInTheDocument()
  })
})
