import React from 'react'
import chroma from 'chroma-js'

import { Container, Ul, Li, Link } from './styles'

const Nav = ({ navOpen, setNavOpen }) => {
  const handleClick = () => setNavOpen(false)

  return (
    <Container navOpen={navOpen}>
      <Ul>
        <Li>
          <Link exact to='/' onClick={handleClick}>
            Home
          </Link>
        </Li>
        <Li>
          <Link
            to={`/color/${chroma.random().hex().slice(1)}`}
            onClick={handleClick}
          >
            Color
          </Link>
        </Li>
        <Li>
          <Link to='/gradient' onClick={handleClick}>
            Gradient
          </Link>
        </Li>
      </Ul>
    </Container>
  )
}

export { Nav }
