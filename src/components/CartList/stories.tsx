import { Story, Meta } from '@storybook/react'
import CartList, { CartListProps } from '.'
import itemsMock from './mock'

export default {
  title: 'CartList',
  component: CartList,
  args: { items: itemsMock, total: 'R$ 430,00' },
  argTypes: {
    items: {
      type: ''
    }
  },
  parameters: {
    backgrounds: {
      default: 'won-dark'
    }
  }
} as Meta

export const Default: Story<CartListProps> = (args) => (
  <div style={{ maxWidth: 800, margin: '0 auto' }}>
    <CartList {...args} />
  </div>
)

export const WithButton: Story<CartListProps> = (args) => (
  <div style={{ maxWidth: 800, margin: '0 auto' }}>
    <CartList {...args} hasButton />
  </div>
)
