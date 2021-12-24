import { Story, Meta } from '@storybook/react'
import ExploreSidebar, { ExploreSidebarProps } from '.'

import mock from './mock'

export default {
  title: 'ExploreSidebar',
  component: ExploreSidebar,
  args: {
    items: mock
  },
  parameters: {
    backgrounds: {
      default: 'won-dark'
    }
  }
} as Meta

export const Default: Story<ExploreSidebarProps> = (args) => (
  <div style={{ maxWidth: 350 }}>
    <ExploreSidebar {...args} />
  </div>
)

export const WithInitialValues: Story<ExploreSidebarProps> = (args) => (
  <div style={{ maxWidth: 350 }}>
    <ExploreSidebar
      {...args}
      initialValues={{
        windows: true,
        sort_by: 'low-to-high',
        'under-50': true,
        action: true
      }}
    />
  </div>
)
