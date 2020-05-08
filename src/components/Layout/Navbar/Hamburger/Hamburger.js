import React from 'react'

import { Wrapper, Lines } from './styles'

const Hamburger = ({ navOpen, setNavOpen }) => {
  return (
    <Wrapper onClick={() => setNavOpen((prev) => !prev)} navOpen={navOpen}>
      <Lines navOpen={navOpen} />
    </Wrapper>
  )
}

export { Hamburger }
