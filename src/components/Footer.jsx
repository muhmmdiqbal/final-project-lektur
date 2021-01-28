import React from 'react'
import {Row, Col, NavLink, Container, Image} from 'react-bootstrap'
import logo from './assets/logo.png'
import '../App.css'

const Footer = () => {
    return (
    <div> 
        <Container className="footerContainer" fluid>
            <Row className='mr-1 ml-5'>
                <Col >
                    <ul className='list-unstyled'>
                        <NavLink className='text-dark' href="course"><li><strong className="footerstr">COURSE</strong></li></NavLink>
                        <NavLink className='text-dark' href="business"><li className="footerli">Business</li></NavLink>
                        <NavLink className='text-dark'><li className="footerli">Technology</li></NavLink>
                        <NavLink className='text-dark'><li className="footerli">Graphic Design</li></NavLink>
                        <NavLink className='text-dark'><li className="footerli">Self Development</li></NavLink>
                    </ul>
                </Col>
                <Col>
                    <ul className='list-unstyled ml-5 mr-7'>
                        <NavLink className='text-dark'><li><strong className="footerstr">TEACH</strong></li></NavLink>
                        <NavLink className='text-dark'><li className="footerli">Teach at Lecture</li></NavLink>
                        <NavLink className='text-dark'><li className="footerli"> For School</li></NavLink>
                        <NavLink className='text-dark'><li className="footerli">FAQ</li></NavLink>
                    </ul>
                </Col>
                <Col>
                    <ul className='list-unstyled footerSmall ml-5 mr-auto'>
                        <NavLink className='text-dark'><li><strong className="footerstr">RESOURCES</strong></li></NavLink>
                        <NavLink className='text-dark'><li className="footerli">Contact Us</li></NavLink>
                        <NavLink className='text-dark'><li className="footerli">About</li></NavLink>
                        <NavLink className='text-dark'><li className="footerli">Careers</li></NavLink>
                    </ul>
                </Col>
                <Col className="footerli float-right ml-auto mr-5">
                    <div className='footerLogo' >
                            <NavLink><Image src={logo} className='logoFooter' alt="/" /></NavLink>
                            Lektur © 2020. All rights reserved
                    </div>
                </Col>
            </Row>
        </Container>
    </div>
    )
}

export default Footer