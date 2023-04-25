import React from 'react'
import { Row, Col, Container } from 'reactstrap'
import img from '../assets/images/about.jpg'
import '../styles/about.css'

const About = () => {
    return (
        <Container>
            <Row>
                <Col lg='6'>
                    <div className="img-box">
                        <img src={img} />
                    </div>
                </Col>
                <Col lg='6'>
                    <div className='cont p-2'>
                        <h2 className='mb-3'>Welcome to our Library Management System!</h2>
                        <p className='about'>Our library management system is designed to provide an easy and efficient way for users to find and borrow books, and for librarians to manage the library's inventory and users. Our goal is to create a user-friendly system that meets the needs of both library users and librarians, while also leveraging the latest technologies to provide a seamless experience.</p>
                        <h3 className='my-3'>Technology</h3>
                        <p className='about'>Our library management system is built using the MERN stack, which includes MongoDB, Express, React, and Node.js. We also leverage other tools and libraries, such as Redux and JSON Web Tokens, to create a fast and efficient system that is easy to use and maintain. Our system is designed to be scalable and flexible, so it can be customized to meet the unique needs of any library.
</p>


                    </div>
                </Col>
                <Col lg='12' className='team-section mt-5'>
                <>
  <div className="container py-5">
    <div className="row text-center text-white">
      <div className="col-lg-8 mx-auto">
        <h2 className="">Team Members</h2>
        
      </div>
    </div>
  </div>
  {/* End */}
  <div className="container">
    <div className="row text-center">
      {/* Team item */}
      <div className="col-xl-3 col-sm-6 mb-5">
        <div className="bckground rounded shadow-sm py-5 px-4">
          <img
            src="https://media.licdn.com/dms/image/D5603AQFUeoZFMQDE2A/profile-displayphoto-shrink_400_400/0/1680591782475?e=1687996800&v=beta&t=rAhCm3_zFI05IkHKZJzKRSyOCpgLdJ3S7Kej0x0EfSY"
            alt=""
            width={100}
            className="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm"
          />
          <h5 className="mb-0">Mamatva Jain</h5>
          <span className="small  text-muted">Full Stack Web Developer</span>
          <ul className="social mb-0 list-inline mt-3">
            <li className="list-inline-item">
              <a target='_blank' href="https://github.com/mamatva4" className="social-link">
                <i class="ri-github-fill"></i>
              </a>
            </li>
            <li className="list-inline-item">
              <a target='_blank' href="https://twitter.com/mamatva04" className="social-link">
                <i class="ri-twitter-fill"></i>
              </a>
            </li>
            <li className="list-inline-item">
              <a target='_blank' href="https://instagram.com/mamatva04?igshid=ZDdkNTZiNTM=" className="social-link">
                <i class="ri-instagram-line"></i>
              </a>
            </li>
            <li className="list-inline-item">
              <a target='_blank' href="https://www.linkedin.com/in/mamatva-jain-094798218/" className="social-link">
                <i class="ri-linkedin-fill"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
      {/* End */}
      {/* Team item */}
      <div className="col-xl-3 col-sm-6 mb-5">
        <div className="bckground rounded shadow-sm py-5 px-4">
          <img
            src="https://media.licdn.com/dms/image/C5603AQFk0GEOciv8MQ/profile-displayphoto-shrink_100_100/0/1639970464554?e=1687996800&v=beta&t=pEb06Y91vZkIyhVztUhL8L_w4faS3m60pD-DWoZLG2I"
            alt=""
            width={100}
            className="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm"
          />
          <h5 className="mb-0">Jitesh Kumar Singh</h5>
          <span className="small  text-muted">Full Stack Web Developer</span>
          <ul className="social mb-0 list-inline mt-3">
            <li className="list-inline-item">
              <a target='_blank' href="https://github.com/ITSJKS" className="social-link">
                <i class="ri-github-fill"></i>
              </a>
            </li>
            <li className="list-inline-item">
              <a target='_blank' href="https://twitter.com/_ITSJK_" className="social-link">
                <i class="ri-twitter-fill"></i>
              </a>
            </li>
            <li className="list-inline-item">
              <a target='_blank' href="https://instagram.com/j__k__singh?igshid=OTJhZDVkZWE=" className="social-link">
                <i class="ri-instagram-line"></i>
              </a>
            </li>
            <li className="list-inline-item">
              <a target='_blank' href="https://www.linkedin.com/in/jitesh-singh-722b29200/" className="social-link">
                <i class="ri-linkedin-fill"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
      {/* End */}
      {/* Team item */}
      <div className="col-xl-3 col-sm-6 mb-5">
        <div className="bckground rounded shadow-sm py-5 px-4">
          <img
            src="https://media.licdn.com/dms/image/C5603AQEpAPFbls_1Iw/profile-displayphoto-shrink_100_100/0/1663065494970?e=1687996800&v=beta&t=HFG66XkhSy9qoT66lZBJImAQnN2_o7X_VH5R-04Fcm4"
            alt=""
            width={100}
            className="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm"
          />
          <h5 className="mb-0">Ankit Raj</h5>
          <span className="small  text-muted">Frontend Web Developer</span>
          <ul className="social mb-0 list-inline mt-3">
            <li className="list-inline-item">
              <a target='_blank' href="https://github.com/ankitraj28" className="social-link">
                <i class="ri-github-fill"></i>
              </a>
            </li>
            <li className="list-inline-item">
              <a target='_blank' href="#" className="social-link">
                <i class="ri-twitter-fill"></i>
              </a>
            </li>
            <li className="list-inline-item">
              <a target='_blank' href="https://instagram.com/_raj.ankit_?igshid=MjljNjAzYmU=" className="social-link">
                <i class="ri-instagram-line"></i>
              </a>
            </li>
            <li className="list-inline-item">
              <a  target='_blank' href="https://www.linkedin.com/in/ankit-raj-94b004216/" className="social-link">
                <i class="ri-linkedin-fill"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
      {/* End */}
      {/* Team item */}
      <div className="col-xl-3 col-sm-6 mb-5">
        <div className="bckground rounded shadow-sm py-5 px-4">
          <img
            src="https://media.licdn.com/dms/image/D5603AQEiuMof5MEMTw/profile-displayphoto-shrink_100_100/0/1680755793674?e=1687996800&v=beta&t=nxnsCrlC15zp-8PSAkbMxHja4J9zOKy8pafk3ZsfW0M"
            alt=""
            width={100}
            className="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm"
          />
          <h5 className="mb-0">Reema Paul</h5>
          <span className="small  text-muted">Frontend Web Developer</span>
          <ul className="social mb-0 list-inline mt-3">
            <li className="list-inline-item">
              <a target='_blank' href="#" className="social-link">
                <i class="ri-github-fill"></i>
              </a>
            </li>
            <li className="list-inline-item">
              <a target='_blank' href="https://www.facebook.com/reema.paul.3597?mibextid=ZbWKwL" className="social-link">
                <i class="ri-twitter-fill"></i>
              </a>
            </li>
            <li className="list-inline-item">
              <a target='_blank' href="https://instagram.com/p_reema20?igshid=ZDdkNTZiNTM=" className="social-link">
                <i class="ri-instagram-line"></i>
              </a>
            </li>
            <li className="list-inline-item">
              <a target='_blank' href="https://www.linkedin.com/in/rima-paul-375076232/" className="social-link">
                <i class="ri-linkedin-fill"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
      {/* End */}
    </div>
  </div>
</>

                </Col>
            </Row>

            <Row>
                <Col lg='4'>

                </Col>
                <Col lg='8'>

                </Col>
            </Row>
        </Container>
    )
}

export default About
