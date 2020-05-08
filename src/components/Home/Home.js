import React from 'react'
import { Helmet } from 'react-helmet'

import { ColorInput } from '../ColorInput/index.js'

import { Layout } from '../Layout'

import { Container } from './styles'

const Home = ({ history }) => {
  return (
    <>
      <Helmet>
        <meta charSet='utf-8' />
        <title>Color Spec</title>
      </Helmet>
      <Layout>
        <Container>
          <h1>All About Color</h1>
          <ColorInput history={history} />
        </Container>
      </Layout>
    </>
  )
}

export { Home }
