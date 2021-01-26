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
  Row,
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
              <Navbar.Brand className='mr-auto' href="/">
                <Image className='logo' src={logo} alt='logo app' />
              </Navbar.Brand>
              <Form className="search " action='SearchResult'>
                <Nav>
                  <FormControl className='searchForm' type="text" placeholder="Search course or lecturer" />
                  <button className='searchButton'>Search</button>
                </Nav>
              </Form> 
              <Nav className='mr-3 ml-auto'>
                <NavDropdown title="Category" id="collasible-nav-dropdown">
                  <NavDropdown.Item href="catProgramming">Programming</NavDropdown.Item>
                  <NavDropdown.Item href="catGame">Game</NavDropdown.Item>
                  <NavDropdown.Item href="catCooking">Cooking</NavDropdown.Item>
                </NavDropdown>
                { userData.role ? 
                <Nav.Link as={Link} to="/StudentDashboard">{userData.name}</Nav.Link> :
                <div>
                  <Nav>
                    <Nav.Link as={Link} to="/Teacher">For Teacher  </Nav.Link> 
                    <div className="garis"></div>
                    <Nav.Link as={Link} to="/Login">Login </Nav.Link>
                  </Nav>
                </div>
                }
                { userData.role ?
                <Button variant="dark" as={Link} to="/Login">Logout</Button> :
                <Button variant="dark" as={Link} to="/SignUp">Sign Up</Button>
                }
              </Nav>
        </Navbar>
      </div>
    )
}

export default Header
