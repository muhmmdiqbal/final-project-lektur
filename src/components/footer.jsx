import React from 'react'
import {Row, Col, NavLink, Container, Image} from 'react-bootstrap'
import logo from './assets/logo.png'
import '../App.css'

const Footer = () => {
    return (
<<<<<<< HEAD
        <div className="footer-main"> 
            <Container>
                <Row >
                    <Col md="auto">
                        <ul className='list-unstyled'>
                            <NavLink className='text-dark'><li><strong className="footerstr">COURSE</strong></li></NavLink>
                                <NavLink className='text-dark'><li className="footerli">Business</li></NavLink>
                                <NavLink className='text-dark'><li className="footerli">Technology</li></NavLink>
                                <NavLink className='text-dark'><li className="footerli">Graphic Design</li></NavLink>
                                <NavLink className='text-dark'><li className="footerli">Self Development</li></NavLink>
                        </ul>
                    </Col>
                    <Col md="auto">
                    <ul className='list-unstyled'>
                        <NavLink className='text-dark'><li><strong className="footerstr">TEACH</strong></li></NavLink>
                            <NavLink className='text-dark'><li className="footerli">Teach at Lecture</li></NavLink>
                            <NavLink className='text-dark'><li className="footerli"> For School</li></NavLink>
                            <NavLink className='text-dark'><li className="footerli">FAQ</li></NavLink>
                            </ul>
                            </Col>
                    <Col >
                        <ul className='list-unstyled'>
                            <NavLink className='text-dark'><li><strong className="footerstr">RESOURCES</strong></li></NavLink>
                            <NavLink className='text-dark'><li className="footerli">Contact Us</li></NavLink>
                            <NavLink className='text-dark'><li className="footerli">About</li></NavLink>
                            <NavLink className='text-dark'><li className="footerli">Careers</li></NavLink>
                        </ul>
                    </Col>
                        {/* <Col xs lg="2">
                        courser
                        </Col> */}
                        <Col lg={3} className="footerli"><Image src={logo} className='logo' /><br/>
                        Lektur © 2020. All rights reserved
                    </Col>
                </Row>
            </Container>
        </div>
=======
    <div> 
        <Container>
            <Row >
                <Col md="auto">
                    <ul className='list-unstyled'>
                        <NavLink className='text-dark'><li><strong className="footerstr">COURSE</strong></li></NavLink>
                        <NavLink className='text-dark'><li className="footerli">Business</li></NavLink>
                        <NavLink className='text-dark'><li className="footerli">Technology</li></NavLink>
                        <NavLink className='text-dark'><li className="footerli">Graphic Design</li></NavLink>
                        <NavLink className='text-dark'><li className="footerli">Self Development</li></NavLink>
                    </ul>
                </Col>
                <Col md="auto">
                    <ul className='list-unstyled'>
                        <NavLink className='text-dark'><li><strong className="footerstr">TEACH</strong></li></NavLink>
                        <NavLink className='text-dark'><li className="footerli">Teach at Lecture</li></NavLink>
                        <NavLink className='text-dark'><li className="footerli"> For School</li></NavLink>
                        <NavLink className='text-dark'><li className="footerli">FAQ</li></NavLink>
                    </ul>
                </Col>
                <Col>
                <ul className='list-unstyled'>
                    <NavLink className='text-dark'><li><strong className="footerstr">RESOURCES</strong></li></NavLink>
                    <NavLink className='text-dark'><li className="footerli">Contact Us</li></NavLink>
                    <NavLink className='text-dark'><li className="footerli">About</li></NavLink>
                    <NavLink className='text-dark'><li className="footerli">Careers</li></NavLink>
                </ul>
                </Col>
                <Col lg={3} className="footerli"><Image src={logo} className='logo' /><br/>
                Lektur © 2020. All rights reserved
                </Col>
            </Row>
        </Container>
    </div>
>>>>>>> e3dddef4a2c8ab1db0e975a713e8dfed9a04673d
    )
}

export default Footer