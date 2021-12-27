import { Story, Meta } from '@storybook/react'
import CartDropdown, { CartDropdownProps } from '.'

import cartListMock from 'components/CartList/mock'

export default {
  title: 'CartDropdown',
  component: CartDropdown,
  args: {
    items: cartListMock,
    total: 'R$ 440,00'
  },
  parameters: {
    backgrounds: {
      default: 'won-dark'
    }
  }
} as Meta

export const Default: Story<CartDropdownProps> = (args) => (
  <div style={{ float: 'right' }}>
    <CartDropdown {...args} />
  </div>
)

export const IsEmpty: Story<CartDropdownProps> = () => (
  <div style={{ float: 'right' }}>
    <CartDropdown />
  </div>
)
