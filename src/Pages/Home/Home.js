import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { BsGithub, BsLinkedin, BsPinMap, BsTelegram } from 'react-icons/bs'
import { TbChevronsDown } from 'react-icons/tb'
import { AiTwotoneMail } from 'react-icons/ai'
import style from './Home.module.css'
import Header from '../Porto/Header'
import 'animate.css';
import Typewriter from 'typewriter-effect'
import { useScroll, motion } from "framer-motion"

const Home = () => {

  const { scrollYProgress } = useScroll();

  return (
    <>
      <motion.div className={style.progressBar} style={{ scaleX: scrollYProgress }} />
      <Header className={style.landscape} />
      <main>
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
                <img src='./img/profile.png' alt='' className={style.profile} />
                <div className={style.location}><BsPinMap size={12} /> East Java, Indonesia</div>
              </Col>
              <Col className={'text-center mt-3 order-3'}>
                <a href='#aboutTwo' className={style.btnMore}>
                  See More About Me<br />
                  <TbChevronsDown className='text-center' size={40} />
                </a>
              </Col>
            </Row>
          </Container>
        </section>
        <section id='aboutTwo' className={style.sectionTwo}>
          <Container>
            <Row>
              <Col lg={1} md={12} className={'d-md-none'}><h1 className={'text-center mb-4'}>My Journey</h1></Col>
              <Col lg={10} md={10}>
                <div className={style.timeline}>
                  <ul>
                    <li>
                      <div className={style.timelineContent}>
                        <h1>Public Vocational High School 4 Malang</h1>
                        <p className={style.date}>2015 - 2018</p>
                        <p>
                          "I majored in computer and network engineering, with an interest in learning web development. This is where I became interested in the world of technology, especially web development."
                        </p>
                      </div>
                    </li>
                    <li>
                      <div className={style.timelineContent}>
                        <h1>Universitas Brawijaya</h1>
                        <p className={style.date}>2019 - Now</p>
                        <p>"I Study in the Information Technology Education Study Program, here I learned many new things about the world of education and information technology. However, for my scientific interests, I remain in software development, especially web development."</p>
                      </div>
                    </li>
                    <li>
                      <div className={style.timelineContent}>
                        <h1>Binar Academy</h1>
                        <p className={style.date}>Complete in 2022</p>
                        <p>"Through a program organized by the Ministry of Education and Culture, I participated in a bootcamp with Binar Academy with a JavaScript frontend course path"</p>
                      </div>
                    </li>
                    <li>
                      <div className={style.timelineContent}>
                        <h1>Freelance Frontend Web Dev</h1>
                        <p className={style.date}>March 2022 - Now</p>
                        <p>"When entering the sixth semester of study, I tried to become a freelancer to add skills and some pocket money"</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </Col>
              <Col lg={2} md={12}>
                <h1 className={style.heading1}>MY JOURNEY</h1>
              </Col>
            </Row>
          </Container>
        </section>
        <section id='contact' className={style.sectionContact}>
          <Container>
            <Row>
              <Col lg={12} className={style.contact}>
                <div>
                  <h1 className='fs-1 fw-bolder text-dark'>Contact Me</h1>
                  <h4 className=''><BsTelegram size={40} /> @rzlzrdf</h4>
                  <h4 className=''><AiTwotoneMail size={40} /> rizallazu76@gmail.com</h4>
                  <h4 className=''><BsLinkedin size={40} /> rzlzrdf</h4>
                  <h4 className=''><BsGithub size={40} /> rzlzrdf</h4>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
        <section id={style.landscape}>
          <img src='./img/phone.png' alt='' />
          <h1> Please rotate to Potrait</h1>
        </section>
      </main>
    </>
  )
}

export default Home