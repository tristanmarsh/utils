import { Global, css } from '@emotion/core'
import React, { FC, useState } from 'react'

import { MotionDefault } from '../animations/MotionDefault'
import { motion } from 'framer-motion'
import styled from '@emotion/styled'

const Page: FC<{ title: string }> = ({ title, children }) => {
  return children
}

const StyledTabSwitcher = styled(MotionDefault)`
  padding: 1rem;
  width: 100%;
  overflow: hidden;
  max-width: 40vw;
  background: #fff9;
  border-radius: 1rem;
  box-sizing: border-box;
  /* overflow-y: auto; */
  max-height: 20rem;

  button {
    border: none;
    color: transparent;
    margin-right: 1rem;
    border-radius: 0.5rem;
    font-size: 1rem;
  }
`

const Tab = styled(motion.button)`
  background: ${props => (props.active ? '#f107a3' : '#7b2ff7')};
`

const ChildrenWrapper = styled(motion.div)`
  display: flex;
  width: ${props => props.width}%;
  overflow-y: auto;
  max-height: 100%;
`

const WrapChild = styled(motion.div)`
  padding: 1rem;
  width: 100%;
  flex: 1;
  margin: 0 1rem;

  h1 {
    position: sticky;
    top: 0;
  }
`

const TabSwitcher: FC = ({ children }) => {
  const [tabIndex, setTabIndex] = useState(0)

  const changeTab = (newTabId: string) => {
    setTabIndex(newTabId)
  }

  const offset = 0 - Number(tabIndex) * (100 / children?.length)

  return (
    <StyledTabSwitcher>
      <Global
        styles={css`
          html,
          body {
            min-height: 100vh;
            padding: 0;
            margin: 0;
            color: #fffd;
            background: linear-gradient(250deg, #7b2ff7, #f107a3);
          }
        `}
      />

      {React.Children.map(children, (child, i) => {
        return (
          <Tab
            animate={{
              background: props => (props.active ? '#f107a3' : '#7b2ff7'),
            }}
            active={i === tabIndex}
            onClick={() => changeTab(i)}
          >
            {child.props.title}
          </Tab>
        )
      })}
      <motion.div
        drag="x"
        dragConstraints={{ left: 0, right: 0 }}
        dragElastic={1}
        onDragEnd={(e, { offset, velocity }) => {
          const swipe = swipePower(offset.x, velocity.x)
          if (swipe < -swipeConfidenceThreshold) {
            tabIndex < children.length - 1 && setTabIndex(tabIndex + 1)
          } else if (swipe > swipeConfidenceThreshold) {
            tabIndex > 0 && setTabIndex(tabIndex - 1)
          }
        }}
      >
        <ChildrenWrapper
          animate={{ x: `${offset}%` }}
          transition={{
            type: 'spring',
            stiffness: 1000,
            damping: 80,
          }}
          width={100 * children?.length}
        >
          {React.Children.map(children, child => {
            return <WrapChild animate={{ scale: 1 }}>{child}</WrapChild>
          })}
        </ChildrenWrapper>
      </motion.div>
    </StyledTabSwitcher>
  )
}

export { TabSwitcher, Page }

/**
 * Experimenting with distilling swipe offset and velocity into a single variable, so the
 * less distance a user has swiped, the more velocity they need to register as a swipe.
 * Should accomodate longer swipes and short flicks without having binary checks on
 * just distance thresholds and velocity > 0.
 */
const swipeConfidenceThreshold = 1000
const swipePower = (offset: number, velocity: number) => {
  return Math.abs(offset) * velocity
}
