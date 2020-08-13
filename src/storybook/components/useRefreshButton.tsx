import React, { useState } from 'react'

import { RefreshButton } from './RefreshButton'

export const useRefreshButton = (): [React.FC, number] => {
  const [count, setCount] = useState(0)

  const RefreshButtonWithClickHandler = () => (
    <RefreshButton onClick={() => setCount(count + 1)} />
  )

  return [RefreshButtonWithClickHandler, count]
}
