import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'

import { theme } from './styles/theme'

import { Home } from './components/Home'
import { Color } from './components/Color'

const App = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/color/:color' component={Color} />

            <Route path='/' render={() => <div>404</div>} />
          </Switch>
        </BrowserRouter>
      </ThemeProvider>
    </>
  )
}

export default App
