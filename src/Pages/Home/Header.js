import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Navbar, Container, Nav } from 'react-bootstrap'
import style from './Header.module.css'


const Header = () => {

  const [colorChange, setColorchange] = useState(false);
  const changeNavbarColor = () => {
    if (window.scrollY >= window.innerHeight - 50) {
      setColorchange(true);
    }
    else {
      setColorchange(false);
    }
  };
  window.addEventListener('scroll', changeNavbarColor);

  return (
    <Navbar className={colorChange ? style.yellow : style.purple} >
      <Container>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mx-auto gap-4 ">
            <Link to={'/'} className={colorChange ? style.linkblack : style.linkwhite}>About</Link>
            <Link to={'/portofolio'} className={colorChange ? style.linkblack : style.linkwhite}>Portofolio</Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header