import React, { FunctionComponent } from 'react'

import { motion } from 'framer-motion'

export enum IMotionType {
  fade,
  fadeHeight,
  fadeInDown,
}

interface IMotionDefaultProps {
  type?: IMotionType
  [propName: string]: any
}

/**
 * @name MotionDefault
 * @desc Preconfigured framer-motion component which avoids mobile safari bugs and provides an escape hatch to pass props directly to motion.div
 * @param {IMotionType} type enum selecting the predefined animations
 */
export const MotionDefault: FunctionComponent<IMotionDefaultProps> = ({
  type = IMotionType.fadeInDown,
  children,
  ...otherProps
}) => {
  const motionPropsMap = {
    [IMotionType.fadeHeight]: {
      initial: { height: 0, opacity: 0 },
      animate: { height: 'auto', opacity: 1 },
      exit: { height: 0, opacity: 0 },
    },
    [IMotionType.fadeInDown]: {
      initial: { y: -50, height: 0, opacity: 0 },
      animate: { y: 0, height: 'auto', opacity: 1 },
      exit: { y: 0, height: 0, opacity: 0 },
    },
    [IMotionType.fade]: {
      initial: { opacity: 0 },
      animate: { opacity: 1 },
      exit: { opacity: 0 },
    },
  }

  const motionProps = motionPropsMap[type]

  return (
    <motion.div {...motionProps} {...otherProps}>
      {children}
    </motion.div>
  )
}
