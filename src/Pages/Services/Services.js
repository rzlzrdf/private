import React from 'react'
import {  Col, Container, Row } from 'react-bootstrap'
import Header from './Header'
import style from './Services.module.css'

const Portofolio = () => {
  return (
    <Container >
      <Header />
      <Row>
        <Col lg={2}>
          <div className={style.title}>
            <h1>Service Package</h1>
          </div>
        </Col>
        <Col lg={10} md={12}>
          <div className={style.package}>
            <div className={style.card}>
              <div>
                <img src='./img/design.svg' alt=''/>
                <h5 className=' d-inline pl-3'>  Slicing</h5>
              </div>
              <ul>
                <li>HTML/React/Next</li>
                <li>Responsive</li>
                <li>Pixel Perfect</li>
                <li>3x Revision</li>
              </ul>
              <div>
                <button>Rp. 100.000/2day/2page</button>
                <button>Rp. 150.000/1day/2page</button>
              </div>
            </div>
            <dv className={style.card}>
              <div className=''>
                <img src='./img/coding.svg' alt=''/>
                <h5 className=' d-inline pl-3'>  Developing</h5>
              </div>
              <ul>
                <li>Company Profile</li>
                <li>E-Commerce</li>
                <li>Web App</li>
                <li>Iclude Design, 3x Revision</li>
                <li>ReactJS, NextJS, Native</li>
              </ul>
              <button>Start From Rp. 600.000</button>
            </dv>
            <div className={style.card}>
              <div className=''>
                <img src='./img/tools.svg' alt=''/>
                <h5 className=' d-inline pl-3'>  Fixing</h5>
              </div>
              <ul>
                <li>HTML/React/Next</li>
                <li>Responsive Issue</li>
                <li>Reuest Feature</li>
                <li>3x Revision</li>
              </ul>
              <div>
                <button>Rp. 100.000/2day/2page</button>
                <button>Rp. 150.000/day/2page</button>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  )
}

export default Portofolio