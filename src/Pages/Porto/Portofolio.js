import React from 'react'
import {  Col, Container, Row } from 'react-bootstrap'
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
            <Col lg={4} sm={12} className={style.hero1_right}>
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
              <a className={style.btnM} href='https://www.dupalopusat.com/'>Visit</a>
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
              <a className={style.btnM} href='https://www.dupalopusat.com/'>Visit</a>
            </Col>
          </Row>
        </Container>
      </section>
      <section className={style.container3}>
        <Container>
          <Row>
            <Col lg={8} className={style.hero1_left}>
              <div className={style.bulat + ' shadow-lg'}></div>
              <img src='./img/nft (1).png' alt='Project Creatures' className={style.nft} />
              <img src='./img/nft (2).png' alt='Project Creatures' className={style.nft} />
              <a href='https://rawcdn.githack.com/dhikaaldhika22/project-creatures/7dbd8946254efd3fe90fd697ffcf99e294badbd8/home/index.html' className={style.sh + " " + style.btn}>Visit</a>
            </Col>
            <Col lg={4} className={style.hero1_right}>
              <h1 className='text-dark fw-bold'>Project Creatures</h1>
              <p className='text-dark'>
                A freelance project for a client's nft buying and selling web page. The job description on the project to create website pages with native html and css that are accurate by design
              </p>
              <ul className='text-dark'>
                <li>HTML</li>
                <li>CSS</li>
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
              <img src='./img/bcr.png' alt='Project Creatures' className={style.dp} />
              <a href='https://rizal-c4.vercel.app/' className={style.sh + " " + style.btn}>Visit</a>
            </Col>
            <Col lg={4} className={style.hero1_right}>
              <h1 className='text-dark fw-bold'>Binar Car Rental</h1>
              <p className='text-dark'>
                A case study to implement a car rental web page design using react              </p>
              <ul className='text-dark'>
                <li>ReactJS</li>
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
              <img src='./img/quran.png' alt='eQuran-rzl' className={style.dp} />
              <a href='https:/equran-rzl.vercel.app/' className={style.sh + " " + style.btn}>Visit</a>
            </Col>
            <Col lg={4} className={style.hero1_right}>
              <h1 className='text-dark fw-bold'>eQruan - rzl</h1>
              <p className='text-dark'>
                Electronic quran platform with light and fast perfromance, visitor can read and hear per ayahs.
              </p>
              <ul className='text-dark'>
                <li>NextJS</li>
                <li>TailwindCSS</li>
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