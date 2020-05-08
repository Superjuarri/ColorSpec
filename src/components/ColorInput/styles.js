import styled from 'styled-components'
import { readableColor } from 'polished'
import chroma from 'chroma-js'

export const Container = styled.form`
  position: relative;

  padding: 0.75em clamp(1em, 2em, 2vw);

  display: flex;
  flex-wrap: wrap;
  align-items: center;

  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
    0 4px 6px -2px rgba(0, 0, 0, 0.05);

  border-radius: 50px;
`

export const ColorDot = styled.div.attrs(({ color }) => ({
  style: {
    backgroundColor: color,
  },
}))`
  z-index: 2;

  margin-right: clamp(0.5em, 2em, 1vw);
  padding: 10px;

  width: clamp(1.25em, 1.5em, 2vw);
  height: clamp(1.25em, 1.5em, 2vw);

  border-radius: 50%;

  cursor: pointer;

  :hover {
    transform: scale(1.3);
  }
`

export const Input = styled.input`
  z-index: 3;

  min-width: 75px;

  font-weight: bold;
  color: #777777;

  flex: 1;

  border: none;
`

export const SVGButton = styled.button`
  z-index: 3;

  margin-right: clamp(0.5em, 2em, 1vw);
  padding: 0.5em;

  font-weight: bold;

  background: none;
  border: none;
  border-radius: 50px;
  cursor: pointer;

  transition: 0.2s ease-in-out;

  :hover,
  :focus {
    transform: rotate(-1turn);
  }
`

export const Button = styled.button.attrs(({ color }) => ({
  style: {
    backgroundColor: color,
    color: readableColor(chroma(color).hex()),
  },
}))`
  z-index: 2;

  padding: 0.75em 1.5em;

  font-weight: bold;

  border: none;
  border-radius: 50px;
  cursor: pointer;
`

export const PopOver = styled.div.attrs(({ displayPicker }) => ({
  style: {
    display: displayPicker ? 'auto' : 'none',
  },
}))`
  position: absolute;

  bottom: -350%;

  z-index: 1;
`
export const Cover = styled.div`
  z-index: 0;

  position: fixed;
  top: 0px;
  right: 0px;
  bottom: 0px;
  left: 0px;
`
