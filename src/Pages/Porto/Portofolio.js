import React from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import Header from './Header'
import style from './Portofolio.module.css'

const Portofolio = () => {
  return (
    <>
      <Header />
      <section className={style.container}>
        <Container>
          <Row>
            <Col lg={8} className={style.hero1_left}>
              <div className={style.bulat + ' shadow-lg'}></div>
              <img src='./img/sh1.png' alt='SecondHand E-Commerce' className={style.sh} />
              <a className={style.sh + " " + style.btn} href='https://secondhand72.vercel.app/'>Visit</a>
            </Col>
            <Col lg={4} className={style.hero1_right}>
              <h1 className='text-light fw-bold'>Second <br /> Hand</h1>
              <p className='text-light fw-light'>
                An e-commerce that has a feature to bargain between buyers and sellers. This project was created as one of the graduation requirements for bootcamp
              </p>
              <ul className='text-light'>
                <li>ReactJS</li>
                <li>ExpressJS</li>
                <li>Bootstrap</li>
                <li>Heroku</li>
              </ul>
            </Col>
          </Row>
        </Container>
      </section>
      <section className={style.container2}>
        <Container>
          <Row>
            <Col lg={8} className={style.hero1_left}>
              <div className={style.bulat + ' shadow-lg'}></div>
              <img src='./img/dp1.png' alt='Dupalo Pusat' className={style.dp} />
              <a className={style.sh + " " + style.btn} href='https://www.dupalopusat.com/'>Visit</a>
            </Col>
            <Col lg={4} className={style.hero1_right}>
              <h1 className='text-dark fw-bold'>Dupalo <br /> Pusat</h1>
              <p className='text-black fw-light'>
                An industrial company profile website engaged in incense, with a catalog feature that is connected to Tokopedia for ordering or purchasing
              </p>
              <ul className='text-dark'>
                <li>NextJS</li>
                <li>Bootstrap</li>
                <li>Vercel</li>
              </ul>
            </Col>
          </Row>
        </Container>
      </section>
      <section className={style.container3}>
        <Container>
          <Row>
            <Col lg={8} className={style.hero1_left}>
              <div className={style.bulat + ' shadow-lg'}></div>
              <img src='./img/dp1.png' alt='Dupalo Pusat' className={style.dp} />
              <Button className={style.sh + " " + style.btn}>Visit</Button>
            </Col>
            <Col lg={4} className={style.hero1_right}>
              <h1 className='text-dark fw-bold'>Clarissa <br /> Salon</h1>
              <p className='text-dark'>
                An e-commerce that has a feature to bargain between buyers and sellers. This project was created as one of the graduation requirements for bootcamp
              </p>
              <ul className='text-dark'>
                <li>NextJS</li>
                <li>Bootstrap</li>
                <li>Vercel</li>
              </ul>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  )
}

export default Portofolio