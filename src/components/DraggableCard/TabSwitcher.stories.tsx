import { Meta, Story } from '@storybook/react/types-6-0'
import { Page, TabSwitcher } from './TabSwitcher'

import React from 'react'

export default {
  title: 'DraggableCard',
  component: TabSwitcher,
} as Meta

const List = () => (
  <ul>
    {Array(Math.floor(50 - 40 * Math.random()))
      .fill(0)
      .map((x, i) => (
        <li>{i}</li>
      ))}
  </ul>
)

export const Default: Story = () => (
  <>
    <h1>TabSwitcher with Compound Components</h1>

    <TabSwitcher>
      {/* TODO: TabSwitcherNav render props ({tabs: [{title, index, setIndex}], activeIndex}) => {} */}
      <Page title="Hobbies">
        <h1>Hobbies</h1>
        <List />
      </Page>
      <Page title="Recent">
        <h1>Recent</h1>
        <List />
      </Page>
      <Page title="Opportunities">
        <h1>Opportunities</h1>
        <List />
      </Page>
      <Page title="Notes">
        <h1>Notes</h1>
        <List />
      </Page>
    </TabSwitcher>
  </>
)
