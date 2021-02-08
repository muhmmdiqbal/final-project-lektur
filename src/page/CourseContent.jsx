import React, { useEffect, useState } from "react";
import {Row, Col, Image, Button, Tab, Tabs } from 'react-bootstrap'
import '../App.css'
import { useDispatch, useSelector } from 'react-redux';
import { enrolledCourse } from '../store/actions/users'
import { 
    Link
  } from 'react-router-dom';
const CourseContent = (props) => {
    const userData = useSelector (state => state.user)
    const enrolledmentResult = useSelector (state => state.enrolledResult)
    const dispatch = useDispatch();
    console.log(props.match.params.id, 'ini id dari page sebelumnya')
    return (
        <div> 
            
        </div>
    )
}

export default CourseContent