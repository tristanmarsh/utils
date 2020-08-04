import { HTMLMotionProps, motion, useSpring, useTransform } from 'framer-motion'
import React, { FC } from 'react'

import styled from '@emotion/styled'

interface ParentProps {
  perspective: number
}

const Parent = styled(motion.div)<ParentProps>`
  display: inline-block;
  perspective: ${props => props.perspective};
`

interface MouseTransformProps extends HTMLMotionProps<'div'> {
  angle?: number
  perspective?: number
}

// TODO: convert HOC to hook...
// const [x, y] = useMouseTransform({onMouseMove, options: {perspective, angle} }): {transformX, transformY}
export const MouseTransform: FC<MouseTransformProps> = ({
  angle = 5,
  children,
  perspective = 1000,
  ...otherProps
}) => {
  const x = useSpring(50)
  const y = useSpring(50)

  const rotateX = useTransform(y, [0, 100], [angle, -angle])
  const rotateY = useTransform(x, [0, 100], [-angle, angle])

  const mouseMove = (event: MouseEvent | any) => {
    var rect = event.currentTarget.getBoundingClientRect()
    const relative = {
      x: event.clientX - rect.left,
      y: event.clientY - rect.top,
    }
    x.set((relative.x / rect.width) * 100)
    y.set((relative.y / rect.height) * 100)
  }

  const mouseLeave = () => {
    x.set(50)
    y.set(50)
  }

  return (
    <Parent
      perspective={perspective}
      onMouseMove={mouseMove}
      onMouseOut={mouseLeave}
      whileHover={{ position: 'relative', zIndex: 1 }}
      {...otherProps}
    >
      <motion.div
        style={{
          rotateX,
          rotateY,
        }}
      >
        {children}
      </motion.div>
    </Parent>
  )
}
