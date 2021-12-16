import { Story, Meta } from '@storybook/react'
import TextContent, { TextContentProps } from '.'

import textMock from './mock'

export default {
  title: 'Game/TextContent',
  component: TextContent,
  parameters: {
    backgrounds: {
      default: 'won-dark'
    }
  },
  args: { ...textMock }
} as Meta

export const Default: Story<TextContentProps> = (args) => (
  <TextContent {...args} />
)
