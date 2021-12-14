import { Story, Meta } from '@storybook/react'
import GameInfo, { GameInfoProps } from '.'

import game from './mock'

export default {
  title: 'GameInfo',
  component: GameInfo,
  parameters: {
    backgrounds: {
      default: 'won-dark'
    },
    viewport: {
      defaultViewport: 'mobile2'
    }
  },
  args: { ...game }
} as Meta

export const Default: Story<GameInfoProps> = (args) => (
  <div style={{ maxWidth: '144rem', padding: '1.5rem', margin: '0 auto' }}>
    <GameInfo {...args} />
  </div>
)
