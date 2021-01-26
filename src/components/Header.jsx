import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { dataUserLoggedIn } from '../store/actions/users'
import { selectCurrentUser } from '../App';
import logo from './assets/logo.png';
import '../App.css';

import { 
  Navbar, 
  Image, 
  Col, 
  Form, 
  FormControl, 
  Nav, 
  NavDropdown, 
  Button } from 'react-bootstrap';

import { 
  Switch,
  Route,
  Link
} from 'react-router-dom';


const Header = () => {
  const userData = useSelector (state => state.user)
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(dataUserLoggedIn());
  }, []);
  console.log(userData)
    return (
      <div className="borderNav">
        <Navbar sticky='top' expand='lg'>
          <Navbar.Brand href="/"><Image className='logo' src={logo} alt='logo app' /></Navbar.Brand>
            {/* <Container> */}
          <Col>
            <Form className="search" action='SearchResult'>
              <FormControl type="text" placeholder="Search course or lecturer" />
            </Form> 
          </Col>
          <Nav className="justify-content-end">
            <NavDropdown title="Category" id="collasible-nav-dropdown">
              <NavDropdown.Item href="catProgramming">Programming</NavDropdown.Item>
              <NavDropdown.Item href="catGame">Game</NavDropdown.Item>
              <NavDropdown.Item href="catCooking">Cooking</NavDropdown.Item>
            </NavDropdown>
          { userData.name ? 
          <Nav.Link as={Link} to="/TeacherDashboard">{userData.name}</Nav.Link> :
          <Nav.Link as={Link} to="/Teacher">For Teacher  </Nav.Link> 
        } 
          
          { userData.name ? 
          <Navbar.Brand href="/"><Image className='logo' src={userData.image} alt='' /></Navbar.Brand> :
          <div className="garis">
          <Nav.Link as={Link} to="/Login">Login </Nav.Link>
          </div>
        } 
          </Nav>
          
          <Button variant="dark" as={Link} to="/SignUp">Sign Up</Button>
        
        </Navbar>
      </div>
    )
}

export default Header
