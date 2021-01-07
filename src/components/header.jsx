import React from 'react'
import { Navbar, Image, Col, Form, FormControl, Nav, NavDropdown, Button, Container } from 'react-bootstrap'
import logo from './assets/logo.png'
import '../App.css'

const Header = () => {

    return (
        <div>
            
            
    
    {/* <Nav className="mr-auto">
      
   
    </Nav> */}
    <Navbar sticky='top' expand='lg'>
                <Navbar.Brand href="/"><Image className='logo' src={logo} alt='logo app' /></Navbar.Brand>
                {/* <Container> */}
                <Col>

                <Form className="search">
                <FormControl type="text" placeholder="Search course or lecturer" />
                 </Form> 
                </Col>

    <Nav className="justify-content-end">
    
    
    
    <NavDropdown title="Category" id="collasible-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Business</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Art & Humanity</NavDropdown.Item>
      </NavDropdown>
    <Nav.Link href="#Teacher">For Teacher </Nav.Link>
    <div className="garis"></div>
      <Nav.Link href="#Login">login </Nav.Link>

    </Nav>
    <Button variant="dark" href="#SignUp">Sign Up</Button>

    {/* </Container> */}
    </Navbar>

        </div>
    )
}

export default Header
