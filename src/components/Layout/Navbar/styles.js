import styled from 'styled-components'

export const Wrapper = styled.div`
  z-index: 500;

  background-color: #ffffff;

  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
    0 4px 6px -2px rgba(0, 0, 0, 0.05);

  margin-bottom: 3em;
`

export const Container = styled.div`
  margin: 0 auto;
  width: var(--width);

  display: flex;
  align-items: center;
  justify-content: center;
`

export const Logo = styled.img`
  height: 2em;

  margin: 1.5em;
`
