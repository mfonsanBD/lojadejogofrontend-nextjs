import { Story, Meta } from '@storybook/react'
import GameDetails, { GameDetailsProps } from '.'
import details from './mock'

export default {
  title: 'Game/GameDetails',
  component: GameDetails,
  parameters: {
    backgrounds: {
      default: 'won-dark'
    }
  },
  args: { ...details },
  argTypes: {
    releaseDate: {
      control: {
        type: 'date'
      }
    },
    platforms: {
      control: {
        type: 'inline-check',
        options: ['windows', 'mac', 'linux']
      }
    },
    genres: {
      control: {
        type: 'inline-check',
        options: ['Narrative', 'Action', 'Adventure']
      }
    }
  }
} as Meta

export const Default: Story<GameDetailsProps> = (args) => (
  <div style={{ maxWidth: '130rem', margin: '0 auto' }}>
    <GameDetails {...args} />
  </div>
)
