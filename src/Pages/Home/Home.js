import React from 'react'
import {  Col, Container, Row } from 'react-bootstrap'
import {BsPinMap} from 'react-icons/bs'
import {TbChevronsDown} from 'react-icons/tb'
import style from './Home.module.css'
import 'animate.css';
import Typewriter from 'typewriter-effect'

const Home = () => {
 
  return (
    <>
    <section className={style.sectionOne}>
      <Container className={style.container}>
        <Row>
          <Col lg={6} md={12} className={style.left1}>
            <h1 className={style.name}>Rizal Lazuardi</h1>
            <h1 className={style.typer}>
            <Typewriter
              options={{
                strings: ['Frontend Dev', 'IT Student', 'Freelancer'],
                autoStart: true,
                loop: true,
              }}
            /></h1>
          </Col>
          <Col lg={6} md={12} className={style.right1}>
            <img src='./img/profile.png' alt='' className={style.profile}/>
            <div className={style.location}><BsPinMap size={12}/> East Java, Indonesia</div>
          </Col>
          <Col className={'text-center mt-3 order-3'}>
            <a href='#aboutTwo' className={style.btnMore}>
             See More About Me<br/>
             <TbChevronsDown className='text-center' size={40}/>
            </a>   
          </Col>
        </Row>
      </Container>
    </section>
    <section id='aboutTwo' className={style.sectionTwo}>
      <Container>
        <Row>
          <Col>
              
          </Col>
        </Row>
      </Container>
    </section>
    </>
  )
}

export default Home