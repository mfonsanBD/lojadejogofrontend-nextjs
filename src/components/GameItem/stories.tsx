import { Meta, Story } from '@storybook/react'
import GameItem, { GameItemProps } from '.'
import gameItemMock from './mock'

export default {
  title: 'Game/GameItem',
  component: GameItem,
  args: gameItemMock
} as Meta

export const Default: Story<GameItemProps> = (args) => <GameItem {...args} />

export const WithPayment: Story<GameItemProps> = (args) => (
  <GameItem {...args} />
)

WithPayment.args = {
  paymentInfo: {
    number: '**** **** **** 4326',
    flag: 'mastercard',
    img: '/img/cards/mastercard.png',
    purchaseDate: 'Purchase made on 07/20/2020 at 20:32'
  },
  downloadLink: 'https://google.com'
}
