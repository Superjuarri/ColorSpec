import React from 'react'
import { Link } from 'react-router-dom'

import LogoSVG from '../../../images/ColorSpecLogo.svg'

// import { Hamburger } from './Hamburger'
// import { Nav } from './Nav'

import { Wrapper, Container, Logo } from './styles'

const Navbar = () => {
  // const [navOpen, setNavOpen] = useState(false)

  return (
    <Wrapper>
      <Container>
        {/* <h1>Logo</h1>

        <Hamburger navOpen={navOpen} setNavOpen={setNavOpen} />
        <Nav navOpen={navOpen} setNavOpen={setNavOpen} /> */}
        <Link to='/'>
          <Logo src={LogoSVG} />
        </Link>
      </Container>
    </Wrapper>
  )
}

export { Navbar }
