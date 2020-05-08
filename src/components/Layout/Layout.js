import React from 'react'

import { Navbar } from './Navbar'
import { Footer } from './Footer'

import { Wrapper, Content } from './styles'

const Layout = ({ children }) => {
  return (
    <Wrapper>
      <Navbar />
      <Content>{children}</Content>
      <Footer />
    </Wrapper>
  )
}

export { Layout }
