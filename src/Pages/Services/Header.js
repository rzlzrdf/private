import React from 'react'
import { Link } from 'react-router-dom'
import { Navbar, Container, Nav } from 'react-bootstrap'
import style from './Header.module.css'


const Header = () => {


  return (
    <>
      <Navbar className={style.white}>
        <Container>
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mx-auto gap-4 ">
              <Link to={'/'} className={style.linkblack}>About</Link>
              <Link to={'/portofolio'} className={style.linkblack}>Portofolio</Link>
              <Link to={'/service'} className={style.linkblack}>Services</Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}

export default Header