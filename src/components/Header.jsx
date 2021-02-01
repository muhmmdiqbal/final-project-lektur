import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import logo from './assets/logo.png';
import { dataCourse, getDataCourse } from '../store/actions/users'
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


const Header = (props) => {
  const userData = useSelector (state => state.user)
  const category = ['Cooking' , 'Game' , 'Programming'];
  const handleSubmit = async (e) => {
    e.preventDefault();
    localStorage.removeItem('token');
    window.location.href='/'
};
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(dataCourse());
  }, []);

const handleCategory = category =>  e  => {
    e.preventDefault();
    window.location.href =`/Category/${category}`
  };
  console.log(category, 'item category')

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
              <Nav className='mr-3 ml-auto' >
              
                <NavDropdown className='mr-2' title="Category" id="basic-nav-dropdown" alignRight>
                {category.map((category, idx) => (
                  <NavDropdown.Item key={idx} onClick={handleCategory (category)}>{category}</NavDropdown.Item>
               
                  ))}
                  </NavDropdown>
                
                { userData.role ?
                <Nav className='ml-auto'>
                  { userData.role === 'teacher' ?
                  <div>
                    <Row>
                      <div className="garis"></div>
                      <NavDropdown title={userData.name} id="basic-nav-dropdown" alignRight>
                        <NavDropdown.Item as={Link} to='/TeacherDashboard'>My Course</NavDropdown.Item>
                        <NavDropdown.Item as={Link} >Edit Profile</NavDropdown.Item>
                        <NavDropdown.Item onClick={handleSubmit}>Logout</NavDropdown.Item>
                      </NavDropdown>
                    </Row>
                  </div> :
                  <div>
                    <Row >
                        <div className="garis"></div>
                        <NavDropdown className='headerProfileDropDown' title={ <><img src={userData.image} className='headerImageProfileOutside'/> {userData.name}</>} 
                        id="collasible-nav-dropdown" alignRight
                        >
                          <NavDropdown.Item as={Link} >
                            <img className='headerImageProfile' src={userData.image} />
                            <p>See your profile</p>
                          </NavDropdown.Item>
                          <NavDropdown.Item as={Link} to='/StudentDashboard'>My Course</NavDropdown.Item>
                          <NavDropdown.Item onClick={handleSubmit}>Logout</NavDropdown.Item>
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
                <Button variant="dark" as={Link} to="/SignUp" className='mr-auto ml-3'>Sign Up</Button>
                }
              </Nav>
        </Navbar>
        
      </div>
    )
}

export default Header
