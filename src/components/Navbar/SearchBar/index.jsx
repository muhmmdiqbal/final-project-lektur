import React from 'react';
import '../../style/App.css';

import * as Icon from 'react-bootstrap-icons';

import {
    Nav,
    Form,
    FormControl
} from 'react-bootstrap';

const SearchBar = () => {
    return (
        <Form className="search " action='SearchResult'>
            <Nav>
                <FormControl className='searchForm' type="text" placeholder="Search course or lecturer" />
                <button className='searchButton'><Icon.Search /></button>
            </Nav>
        </Form>
    )
}

export default SearchBar;