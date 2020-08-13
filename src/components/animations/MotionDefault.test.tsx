import * as ReactDOM from 'react-dom'

import { Fade, FadeHeight, FadeInDown } from './MotionDefault.stories'

import React from 'react'

describe('MotionDefault', () => {
  it('renders Fade without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<Fade />, div)
    ReactDOM.unmountComponentAtNode(div)
  })
  it('renders FadeHeight without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<FadeHeight />, div)
    ReactDOM.unmountComponentAtNode(div)
  })
  it('renders FadeInDown without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<FadeInDown />, div)
    ReactDOM.unmountComponentAtNode(div)
  })
})
