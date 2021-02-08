import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import  { dataUserLoggedIn } from '../store/actions/users';
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

const Header = () => {
  const userData = useSelector (state => state.user)
  const category = ['Cooking' , 'Game' , 'Programming'];
  const handleSubmit = async (e) => {
    e.preventDefault();
    localStorage.removeItem('token');
    window.location.href='/'
  };
  const dispatch = useDispatch();

  const [search, setSearch] = useState({
    title: "",
  });
  const { title } = search;
  const handleChange = (e) => {
    const {name, value} = e.target
    setSearch((prevUserData)=>{
      return {
        ...prevUserData,
        [name] : value
      }
    }) 
  }
  const handleSearch = e => {
    e.preventDefault();
    console.log(title,'ini search')
  }
  useEffect(() => {
    dispatch(dataUserLoggedIn());
  }, []);
  const handleCategory = category =>  e  => {
    e.preventDefault();
    window.location.href =`/Category/${category}`
  };
    return (
      <div className="borderNav">
        <Navbar sticky='top' expand='lg' >
              <Navbar.Brand className='mr-auto' href="/">
                <Image className='logo' src={logo} alt='logo app' />
              </Navbar.Brand>
              <form className='searchFormNav' onChange={handleChange}>
                  <input className='searchForm' name='title' value={title} type="text" placeholder="Search course or lecturer" />
                  <Button type="submit" onClick={handleSearch} className='searchButton'>Search</Button>
              </form>
              <Nav className='mr-3 ml-auto' >
                <NavDropdown className='mr-2' title="Category" id="basic-nav-dropdown" alignRight>
                {category.map((category, idx) => (
                  <NavDropdown.Item key={idx} onClick={handleCategory (category)}>{category}</NavDropdown.Item>
                  ))}
                  </NavDropdown>
                { userData.role ?
                <Nav className='ml-auto'>
                  { userData.role == 'teacher' ?
                  <div>
                    <Row>
                      <div className="garis"></div>
                      <NavDropdown className='headerProfileDropDown' title={ <><img src={userData.image} className='headerImageProfileOutside'/> {userData.name}</>} 
                        id="collasible-nav-dropdown" alignRight
                        >
                        <NavDropdown.Item as={Link} to='/TeacherDashboard'>Dashboard</NavDropdown.Item>
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
                          <NavDropdown.Item as={Link} >See your profile </NavDropdown.Item>
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
