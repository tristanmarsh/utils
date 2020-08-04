import 'react-app-polyfill/ie11'

import * as React from 'react'
import * as ReactDOM from 'react-dom'

import { MouseTransform } from '../.'
import { motion } from 'framer-motion'
import styled from '@emotion/styled'

const Card = styled(motion.div)`
  position: relative;
  display: inline-block;
  border: 1px solid #eee;
  background: #fff;
  border-radius: 0.5rem;
  padding: 0.75rem 1rem;

  :after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    box-shadow: 0 0 2rem hsla(0, 0%, 0%, 0.5);
    transition: opacity 300ms ease-out;
    border-radius: 0.5rem;
    opacity: 0;
  }

  :hover:after {
    opacity: 1;
  }

  img {
    margin: 0 auto;
    max-width: 100%;
  }
`

const App = () => {
  return (
    <div>
      {Array(8)
        .fill(0)
        .map((num, i) => (
          <MouseTransform angle={Math.pow(2, i)} key={num + i}>
            <Card
              initial={{
                scale: 0.98,
              }}
              whileHover={{
                scale: 1,
              }}
            >
              <h1>Check out my mouse position transform</h1>
              <img
                src="http://thecatapi.com/api/images/get?format=src&type=gif"
                alt="random cat gif from the cat api"
              />
            </Card>
          </MouseTransform>
        ))}
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
