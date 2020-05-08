import { createGlobalStyle } from 'styled-components'
import { normalize } from 'styled-normalize'

export const GlobalStyle = createGlobalStyle`
  ${normalize}

  :root {
    --width: min(var(--max-width), 90%);
    --min-width: 700px;
    --max-width: 1140px;
  }

  html {
    box-sizing: border-box;
    font-family: 'Roboto';
    font-size: clamp(12px, 16px, 3vw)
  }

  body: {
    height: 100%;
  }



  *, *:before, *:after {
    box-sizing: inherit;
  }
`
