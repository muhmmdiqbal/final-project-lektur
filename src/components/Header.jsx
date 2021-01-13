import React from 'react';
import logo from './assets/logo.png';
import '../App.css';
import Home from '../page/Home';
import Teacher from '../page/Teacher';
import Detail from '../page/Detail';
import SignUp from '../page/SignUp';
import Login from '../page/Login'
import NavCourse from '../page/NavCourse'
import TeacherDashboard from '../page/TeacherDashboard'
import Course from '../page/Course'
import Assesment from '../page/Assesment'
import NewLesson from '../page/NewLesson'
import Students from '../page/Students'
import Filled from '../page/Filled'



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
    return (
      <div className="borderNav">
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
          <Nav.Link as={Link} to="/Teacher">For Teacher </Nav.Link>
          <div className="garis"></div>
          <Nav.Link as={Link} to="/Login">Login </Nav.Link>
          </Nav>
          <Button variant="dark" href="#SignUp">Sign Up</Button>
        </Navbar>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/Teacher' component={Teacher} />
          <Route exact path='/Login' component={Login} />
          <Route exact path='/SignUp' component={SignUp} />
          <Route exact path='/Detail' component={Detail} />
          <Route exact path='/TeacherDashboard' component={TeacherDashboard} />
          <Route exact path='/NavCourse' component={NavCourse} />
          <Route exact path='/Course' component={Course} />
          <Route exact path='/Assesment' component={Assesment} />
          <Route exact path='/Students' component={Students} />
          <Route exact path='/NewLesson' component={NewLesson} />
          <Route exact path='/Filled' component={Filled} />



          <Route render={function() {
            return (
              <p>Not Found!</p>
            )
          }} />
        </Switch>
      </div>
    )
}

export default Header
