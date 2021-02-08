import React, { useEffect } from "react";
import {Row, Col, Image, Button } from 'react-bootstrap'
import '../App.css'
import { useDispatch, useSelector } from 'react-redux';
import { teacherCourseData } from '../store/actions/users'
import { 
    Link
  } from 'react-router-dom';

const TeacherDashboard = () => {
    const userData = useSelector (state => state.user)
    const courseData = useSelector (state => state.getcourseteacher)
    const dispatch = useDispatch();
    useEffect(() => {
      dispatch(teacherCourseData());
    }, []);
    return (
        <div>
            <div className='TeacherDashboard'>  
                <Row className='dashboardTeacherRow'>
                    <Col className='profileCardTeacherCol'>
                        <div className='profileCardTeacher'>
                            <Image className="imageProfile" src={userData.image} roundedCircle/>
                            <br/>
                            <br/>
                            <div className='aboutDashboard'>
                                <h3>{userData.name}</h3>
                                <p>{userData.email}</p>
                                <a>Edit Profile</a>
                            </div>
                        </div>
                    </Col>
                    <Col>
                        <div className='coursesBox coursesBoxTeacher'>
                            <div className='coursesBoxUnderline'>
                                <Row className='coursesBoxRow'>
                                    <h3>Courses</h3>
                                    <div className='tombolCourse'>
                                        <Button as={Link} to="/Course" className="accButton">New Course</Button>
                                    </div>
                                </Row>
                                </div>
                                {courseData.map((getcourseteacher, idx) => (
                                <Col className='coursesBoxCol mt-4'  key={idx}>
                                <Row className='allCourses sm-2'>
                                    <Col>
                                        <div>
                                            <img className="imageTeacherDashboard" src={getcourseteacher.image}/>
                                        </div>
                                    </Col>
                                    <Col className='coursesLists'> 
                                        <div>
                                            <h4>{getcourseteacher.title}</h4>
                                            <br/>
                                            <h6 className='keterangan'>Lesson materials: {getcourseteacher.lesson}</h6>
                                            <h7 className='enrolledStatus'>Students endrolled: {getcourseteacher.enrolled}</h7>
                                        </div>
                                    </Col>
                                    <Col>
                                        <div className='teacherButtons'>
                                            <Button className='inviteButton' variant="outline-warning">Invite</Button>
                                            <Button className='editButton text-white ml-3' variant="warning">Edit</Button>
                                        </div>
                                    </Col>
                                </Row>
                                <br/>
                                </Col>
                                ))}
                        </div>
                    </Col>
                </Row>
            </div>
        </div>
    )
}

export default TeacherDashboard