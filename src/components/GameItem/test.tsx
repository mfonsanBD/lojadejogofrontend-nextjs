import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'
import gameItemMock from './mock'

import GameItem from '.'

describe('<GameItem />', () => {
  it('should render the item', () => {
    renderWithTheme(<GameItem {...gameItemMock} />)

    expect(
      screen.getByRole('heading', { name: gameItemMock.title })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('img', { name: gameItemMock.title })
    ).toHaveAttribute('src', gameItemMock.img)

    expect(screen.getByText('R$ 215,00')).toBeInTheDocument()
  })

  it('should render the item with download link', () => {
    const downloadLink = 'https://google.com'

    renderWithTheme(<GameItem {...gameItemMock} downloadLink={downloadLink} />)

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

    renderWithTheme(<GameItem {...gameItemMock} paymentInfo={paymentInfo} />)

    expect(screen.getByRole('img', { name: paymentInfo.flag })).toHaveAttribute(
      'src',
      paymentInfo.image
    )
    expect(screen.getByText(paymentInfo.cardNumber)).toBeInTheDocument()
    expect(screen.getByText(paymentInfo.purchaseDate)).toBeInTheDocument()
  })
})
