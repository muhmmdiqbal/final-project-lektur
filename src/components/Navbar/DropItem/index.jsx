import React, { useState, useEffect } from 'react';
import '../../style/App.css';

import {
    NavDropdown,
    Spinner
} from 'react-bootstrap';

import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import {
    GET_COURSES_SUCCESS
} from '../../../store/actions/types';

const DropItem = ({
    e,
    course: { loading, courses },
    getCourses
}) => {

    useEffect(() => {
        getCourses()
    }, [getCourses])

    const [show, setShow] = useState(false);
    const showDropdown = (e) => {
        setShow(!show);
    }
    const hideDropdown = e => {
        setShow(false);
    }
    return (
        <React.Fragment>
            <NavDropdown title="Category" id="collasible-nav-dropdown" show={show} onMouseEnter={showDropdown} onMouseLeave={hideDropdown}>
                {loading ? <Spinner animation="grow" /> : courses && courses.filter((ele, ind) => ind === courses.findIndex(elem => elem.category === ele.category)).map((v, index) => (
                    <div key={index}>
                        <NavDropdown.Item href="/">{v.category}</NavDropdown.Item>
                    </div>
                ))}
            </NavDropdown>
        </React.Fragment>
    )
}

DropItem.propTypes = {
    loading: PropTypes.bool,
    courses: PropTypes.array,
    getCourses: PropTypes.func.isRequired
}

const mapStateToProps = (state) => ({
    course: state.course,
    loading: state.loading
})

const mapDispatchToProps = (dispatch) => ({
    getCourses: () => dispatch({ type: GET_COURSES_SUCCESS })
})

export default connect(mapStateToProps, mapDispatchToProps)(DropItem)