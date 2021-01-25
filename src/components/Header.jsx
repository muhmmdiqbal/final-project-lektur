import React from 'react';
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
  
  const handleSearch = () => {
    localStorage.setItem('searchTerm', searchTerm)
  }

  let searchTerm = ''

    return (
      <div className="borderNav">
        {/* <Nav className="mr-auto">
        </Nav> */}
        <Navbar sticky='top' expand='lg'>
          <Navbar.Brand href="/"><Image className='logo' src={logo} alt='logo app' /></Navbar.Brand>
            {/* <Container> */}
          <Col>
            <Form className="search" onSubmit={handleSearch} action='SearchResult'>
              <FormControl type="text" placeholder="Search course or lecturer" onChange={e => searchTerm = e.target.value}/>
            </Form> 
          </Col>
          <Nav className="justify-content-end">
            <NavDropdown title="Category" id="collasible-nav-dropdown">
              <NavDropdown.Item href="catProgramming">Programming</NavDropdown.Item>
              <NavDropdown.Item href="catGame">Game</NavDropdown.Item>
              <NavDropdown.Item href="catCooking">Cooking</NavDropdown.Item>
            </NavDropdown>
          <Nav.Link as={Link} to="/Teacher">For Teacher </Nav.Link>
          <div className="garis"></div>
          <Nav.Link as={Link} to="/Login">Login </Nav.Link>
          </Nav>
          <Button variant="dark" as={Link} to="/SignUp">Sign Up</Button>
        </Navbar>
        {/* <Switch>
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
          <Route exact path='/SearchCategory' component={SearchCategory} />
          <Route render={function() {
            return (
              <p>Not Found!</p>
            )
          }} />
        </Switch> */}
      </div>
    )
}

export default Header
