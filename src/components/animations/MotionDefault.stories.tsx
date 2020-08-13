import { AnimatePresence, motion } from 'framer-motion'
import { IMotionType, MotionDefault } from './MotionDefault'

import React from 'react'
import styled from '@emotion/styled'
import { useRefreshButton } from '../../storybook/components/useRefreshButton'

export default {
  title: 'MotionDefault',
}

const Card = styled(motion.div)`
  position: relative;
  display: inline-block;
  border: 1px solid #eee;
  background: #fff;
  border-radius: 0.5rem;
  padding: 0.75rem 1rem;

  img {
    margin: 0 auto;
    max-width: 100%;
  }
`

export const FadeInDown = () => {
  const [RefreshButton, count] = useRefreshButton()

  return (
    <>
      <RefreshButton />

      <MotionDefault type={IMotionType.fadeInDown} key={count}>
        <Card>
          <h1>Check out my mouse position transform</h1>
          <img
            src="http://thecatapi.com/api/images/get?format=src&type=gif"
            alt="random cat gif from the cat api"
          />
        </Card>
      </MotionDefault>
    </>
  )
}

export const Fade = () => {
  const [RefreshButton, count] = useRefreshButton()

  return (
    <>
      <RefreshButton>Hey</RefreshButton>

      <MotionDefault type={IMotionType.fade} key={count}>
        <Card>
          <h1>Check out my mouse position transform</h1>
          <img
            src="http://thecatapi.com/api/images/get?format=src&type=gif"
            alt="random cat gif from the cat api"
          />
        </Card>
      </MotionDefault>
    </>
  )
}

export const FadeHeight = () => {
  const [RefreshButton, count] = useRefreshButton()

  return (
    <>
      <RefreshButton />

      <AnimatePresence key={count}>
        <MotionDefault
          type={IMotionType.fadeHeight}
          key={count}
          transition={{ duration: 0.4 }}
          style={{ overflow: 'hidden' }}
        >
          <Card style={{ overflow: 'hidden' }}>
            <h1>Fade Height</h1>

            <img
              src="http://thecatapi.com/api/images/get?format=src&type=gif"
              alt="random cat gif from the cat api"
            />
          </Card>
        </MotionDefault>
      </AnimatePresence>
    </>
  )
}
