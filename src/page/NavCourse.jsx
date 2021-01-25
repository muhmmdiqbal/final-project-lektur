import React from 'react'
import { Container } from 'react-bootstrap'
import {
    Route,
    NavLink,
    HashRouter
  } from "react-router-dom";
import Course from './Course'
import Assesment from './Assesment'
import Students from './Students'
import '../App.css'

const navCourse = () => {
    return (
        <div>
        {/* <Container > */}
        {/* <HashRouter> */}
        <div>
          <ul className="header">
            <li className="active"><NavLink active tag="a" exact to="/Course">Course</NavLink></li>
            <li><NavLink to="/Assesment">Assesment</NavLink></li>
            <li><NavLink to="/Students">Students</NavLink></li>
          </ul>
        </div>
        {/* </HashRouter> */}
        {/* </Container> */}
        </div>
        
    )
}

export default navCourse