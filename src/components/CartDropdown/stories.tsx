import { Story, Meta } from '@storybook/react'
import CartDropdown from '.'

import items from 'components/CartList/mock'

export default {
  title: 'CartDropdown',
  component: CartDropdown,
  parameters: {
    backgrounds: {
      default: 'won-dark'
    }
  }
} as Meta

export const Default: Story = (args) => (
  <div style={{ float: 'right' }}>
    <CartDropdown {...args} />
  </div>
)

Default.args = {
  cartContextValue: {
    items,
    quantity: items.length,
    total: 'R$ 300,00'
  }
}

export const IsEmpty: Story = () => (
  <div style={{ float: 'right' }}>
    <CartDropdown />
  </div>
)
