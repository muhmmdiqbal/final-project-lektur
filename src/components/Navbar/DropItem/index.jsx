import React, { useState } from 'react';
import '../../style/App.css';

import {
    NavDropdown
} from 'react-bootstrap';


const DropItem = e => {
    
    const [show, setShow] = useState(false);
    const showDropdown = (e) => {
        setShow(!show);
    }
    const hideDropdown = e => {
        setShow(false);
    }
    return (
        <NavDropdown title="Category" id="collasible-nav-dropdown" show={show} onMouseEnter={showDropdown} onMouseLeave={hideDropdown}>
            <NavDropdown.Item href="/">Programming</NavDropdown.Item>
            <NavDropdown.Item href="/">Game</NavDropdown.Item>
            <NavDropdown.Item href="/">Cooking</NavDropdown.Item>
        </NavDropdown>
    )
}

export default DropItem;