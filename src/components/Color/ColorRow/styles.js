import { Link } from 'react-router-dom'

import styled from 'styled-components'
import { readableColor } from 'polished'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 1em;

  strong {
    color: #67717d;
    display: block;
    font-size: 12px;
    font-weight: normal;
    padding-top: 10px;
    padding-bottom: 5px;
    text-align: center;
  }
`

export const Row = styled.ul`
  margin: 0;
  padding: 0;

  width: 100%;

  display: flex;
  flex-direction: column;

  @media screen and (min-width: 500px) {
    flex-direction: row;
  }
`

export const Square = styled(Link).attrs(({ color }) => ({
  style: {
    backgroundColor: color,
    color: readableColor(color),
  },
}))`
  position: relative;
  display: flex;

  width: 100%;
  height: 6rem;

  align-items: center;
  justify-content: center;

  font-size: 12px;
  font-weight: 600;
  text-decoration: none;
  transition: 0.5s ease-in-out;

  :hover,
  :focus {
    z-index: 3;
    transform: scale(1.05);
  }

  :after {
    ${({ selectedcolor }) => selectedcolor === 'true' && "content: '';"}

    position: absolute;
    bottom: 20%;

    width: 10px;
    height: 10px;

    background-color: currentColor;
    box-shadow: 0 1px 0 rgba(0, 0, 0, 0.15) inset;

    opacity: 0.2;
    border-radius: 50%;
  }
`
