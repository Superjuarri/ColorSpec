import styled from 'styled-components'
import { readableColor } from 'polished'

export const Container = styled.div`
  margin: 0 auto;
  width: var(--width);
`

export const Name = styled.h1``

export const ColorContainer = styled.div`
  max-width: 100%;

  margin: 2em 0;

  display: grid;
  gap: 2em;
  grid-template-columns: 100%;
  grid-template-rows: 1fr 1fr;

  @media screen and (min-width: 750px) {
    grid-template-columns: 1fr auto;
    grid-template-rows: 1fr;
  }
`

export const ColorSquare = styled.div.attrs(({ color }) => ({
  style: {
    backgroundColor: color,
    color: readableColor(color),
  },
}))`
  width: 100%;
  height: 100%;

  border-radius: 3px;

  transition: 0.5s ease-in-out;

  h1 {
    margin: 0.5em;

    span {
      font-size: 0.5em;
    }
  }
`
