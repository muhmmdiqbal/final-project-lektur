import React from 'react';
import logo from '../../assets/image/logo.png';
import '../../style/App.css';

import SearchBar from '../SearchBar';
import DropItem from '../DropItem';

import {
    Navbar,
    Image,
    Nav,
    Button
} from 'react-bootstrap';

import { Link, NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <Navbar sticky='top' expand='lg'>
            <Navbar.Brand className='mr-auto' href="/">
                <Image as={Link} to="/" className='logo' src={logo} alt='logo app' />
            </Navbar.Brand>
            <SearchBar />
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className='mr-3 ml-auto'>
                    <DropItem />
                    <NavLink to='/SignTeacher' activeClassName="selected active" className="nav-link">For Teacher</NavLink>
                    <div className="garis"></div>
                    <NavLink to='/Login' className="nav-link font-weight-bold active">Login</NavLink>
                    <Button variant="dark" as={Link} to='/Signup'>Sign Up</Button>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default Header;