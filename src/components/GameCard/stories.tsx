import { Story, Meta } from '@storybook/react'
import GameCard, { GameCardProps } from '.'

export default {
  title: 'GameCard',
  component: GameCard,
  argTypes: {
    onFav: { action: 'clicked' },
    ribbon: { type: 'string' }
  },
  args: {
    img: 'https://source.unsplash.com/user/willianjusten/300x140',
    title: 'Population Zero',
    slug: 'population-zero',
    developer: 'Rockstar Games',
    price: 235,
    promotionalPrice: 200
  }
} as Meta

export const Default: Story<GameCardProps> = (args) => (
  <div style={{ width: '30rem' }}>
    <GameCard {...args} />
  </div>
)

Default.parameters = {
  layout: 'fullscreen'
}

export const WithRibbon: Story<GameCardProps> = (args) => (
  <div style={{ maxWidth: '30rem' }}>
    <GameCard {...args} />
  </div>
)

WithRibbon.args = {
  ribbon: '20% off',
  ribbonSize: 'small',
  ribbonColor: 'primary'
}
WithRibbon.parameters = {
  layout: 'fullscreen'
}
