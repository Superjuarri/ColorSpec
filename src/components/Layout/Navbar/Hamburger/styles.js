import styled from 'styled-components'

export const Wrapper = styled.button`
  display: block;
  cursor: pointer;
  padding: 1em 0.5em;
  background: none;
  border: none;
  z-index: 900;
  transition: transform 0.3s ease-in-out;
  :hover {
    transform: ${({ navOpen }) => navOpen && 'rotate(.5turn)'};
  }
  @media only screen and (min-width: 750px) {
    display: none;
  }
`

export const Lines = styled.div`
  z-index: 901;
  position: relative;

  &,
  &:before,
  &:after {
    width: 1.75em;
    height: 3px;
    background-color: #414141;
    transform: ${({ navOpen }) => navOpen && 'rotate(45deg)'};
    transition: transform 0.2s ease-in-out;
    :hover {
      background-color: green;
    }
  }

  &:before,
  &:after {
    content: '';
    position: absolute;
    left: 0;
  }

  &:before {
    bottom: 8px;
    opacity: ${({ navOpen }) => (navOpen ? '0' : '1')};
    transition: 0.2s ease-in-out;
  }

  &:after {
    top: 8px;
    transform: ${({ navOpen }) => navOpen && 'rotate(90deg) translate(-8px)'};
  }
`
