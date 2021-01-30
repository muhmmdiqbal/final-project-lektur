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

const Header = () => {
    return (
        <Navbar sticky='top' expand='lg'>
            <Navbar.Brand className='mr-auto' href="/">
                <Image className='logo' src={logo} alt='logo app' />
            </Navbar.Brand>
            <SearchBar />
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className='mr-3 ml-auto'>
                <DropItem />
                    <Nav.Link href='/'>For Teacher</Nav.Link>
                    <div className="garis"></div>
                    <Nav.Link href='/'><p>Login</p></Nav.Link>
                <Button variant="dark" href="/">Sign Up</Button>
            </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default Header;