import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { dataUserLoggedIn } from '../store/actions/users'
import { selectCurrentUser } from '../App';
import logo from './assets/logo.png';
import '../App.css';

import { 
  Navbar, 
  Image, 
  Form, 
  FormControl, 
  Nav, 
  NavDropdown, 
  Col,
  Row,
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
        <Navbar sticky='top' expand='lg' >
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
                <NavDropdown title="Category" id="basic-nav-dropdown" alignRight>
                  <NavDropdown.Item href="catProgramming">Programming</NavDropdown.Item>
                  <NavDropdown.Item href="catGame">Game</NavDropdown.Item>
                  <NavDropdown.Item href="catCooking">Cooking</NavDropdown.Item>
                </NavDropdown>
                <div className="garis"></div>
                { userData.role ?
                <Nav className='ml-auto'>
                  { userData.role === 'teacher' ?
                  <div>
                    <NavDropdown title={userData.name} id="basic-nav-dropdown" alignRight>
                      <NavDropdown.Item as={Link} to='/TeacherDashboard'>My Course</NavDropdown.Item>
                      <NavDropdown.Item as={Link} >Edit Profile</NavDropdown.Item>
                      <NavDropdown.Item>Logout</NavDropdown.Item>
                    </NavDropdown>
                  </div> :
                  <div>
                    <Row >
                        {/* <img className='headerImageProfile' src={userData.image} />  */}
                        <NavDropdown title={<img src={userData.image} className='headerImageProfile'/> + userData.name } id="collasible-nav-dropdown" alignRight>
                          <NavDropdown.Item as={Link} >
                            <img className='headerImageProfile' src={userData.image} />
                            <p>See your profile</p>
                          </NavDropdown.Item>
                          <NavDropdown.Item as={Link} to='/StudentDashboard'>My Course</NavDropdown.Item>
                          <NavDropdown.Item>Logout</NavDropdown.Item>
                        </NavDropdown>
                    </Row>
                  </div>
                  } 
                </Nav> :
                <div>
                  <Nav>
                    <Nav.Link as={Link} to="/Teacher">For Teacher  </Nav.Link> 
                    <div className="garis"></div>
                    <Nav.Link as={Link} to="/Login">Login </Nav.Link>
                  </Nav>
                </div>
                }
                { userData.role ? null :
                <Button variant="dark" as={Link} to="/SignUp">Sign Up</Button>
                }
              </Nav>
        </Navbar>
        
      </div>
    )
}

export default Header
