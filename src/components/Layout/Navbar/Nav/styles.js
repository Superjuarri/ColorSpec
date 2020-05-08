import styled from 'styled-components'

import { NavLink as RouterLink } from 'react-router-dom'

export const Container = styled.nav`
  z-index: 800;

  position: fixed;
  left: 100%;
  top: 0;
  width: 100%;
  height: 100vh;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: center;
  transform: ${({ navOpen }) =>
    navOpen ? 'translate(-100%, 0)' : 'translate(0, 0)'};
  transition: 0.3s ease-in-out;
  @media only screen and (min-width: 750px) {
    all: unset;
  }
`

export const Ul = styled.ul`
  width: 100%;
  padding: 5%;
  @media only screen and (min-width: 750px) {
    all: unset;
    display: flex;
  }
`

export const Hr = styled.hr`
  width: 70%;
  @media only screen and (min-width: 750px) {
    display: none;
  }
`

export const Li = styled.li`
  list-style: none;
  text-align: center;
  margin: 7vh;

  .active {
    color: red;
  }

  @media only screen and (min-width: 750px) {
    all: unset;
    position: relative;
    /* right: 10%; */
    margin-left: 3em;
  }
`

export const Link = styled(RouterLink).attrs(() => ({
  activeClassName: 'active',
}))`
  transition: 0.2s ease-in-out;
  text-decoration: none;
  color: gray;
  font-weight: 800;
  cursor: pointer;
  :hover,
  :focus {
    color: black;
  }
`
