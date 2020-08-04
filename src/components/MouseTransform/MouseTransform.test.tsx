import * as ReactDOM from 'react-dom'

import { Default, Several } from './MouseTransform.stories'

import React from 'react'

describe('Mouse Transform', () => {
  it('renders mouse transform without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<Default />, div)
    ReactDOM.unmountComponentAtNode(div)
  })
  it('renders several mouse transforms without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<Several />, div)
    ReactDOM.unmountComponentAtNode(div)
  })
})
