import React from 'react'

import LogoSVG from '../../../images/ColorSpecLogoWhite.svg'

import { Wrapper, Container, Logo } from './styles'

const Footer = () => {
  return (
    <Wrapper>
      <Container>
        <Logo src={LogoSVG} />
      </Container>
    </Wrapper>
  )
}

export { Footer }
